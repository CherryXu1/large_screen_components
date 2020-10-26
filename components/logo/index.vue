<!-- logo -->
<template>
  <div class='logo'>
    <img src="../../images/logo/portal_logo_Button.png"
         alt=""
         id="logo_0"
         class="logo_0">
    <img src="../../images/logo/portal_wg.png"
         alt=""
         id="logo_1"
         :class="{heartY:isHeartY,heart:isHeart}">
    <img src="../../images/logo/portal_logo_gx.png"
         alt=""
         id="logo_2"
         class="logo_2">
    <img src="../../images/logo/portal_logo_ty.png"
         alt=""
         id="logo_3"
         class="logo_3">
    <img src="../../images/logo/portal_wq.png"
         alt=""
         id="logo_4"
         class="logo_4">
    <img src="../../images/logo/portal_wq_xian.png"
         alt=""
         id="logo_5"
         class="logo_5">
    <div class="count_and_link">
      <span id="all_count"
            class="all_count">{{AllCount}}</span>
      <router-link :to="{path:'/'}"></router-link>

    </div>
    <jumpLine :total="total"></jumpLine>
    <jumpLine class="right"
              :total="total"></jumpLine>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import jumpLine from '../jumpline';
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { jumpLine },
  props: {
    count: {
      type: String
    }
  },
  data () {
    //这里存放数据
    return {
      circleNum: 0,
      isHeart: false,//tiao
      isHeartY: true,
      total: 11,
      AllCount: "1500万+",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    logo_wq_rotate () {
      $(".logo_4").css("transform", "rotate(" + this.circleNum + "deg)");
      this.circleNum = this.circleNum + 10;
      this.circleNum >= 360 ? this.circleNum = 0 : this.circleNum;
      setTimeout(this.logo_wq_rotate, 200);

    },
    heart_h () {
      setTimeout(() => {
        this.isHeartY = false;
        this.isHeart = true
      }, 10000);
      $("#logo_1").on("animationend", this.heart_fun);
    },
    heart_fun () {
      this.isHeartY = false;
      this.isHeart = true;
      setTimeout(() => {
        this.isHeartY = true;
        this.isHeart = false;
      }, 300)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.AllCount = this.count;
    this.heart_h();
    this.logo_wq_rotate();
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
@import url(../../../src/assets/css/base.css);
.logo {
  width: 1000px;
  height: 500px;
  position: absolute;
  top: 0px;
  left: 0px;
  .logo_0 {
    position: absolute;
    left: 81px;
    top: 10px;
  }
  #logo_1 {
    position: absolute;
    left: 164px;
    top: 10px;
  }
  @keyframes keyHeartBig {
    0% {
      transform: scale(0.8, 0.8);
    }
    5% {
      transform: scale(1.02, 1.02);
    }
    10% {
      transform: scale(0.8, 0.8);
    }
    15% {
      transform: scale(1.03, 1.03);
    }
    20% {
      transform: scale(0.9, 0.9);
    }
    100% {
      transform: scale(0.97, 0.97);
    }
  }
  @keyframes keyHeartSmall {
    0% {
      transform: scale(0.97, 0.97);
    }
    50% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.97, 0.97);
    }
  }
  .heartY {
    animation: keyHeartSmall 3s ease-in-out 0s infinite alternate forwards;
  }
  .heart {
    animation: keyHeartBig 2.5s ease-in-out 0s 1 normal forwards;
  }
  .logo_2 {
    position: absolute;
    mix-blend-mode: screen;
    left: 68px;
    top: -81px;
  }
  .logo_3 {
    position: absolute;
    left: 300px;
    top: 124px;
  }
  .logo_4 {
    position: absolute;
    left: 272px;
    top: -32px;
    transform: rotate(0deg);
  }
  .logo_5 {
    position: absolute;
    left: 210px;
    top: -76px;
  }
  .count_and_link {
    width: 540px;
    height: 300px;
    position: absolute;
    top: 250px;
    left: 389px;
    a {
      width: 340px;
      height: 300px;
      position: absolute;
      top: -188px;
      left: -60px;
      z-index: 2;
    }
    .all_count {
      position: absolute;
      left: 0px;
      top: 0px;
      width: 250px;
      height: 47px;
      line-height: 47px;
      text-align: center;
      font-size: 42px;
      color: #fff;
    }
  }
  .right {
    position: absolute;
    left: 750px;
  }
}
</style>