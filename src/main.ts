import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Card from './components/common/Card/index.vue'
// 创建一个应用实例
// 可以直接内联根组件，也可以使用从别处导入的组件App
const app = createApp(App)
console.log('app', app, typeof app)
// 得到一个已注册的组件
const MyCard = app.component('Card', Card)
console.log('MyCard', MyCard, typeof MyCard)
// 将应用实例挂载在一个容器元素中
// ID选择器#app对应于index.html的<div id="app"></div>
const test = app.mount('#app')
// 返回根组件的实例
console.log('test', test, typeof test)
// createApp(App).component('Card', Card).mount('#app')
