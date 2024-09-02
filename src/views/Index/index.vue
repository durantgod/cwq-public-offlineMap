<template>
  <div class="home">
    <div id="container"></div>
  </div>
</template>

<script>
import dataLine from '@/data/line.js'


export default {
  name: 'Home',
  data() {
    return {
      map: null,
      mapPoints: [],
      markerClusterer: [],
    }
  },
  methods: {
    //展现地图的方法
    initMap() {
      var _this = this
      let BMap = window.BMap
      this.map = new BMap.Map('container', { mapType: BMAP_HYBRID_MAP })
      let point = new BMap.Point(87.66179400, 43.80305200) // 创建点坐标
      this.map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
      //+++++++++++++++++++++++++++++++++++++++++++

      //创建图片图标
      var marker2 = this.addTuPianTuBiao(point, marker2)

      //添加动态效果和点击事件
      this.addEventActionlabel(marker2)


      // var opts = {
      //   position: new BMap.Point(87.66179400, 43.80305200),    // 指定文本标注所在的地理位置
      //   offset: new BMap.Size(0, 0),   //设置文本偏移量
      //
      // }
      // var label2 = new BMap.Label("铝<br>粒<br>库<br>房", opts);  // 创建文本标注对象
      // label2.setStyle({
      //   color: "white",
      //   fontSize: "10px",
      //   height: "70px",
      //   width: "70px",
      //   lineHeight: "10px",
      //   fontFamily: "微软雅黑",
      //   backgroundColor: "black",
      //   border: "none",
      // });
      // this.map.addOverlay(label2);


      this.map.addEventListener("click", function (e) {
        _this.$notify.info({
          title: '做线用的信息：',
          message: "new BMap.Point(" + e.point.lng + "," + e.point.lat + ")"
        });
        
      });


      //+++++++++++++++++++++++++++++++++++++++++++
      //开启鼠标滚轮缩放
      this.map.enableScrollWheelZoom(true)
      //  设置地图显示范围，不让随便拖动
      this.setMapDisplayRange(this.map)
    },
    setMapDisplayRange(map) {

      // 获取当前显示范围
      var bs = map.getBounds();   //获取可视区域
      var bssw = bs.getSouthWest();   //可视区域左下角
      var bsne = bs.getNorthEast();   //可视区域右上角
      console.log("当前地图可视范围是:" + bssw.lng.toFixed(6) + ", " + bssw.lat.toFixed(6) + "到" + bsne.lng.toFixed(6) + ", " + bsne.lat.toFixed(6))
      var _this = this
      // 获取当前地图层级
      if (typeof map != 'undefined') {
        map.addEventListener("zoomend", function (e) {
          _this.$message({
            message: '当前地图级别: ' + map.getZoom() + (map.getZoom() < 19 ? ', 示例中只有17级到19地图,超过的无法显示!' : '')
          });
          if (map.getZoom() > 18) {

            map.setZoom(16)
          }
        });
      }


      // var b = new BMap.Bounds(new BMap.Point(120.549782, 41.663656), new BMap.Point(120.556098, 41.667374));
      // try {
      //   BMapLib.AreaRestriction.setBounds(map, b);
      // } catch (e) {
      //   alert(e);
      // }
    },
    addTuPianTuBiao(point) {
      //创建图片图标
      let myIcon = new BMap.Icon("static/images/燃脂.png", new BMap.Size(50, 50));
      let marker2 = new BMap.Marker(point, { icon: myIcon });  // 创建标注
      this.map.addOverlay(marker2);
      return marker2;
    },
    addEventActionlabel(marker2) {
      // 将标注添加到地图中，配合覆盖物实现文字提示
      let label = new BMap.Label("目标", { offset: new BMap.Size(-18, -40) });
      marker2.setLabel(label);
      marker2.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
      // 为 BMap.Marker 添加点击事件监听器
      marker2.addEventListener("click", function (event) {
        alert("火已灭！");
        // 移除标签
        this.map.removeOverlay(label);
        setTimeout(() => { marker2.setLabel(label); }, 5000)
      });

    }
  },
  created() {
    console.log(dataLine)
    this.$nextTick(() => {
      this.initMap()
    })
  },
}
</script>
<style lang="scss">
#container {
  height: 100vh;
  width: 100vw;
}
</style>
