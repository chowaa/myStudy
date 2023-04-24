```javascript
:xs="12" , 24/12=2 , 所以当屏幕尺寸<768px时(手机)，每行展示2个div(class="com_item");

:sm="8" , 24/8=3 , 所以当屏幕尺寸>=768px时(平板)，每行展示3个div(class="com_item");

:md="6" , 24/6=4 , 所以当屏幕尺寸>=992px时(桌面显示器)，每行展示4个div(class="com_item");

:lg="4" , 24/4=6 , 所以当屏幕尺寸>=1200px时(大桌面显示器)，每行展示6个div(class="com_item");

:xl="4" , 24/4=6 , 所以当屏幕尺寸>=1920px时(2k屏)，每行展示6个div(class="com_item");
```

```css
<div>
  <el-row :gutter="10">
    <el-col
      v-for="(item, index) in list"
      :key="index"
      :xs="12"
      :sm="8"
      :md="6"
      :lg="4"
      :xl="4"
      style="margin-bottom: 20px;"
    >
      <div class="com_item":item="item" />
    </el-col>
  </el-row>
</div>

<style>
.com_item {
	width: 100%;
	height: 220px;
	background: #bfa;
}
</style>
```

