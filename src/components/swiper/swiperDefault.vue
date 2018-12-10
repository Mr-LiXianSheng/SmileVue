<template>
  <div class="">
    <swiper>
      <swiper-slide class="swiper-slide" v-for="(itme,index) in slide" :key="index">
        Slide{{itme}}
      </swiper-slide>
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
        slide: [1, 2, 3, 4, 5, 6]
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
    text-align: center;
    padding-top: 3rem;
    border-bottom: 1px solid #ccc;
  }
</style>
