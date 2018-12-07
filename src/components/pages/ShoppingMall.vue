<template>
  <div>
    <div class="search-bar">
      <van-row>

        <van-col span="3">
          <img :src="locationIcon" alt="" width="68%" class="location-icon">
        </van-col>

        <van-col span="16">
          <input type="text" class="search-input">
        </van-col>

        <van-col span="5">
          <van-button size="mini" class="search-button">查找</van-button>
        </van-col>

      </van-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "Shopping Mall",
        locationIcon: require("../../assets/images/location.png")
      };
    }
  };
</script>

<style scoped lang="less">
  .search-bar {

    height: 2.2rem;
    background-color: #e5017d;
    line-height: 2.2rem;

    .location-icon{
      padding: .2rem 0 0 .3rem;
    }

    .search-input{
      width: 100%;
      height: 1.3rem;
      border: 0;
      border-left: 0;
      border-right: 0;
      border-bottom: 1px solid #fff !important;
      background-color: #e5017d;
      color: #fff;
      outline:none;
    }

    .search-button{
      margin-left: .8rem;
    }

  }
</style>
