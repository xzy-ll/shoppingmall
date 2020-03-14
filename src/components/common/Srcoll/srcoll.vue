<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bsrcoll from "better-scroll";
export default {
  name: "srcoll",
  props: {
    probetypes: {
      type: Number,
      default: 0
    },
    pullUpLoads: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      srcoll: null,
      meassage: "hhh"
    };
  },
  mounted() {
    this.srcoll = new Bsrcoll(this.$refs.wrapper, {
      click: true,
      // 实时监听滚动
      probeType: this.probetypes,
      pullUpLoad: this.pullUpLoads
    });

    this.srcoll.scrollTo(1, 1);
    // 监听滚动
    this.srcoll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    // 监听上拉加载更多
    this.srcoll.on("pullingUp", () => {
      this.$emit("pullingUp")
      // console.log("上拉加载跟多");
    });
    // console.log(this.pullUpLoads);
    this.srcoll.finishPullUp()
  }
};
</script>

<style scoped>
</style>