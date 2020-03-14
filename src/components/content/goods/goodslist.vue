<template>
  <div class="goodslist">
    <goods-item v-for="item in goodslist" :key="item.index" :goodsitem="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from "./goodsitem";

export default {
  name: "goodslist",
  components: {
    GoodsItem
  },
  props: {
    goodslist: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>