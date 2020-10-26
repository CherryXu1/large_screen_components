<!-- 地图 -->
<template>
  <div class="mapArea">
    <div class="map"
         ref="map"></div>
    <ul class="ball">
      <li><span class="number">Top1</span><span class="name">广州</span></li>
      <li class="title"
          style="visibility:hidden;"><span>全网</span><span>用户数</span><span>&nbsp;：</span><span class="allUser">678</span></li>
      <li class="title"
          style="line-height:0px;"><span>当前在线</span><span>用户数</span><span>&nbsp;：</span><span class="curUser">678</span></li>
      <li id="line_map"><img src="../../images/map/map_zx.png"></li>
      <li class="radius"></li>
      <li class="line_title"><span>实时流入</span><span class="in">+631584</span></li>
      <li class="line_title"><span>实时流出</span><span class="out">-&nbsp;631584</span></li>

    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import guangdong from '../../../node_modules/echarts/map/json/province/guangdong.json'
import AreaMap from './MAP_AREA'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},

  data () {
    //这里存放数据
    return {
      dataJson: null,
      mapJson: [
        {
          "ALLUSER": 1758156,
          "AREACODE": "020",
          "BOOTRATE": 0.0843,
          "INFLOWUSER": 3489,
          "NAME": "广州市",
          "NUM": 1,
          "ONLINEUSER": 148264,
          "OUTFLOWUSER": 2449
        },
        {
          "ALLUSER": 762603,
          "AREACODE": "0752",
          "BOOTRATE": 0.1587,
          "INFLOWUSER": 1655,
          "NAME": "惠州市",
          "NUM": 2,
          "ONLINEUSER": 121010,
          "OUTFLOWUSER": 1089
        },
        {
          "ALLUSER": 601350,
          "AREACODE": "0750",
          "BOOTRATE": 0.1955,
          "INFLOWUSER": 1196,
          "NAME": "江门市",
          "NUM": 3,
          "ONLINEUSER": 117554,
          "OUTFLOWUSER": 860
        },
        {
          "ALLUSER": 586228,
          "AREACODE": "0668",
          "BOOTRATE": 0.2003,
          "INFLOWUSER": 1574,
          "NAME": "茂名市",
          "NUM": 4,
          "ONLINEUSER": 117417,
          "OUTFLOWUSER": 1192
        },
        {
          "ALLUSER": 630122,
          "AREACODE": "0759",
          "BOOTRATE": 0.1807,
          "INFLOWUSER": 1760,
          "NAME": "湛江市",
          "NUM": 5,
          "ONLINEUSER": 113854,
          "OUTFLOWUSER": 1279
        },
        {
          "ALLUSER": 472384,
          "AREACODE": "0758",
          "BOOTRATE": 0.2309,
          "INFLOWUSER": 1635,
          "NAME": "肇庆市",
          "NUM": 6,
          "ONLINEUSER": 109095,
          "OUTFLOWUSER": 1056
        },
        {
          "ALLUSER": 419551,
          "AREACODE": "0763",
          "BOOTRATE": 0.2411,
          "INFLOWUSER": 1512,
          "NAME": "清远市",
          "NUM": 7,
          "ONLINEUSER": 101166,
          "OUTFLOWUSER": 928
        },
        {
          "ALLUSER": 1016133,
          "AREACODE": "0757",
          "BOOTRATE": 0.0868,
          "INFLOWUSER": 1611,
          "NAME": "佛山市",
          "NUM": 8,
          "ONLINEUSER": 88181,
          "OUTFLOWUSER": 1085
        },
        {
          "ALLUSER": 379658,
          "AREACODE": "0663",
          "BOOTRATE": 0.1948,
          "INFLOWUSER": 880,
          "NAME": "揭阳市",
          "NUM": 9,
          "ONLINEUSER": 73974,
          "OUTFLOWUSER": 525
        },
        {
          "ALLUSER": 330972,
          "AREACODE": "0751",
          "BOOTRATE": 0.2226,
          "INFLOWUSER": 1353,
          "NAME": "韶关市",
          "NUM": 10,
          "ONLINEUSER": 73673,
          "OUTFLOWUSER": 728
        },
        {
          "ALLUSER": 783248,
          "AREACODE": "0769",
          "BOOTRATE": 0.0909,
          "INFLOWUSER": 1546,
          "NAME": "东莞市",
          "NUM": 11,
          "ONLINEUSER": 71209,
          "OUTFLOWUSER": 1137
        },
        {
          "ALLUSER": 336170,
          "AREACODE": "0753",
          "BOOTRATE": 0.2,
          "INFLOWUSER": 842,
          "NAME": "梅州市",
          "NUM": 12,
          "ONLINEUSER": 67219,
          "OUTFLOWUSER": 679
        },
        {
          "ALLUSER": 526597,
          "AREACODE": "0760",
          "BOOTRATE": 0.1236,
          "INFLOWUSER": 1025,
          "NAME": "中山市",
          "NUM": 13,
          "ONLINEUSER": 65065,
          "OUTFLOWUSER": 779
        },
        {
          "ALLUSER": 274312,
          "AREACODE": "0762",
          "BOOTRATE": 0.237,
          "INFLOWUSER": 777,
          "NAME": "河源市",
          "NUM": 14,
          "ONLINEUSER": 65007,
          "OUTFLOWUSER": 564
        },
        {
          "ALLUSER": 268162,
          "AREACODE": "0766",
          "BOOTRATE": 0.2199,
          "INFLOWUSER": 1095,
          "NAME": "云浮市",
          "NUM": 15,
          "ONLINEUSER": 58958,
          "OUTFLOWUSER": 766
        },
        {
          "ALLUSER": 250979,
          "AREACODE": "0660",
          "BOOTRATE": 0.2336,
          "INFLOWUSER": 645,
          "NAME": "汕尾市",
          "NUM": 16,
          "ONLINEUSER": 58628,
          "OUTFLOWUSER": 445
        },
        {
          "ALLUSER": 284878,
          "AREACODE": "0662",
          "BOOTRATE": 0.1865,
          "INFLOWUSER": 901,
          "NAME": "阳江市",
          "NUM": 17,
          "ONLINEUSER": 53122,
          "OUTFLOWUSER": 643
        },
        {
          "ALLUSER": 254349,
          "AREACODE": "0768",
          "BOOTRATE": 0.1735,
          "INFLOWUSER": 459,
          "NAME": "潮州市",
          "NUM": 18,
          "ONLINEUSER": 44131,
          "OUTFLOWUSER": 283
        },
        {
          "ALLUSER": 410947,
          "AREACODE": "0754",
          "BOOTRATE": 0.0988,
          "INFLOWUSER": 826,
          "NAME": "汕头市",
          "NUM": 19,
          "ONLINEUSER": 40593,
          "OUTFLOWUSER": 541
        },
        {
          "ALLUSER": 228045,
          "AREACODE": "0756",
          "BOOTRATE": 0.1162,
          "INFLOWUSER": 554,
          "NAME": "珠海市",
          "NUM": 20,
          "ONLINEUSER": 26493,
          "OUTFLOWUSER": 379
        },
        {
          "ALLUSER": 4781,
          "AREACODE": "0888",
          "BOOTRATE": 0.0318,
          "INFLOWUSER": 8,
          "NAME": "测试",
          "NUM": 21,
          "ONLINEUSER": 152,
          "OUTFLOWUSER": 5
        },
        {
          "ALLUSER": 0,
          "AREACODE": "0755",
          "BOOTRATE": 0,
          "INFLOWUSER": 0,
          "NAME": "深圳市",
          "NUM": 22,
          "ONLINEUSER": 0,
          "OUTFLOWUSER": 0
        },
        {
          "ALLUSER": 0,
          "AREACODE": "0999",
          "BOOTRATE": 0,
          "INFLOWUSER": 0,
          "NAME": "其他",
          "NUM": 23,
          "ONLINEUSER": 0,
          "OUTFLOWUSER": 0
        }
      ],
      cityinfo: [{
        NAME: '清远市',
        ONLINEUSER: 50000
      }, {
        NAME: '广州市',
        ONLINEUSER: 50000
      }, {
        NAME: '汕头市',
        ONLINEUSER: 500000
      }, {
        NAME: '深圳市',
        ONLINEUSER: 50000
      }, {
        NAME: '珠海市',
        ONLINEUSER: 100000
      }, {
        NAME: '佛山市',
        ONLINEUSER: 100000
      }, {
        NAME: '韶关市',
        ONLINEUSER: 50000
      }, {
        NAME: '肇庆市',
        ONLINEUSER: 50000
      }, {
        NAME: '江门市',
        ONLINEUSER: 50000
      }, {
        NAME: '阳江市',
        ONLINEUSER: 50000
      }, {
        NAME: '湛江市',
        ONLINEUSER: 50000
      }, {
        NAME: '梅州市',
        ONLINEUSER: 50000
      }, {
        NAME: '惠州市',
        ONLINEUSER: 50000
      }, {
        NAME: '茂名市',
        ONLINEUSER: 50000
      }],
      poly: [
        [110.0675530473, 20.2863663059],
        [109.6737292126, 20.8741739276],
        [109.9223213467, 21.3917040225],
        [111.5112425110, 22.9280635219],
        [112.3022327821, 25.0656909313],
        [112.9723820870, 24.7966947687],
        [113.1207222457, 25.3440317936],
        [114.5555080115, 25.2206369798],
        [114.1929524971, 24.4553194053],
        [116.6923834291, 24.5228143727],
        [116.9560247003, 23.6603431245],
        [113.6820593805, 22.6502805935],
        [110.7816494873, 21.4182709607],
        [110.1060413763, 20.9927704899],
        [110.5097003649, 20.4229370894]
      ],
      scale: [
        [2, 2], //茂名市
        [2, 2], //云浮市
        [2, 2], //珠海市
        [2, 2], //佛山市
        [2, 2], //广州市
        [2, 2], //东莞市
        [2, 2], //惠州市
        [2, 2], //肇庆市
        [2, 2], //清远市
        [2, 2], //韶关市
        [2, 2], //河源市
        [2, 2], //梅州市
        [2, 2], //潮州市
        [2, 2],//汕头市
        [2, 2],//揭阳市
        [2, 2],//汕尾市
        [2, 2],//深圳市
        [2, 2],//中山市
        [2, 2],//江门市
        [2, 2], //阳江市
        [2, 2]//湛江市
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    showMap () {
      let drawnMap;
      let option = null;
      this.$echarts.registerMap("广东", guangdong);
      drawnMap = this.$echarts.init(this.$refs.map);
      option = {
        backgroundColor: 'transparent',
        geo: {
          map: "广东",
          roam: false,
          zoom: 1.0,
          label: {
            normal: {
              show: true,// 是否显示对应地名
              textStyle: {
                color: '#51dcff',
                fontFamily: 'microsoft YaHei',
                fontSize: 20,
                shadowColor: "rgba(0,54,255, 1)",
                shadowBlur: 150,
                borderColor: "#578EFF",
                areaColor: "rgba(81, 220, 255, .2)"
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                color: '#FFAA16',
                fontSize: 23,
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(36,159,186,0.2)',
              borderColor: '#43c0e0',//5cecfe 48CCCD
              borderWidth: 2
            },
            emphasis: {
              areaColor: 'rgba(7,22,52,0.2)',//#071634
              borderColor: '#FFF'
            }
          },
          silent: false,
          //设置地图尺寸
          aspectScale: 0.9,
          layoutCenter: ['50%', '50%'],
          layoutSize: 900,
          zlevel: 2
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            data: AreaMap.seriesDataConver(guangdong["features"], this.cityinfo, this.poly),
            symbol: 'path://<?xml version="1.0" standalone="no"?>\n' +
              '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" \n' +
              '  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n' +
              '<svg width="4cm" height="4cm" viewBox="0 0 400 400"\n' +
              '     xmlns="http://www.w3.org/2000/svg" version="1.1">\n' +
              '  <title>Example triangle01- simple example of a \'path\'</title>\n' +
              '  <desc>A path that draws a triangle</desc>\n' +
              '  <rect x="1" y="1" width="398" height="398"\n' +
              '        fill="none" stroke="blue" />\n' +
              '<path d="M10.848,6.776c0,2.127-1.724,3.852-3.852,3.852\n' +
              'S3.145,8.903,3.145,6.776s1.724-3.852,3.852-3.852S10.848,4.649,10.848,6.776z M6.996,0.388c-3.528,0-6.389,2.86-6.389,6.389\n' +
              's2.86,6.389,6.389,6.389s6.389-2.86,6.389-6.389S10.525,0.388,6.996,0.388z M12.552,6.776c0,3.068-2.487,5.555-5.555,5.555\n' +
              'S1.441,9.844,1.441,6.776s2.487-5.555,5.555-5.555S12.552,3.708,12.552,6.776z"/>\n' +
              '</svg>',
            symbolSize: 21,
            showEffectOn: "render",
            rippleEffect: {
              period: 3, //动画时间，值越小速度越快
              brushType: "fill", //波纹绘制方式 stroke, fill
              scale: 5 //波纹圆环最大限制，值越大波纹越大
            },
            zlevel: 1,
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true // 是否显示地名
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333",
                fontSize: 30
              }
            },
            markPoint: {
              symbol: 'circle',
              silent: true,
              animation: true,
              label: {
                normal: {
                  show: false
                }
              },
              symbolSize: function () {
                return Math.ceil(Math.random() * 6 + 1);
              },
              itemStyle: {
                normal: {
                  color: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.5,
                    colorStops: [{
                      offset: 0, color: '#FFF' // 0% 处的颜色
                    }, {
                      offset: 0.5, color: '#61d8f6' // 0% 处的颜色
                    }, {
                      offset: 1, color: '#00b0dd' // 100% 处的颜色
                    }]
                  },
                  shadowBlur: 10,
                  shadowColor: '#FFF'
                }
              },
              data: AreaMap.seriesDataConver(guangdong["features"], this.cityinfo, this.poly),
              animationEasing: 'circularIn',
              animationDelayUpdate: function (idx) {
                return idx * parseInt(Math.random() * 10);
              }
            },
            zlevel: 4
          }
        ]
      };//option
      drawnMap.setOption(option);
      window.addEventListener("resize", function () {
        drawnMap.resize();
      });
      drawnMap.on('mouseover', (params) => {
        $(".ball").show();
        let left = params.event.offsetX + 70;
        let top = params.event.offsetY;
        if (left > 700) {
          left -= 600;
        }
        if (top > 500) {
          top -= 400;
        }
        $(".ball").css({
          'top': top + 'px',
          'left': left + 'px'
        });
        $('.ball .name').html(params.name);
        let obj = {};
        this.mapJson.forEach((v, e) => {
          if (v.NAME.indexOf(params.name) != -1) {
            obj = v;
            //return;
          }
        });
        $('.ball .number').html('top' + obj['NUM']);
        $('.ball .allUser').html(obj['ALLUSER']);
        $('.ball .curUser').html(obj['ONLINEUSER']);
        $('.ball .in').html("+" + obj['INFLOWUSER']);
        $('.ball .out').html("-" + obj['OUTFLOWUSER']);

      });
      drawnMap.on("mouseout", (params) => {
        $(".ball").hide();
      });
      drawnMap.dispatchAction({
        type: 'geoSelect'
      });
      //捕获事件
      drawnMap.on('geoselected', function (params) {
      });
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.showMap();
  },

}
</script>
<style lang='less' scoped>
/*/@import url(); 引入公共css类*/
.mapArea {
  width: 1111px;
  height: 824px;
  position: absolute;
  top: 0px;
  left: 0px;
  border: 1px solid red;
  .map {
    width: 1097px;
    height: 810px;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .ball {
    width: 542px;
    height: 354px;
    position: absolute;
    top: 301px;
    left: 516px;
    z-index: 5;
    display: none;
    background: url(../../images/map/ball_bg_s.png);
    li:nth-child(1) {
      position: absolute;
      top: 86px;
      right: 85px;
    }
    li:nth-child(1) span:nth-child(1) {
      color: #fff;
      font-size: 21px;
    }
    li:nth-child(1) span:nth-child(2) {
      color: #f5ed44;
      font-size: 24px;
      padding-left: 39px;
    }
    .title {
      position: absolute;
      top: 127px;
      right: 85px;
    }
    .title:nth-child(3) {
      top: 162px;
    }
    .title span {
      color: #52fefd;
    }
    .title span:nth-child(1),
    .title span:nth-child(3) {
      color: #fff;
    }
    li:nth-child(6) {
      width: 380px;
      color: #e9b863;
      position: absolute;
      top: 200px;
      left: 118px;
    }
    li:nth-child(6) span:nth-child(2),
    li:nth-child(7) span:nth-child(2) {
      padding-left: 166px;
    }
    li:nth-child(7) {
      width: 380px;
      color: #6feec9;
      position: absolute;
      top: 233px;
      left: 118px;
    }
    .radius {
      width: 109px;
      height: 109px;
      position: absolute;
      background-image: url(../../images/map/radius_all.png);
      animation: circle 5s linear infinite;
    }
    @keyframes circle {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .title span:nth-child(1) {
      color: #b3c3d5;
    }
    .title span:nth-child(2) {
      color: #1debff;
    }
    #line_map {
      width: 160px;
      height: 62px;
      position: absolute;
      top: 200px;
      left: 250px;
      overflow: hidden;
    }
    @keyframes change_line_map {
      0% {
        left: 0px;
      }
      100% {
        left: -525px;
      }
    }
    @-moz-keyframes change_line_map /* Firefox */ {
      0% {
        left: 0px;
      }
      100% {
        left: -525px;
      }
    }
    @-webkit-keyframes change_line_map /* Safari and Chrome */ {
      0% {
        left: 0px;
      }
      100% {
        left: -525px;
      }
    }
    @-o-keyframes change_line_map /* Opera */ {
      0% {
        left: 0px;
      }
      100% {
        left: -525px;
      }
    }
    #line_map > img {
      position: absolute;
      left: 0;
      top: 0;
      animation: change_line_map 25s linear 0s infinite;
      -moz-animation: change_line_map 25s linear 0s infinite; /* Firefox */
      -webkit-animation: change_line_map 25s linear 0s infinite; /* Safari and Chrome */
      -o-animation: change_line_map 25s linear 0s infinite;
    }
  }
}
</style>