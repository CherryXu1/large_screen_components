<!-- 多边形 -->
<template>
  <div class='polygon'>
    <img src="../../images/polygon/vodu00.png"
         class="rotate rotate_1"
         alt="">
    <img src="../../images/polygon/vodu01.png"
         class="rotate rotate_2"
         alt="">
    <img src="../../images/polygon/dianbo_dbx.png"
         class="rotate_3"
         alt="">
    <div class="text0">频道用户{{channelUser}}</div>
    <div class="text1">在线用户{{useUser}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
    props: {

    channel_user:String,
    use_user:String

  },
  data () {
    //这里存放数据
    return {
      channelUser: '39800',
      useUser: "1000"

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    rotateMethod () {
      let n = 0;
      function R () {
        n += 8;
        $(".rotate").rotate(n);
      };
      setInterval(R, 100);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

    this.channelUser=this.channel_user;
    this.useUse=this.use_user;
    this.rotateMethod();
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.polygon {
  position: absolute;
  top: 100px;
  left: 0px;
  width: 319px;
  height: 197px;
  font-size: 16px;

  .rotate {
    position: absolute;
  }
  .rotate_1 {
    top: 0px;
    left: 50px;
  }
  .rotate_2 {
    top: 15px;
    left: 70px;
  }
  .rotate_3 {
    position: absolute;
    top: -65px;
    left: -50px;
    width: 385px;
    height: 269px;
  }
  .text0 {
    position: absolute;
    top: -37px;
    left: 0px;
    width: 143px;
    color: #75b4e0;
  }
  .text1 {
    position: absolute;
    top: -14px;
    left: 222px;
    color: #a5ffba;
    .text1-s {
      position: absolute;
      font-size: 20px;
    }
  }
}
</style>