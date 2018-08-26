import Vue from 'vue'
import App from './App'
import appSNC from './import'

// 引入css
import '~/css/reset.css'

let user = {}

Vue.prototype.$snc = appSNC
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  data: {firstAjax: false, user: {}},
  template: '<App :firstAjax="firstAjax" :user="user"/>',
  components: {App},
  // provide: {user}
})

appSNC.ready(data => {
  vm.user = data.user || {b: 1}
  // user = data.user || {a: 1}
  appSNC.hideLoading()
  // appSNC.enablePullDownRefresh({
  //   theme: 'worldcup',
  //   success (response) {
	// 		console.log('下拉刷新启用成功！')
	// 	}
  // })
})
