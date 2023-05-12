<script lang="ts" setup>
  import { reactive } from 'vue';

  // 商品数据
  const productData = [
    { name: '鼠标', price: 100 },
    { name: '键盘', price: 200 },
    { name: '耳机', price: 300 },
    { name: '显示屏', price: 400 }
  ];

  // 商品数据类型
 class ProductData {
   name: string;
   price: number;
   constructor(name: string, price: number) {
     this.name = name;
     this.price = price;
   }
  }
  // 创建商品类
  class commodityType {
    // 属性
    data:ProductData;
    choose:number;
    // 构造函数
    constructor(data:ProductData) {
      this.data = data;
      this.choose = 0;
    }
    // 获取总价
    getTotalPrice() {
      return this.data.price * this.choose;
    }
    // 是否选中了此件商品
    isChoose() {
      return this.choose > 0;
    }
    // 增加商品数量
    increase() {
      this.choose++;
    }
    // 减少商品数量
    reduce() {
      if (this.choose > 0){
        this.choose--;
      }
      return
    }
  }

  // 创建购物车方法类
  class ShoppingCartMethod {
    
    allGoods: commodityType[];// 所有商品
    
    upToAmount: number;// 起送金额
    
    deliveryFee: number;// 配送费

    // 构造函数
    constructor() {
      let allGoods = new Array();
      productData.map((item) => {
        allGoods.push(new commodityType(item));
      });
      Object.defineProperty(this, 'allGoods', {
        configurable: false,
        enumerable: false,
      })
      this.allGoods = allGoods;
      this.upToAmount = 30;
      this.deliveryFee = 5;
    }

    // 获取购物车总价
    getTotalPrice() {
      let totalPrice = 0;
      this.allGoods.map((item) => {
        totalPrice += item.getTotalPrice();
      });
      return totalPrice;
    }

    // 获取购物车商品数量
    getTotalNumber() {
      let totalNumber = 0;
      this.allGoods.map((item) => {
        totalNumber += item.choose;
      });
      return totalNumber;
    }

    // 增加某件商品数量
    increase(index:number) {
      this.allGoods[index].increase();
    }

    // 减少某件商品数量
    reduce(index:number) {
      this.allGoods[index].reduce();
    }
    
    // 判断购物车是否有商品
    isEmpty() {
      return this.getTotalNumber() > 0;
    }

    // 判断购物车是否满足起送金额
    isUpToAmount() {
      return this.getTotalPrice() >= this.upToAmount;
    }
  }
  const cart = new ShoppingCartMethod();
  
  const cartData = reactive(cart) as ShoppingCartMethod;

  const ProductDataRef = reactive(productData);
  console.log(cartData);
  
  const button = (item:number, type:string) => {
    switch (type) {
      case 'getTotalPrice':
        // 购物车总价
        console.log(cartData.getTotalPrice());
        break;
      case 'getTotalNumber':
        // 购物车商品数量
        console.log(cartData.getTotalNumber());
        break;
      case 'increase':
        // 增加某件商品数量
        cartData.increase(item);
        break;
      case 'reduce':
        // 减少某件商品数量
        cartData.reduce(item);
        break;
      case 'isEmpty':
        // 判断购物车是否有商品
        console.log(cartData.isEmpty());
        break;
      case 'isUpToAmount':
        // 判断购物车是否满足起送金额
        console.log(cartData.isUpToAmount());
        break;
      case 'isChoose':
        // 判断某件商品是否选中
        console.log(cartData.allGoods[item].isChoose());
        break;
      // 获取某件商品数量
      case 'getChoose':
        console.log(cartData.allGoods[item].choose);
        break;
      default:
        break;
    }
  }
</script>

<template>
  <div class="shopping-cart">
    <h1>Shopping Cart</h1>
    <div v-for="(item, index) in ProductDataRef" :key="index">
      <div>
        <span>商品名：{{ item.name }}&nbsp;&nbsp;&nbsp;</span>
        <span>价格：{{ item.price }}&nbsp;&nbsp;&nbsp;</span>
        <span>数量：{{ cartData.allGoods[index].choose ? cartData.allGoods[index].choose : 0 }}</span>
      </div>
      <button @click="button(index, 'increase')">添加第{{ index + 1 }}件商品</button>
      <button @click="button(index, 'reduce')">减少第{{ index + 1 }}件商品</button>
      <!-- <button @click="button(index, 'getTotalPrice')">获取第{{ index + 1}}件商品总价</button>
      <button @click="button(index, 'isChoose')">判断第{{ index + 1}}件商品是否选中</button>
      <button @click="button(index, 'getChoose')">获取第{{ index + 1}}件商品数量</button> -->
    </div>
    <button @click="button(0, 'isEmpty')">判断购物车是否有商品</button>
    <button @click="button(0, 'isUpToAmount')">判断购物车是否满足起送金额</button>
    <p>商品数量：{{ cartData.getTotalNumber() }}</p>
    <p>起送金额：{{ cartData.upToAmount }}</p>
    <p>配送费：{{ cartData.deliveryFee }}</p>
    <p>总价：{{ cartData.getTotalPrice() }}</p>
  </div>
</template>

<style scoped>

</style>