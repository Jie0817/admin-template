<template>
  <div class="global">
    <swiper
      class="global-promotion"
      :slidesPerView="1.12"
      :slidesOffsetAfter="clientWidth"
      :watchSlidesProgress="true"
      @touchMove="onTouchMove"
      @setTransition="onSetTransition"
    >
      <swiper-slide class="au">
        <img
          class="swiper-item"
          src="@/assets/banner/taobaoworld/p_au.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="en">
        <img
          class="swiper-item"
          src="@/assets/banner/taobaoworld/p_en.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="hk">
        <img
          class="swiper-item"
          src="@/assets/banner/taobaoworld/p_hk.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="jp">
        <img
          class="swiper-item"
          src="@/assets/banner/taobaoworld/p_jp.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="us">
        <img
          class="swiper-item"
          src="@/assets/banner/taobaoworld/p_us.png"
          alt=""
        />
      </swiper-slide>
    </swiper>
    <div class="global-mask"></div>
    <div class="global-circle">
      <ul>
        <li class="hk"></li>
        <li class="au"></li>
        <li class="en"></li>
        <li class="jp"></li>
        <li class="us"></li>
      </ul>
    </div>
    <div class="global-bg"></div>
  </div>
</template>

<script lang="ts">
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import "swiper/swiper-bundle.min.css";

import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  title: "swipersss",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const clientWidth = document.body.clientWidth * 0.115;
    const onTouchMove = (swiper: any) => {
      let deg = swiper.progress * 4 * 45;
      swiper.$el
        .parents(".global")
        .find(".global-circle")
        .transform("rotate(-" + deg + "deg)");
    };

    const onSetTransition = (swiper: any, transition: any) => {
      let deg = swiper.progress * 4 * 45;
      swiper.$el
        .parents(".global")
        .find(".global-circle")
        .transition(transition)
        .transform("rotate(-" + deg + "deg) translate3d(0, 0, 0)");
    };
    return {
      modules: [Pagination],
      clientWidth,
      onSetTransition,
      onTouchMove,
    };
  },
});
</script>
<style scoped lang="scss">
.container {
  width: 500px;
  margin: auto;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
img {
  max-width: 100%;
  display: block;
}
#top {
  position: absolute;
  top: 2%;
  width: 100%;
  z-index: 10;
  text-align: center;
  color: #fff;
}
#top li {
  width: 33%;
  float: left;
}
.global {
  background: linear-gradient(to right, rgb(147, 59, 255), rgb(253, 110, 244));
  overflow: hidden;
  width: 500px;
  height: 500px;
  position: relative;
  margin: auto;
}
.global-promotion {
  position: absolute;
  width: 100%;
  z-index: 4;
  top: 30%;
  left: 0;
}
.global-promotion .swiper-slide {
  box-sizing: border-box;
  padding-left: 3.5%;
}
.global-promotion .swiper-slide img {
  border-radius: 2.5vh;
  width: 100%;
}
.global-mask {
  position: absolute;
  bottom: -20%;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: url(./../../../assets/banner/taobaoworld/mask.png) no-repeat left bottom / 100% auto;
}
.global-mask img {
  margin-top: 81%;
}
.global-circle {
  height: 100%;
  z-index: 2;
  position: relative;
}
.global-circle ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.global-circle ul li {
  position: absolute;
  left: 37%;
  width: 26%;
  height: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.global-circle ul .hk {
  background-image: url(./../../../assets/banner/taobaoworld/hk.png);
  transform: rotate(0deg);
}
.global-circle ul .au {
  background-image: url(./../../../assets/banner/taobaoworld/au.png);
  transform: rotate(45deg);
}
.global-circle ul .en {
  background-image: url(./../../../assets/banner/taobaoworld/en.png);
  transform: rotate(90deg);
}
.global-circle ul .jp {
  background-image: url(./../../../assets/banner/taobaoworld/jp.png);
  transform: rotate(135deg);
}
.global-circle ul .us {
  background-image: url(./../../../assets/banner/taobaoworld/us.png);
  transform: rotate(180deg);
}
.global-bg {
  position: absolute;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(./../../../assets/banner/taobaoworld/bg.png) no-repeat left
    bottom/100% auto;
}
#bottom {
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f2f2f2;
}
</style>
