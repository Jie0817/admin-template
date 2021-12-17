<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="(item, index) in _st_navigationMenu.breadcrumbList"
        :key="index"
        >{{ item.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
    const _st_navigationMenu = computed(() => store.state.NavigationMenu);
    const route = useRoute();
    watch(
      () => route.path,
      (to,from) => {
        console.log("监听到变化",to);
        console.log("监听到变化",from);
      }
    );
    return {
      _st_navigationMenu,
    };
  },
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin-bottom: 20px;
}
</style>
