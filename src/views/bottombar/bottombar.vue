<template>
  <div id="bottombar">
    <div class="btmbar">
      <div class="kf center">客服</div>
      <div class="dp center">店铺</div>
      <div class="col-h center" @click="tjshop">加入购物车</div>
      <div class="col-r center">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottombar",
  methods: {
    tjshop(){
      this.$emit('tjshop')
    }
  }
};
</script>

<style scoped>
.btmbar {
  background-color: white;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
}
.col-h {
  background-color: rgb(230, 230, 34);
  width: 30%;
}
.col-r {
  background-color: #439efb;
  width: 30%;
}
.kf {
  width: 20%;
}
.dp {
  width: 20%;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>