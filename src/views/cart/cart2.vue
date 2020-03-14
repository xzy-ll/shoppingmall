<template>
  <div id="Cart2">
    <div v-for="item in arr3[this.currenttype].list" :key="item.index" class="cart2img">
      <img :src="item.image" alt />
      <div class="title">{{item.title}}</div>
      <div class="price">{{item.price}}</div>
    </div>
  </div>
</template>

<script>
import { getcart13 } from "network/cart";
export default {
  name: "Cart2",
  data() {
    return {
      id: null,
      arr3: {
        "2072": { page: 0, list: [] },
        "2077": { page: 0, list: [] },
        "1696": { page: 0, list: [] },
        "1690": { page: 0, list: [] },
        "2078": { page: 0, list: [] },
        "1786": { page: 0, list: [] },
        "1691": { page: 0, list: [] },
        "1694": { page: 0, list: [] },
        "1823": { page: 0, list: [] },
        "1692": { page: 0, list: [] },
        "1693": { page: 0, list: [] },
        "3183": { page: 0, list: [] }
      },
      currenttype: "3183",
      pages: "column"
    };
  },
  created() {
    this.id = parseInt(this.$route.params.id);
    // console.log(typeof(this.id));
    switch (this.id) {
      case 1356:
        this.currenttype = "2072";
        this.pages = "category";
        getcart13(this.pages, this.currenttype).then(res => {
          console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 5651:
        this.currenttype = "2077";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 165:
        this.currenttype = "1696";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 2143:
        this.currenttype = "1690";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 2592:
        this.currenttype = "2078";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 703:
        this.currenttype = "1786";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 1886:
        this.currenttype = "1691";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 21:
        this.currenttype = "1694";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 1454:
        this.currenttype = "1823";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 1096:
        this.currenttype = "1692";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 1884:
        this.currenttype = "1693";
        this.pages = "category";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
      case 178:
        this.currenttype = "3183";
        this.pages = "column";
         getcart13(this.pages, this.currenttype).then(res => {
          // console.log(res);
          this.arr3[this.currenttype].list.push(...res.data.items.list);
        });
        break;
    }
  },
  mounted() {},
  methods: {
    get() {}
  }
};
</script>

<style scoped>
#Cart2{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cart2img{
  width: 48%;
}
.cart2img img {
  width: 100%;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price {
  color: red;
}
</style>