<template>
  <div class="home">
    <div class="imgs-box">
      <div class="img" v-for="(item , index) in imgBox" :key="index"  @mouseover = "change(1)" @mouseout = "change(0)">
        <img ref="bef" v-if="isActive" :class=item[1] style="width: 1008px; height: 539.5px;" src="../assets/img/bg.jpg" alt="">
        <div v-else class="aft-img-box">
          <img ref="aft" class="aft-img"   :src= "require('../assets/img/' +`${item[0]}`)" alt="" width="100%" @mouseover = "toWhite(index,1)" @mouseout = "toWhite(index,0)">
        </div>
      </div>
    </div>
    <div ref="float" class="float-box">
      <img  v-show="this.flag" :src="require('../assets/img/'  + `${this.floatSrc}`)" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  created(){
  },
  data() {
    return {
      imgBox:[
        ['1.jpg','img1','11.jpg'],
        ['2.jpg','img2','22.jpg'],
        ['3.jpg','img3','33.jpg'],
        ['4.jpg','img4','44.jpg'],
        ['5.jpg','img5','55.jpg'],
        ['6.jpg','img6','66.jpg'],
        ['7.jpg','img7','77.jpg'],
        ['8.jpg','img8','88.jpg'],
        ['9.png','img9',''],
        ['10.png','img10',''],
        ['11.png','img11',''],
        ['12.png','img12','']
      ],
      isActive:true,
      isWhite:'',
      floatSrc:'11.jpg',
      flag:false
    }
  },
  methods:{
    change(flag){
      if (flag) {
        this.isActive = false;
      }else{
        this.isActive = true;
      }
    },
    toWhite(index,flag){
      if (flag) {
        this.$refs.aft[index].style.opacity = 1;
        if (index < 8) {
          this.flag = true;
          this.floatSrc = this.imgBox[index][2];
          this.coordinate(index)
        } else {
          this.flag = false;
        }
      } else {
        this.flag = false;
      }
    },
    coordinate(index){
      switch (index) {
        case index = 1:
          this.$refs.float.style.top = "-373px";
          this.$refs.float.style.left = "549px"
          break;
        case index = 2:
          this.$refs.float.style.top = "-373px";
          this.$refs.float.style.left = 0;
          break;
        case index = 4:
          this.$refs.float.style.top = "-559.5px";
          this.$refs.float.style.left = "275px";
          break;
        case index = 5:
          this.$refs.float.style.top = "-559.5px";
          this.$refs.float.style.left = "549px";
          break;
        case index = 6:
          this.$refs.float.style.top = "-373px";
          this.$refs.float.style.left = 0;
          break;
        default:
          this.$refs.float.style.top = "-373px";
          this.$refs.float.style.left = "275px";
          break;
      }
    }

  }
  
}
</script>

<style>
.home{
  position: relative;
  /* width: 1425.97px; */
  width: 1362.97px;
  /* height: 799.87px; */
}
.imgs-box{
  position: relative;
  width: 1366px;
  overflow: hidden;
}
.img{
  position: relative;
  float: left;
  width: calc(25% - 86.7425px);
  height: 166.5px;
  background-color: #dedede;
  border-right: solid 20px white;
  border-bottom: solid 20px white;
  overflow: hidden;
}
.img > *{
  position:absolute;
}
.img2{
  left: -100%;
}
.img3{
  left: calc(-200% + 42px);
}
.img4{
  left: calc(-300% + 42px);
}
.img5{
  top:calc(-100% - 20.99px)
}
.img6{
  top:calc(-100% - 20.99px);
  left: -100%;
}
.img7{
  left: calc(-200% + 42px);
  top:calc(-100% - 20.99px);
}
.img8{
  top:calc(-100% - 20.99px);
  left: calc(-300% + 42px);
}
.img9{
  top:calc(-200% - 32px);
}
.img10{
  top:calc(-200% - 32px);
  left: -100%;
}
.img11{
  top:calc(-200% - 32px);
  left: calc(-200% + 42px);
}
.img12{
  top:calc(-200% - 32px);
  left: calc(-300% + 42px);
}
.aft-img-box{
  width: 100%;
  height: 100%;
  background-color: rgba(31, 105, 177, 0.5);
}
.aft-img{
  opacity:0.6; 
}
.float-box{
  width: 529px;
  position: relative;
}
.float-box > img {
  width: 529px;
  height: 353px;
}
</style>