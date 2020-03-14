<template>
  <div id="cart">
    <div class="bc-bule">
      <div class="ul-cart">
        <div v-for="item in arr" :key="item.id" @click="liclick(item.id)" class="list">
          <img :src="item.imageUrl" alt />
          <div class="title">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="shopdata">
      <div v-for="item in arr2" :key="item.index" class="list2">
        <img :src="item.image" alt />
        <div class="title2">{{item.title}}</div>
        <div class="price">{{item.price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getcart } from "network/cart";
export default {
  name: "Cart",
  components: {},
  data() {
    return {
      arr: [],
      arr2: [],
     
    };
  },
  created() {
    getcart().then(res => {
      // console.log(res.data);
      this.arr = res.data.categories;
      this.arr2 = res.data.items.list;
    });
  },
  methods: {
    liclick(id) {
      this.$router.push('/cart2/'+id)
      
    }
  }
};
</script>

<style scoped>
.ul-cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.list img {
  height: 80px;
  width: 80px;
}
.title {
  text-align: center;
}
.title2 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.shopdata {
  padding: 20px 5px 0 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.list2 {
  width: 48%;
}
.list2 img {
  width: 100%;
}
.price {
  color: red;
}
</style>