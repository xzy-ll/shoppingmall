<template>
  <div id="minbanner">
    <div class="box">
      <div class="min-banner" v-for="item in recommends" :key="item.index">
        <img :src="item.image" alt />
        <div class="kx">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "minbanner",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.box {
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 15px 0;
  border-bottom: 10px solid #eee
}

.min-banner img {
  display: flex;
  justify-content: center;
  margin: 0;
  width: 64px;
  height: 64px;
}
.kx{
  margin: 10px 0 0 0;
}
</style>