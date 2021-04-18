<template>
  <div id="mainDiv">
    <div id="DECoreContainer"> </div>
    <!-- 电子沙盘按钮 -->
      <Button class="sand-button" type="primary" v-show="!$store.state.common.sandMenuFlag" @click="getMenu">电子沙盘</Button>
      <!-- 电子沙盘组件 -->
      <sand id="sand" v-show="$store.state.common.sandMenuFlag" ref="sand"></sand>
      <!-- 在地球绘制矢量图形等跟随鼠标tootip -->
      <div id="toolTip"></div>
      <!-- 军事标绘tooltip,固定位置 -->
      <div id="toolTip1"></div>
  </div>
</template>
<script>
// import * as Cesium from 'cesium/Source/Cesium';
// import { Viewer } from 'cesium/Source/Cesium';
// import 'cesium/Source/Widgets/widgets.css';
// import "../../node_modules/cesium/Build/Cesium/Widgets/widgets.css";
require('../../public/css/sand.css')
var POI = require("../libs/DESource/POI");
import sand from "@/views/Sand.vue";
export default {
  name: 'DECoreViewer',
   data() {
      return {
      }
   },
  props: {
    msg: String
  },
  mounted: function() {
    /****初始化地球(请替换成初始化地球代码)****/
    let Cesium = this.Cesium
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZmM4MWYwYS0xOWM3LTQ0ZWEtYTUzNC1mMWI3ODAyODA1ZmYiLCJpZCI6NDQ2OTEsImlhdCI6MTYxNDI0NDk1OX0.5wce5JelLgCOVQ513YI9QtLDuqTA_L9Y0u_s2oFkWR4';
    //高德卫星地图
    var earthView = {
      containerDiv: "DECoreContainer",
      mapFlag: "gd_sa" 
    };
    // window.viewer = POI.initEarth(earthView);
    window.viewer = new Cesium.Viewer('DECoreContainer');
    //地形深度检测
    POI.depthTestAT(window.viewer, true);
    var options = {
      lng: 106.2955299594,
      lat: 40.092238415,
      height: 10e6,
      heading: 0.0,
      pitch: -90,
      roll: 0.0
    };
    //相机视角
    POI.flyTo(window.viewer, options);
    /***************替换结束***************/
    this.$refs.sand.getPOIList();
    this.$refs.sand.getGLBList();
    //需要从cookie获取数据
    this.$store.commit('common/getDeptId',this.$Cookies.get('deptId'));
    this.$store.commit('common/getUid',this.$Cookies.get('uid'));
    this.$refs.sand.ListInit();
    this.$refs.sand.POIList();
    this.$refs.sand.VectorList();
    this.$refs.sand.GlbModelList(); 
  },
  methods: {
    //电子沙盘按钮
    getMenu()
    {
      this.$store.commit('common/changeSand',true);
    }
  },
  components: {
      sand:sand,
    }
}
</script>
<style>
#DECoreContainer,#mainDiv{
  height: 100%;
}
.sand-button{
  position:absolute;
  top:20px;
  left:110px;
  z-index:6;
}
#toolTip{
  display:none;
  color:rgb(236, 159, 30);
  border: 1px solid rgb(236, 159, 30);
  position:absolute;
  font-size:12px;
  color:#fff;
  width:140px;
  text-align:center;
}
#toolTip1{
  display:none;
  color:rgb(236, 159, 30);
  border: 1px solid rgb(236, 159, 30);
  position:absolute;
  font-size:12px;
  color:#fff;
  width:325px;
  text-align:left;
}
</style>
