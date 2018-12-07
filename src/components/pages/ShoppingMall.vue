<template>
  <div>
    <van-row class="test-row">
      <van-col span="4">span:4</van-col>
      <van-col span="16">span:16</van-col>
      <van-col span="4">span:4</van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Shopping Mall"
    };
  }
};
</script>

<style scoped lang="less">
  .test-row{
    text-align: center;
  }
</style>
