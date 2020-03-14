<template>
  <div id="details">
    <cildrennav></cildrennav>
    <srcoll class="content">
      <div>
        <div class="detailsimg">
          <img :src="detail.detail.image" alt />
        </div>
        <div>
          <div>{{detail.detail.title}}</div>
          <div>{{detail.detail.originPrice}}</div>
        </div>
        <div v-for="item in detail2" :key="item.index" class="detail2img">
          <img :src="item.photo.url" alt />
        </div>
      </div>
    </srcoll>
    <bottombar class="bottombar" @tjshop="jrshop"></bottombar>
  </div>
</template>

<script>
import Cildrennav from "./cildrennav/cildrennav";
import bottombar from "../bottombar/bottombar";
import Srcoll from "../../components/common/Srcoll/srcoll";
import { getdetail } from "network/dlieat";

export default {
  name: "Details",
  components: {
    Cildrennav,
    Srcoll,
    bottombar
  },
  data() {
    return {
      id: null,
      detail: [],
      detail2: []
    };
  },
  created() {
    // 1.保存传入的id
    this.id = this.$route.params.id;
    // 根据id请求详情数据
    getdetail(this.id).then(res => {
      console.log(res.data.detail);
      this.detail = res.data;
      this.detail2 = res.data.detail.descContentList;
    });
  },
  methods: {
    jrshop() {
      const product = {};
      product.image = this.detail.detail.image;
      product.title = this.detail.detail.title;
      product.price = this.detail.detail.originPrice;
      product.id = this.id;
      product.count = 1;

      // console.log(this.detail.detail.image);
      // console.log(this.detail.detail.title);
      // console.log(this.detail.detail.originPrice);
      // console.log(this.id);
      console.log(product);
      this.$store.commit("addgwc", product);
    }
  }
};
</script>

<style scoped>
#details {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detailsimg img {
  height: 230px;
  width: 100%;
}
.detail2img img {
  width: 100%;
}
.content {
  position: relative;
  /* top: 44px; */

  /* height: calc(100% - 103px); */
  height: 600px;
  overflow: hidden;
}
.bottombar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>