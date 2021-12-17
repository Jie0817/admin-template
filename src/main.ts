import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Axios from 'axios'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


// import NavigationMenu from './layout/NavigationMenu.vue'


import installMaxerStore, { Maxer } from './store/maxer.mixin'
// 声明全局组件 防止需要this调用时不能识别类型
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $m: Maxer;  // 声明全局方法
    }
}

const app = createApp(App)
installMaxerStore(app)
app
.use(store)
.use(router)
.use(ElementPlus)
// .component('navigation-menu',NavigationMenu)
// .use(ElementPlusIcons)
.mount('#app')
