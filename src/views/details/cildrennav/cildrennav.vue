<template>
  <div>
    <nav-bar>
      <div slot="left" class="zuoimg" @click="zuo">
        <img src="../../../assets/img/zuo.png" alt />
      </div>
      <div slot="center" class="disflex">
        <div
          v-for="(item,index) in title"
          :key="item.index"
          @click="titleclick(index)"
          class="titlestyle"
          :class="{ative: currenttype === index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar";
export default {
  name: "cildrennav",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["产品", "参数", "评论", "推荐"],
      currenttype: 0
    };
  },
  methods: {
    titleclick(index) {
      // console.log(index);
    
      this.currenttype = index;
    },
    zuo() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.disflex {
  display: flex;
}
.titlestyle {
  flex: 1;
}
.ative {
  color: #439efb;
}
.zuoimg {
  padding: 7px 0 0 5px;
}
.zuoimg img {
  height: 25px;
}
</style>