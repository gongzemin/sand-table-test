import Vue from 'vue'
import App from './App.vue'
// import * as Cesium from 'cesium/Source/Cesium';
// import '../node_modules/cesium/Build/Cesium/Widgets/widgets.css';
import  * as Cesium from "cesium/Cesium";
import "cesium/Widgets/widgets.css";
import router from './router';  // 路由
import store from '../store'  // store
import Cookies from 'js-cookie'  // cookie
// import service from './utils/request'  // axios封装
import iView from 'view-design'
import 'view-design/dist/styles/iview.css'
// console.log(Cesium)
Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$cookies = Cookies
// Vue.prototype.$axios = service
Vue.prototype.$store = store
Vue.prototype.Cesium = Cesium
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
