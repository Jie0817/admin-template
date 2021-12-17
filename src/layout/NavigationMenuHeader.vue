<template>
  <div class="menu-top-content">
    <div class="menu-top-content-icon">
      <el-icon color="#333" @click="fold(false)" v-if="_st_navigationMenu.collapse" size="24px"><Expand /></el-icon>
      <el-icon color="#333" @click="fold(true)" v-else size="24px"><Fold /></el-icon>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="red"
      @select="handleSelect">
      <el-menu-item index="1">Processing Center</el-menu-item>
      <el-sub-menu index="2">
        <template #title>Workspace</template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-menu-item index="2-3">item three</el-menu-item>
        <el-sub-menu index="2-4">
          <template #title>item four</template>
          <el-menu-item index="2-4-1">item one</el-menu-item>
          <el-menu-item index="2-4-2">item two</el-menu-item>
          <el-menu-item index="2-4-3">item three</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3" disabled>Info</el-menu-item>
      <el-menu-item index="4">Orders</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import {useStore} from 'vuex'
import {
  Expand,
  Fold,
} from '@element-plus/icons'
export default defineComponent({
  components: {
    Expand,
    Fold,
  },
  setup() {

    const store = useStore()
    const _st_navigationMenu = computed(() => store.state.NavigationMenu)
    const fold = (val:boolean) => {
      console.log(val)
      store.commit('NavigationMenu/setCollapse',val)
    }
    const activeIndex = ref('1')
    const handleSelect = <n,a>(key:n, keyPath:a) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      _st_navigationMenu,
      fold,
      handleSelect,
    }
  },
})
</script>

<style scoped lang="scss">
  .menu-top-content{
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e6e6e6;
      // background-color:#545c64;
    }
    .el-menu{
      width: calc(100% - 72px);
      border: 0;
    }
  .menu-top-content-icon{
    padding: 0 24px;
  }
  .el-menu--horizontal{
    display: flex;
    justify-content: flex-end;
  }
</style>
