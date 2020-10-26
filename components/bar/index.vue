<!-- bar -->
<template>
  <div class='bar'
       ref="bar"></div>
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
      viewNameArr: ['直播', 'EPG', "点播", '回看', '时移'],
      precentArr: ['10%', '20%', "1%", '40%', '50%'],
      onlineUserArr: [23923, 34210, 1000, 124444, 314284],
      Arrlength: 5,
      subjectArr: [
        { ONLINEUSERCOUNT: 892152, PERVIEWCOUNT: 0.7645, VIEWTYPE: "直播" },
        { ONLINEUSERCOUNT: 181953, PERVIEWCOUNT: 0.1559, VIEWTYPE: "EPG" },
        { ONLINEUSERCOUNT: 58681, PERVIEWCOUNT: 0.0503, VIEWTYPE: "点播" },
        { ONLINEUSERCOUNT: 23173, PERVIEWCOUNT: 0.0199, VIEWTYPE: "回看" },
        { ONLINEUSERCOUNT: 11079, PERVIEWCOUNT: 0.0095, VIEWTYPE: "时移" }
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    drawnFun () {
      let drawnUserUse = null;
      drawnUserUse = this.$echarts.init(this.$refs.bar);
      let option = null;
      option = {
        backgroundColor: 'transparent',
        grid: {//直角坐标系内绘图网格，单个 grid 内最多可以放置上下两个 X 轴，左右两个 Y 轴
          top: '5%',
          left: '0%',
          right: '32%',
          bottom: '3%',
          containLabel: true
        },
        legend: {//图例组件。
          show: false
        },
        xAxis: {
          boundaryGap: false,
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#62BEFF',
              fontSize: 17
            },
            position: 'left',
            offset: 85,
            data: this.viewNameArr
          }, {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#45FFC0',
              fontSize: 17,
              margin: 0
            },
            position: 'left',
            offset: 30,
            data: this.precentArr
          }, {
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              color: '#62BEFF',
              fontSize: 17
            },
            position: 'left',
            offset: -190,
            data: this.onlineUserArr
          }
        ],
        series: [
          {
            type: 'pictorialBar',
            symbol: 'image://../../../static/img/zhu_button_h.png',
            symbolSize: [16, 30],
            symbolPosition: 'start',
            symbolOffset: ['-100%', 0],
            z: 10,
            itemStyle: { opacity: 0.8 },
            //格式化
            fomatter: function (a) {
              let result = [];
              counter = 0,
                num = a.data;
              num = (num || 0).toString().split('');
              for (var i = num.length - 1; i >= 0; i--) {
                counter++;
                result.unshift(num[i]);
                if (!(counter % 3) && i != 0) {
                  result.unshift(',');
                }
              }
              result = result.join('');
              return result;
            },
            data: this.onlineUserArr

          },//o
          {
            type: 'pictorialBar',
            symbol: 'image://../../../static/img/zhu_center_h.png',
            symbolSize: ['100%', 30],
            symbolPosition: 'center',
            symbolOffset: [0, 0],
            z: 10,
            itemStyle: { opacity: 1 },
            //格式化
            fomatter: function (a) {
              let result = [];
              counter = 0,
                num = a.data;
              num = (num || 0).toString().split('');
              for (var i = num.length - 1; i >= 0; i--) {
                counter++;
                result.unshift(num[i]);
                if (!(counter % 3) && i != 0) {
                  result.unshift(',');
                }
              }
              result = result.join('');
              return result;
            },
            data: this.onlineUserArr
          },
          {
            type: 'pictorialBar',
            symbol: 'image://../../../static/img/zhu_top_h.png',
            symbolSize: [16, 30],
            symbolPosition: 'end',
            symbolOffset: ['98%', 0],
            z: 10,
            itemStyle: { opacity: 0.8 },
            //格式化
            fomatter: function (a) {
              var result = [];
              counter = 0,
                num = a.data;
              num = (num || 0).toString().split('');
              for (var i = num.length - 1; i >= 0; i--) {
                counter++;
                result.unshift(num[i]);
                if (!(counter % 3) && i != 0) {
                  result.unshift(',');
                }
              }
              result = result.join('');
              return result;
            },
            data: this.onlineUserArr
          }
        ]
      }//option
      drawnUserUse.setOption(option);
      window.addEventListener("resize", function () {
        drawnUserUse.resize();
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.drawnFun()
  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.bar {
  width: 350px;
  height: 510px;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid red;
}
</style>