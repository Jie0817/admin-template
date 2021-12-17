<template>
  <div class="container">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :loop = 'true'
      :space-between="50"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      effect="cards"
    >
      <swiper-slide>
        <img class="img" src="@/assets/banner/1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img class="img" src="@/assets/banner/2.jpg" alt="" /> </swiper-slide
      ><swiper-slide>
        <img class="img" src="@/assets/banner/3.jpg" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script lang="ts">
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/modules/navigation/navigation.min.css";
// import "swiper/modules/pagination/pagination.min.css";
// import "swiper/modules/scrollbar/scrollbar.min.css";

/**
 * 如果嫌麻烦可以把上面的全部样式都删了，直接用总的
 * bundle：所有 Swiper 样式，包括所有模块样式（如导航、分页等）
 */
import "swiper/swiper-bundle.min.css";

import { defineComponent } from "vue";

export default defineComponent({
  title: "swipersss",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, EffectCards],
    };
  },
});
</script>
<style scoped lang="scss">
.container {
  width: 200px;
  margin: auto;
}
.swiper-slide {
  width: 200px;
  // height: 300px;
  // line-height: 300px;
  // font-size: 30px;
  // text-align: center;
  // background-color: pink;
}
.img {
  width: 100%;
}
.swiper::v-deep .swiper-pagination .swiper-pagination-bullet {
  background: rgb(255, 255, 255);
}
.swiper::v-deep .swiper-pagination .swiper-pagination-bullet-active {
  background: rgb(255, 255, 255);
}
</style>

<!-- <template>
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script> -->
