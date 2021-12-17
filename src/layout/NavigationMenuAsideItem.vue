 
<template>
    <!--子级菜单-->
    <el-menu-item @click="clickMenuItem" v-if="!item.children || (item.children && item.children.length === 0)" :index="item.path">
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span class="menu-title">{{item.title}}</span>
    </el-menu-item>
    <!--父级菜单-->
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{item.title}}</span>
      </template>
      <template v-for="(child,index) in item.children" :key="index">
        <NavigationMenuAsideItem v-if="child.children && child.children.length>0" :item="child"></NavigationMenuAsideItem>
        <el-menu-item v-else :index="child.path">
          <el-icon>
            <component :is="child.icon"></component>
          </el-icon>
          <span class="menu-title">{{child.title}}</span>
        </el-menu-item>
      </template>
    </el-sub-menu>
</template>
<script lang="ts">
import { defineComponent , ref , onMounted, computed } from 'vue'
import {useStore} from 'vuex'
import * as Icons from "@element-plus/icons";

export default defineComponent({
  name: 'NavigationMenuAsideItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: Icons,
  setup() {
    const store = useStore()
    const _st_navigationMenu = computed(() => store.state.NavigationMenu)
    const clickMenuItem = (e:any) => {
      console.log('clickMenuItem',e);
      
    }
    const handleSelect = (e:any) => {
      console.log('handleSelect' + e);
      
    }
    let elMenuAside = ref(null);
    // 由于 template 中的 div 属性 ref 引用了一个对象 box，因此 box 将与这个 div 执行绑定。
    // 但由于 setup 执行时期，还未创建实际的 div，所以如果要进行与 box 的交互，必须在生命周期中间执行获取。
    // onMounted() 中的行为会在声明周期 mounted 中执行。
    onMounted(() => {
      console.log('elMenuAside.value', elMenuAside.value);
    })
    return {
      elMenuAside,
      _st_navigationMenu,
      clickMenuItem,
      handleSelect
    }
  },
})
</script>

<style lang="scss" scoped>
.menu-title{
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
</style>