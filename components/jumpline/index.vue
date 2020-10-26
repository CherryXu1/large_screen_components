<!-- jumpLine -->
<template>
  <div class='jump_line'>
    <div v-for="(item,index) in dataArr"
         :key="index"
         :class="addCalss(item)"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "jumpLine",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    total: {
      required: true,
      type: Number
    },
  },
  data () {
    //这里存放数据
    return {
      dataArr: Array.from({ length: this.total }, (v, k) => k),
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    addCalss (i) {
      return "d_left_" + i
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.jump_line {
  width: 1000px;
  height: 500px;
  position: absolute;
  top: 0px;

  div {
    position: absolute;
    top: 190px;
    width: 4px;
    height: 20px;
    border-radius: 1px;
    background-color: #00fcff;
  }
  .d_left_0 {
    left: 245px;
    animation: key_div_height 0.7s ease-in-out 0s infinite alternate;
  }
  .d_left_1 {
    left: 221px;
    animation: key_div_height 0.7s ease-in-out 0.3s infinite alternate;
  }
  .d_left_2 {
    left: 197px;
    animation: key_div_height 0.7s ease-in-out 0.6s infinite alternate;
  }
  .d_left_3 {
    left: 173px;
    animation: key_div_height 0.7s ease-in-out 0.9s infinite alternate;
  }
  .d_left_4 {
    left: 149px;
    animation: key_div_height 0.7s ease-in-out 1.2s infinite alternate;
  }
  .d_left_5 {
    left: 125px;
    animation: key_div_height 0.7s ease-in-out 1.5s infinite alternate;
  }
  .d_left_6 {
    left: 101px;
    animation: key_div_height 0.7s ease-in-out 1.8s infinite alternate;
  }
  .d_left_7 {
    left: 77px;
    animation: key_div_height 0.7s ease-in-out 2.1s infinite alternate;
  }
  .d_left_8 {
    left: 53px;
    animation: key_div_height 0.7s ease-in-out 2.4s infinite alternate;
  }
  .d_left_9 {
    left: 29px;
    animation: key_div_height 0.7s ease-in-out 2.7s infinite alternate;
  }
  .d_left_10 {
    left: 5px;
    animation: key_div_height 0.7s ease-in-out 3s infinite alternate;
  }
  @keyframes key_div_height {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(6);
    }
  }
}
</style>