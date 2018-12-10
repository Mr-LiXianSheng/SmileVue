<template>
  <div>
    <!-- head -->
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" alt width="68%" class="location-icon">
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>
        <van-col span="5">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>
      </van-row>
    </div>

    <!-- swipwer area -->
    <div class="swiper-area">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in bannerImages" :key="index">
          <img v-lazy="image.image" width="100%">
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- type bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" alt width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>

    <!-- adbanner area -->
    <div class="adbanner-area">
      <img v-lazy="adBanner" width="100%">
    </div>

    <!-- Recommend goods area -->
    <div class="recommend-area">
      <div class="recommend-title">商品推荐</div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%"/>
              <div>{{item.goodsName}}</div>
              <div class="price">￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- 楼层1 -->
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"/>
    <!-- 楼层2 -->
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"/>
    <!-- 楼层3 -->
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"/>

    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">---- 热卖商品 ----</div>
      <div class="hot-goods">
        <van-list>
          <van-row>
            <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
              <goodsInfo :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"/>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>

  </div>
</template>

<script>

  import 'swiper/dist/css/swiper.css' // require styles
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import floorComponent from '../component/floorComponent'
  import {toMoney} from '@/filter/moneyFilter.js'
  import goodsInfo from '../component/goodsInfoComponent'
  import url from '@/serviceAPI.config.js'

  export default {
    name: 'ShoppingMall',
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
        },
        msg: "Shopping Mall",
        locationIcon: require("../../assets/images/location.png"),
        bannerImages: [], // banner
        category: [], // 导航分类
        adBanner: "", // 广告横幅
        recommendGoods: [], // 推荐商品
        floor1: [], //楼层1的数据
        floor2: [], //楼层2的数据
        floor3: [], //楼层3的数据
        floorName: {}, //楼层名称
        hotGoods: [] //热卖商品
      };
    },

    // 过滤器
    filters: {
      moneyFilter(money) {
        return toMoney(money)
      }
    },

    // 创建模板组件
    components: {
      swiper,
      swiperSlide,
      floorComponent,
      goodsInfo
    },

    // 在模板渲染成html或者模板编译进路由前调用created
    created() {
      // 通过axios.get请求数据
      this.axios
        .get(url.getShoppingMallInfo)
        // 请求成功
        .then(response => {
          // console.log(response);
          // 判断如果response.status==200说明请求成功
          if (response.status == 200) {
            // 把请求成功的数据存放在定义的数据里面
            this.category = response.data.data.category;
            this.adBanner = response.data.data.advertesPicture.PICTURE_ADDRESS;
            this.bannerImages = response.data.data.slides;
            this.recommendGoods = response.data.data.recommend;
            this.floor1 = response.data.data.floor1;
            this.floor2 = response.data.data.floor2;
            this.floor3 = response.data.data.floor3;
            this.floorName = response.data.data.floorName;
            this.hotGoods = response.data.data.hotGoods;
          }
        })
        // 请求错误
        .catch(error => {
          console.log(error);
        });
    }
  };
</script>

<style scoped lang="less">

  .hot-area {
    text-align: center;
    font-size: 14px;
    height: 1.8rem;
    line-height: 1.8rem;
    color: #E20318;
  }

  .search-bar {
    position: fixed;
    z-index: 99;
    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;
    overflow: hidden;

    .location-icon {
      padding: 0 0 0 0.3rem;
    }

    .search-input {
      width: 100%;
      height: 1.3rem;
      border: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #fff !important;
      background-color: #e5017d;
      color: #fff;
      outline: none;
    }

    .search-button {
      margin-left: 0.8rem;
    }
  }

  .swiper-area {
    padding-top: 2.2rem;
    max-height: 13rem;
    overflow: hidden;
    clear: both; //清除左右两边浮动

    .van-swipe {
      height: 8.9rem;
    }
  }

  .type-bar {
    background-color: #fff;
    padding: 0 0.3rem 0.3rem 0.3rem;
    border-right: 0.3rem;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    div:first-child {
      width: 97%;
    }

    div {
      padding: 0.3rem;
      font-size: 12px;
      text-align: center;
    }
  }

  .adbanner-area {
    padding: .5rem 0;
  }

  .recommend-area {
    background-color: #fff;

    .recommend-title {
      border-bottom: 1px solid #eee;
      font-size: 14px;
      padding: .5rem;
      color: #e5017d;
    }
  }

  .recommend-body {
    border-bottom: 1px solid #eee;

    .recommend-item {
      padding-top: .8rem;
      position: relative;
      width: 100%;
      height: 10.5rem;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;

      .price {
        position: absolute;
        padding: .4rem 0;
        bottom: 0;
        width: 100%;
        color: #26A96D;
        font-size: 14px;
        text-align: center;
      }
    }
  }
</style>
