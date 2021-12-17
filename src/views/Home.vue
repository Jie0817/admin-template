<template>
  <!-- <div class="home"> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <navigation-menu>
      <router-view/>
    </navigation-menu>
  <!-- </div> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavigationMenu from '@/layout/NavigationMenu.vue'; // @ is an alias to /src

@Options({
  components: {
    NavigationMenu,
  },
})
export default class Home extends Vue {}
</script>
