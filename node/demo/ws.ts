class WebSocketHeart {
    url: string; // websocket服务端接口地址
    pingTimeout: number; // 每隔 30 秒发送一次心跳，如果收到任何后端消息定时器将会重置
    pongTimeout: number; // ping 消息发送之后，10 秒内没收到后端消息便会认为连接断开
    reconnectTimeout: number; // 尝试重连的间隔时间
    pingMsg: string; // 发送心跳消息
    ws: WebSocket | null; // websocket 实例

    // 回调钩子
    onclose: () => void;
    onerror: () => void;
    onopen: () => void;
    onmessage: (event: MessageEvent) => void;
    onreconnect: () => void;

    pingTimeoutId: ReturnType<typeof setTimeout> | null;
    pongTimeoutId: ReturnType<typeof setTimeout> | null;
    lockReconnect: boolean;
    forbidReconnect: boolean;

    constructor({ url, pingTimeout, pongTimeout, reconnectTimeout, pingMsg }: { url: string, pingTimeout?: number, pongTimeout?: number, reconnectTimeout?: number, pingMsg?: string }) {
        this.url = url;
        this.pingTimeout = pingTimeout || 30000;
        this.pongTimeout = pongTimeout || 10000;
        this.reconnectTimeout = reconnectTimeout || 30000;
        this.pingMsg = pingMsg || '{"code":"0000","data":"heart check"}';
        this.ws = null;

        // 回调钩子
        this.onclose = () => { };
        this.onerror = () => { };
        this.onopen = () => { };
        this.onmessage = () => { };
        this.onreconnect = () => { };

        this.pingTimeoutId = null;
        this.pongTimeoutId = null;
        this.lockReconnect = false;
        this.forbidReconnect = false;

        this.createWebSocket();
    }

    // 创建 WebSocket 实例
    createWebSocket() {
        try {
            this.ws = new WebSocket(this.url);
            this.initEventHandle();
        } catch (e) {
            this.reconnect();
            throw e;
        }
    }

    // 初始化事件钩子
    initEventHandle() {
        this.ws!.onclose = () => {
            this.onclose();
            this.reconnect();
        };
        this.ws!.onerror = () => {
            console.log('err');
            this.onerror();
            this.reconnect();
        };
        this.ws!.onopen = () => {
            this.onopen();
            //心跳检测重置
            this.heartCheck();
        };
        this.ws!.onmessage = event => {
            this.onmessage(event);
            // 接收到websocket传来的信息
            console.log('接收到的信息：', event.data);
            //如果获取到消息，心跳检测重置
            //拿到任何消息都说明当前连接是正常的
            this.heartCheck();
        };
    }

    // 重连
    reconnect() {
        if (this.lockReconnect || this.forbidReconnect) return;
        this.lockReconnect = true;
        this.onreconnect();
        //没连接上会一直重连，设置延迟避免请求过多
        setTimeout(() => {
            this.createWebSocket();
            this.lockReconnect = false;
        }, this.reconnectTimeout);
    }

    // 发送消息
    send(msg: string) {
        this.ws!.send(msg);
    }

    // 心态检测
    heartCheck() {
        console.log(this.url, 'ws心跳检测');
        this.heartReset();
        this.heartStart();
    }

    // 心态重置
    heartReset() {
        clearTimeout(this.pingTimeoutId!);
        clearTimeout(this.pongTimeoutId!);
    }

    // 发送心跳
    heartStart() {
        if (this.forbidReconnect) return; //不再重连就不再执行心跳
        this.pingTimeoutId = setTimeout(() => {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            // onmessage 拿到返回的心跳就说明连接正常
            this.ws!.send(this.pingMsg);
            //如果超过一定时间还没重置，说明后端主动断开了
            this.pongTimeoutId = setTimeout(() => {
                //如果 onclose 会执行 reconnect，我们执行 ws.close() 就行了.如果直接执行 reconnect 会触发 onclose 导致重连两次
                // this.ws.close();
            }, this.pongTimeout);
        }, this.pingTimeout);
    }

    // 手动关闭
    close() {
        //如果手动关闭连接，不再重连
        console.log('关闭ws连接');
        this.forbidReconnect = true;
        this.heartReset();
        this.ws!.close();
    }
    
}

