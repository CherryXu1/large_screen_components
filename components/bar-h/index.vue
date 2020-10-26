<!-- 圆柱图横版 -->
<template>
  <div class="container"
       ref="container"></div>
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
      nameJson: [
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
      cityInfoNameData: ["珠江高清", "CCTV-13新闻", "广东卫视高清", "广东影视", "广东少儿", "CCTV-4高清", "广东嘉佳卡通", "广东南方卫视", "CCTV-1高清", "经济科教高清"],
      cityInfoNumberData: ["104488", "63073", "57829", "50074", "43124", "30761", "29732", "25415", "23981", "23495"],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showContainer () {
      let myzqChart = this.$echarts.init(this.$refs.container);
      let textureImg = new Image();
      textureImg.src = "";
      let cityInfoNumberData = [];
      let cityInfoNameData = [];
      this.cityInfoNumberData.forEach((item, index) => {
        cityInfoNumberData.push({
          value: item,
          symbol: 'image://../../../static/img/z_1.png'
        })
      });
      this.cityInfoNameData.forEach((item, index) => {
        cityInfoNameData.push({
          value: index + 1 + ' ' + item
        })
      });
      let option = {
        yAxis: {
          data: cityInfoNameData,
          type: 'category',
          position: 'top',
          inverse: true,//从上向下
          // 类目轴
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 'auto',
            inside: true,
            verticalAlign: 'middle',
            textStyle: {
              fontSize: 23,
              color: '#fff',
              padding: [0, 0, 51, 0]
            }
          }
        },
        barWidth: 39,
        xAxis: {
          interval: 5,//强制设置坐标轴分割间隔
          axisLabel: {
            align: 'right',//x轴字向左偏
            show: true,
            color: '#05cb97',
            fontSize: 20
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              color: '#2b3340'
            }
          }
        },
        grid: {
          top: '80px',//距离容器上边界
          bottom: '40px'//图标距离容器下方边距
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        series: [{
          type: 'pictorialBar',
          name: 'pictorial element',
          barCategoryGap: '100%',
          symbolPosition: 'bottom',
          symbol: 'image://../../../static/img/z_1.png',
          label: {
            show: true,
            position: 'right',
            textStyle: {
              color: '#d8b121',
              fontSize: 20
            }
          },
          z: 20,
          data: cityInfoNumberData
        }]
      };//option
      myzqChart.setOption(option)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.showContainer()
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 360px;
  height: 920px;
  border: 1px solid red;
  background-color: #000;
}
</style>