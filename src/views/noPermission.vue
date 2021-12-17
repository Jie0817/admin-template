<template>
  <div class="about">
    <div class="img">
      <img src="@/assets/Tips/NoPermission.png" alt="" />
    </div>
    <p class="tips">世界上最远的距离，不是我装了微信，你却没有装，而是我在深情地望着电脑屏幕，却显示无权限访问</p>
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
