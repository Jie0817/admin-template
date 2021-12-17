import { createStore } from 'vuex'

// 导航菜单
import NavigationMenu from './modules/NavigationMenu'

export default createStore({
  state: {
    _store_name : '张三'
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    NavigationMenu
  }
  
})
