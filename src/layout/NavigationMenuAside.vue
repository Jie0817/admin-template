<template>
<!-- {{JSON.stringify(breadcrumbList)}} -->
  <el-menu
    @select="handleSelect"
    ref="elMenuAside"
    default-active="/"
    :collapse="_st_navigationMenu.collapse"
    class="el-menu-vertical-demo"
    active-text-color="red"
    style="--el-aside-width: 64px"
    router="true"
  >
    <el-menu-item index="/">
      <el-icon>
        <component :is="'HomeFilled'"></component>
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <navigation-menu-aside-item
      v-for="(menu, index) in _st_navigationMenu.menuList"
      :key="index"
      :item="menu"
    >
    </navigation-menu-aside-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import * as Icons from "@element-plus/icons";
import menus from "@/layout/menu";
import NavigationMenuAsideItem from "./NavigationMenuAsideItem.vue";
export default defineComponent({
  components: {
    NavigationMenuAsideItem,
    ...Icons,
  },
  setup() {
    const store = useStore();
    const _st_navigationMenu = computed(() => store.state.NavigationMenu);
    store.commit("NavigationMenu/setMenuList", menus);
    let elMenuAside = ref(null);
    const indexBreadcrumbs = ref<string[]>([]);

    interface typeObj { [key:string] : string}
    const breadcrumbList = () => {
      let breadcrumbs:typeObj[] = [];
      // 获取的菜单列表
      let menuList = _st_navigationMenu.value.menuList;
      // 获取面包屑路由菜单对象
      indexBreadcrumbs.value.map((item) => {
        for (let i = 0; i < menuList.length; i++) {
          // 如果是有二级菜单
          if (
            menuList[i].children !== undefined &&
            menuList[i].children.length > 0 &&
            item == menuList[i].path
          ) {
            breadcrumbs.push(menuList[i]);
            continue;
          }
          // 如果没有二级菜单
          else if (
            (menuList[i].children === undefined && item == menuList[i].path) ||
            (menuList[i].children !== undefined && menuList[i].children.length == 0 && item == menuList[i].path)
          ) {
            breadcrumbs.push(menuList[i]);
            break;
          }
          // 如果是二级菜单
          else {
            if(menuList[i].children){
              // breadcrumbs = []
              for (let j = 0; j < menuList[i].children.length; j++) {
                if (item == menuList[i].children[j].path) {
                  breadcrumbs.push(menuList[i].children[j]);
                  break;
                }
              }
            }
          }
        }
      });
      
      return breadcrumbs;
    }
    const handleSelect = (e: any,indexPath:string[]) => {
      indexBreadcrumbs.value = indexPath
      store.commit('NavigationMenu/setBreadcrumbList',breadcrumbList())
    };
    // 由于 template 中的 div 属性 ref 引用了一个对象 box，因此 box 将与这个 div 执行绑定。
    // 但由于 setup 执行时期，还未创建实际的 div，所以如果要进行与 box 的交互，必须在生命周期中间执行获取。
    // onMounted() 中的行为会在声明周期 mounted 中执行。
    onMounted(() => {
      console.log("elMenuAside.value", elMenuAside.value);
    });
    return {
      elMenuAside,
      _st_navigationMenu,
      menus,
      handleSelect,
      // breadcrumbList
    };
  },
});
</script>

<style lang="scss" scoped>
// 菜单收缩栏样式(关闭时)
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  // border: 0;
  height: calc(100% - 61px);
}
.nav-logo-small {
  width: 34px;
  height: 34px;
  // vertical-align:middle;
}
</style>
