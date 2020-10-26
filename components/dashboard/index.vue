<!-- 仪表盘 -->
<template>
  <div class="dashboard">
    <div class="realRate">
      <div class="meter"
           ref="meter"></div>
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
    rate: {
      type: Number
    }
  },
  data () {
    //这里存放数据
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showDrawnoption () {
      let option = null;
      option = {
        backgroundColor: "transparent",
        series: [{
          name: this.name,
          type: 'gauge',
          startAngle: 215,
          endAngle: -35,
          min: 0,
          max: 100,
          splitNumber: 10,
          radius: '100%',
          axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
              color: [
                [0.7, '#52FEFE'],
                [1, '#FFAA16']
              ],
              width: 4,
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          axisLabel: { // 坐标轴小标记
            textStyle: { // 属性lineStyle控制线条样式
              color: '#D7FFFF',
              fontSize: 18
            }
          },
          axisTick: { // 坐标轴小标记
            length: 15, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: 'auto',
              shadowColor: '#fff', //默认透明
              shadowBlur: 10
            }
          },
          splitLine: { // 分隔线
            length: 20, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              width: 3,
              color: '#fff'
            }
          },
          pointer: { // 分隔线
            shadowColor: '#fff', //默认透明
            shadowBlur: 5
          },
          itemStyle: {
            itemStyle: {
              normal: {
                color: '#52FEFE'
              }
            }
          },
          title: {
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 54,
              fontStyle: 'italic',
              color: '#D7FFFF'
            }
          },
          detail: {
            offsetCenter: [0, '50%'], // x, y，单位px
            formatter: function (value) {
              return value;
            },
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              color: '#FFAA16',
              fontSize: 65,
              width: 194
            }
          },
          data: [{ value: ((this.rate * 100)).toFixed(2), name: '%' }]

        }]
      };
      let drawnRate = this.$echarts.init(this.$refs.meter);
      drawnRate.setOption(option);
      window.addEventListener("resize", function () {
        drawnRate.resize();
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    console.log(this.rate);
    this.showDrawnoption();
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.dashboard {
  width: 450px;
  height: 450px;
  position: absolute;
  top: 130px;
  left: 20px;
  .realRate {
    width: 422px;
    height: 371px;
    background: url(../../images/dashboard/meter_bg.png);
    // background: url(../../../images/dashboard/meter_bg.png);
    position: absolute;
    top: 60px;
    left: 12px;
    .meter {
      width: 310px;
      height: 310px;
      position: absolute;
      top: 58px;
      left: 55px;
    }
  }
}
</style>