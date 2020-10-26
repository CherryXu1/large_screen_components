<!-- isp运营商 -->
<template>
  <div class='isp'>
    <div class="stone_0"><img src="../../images/isp/stone0.png"
           alt=""
           class="stone_img_0"></div>
    <div class="stone_1"><img src="../../images/isp/stone2.png"
           alt=""
           class="stone_img_1"></div>
    <div class="stone_2"><img src="../../images/isp/stone1.png"
           alt=""
           class="stone_img_2"></div>
    <!-- 联通 -->
    <div class="con_x_0 lt">
      <div class="con_y_0 nav"
           :style="{ backgroundImage: 'url(' + require('../../images/isp/portal_con_'+title_lt+'.png') + ')' }">
        <img src="../../images/isp/portal_con_wq.png"
             alt=""
             class="wq">
        <img src="../../images/isp/portal_con_wg.png"
             alt=""
             class="wg">
        <img src="../../images/isp/portal_con_gx.png"
             alt=""
             class="screen">
        <div class="lt_count">
          <span class="count">{{count_lt}}</span>
          <router-link :to="{path:'/'}"></router-link>
        </div>
      </div>
    </div>
    <!-- 移动 -->
    <div class="con_x_1 yd">
      <div class="con_y_1 nav"
           :style="{backgroundImage: 'url(' + require('../../images/isp/portal_con_'+title_yd+'.png') + ')'}">
        <img src="../../images/isp/portal_con_wq.png"
             alt=""
             class="wq">
        <img src="../../images/isp/portal_con_wg.png"
             alt=""
             class="wg">
        <img src="../../images/isp/portal_con_gx.png"
             alt=""
             class="screen">
        <div class="lt_count">
          <span class="count">{{count_yd}}</span>
          <router-link :to="{path:'/'}"></router-link>
        </div>
      </div>
    </div>
    <!-- 电信 -->
    <div class="con_x_2 dx">
      <div class="con_y_2 nav"
           :style="{backgroundImage: 'url(' + require('../../images/isp/portal_con_'+title_dx+'.png') + ')'}">
        <img src="../../images/isp/portal_con_wq.png"
             alt=""
             class="wq">
        <img src="../../images/isp/portal_con_wg.png"
             alt=""
             class="wg">
        <img src="../../images/isp/portal_con_gx.png"
             alt=""
             class="screen">
        <div class="lt_count">
          <span class="count">{{count_dx}}</span>
          <router-link :to="{path:'/'}"></router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      count_lt: "1100万+",
      title_lt: "lt",
      count_yd: '1200万+',
      title_yd: 'yd',
      count_dx: '1300万+',
      title_dx: 'dx',
      classNams: [["a_zx_x", "nav a_zx_y"], ["a_s_x", "nav a_s_y"], ["a_yx_x", "nav a_yx_y"]],
      stoneClassNames: [["a_stone_z_x_0", "a_stone_z_y"], ["a_stone_y_x_0", "a_stone_y_y"], ["a_stone_x_x", "a_stone_x_y"]],
      lt_index: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    conTurn () {
      for (let i = 0; i < 3; i++) {
        let _index = (i + this.lt_index) % 3; //0,1,2/1,2,0/2,0,1

        if (
          $(".con_x_" + i) ||
          $(".con_y_" + i) ||
          $(".stone_" + i) ||
          $(".stone_img_" + i)
        ) {
          $(".con_x_" + i).className = this.classNams[_index][0];
          $(".con_y_" + i).className = this.classNams[_index][1];
          $(".stone_" + i).className = this.stoneClassNames[_index][0];
          $(".stone_img_" + i).className = this.stoneClassNames[_index][1];
        } else {
          return;
        }
      }
      console.log("0000");
      this.lt_index = this.lt_index + 1 > 2 ? 0 : this.lt_index + 1;
      setTimeout(this.conTurn, 9000);
      setTimeout(this.stone, 1000);
    },
    stone () {
      if ($(".stone_0").attr("class") == "a_stone_z_x_0") {
        $(".stone_0").attr("class", "a_stone_z_x_1");
      } else if ($(".stone_0").attr("class") == "a_stone_y_x_0") {
        $(".stone_0").attr("class", "a_stone_y_x_1");
      }
      if ($(".stone_1").attr("class") == "a_stone_z_x_0") {
        $(".stone_1").attr("class", "a_stone_z_x_1");
      } else if ($(".stone_1").attr("class") == "a_stone_y_x_0") {
        $(".stone_1").attr("class", "a_stone_y_x_1");
      }
      if ($(".stone_2").attr("class") == "a_stone_z_x_0") {
        $(".stone_2").attr("class", "a_stone_z_x_1");
      } else if ($(".stone_2").attr("class") == "a_stone_y_x_0") {
        $(".stone_2").attr("class", "a_stone_y_x_1");
      }
    },
    turn () {
      setTimeout(this.conTurn, 1000); //开始转动
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.turn(); //开始转动
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.isp {
  position: absolute;
  left: 0px;
  top: 500px;
  width: 1920px;
  height: 500px;
  color: #fff;
  border: 1px solid #fff;
  .stone_0 {
    position: absolute;
    left: 610px;
    top: 286px;
    img {
      width: 80px;
      height: 86px;
    }
  }
  .stone_1 {
    position: absolute;
    left: 610px;
    top: 286px;
    opacity: 0.5;
    transform: translate(317px, -257px) scale(0.5, 0.5);
    img {
      width: 80px;
      height: 86px;
    }
  }
  .stone_2 {
    position: absolute;
    left: 610px;
    top: 286px;
    transform: translate(653px, 0px) scale(1, 1);
    img {
      width: 80px;
      height: 86px;
    }
  }
  .con_x_0 {
    position: absolute;
    left: 835px;
    top: 280px;
  }
  .con_x_1 {
    position: absolute;
    left: 835px;
    top: 280px;
  }
  .con_x_2 {
    position: absolute;
    left: 835px;
    top: 280px;
  }
  .yd {
    transform: translate(-510px, -142px) scale(0.8, 0.8);
  }
  .dx {
    transform: translate(556px, -142px) scale(0.8, 0.8);
  }
  .nav {
    position: absolute;
    width: 255px;
    height: 255px;
    // background: url("../../images/isp/portal_con_lt.png");
    img {
      position: absolute;
    }
    @keyframes key_wq {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .wq {
      left: 4px;
      top: -1px;
      animation: key_wq 40s linear 0s infinite normal;
    }
    @keyframes key_wg {
      0% {
        opacity: 1;
        transform: scale(0.98, 0.98);
      }
      100% {
        opacity: 0.9;
        transform: scale(1.02, 1.02);
      }
    }
    .wg {
      left: -78px;
      top: 16px;
      animation: key_wg 2s ease-in-out 0s infinite alternate;
    }

    .screen {
      left: -17px;
      top: 20px;
      mix-blend-mode: screen;
    }
    .lt_count {
      position: absolute;
      .count {
        position: absolute;
        left: 63px;
        top: 138px;
        font-size: 25px;
        width: 127px;
        height: 33px;
        line-height: 33px;
        text-align: center;
      }
    }
  }
  /*左下*/
  @keyframes path_zx_x {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-535px);
    }
  }
  @keyframes path_zx_y {
    from {
      transform: translateY(0px) scale(1, 1);
    }
    to {
      transform: translateY(-167px) scale(0.8, 0.8);
    }
  }
  .a_zx_x {
    position: absolute;
    left: 835px;
    top: 280px;
    animation: path_zx_x 2s cubic-bezier(0, 0, 0.6, 1) 0s 1 normal forwards;
  }
  .a_zx_y {
    animation: path_zx_y 2s cubic-bezier(0.6, 0, 1, 1) 0s 1 normal forwards;
  }
  .a_zx_x .screen,
  .a_zx_y .screen {
    mix-blend-mode: screen;
  }
  /*上*/
  @keyframes path_s_x {
    0% {
      transform: translateX(-535px);
    }
    100% {
      transform: translateX(531px);
    }
  }
  @keyframes path_s_y {
    0% {
      opacity: 1;
      transform: translateY(-167px) scale(0.8, 0.8);
    }
    50% {
      opacity: 0.5;
      transform: translateY(-250px) scale(0.5, 0.5);
    }
    100% {
      opacity: 1;
      transform: translateY(-167px) scale(0.8, 0.8);
    }
  }
  .a_s_x {
    position: absolute;
    left: 835px;
    top: 280px;
    transform: translate(-510px, -142px) scale(0.8, 0.8);
    animation: path_s_x 2s cubic-bezier(0.7, 0, 0.3, 1) 0s 1 normal forwards;
  }
  .a_s_y {
    animation: path_s_y 2s cubic-bezier(0, 0, 1, 1) 0s 1 normal forwards;
  }
  /*右下*/
  @keyframes path_yx_x {
    from {
      transform: translateX(531px);
    }
    to {
      transform: translateX(0px);
    }
  }
  @keyframes path_yx_y {
    from {
      transform: translateY(-167px) scale(0.8, 0.8);
    }
    to {
      transform: translateY(0px) scale(1, 1);
    }
  }
  .a_yx_x {
    position: absolute;
    left: 835px;
    top: 236px;
    transform: translate(556px, -142px) scale(0.8, 0.8);
    animation: path_yx_x 2s cubic-bezier(0.6, 0, 1, 1) 0s 1 normal forwards;
  }
  .a_yx_y {
    animation: path_yx_y 2s cubic-bezier(0, 0, 0.6, 1) 0s 1 normal forwards;
  }
}
</style>