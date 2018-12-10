<template>
  <div class="">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(itme,index) in slide" :key="index">
        Slide{{itme}}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    name: 'swiperDefault',
    data() {
      return {
        slide: [1, 2, 3, 4, 5, 6],
        swiperOption: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style scoped lang="less">
  .swiper-slide {
    height: 4rem;
    line-height: 7rem;
    text-align: center;
  }

  .swiper {
    height: 7rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
</style>
