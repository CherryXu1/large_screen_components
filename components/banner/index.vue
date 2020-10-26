<!-- banner 广告轮播图 -->
<template>
  <div class='banner'>
    <ul class="nav">
      <li class="nav_c"
          v-for="(item,index) in topTabList"
          :key="index"
          :class="{active:cur==index}">
        <a href="#">{{item}}</a>
      </li>
    </ul>
    <div class="pic">
      <img src=""
           alt=""
           class="picBg">
    </div>
    <div class="list">
      <div class="title">
        <span></span>
      </div>
      <ul class="list_num"></ul>
      <ul class="program"></ul>
      <ul class="viewer"></ul>
      <ul class="ratine"></ul>
    </div>

  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    topOnDemandData: Array,
    topTabList: Array
  },
  data () {
    //这里存放数据
    return {
      cur: 0,
      itemList: ['序号', '片名', '所属频道', '收视份额'],
      currentIndex: 0,
      ranking: 1,
      currentList: [
        {
          "CHANNELCODE": "02000006000000052018092799000001",
          "CHANNELNAME": "广东珠江高清",
          "NUM": 1,
          "USERCOUNT": 104488
        },
        {
          "CHANNELCODE": "02000000000000050000000000000063",
          "CHANNELNAME": "CCTV-13新闻",
          "NUM": 2,
          "USERCOUNT": 63073
        },
        {
          "CHANNELCODE": "02000001000000050000000000000374",
          "CHANNELNAME": "广东卫视高清",
          "NUM": 3,
          "USERCOUNT": 57829
        },
        {
          "CHANNELCODE": "02000001000000050000000000000011",
          "CHANNELNAME": "广东影视",
          "NUM": 4,
          "USERCOUNT": 50074
        },
        {
          "CHANNELCODE": "02000001000000050000000000000012",
          "CHANNELNAME": "广东少儿",
          "NUM": 5,
          "USERCOUNT": 43124
        },
        {
          "CHANNELCODE": "02000006000000052019050799000001",
          "CHANNELNAME": "CCTV-4高清",
          "NUM": 6,
          "USERCOUNT": 30761
        },
        {
          "CHANNELCODE": "02000001000000050000000000000006",
          "CHANNELNAME": "广东嘉佳卡通",
          "NUM": 7,
          "USERCOUNT": 29732
        },
        {
          "CHANNELCODE": "02000001000000050000000000000009",
          "CHANNELNAME": "广东南方卫视",
          "NUM": 8,
          "USERCOUNT": 25415
        },
        {
          "CHANNELCODE": "02000000000000050000000000000152",
          "CHANNELNAME": "CCTV-1高清",
          "NUM": 9,
          "USERCOUNT": 23981
        },
        {
          "CHANNELCODE": "02000001000000050000000000000375",
          "CHANNELNAME": "广东经济科教高清",
          "NUM": 10,
          "USERCOUNT": 23495
        }
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    click_timer (_index) {
      if (_index != undefined) {
        this.cur = _index;
      }
      console.log(this.topTabList);
      console.log(this.topOnDemandData)
      //$(".picBg").attr("src", "../../images/banner/c" + this.cur + ".jpg");
      $(".picBg").attr("src", "../../../static/img/c" + this.cur + ".jpg");
      setTimeout(() => {
        this.cur = this.cur === (this.topTabList.length - 1) ? 0 : (this.cur + 1);
        this.click_timer();
      }, 10000)
    },
    addListEle (result) {


    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.click_timer();
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.banner {
  width: 850px;
  height: 1325px;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid red;
  .nav {
    width: 718px;
    height: 50px;
    font-size: 20px;
    color: #b3e0e0;
    list-style: none;
    text-align: center;
    margin-left: -15px;
    margin-top: 85px;
    li {
      height: 50px;
      line-height: 50px;
      width: 120px;
      float: left;
      color: #b3e0e0;
      font-size: 29px;
    }
    .active > a {
      color: #52ffff;
      font-weight: bold;
      font-size: 29px;
    }
  }
  div.pic {
    width: 580px;
    height: 300px;
    margin-top: -22px;
    margin-left: 30px;
    /*border:1px solid #ddd;*/
  }
  div.pic > img {
    margin: 0 auto;
    display: block;
  }
}
</style>