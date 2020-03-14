<template>
  <div class="GoodsItem" @click="detailsclick">
    <div class="goodsbox">
      <div class="image">
        <img :src="goodsitem.image" alt />
      </div>
      <div class="title">{{goodsitem.title}}</div>
      <div class="price">{{goodsitem.tbOriginPrice}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return Object;
      }
    }
  },
  methods: {
    detailsclick() {
      this.$router.push("/details/" + this.goodsitem.id);
    }
  }
};
</script>

<style>
.GoodsItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.image img {
  width: 100%;
  height: 250px;
  border-radius: 5px;
}
.price {
  color: red;
}
</style>