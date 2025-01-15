import { createApp } from 'vue'
import antd from 'ant-design-vue'
import './style.css'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'

createApp(App).use(antd).mount('#app')
createApp(App).use(router).mount('#app')


