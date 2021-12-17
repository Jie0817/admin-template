<template>
  <div class="container">
    <swiper
      :watchSlidesProgress="true"
      :resistanceRatio="0"
      @swiper="onSwiper"
      @resize="onResize"
      @setTranslate="onSetTranslate"
      @setTransition="onSetTransition"
    >
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg2.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg3.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg1.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg4.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg2.png" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img class="swiper-item" src="@/assets/banner/mayi/pg3.png" alt="" />
        </div>
      </swiper-slide>
    </swiper>
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
    const onSwiper = (swiper: any) => {
      let slides = swiper.slides;
      for (let i = 0; i < slides.length; i++) {
        let slide = slides.eq(i);
        slide.css("zIndex", 100 - i); //设置slide的z-index层级
      }
    };

    const onResize = (swiper: any) => {
      swiper.update();
    };

    const onSetTranslate = (swiper: any, translate: any) => {
      let slides = swiper.slides;
      let offsetAfter = swiper.width * 0.95; //每个slide的位移值
      for (let i = 0; i < slides.length; i++) {
        let slide = slides.eq(i);
        let progress = slides[i].progress;

        if (progress <= 0) {
          //右边slide位移
          slide.transform(
            "translate3d(" +
              progress * offsetAfter +
              "px, 0, 0) scale(" +
              (1 - Math.abs(progress) / 20) +
              ")"
          );
          slide.css("opacity", progress + 3); //最右边slide透明
        }

        if (progress > 0) {
          slide.transform("rotate(" + -progress * 5 + "deg)"); //左边slide旋转
          slide.css("opacity", 1 - progress); //左边slide透明
        }
      }
    };

    const onSetTransition = (swiper: any, transition: any) => {
      for (var i = 0; i < swiper.slides.length; i++) {
        var slide = swiper.slides.eq(i);
        slide.transition(transition);
      }
    };
    return {
      modules: [Pagination],
      onSwiper,
      onResize,
      onSetTranslate,
      onSetTransition,
    };
  },
});
</script>
<style scoped lang="scss">
.container {
  width: 500px;
  margin: auto;
}
.swiper::v-deep {
  width: 100%;
}
.swiper-slide {
  text-align: center;
}
.swiper-slide div {
  width: 86%;
  border-radius: 7px;
  margin: 10px 0 10px 4%;
}
.swiper-slide div img {
  width: 100%;
  display: block;
  border-radius: 7px;
}
</style>
