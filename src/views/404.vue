<template>
  <div class="about">
    <div class="img">
      <img src="@/assets/Tips/404.png" alt="" />
    </div>
    <p class="tips">从前有座山，山里有座庙，庙里有个页面，现在找不到…</p>
    <el-button @click="back" auto-insert-space style="width : 100px" type="primary" round>返回</el-button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class Home extends Vue {
  back(){
    this.$router.back()
  }
}
</script>

<style lang="scss" scoped>
  .about{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
  }
  .img{
    width: 600px;
    height: 500px;
    overflow: hidden;
  }
  .img>img{
    width: 100%;
  }
  .tips{
    width: 1000px;
    font-size: 32px;
    margin-bottom: 32px;
  }
</style>
