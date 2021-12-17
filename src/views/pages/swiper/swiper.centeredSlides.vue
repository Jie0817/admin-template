<template>
  <div class="container">
    <swiper
      :modules="modules"
      :spaceBetween="30"
      :slidesPerView="2"
      :pagination="true"
      :loopedSlides="5"
      :centeredSlides="true"
    >
      <swiper-slide>
        <img
          class="swiper-item"
          src="https://common.ofo.so/campaign/valentine/images/ditie4.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-item"
          src="https://common.ofo.so/campaign/valentine/images/ditie3.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-item"
          src="https://common.ofo.so/campaign/valentine/images/ditie2.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="swiper-item"
          src="https://common.ofo.so/campaign/valentine/images/ditie1.png"
          alt=""
        />
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

import { defineComponent, onMounted } from "vue";

export default defineComponent({
  title: "swipersss",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const pagination = { el: ".swiper-pagination", clickable: true };
    const onSwiper = (swiper: any) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination],
      // pagination,
    };
  },
});
</script>
<style scoped lang="scss">
// html, body {
//           position: relative;
//           height: 100%;
//         }
//     body {
//       background: #fff;
//       font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//       font-size: 14px;
//       color:#000;
//       margin: 0;
//       padding: 0;
//     }
.container {
  width: 500px;
  margin: auto;
}
.swiper::v-deep {
  width: 100%;
  height: 250px;
  padding-top: 20px;
  margin-top: 20px;
}
.swiper-slide::v-deep {
  position: relative;
  top: 0;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  width: 60%;
  height: 100%;
}
.swiper-slide.swiper-slide-active::v-deep {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  z-index: 1000;
}
.swiper-slide.swiper-slide-prev,
.swiper-slide.swiper-slide-next {
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.swiper-item {
  width: 290px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

// .container{
//   width: 100%;
//   margin: auto;
// }
// /deep/.swiper-wrapper{
//   display: flex;
//   align-items: center;
//   position: relative;
// }
// .img{
//     width: 290px;
//     position: absolute;
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
// }
// // .swiper-slide-active .img{
// //   width: 500px;
// //   height: 700px;
// // }
// .swiper-slide-active{
//   // width: 800px;
//   transform: scale(1.2);
// }
// .swiper-slide {
//   // width: 500px;
//   // line-height: 300px;
//   // font-size: 30px;
//   // text-align: center;
//   // background-color: pink;
//   transform: scale(0.8);
// }
</style>
