<!-- 专题 -->
<template>
<div class='specialTop10'>
       <!-- <sonic class="sonicCss"></sonic> -->
       <ul>
         <li v-for="(item,index) in dataArr" :key="index">
            <div class="picBox">
          <div class="show">
            <img height='188px'
                 width='334px'
                 class="theme_img"
                 src="../../images/specialTop10/rating_ep0.jpg">

          </div>
          <div class="hide">
            <div class="theme_text"></div>
            <div class="theme_viewuser"></div>
            <div class="theme_viewcount"></div>
          </div>
        </div>
         </li>

       </ul>

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Index from './utils/indes.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
  specialTop:Object
},
data() {
//这里存放数据
return {
  data:null,
  dataArr:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
  bindData(){

  }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
  this.data=this.specialTop;
  this.dataArr=this.data.subject;
  if(this.specialTop){
    // this.bindData();
    class Index {
    constructor(node) {
        this.node = node;
        // console.log(this.node)
        this.init();
    }
    init(){
      const self = this;
      this.nodes = [];
      Array.prototype.slice.call(self.node, 0).forEach(function (item, index) {
        self.nodes.push(self.update(item));
        self.bindEvents(item, index);
      });
      // console.log(self.nodes)
    }
    update(item){

    }
    bindEvents(){}

  }
const lis=document.getElementsByTagName("li");
console.log(lis)

    new Index(lis);
  }else{
    return
  }
},
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.specialTop10 {
  width: 1920px;
  position: absolute;
  top: 0px;
  left: 52px;
  li {
    position: absolute;
    // top: 650px;
    top:0px;
    left: 44px;
    width: 334px;
    height: 188px;
    display: inline-block;
    perspective: 300px;
    .picBox {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      // transform-style: preserve-3d;
      // transform-origin: 50% 50% -167px;
      // animation: 200ms ease-out 0ms 1 normal forwards;
    }
    .show,
    .hide {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 12px;
    }
    .hide {
      color: #fff;
      background: url(../../images/specialTop10/pic_bg.png) no-repeat;
      /*text-align:center;*/
      line-height: 180px;

      // transform: translate3d(0, 0, -1px);
      .theme_text {
        position: relative;
        line-height: 30px;
        width: 335px;
        text-align: center;
        top: 40px;
        font-size: 24px;
      }
      .theme_viewuser,
      .theme_viewcount {
        position: absolute;
        left: 46px;
        font-size: 20px;
        width: 335px;
      }
      .theme_viewuser {
        top: 23px;
      }
      .theme_viewcount {
        top: 50px;
      }
      }
    }
    li:nth-child(2) {
    top: 0px;
    left: 393px;
  }
  li:nth-child(3) {
    top: 0px;
    left: 742px;
  }
  li:nth-child(4) {
    top: 0px;
    left: 1092px;
  }
  li:nth-child(5) {
    top: 0px;
    left: 1440px;
  }
  li:nth-child(6) {
    top: 210px;
    left: 44px;
  }
  li:nth-child(7) {
    top: 210px;
    left: 393px;
  }
  li:nth-child(8) {
    top: 210px;
    left: 742px;
  }
  li:nth-child(9) {
    top: 210px;
    left: 1092px;
  }
  li:nth-child(10) {
    top: 210px;
    left: 1440px;
  }

  }
</style>