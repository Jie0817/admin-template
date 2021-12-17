<template>
    <el-container>
      <el-aside height="100%">
        <NavigationMenuAsideLogo></NavigationMenuAsideLogo>
        <!-- <el-scrollbar max-height="800px"> -->
          <NavigationMenuAside></NavigationMenuAside>
        <!-- </el-scrollbar> -->
      </el-aside>
      <el-container>
        <el-header>
          <NavigationMenuHeader></NavigationMenuHeader>
        </el-header>
        <el-main>
          <breadcrumb></breadcrumb>
          <slot></slot>  
        </el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavigationMenuAside from './NavigationMenuAside.vue'
import NavigationMenuAsideLogo from './NavigationMenuAsideLogo.vue'
import NavigationMenuHeader from './NavigationMenuHeader.vue'
import breadcrumb from './breadcrumb.vue'
export default defineComponent({
    components : {
        NavigationMenuAside,
        NavigationMenuAsideLogo,
        NavigationMenuHeader,
        breadcrumb
    }
})
</script>

<style lang="scss" scoped>
.el-aside{
  width: auto;
  height: 100vh;
  // background: #545c64;
}
.el-header{
  padding: 0;
}
.el-scrollbar{
  height: auto;
}
</style>