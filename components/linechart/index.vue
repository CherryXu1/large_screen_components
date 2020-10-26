<!--折线图  -->
<template>
  <div class='graph'
       ref="graph"></div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    titleX: {
      type: Object
    },
    toolBg: {
      type: String
    }
  },
  data () {
    //这里存放数据
    return {
      graphArr: [357, 357, 361, 369, 363, 352, 348, 343, 339, 336, 331, 331, 331, 332, 335, 339, 349, 365, 391, 404, 399, 382, 367, 359],
      stime: ["10", "09", "08", "07", "06", "05", "04", "03", "02", "01", "00", "23", "22", "21", "20", "19", "18", "17", "16", "15", "14", "13", "12", "11"],
      max_num: 0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showOnline () {
      let titleX = JSON.parse(JSON.stringify(this.titleX));
      let drawnOnlineUser = this.$echarts.init(this.$refs.graph);
      let option = null;
      option = {
        title: titleX,
        tooltip: {
          show: true,
          trigger: 'axis',//触发类型-axis坐标轴触发，item-数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用
          triggerOn: 'mousemove',//提示框触发的条件,mousemove/click/none
          enterable: true,//鼠标是否可进入提示框浮层中
          position: function (point, params, dom) {//提示框浮层的位置-array、function
            return [point[0] - 90, point[1] - 80];
          },
          formatter: function (params) {//提示框浮层内容格式器，支持字符串模板和回调函数两种形式
            return (params[0]['value']).toFixed(1) + '万';
          },
          confine: false,//是否将 tooltip 框限制在图表的区域内。
          backgroundColor: 'transparent',
          padding: [15, 65, 20, 65],//提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。
          //extraCssText: 'background-image:url(../../images/lineChart/graph_00.png)'//额外附加到浮层的 css 样式
          extraCssText: 'background-image:url(../../../static/img/graph_00.png)'//额外附加到浮层的 css 样式
        },
        grid: { //直角坐标系内绘图网格
          top: '23%',
          left: '5%',
          right: '10%',
          bottom: '15%',
          containLabel: true
        },
        xAxis: { //直角坐标系 grid 中的 x 轴
          type: 'category',
          boundaryGap: false,
          data: this.stime,
          axisLine: { //坐标线样式
            lineStyle: {
              color: '#51555A',
              width: 2
            }
          },
          axisTick: { //坐标轴刻度相关设置
            show: false,
            alignWithLable: true,
          },
          axisLabel: {
            margin: 8,
            color: '#A8A8A8',
            fontSize: 14,
            interval: 0
          }
        },
        yAxis: { //直角坐标系 grid 中的 y 轴
          type: 'value',
          min: 0,
          //max: (Math.ceil(this.max_num)),
          max: 404,
          axisLine: {
            lineStyle: {
              color: '#51555A',
              width: 2
            }
          },
          axisTick: { //坐标轴刻度相关设置
            show: false
          },
          axisLabel: {
            margin: 8,
            color: '#A8A8A8',
            fontSize: 14
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          type: 'line',
          smooth: true,//是否平滑曲线显示
          symbol: 'path://<?xml version="1.0" encoding="utf-8"?>\n' +
            '<!-- Generator: Adobe Illustrator 17.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n' +
            '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">\n' +
            '<svg version="1.0" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
            '\t width="45.958px" height="45.957px" viewBox="0 0 45.958 45.957" enable-background="new 0 0 45.958 45.957" xml:space="preserve">\n' +
            '<path fill="#7FCBD7" d="M22.979,45.957C10.308,45.957,0,35.648,0,22.979C0,10.308,10.308,0,22.979,0\n' +
            '\tc12.67,0,22.979,10.308,22.979,22.979C45.958,35.648,35.649,45.957,22.979,45.957z M22.979,5C13.065,5,5,13.065,5,22.979\n' +
            '\tc0,9.913,8.065,17.979,17.979,17.979s17.979-8.065,17.979-17.979C40.958,13.065,32.893,5,22.979,5z M22.979,4.628\n' +
            '\tc-10.135,0-18.351,8.216-18.351,18.351S12.844,41.33,22.979,41.33S41.33,33.114,41.33,22.979S33.114,4.628,22.979,4.628z"/>\n' +
            '</svg>',//标记的图形。
          sampling: 'average',//取过滤点的平均值
          showSymbol: false,
          itemStyle: {//折线拐点标志的样式
            normal: {
              color: '#04E7A8'
            }
          },
          areaStyle: {//区域填充样式。
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#00b0dd'
              }, {
                offset: 1,
                color: '#091427'
              }])
            }
          },
          silent: false,
          // data: this.graphArr,
          data: [357, 357, 361, 369, 363, 352, 348, 343, 339, 336, 331, 331, 331, 332, 335, 339, 349, 365, 391, 404, 399, 382, 367, 359],
          clipOverflow: true,
          animation: true,
          animationEasing: 'quarticInOut',
        }]

      }
      drawnOnlineUser.setOption(option);
      window.addEventListener("resize", function () {
        drawnOnlineUser.resize();
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    console.log(this.titleX)
    let titleX = JSON.parse(JSON.stringify(this.titleX));
    this.showOnline();
  },
}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.graph {
  width: 1264px;
  height: 298px;
  position: absolute;
  top: 30px;
  left: 4px;
  border: 1px solid red;
}
</style>