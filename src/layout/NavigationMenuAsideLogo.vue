<template>
  <!-- <router-link :to="{path: '/'}"> -->
    <div class="logo">
      <img  class="nav-logo-small" alt="element-logo" src="./../assets/logo.png" />
      <h5 :class="{fold :_st_navigationMenu.collapse }" style="">后台管理模板</h5>
    </div>
  <!-- </router-link> -->
</template>

<script lang="ts">
import { defineComponent, computed} from 'vue';
import {useStore} from 'vuex'
export default defineComponent({
  setup(){

    const store = useStore()

    const _st_navigationMenu = computed(() => store.state.NavigationMenu)

    return {
      _st_navigationMenu,
    }
  }
});
</script>

<style lang="scss" scoped>
.logo {
  width : 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 61px;
  line-height: 50px;
  overflow: hidden;
  border-right: 1px solid #e6e6e6;
  // background: #545c64;
  
  img {
    width: 34px;
    height: 34px;
    vertical-align:middle;
  }
  h5 {
    width: 108px;
    overflow: hidden;
    display: inline-block;
    vertical-align:middle;
    font-size: 18px;
    color: #333;
    margin-left:10px;
    transition: .2s all linear;
    white-space: nowrap;
  }
  .fold{
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    margin-left:0;
  }
}
</style>
