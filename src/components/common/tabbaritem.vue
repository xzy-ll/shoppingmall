<template>
  <div class="tab-bar-item" @click="itemCilck">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{ative:isActive}"> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type:String,
      default:'#439efb'
    }
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {
    isActive() {
      //  /home -> item1(/home)=true
      //  /home -> item1(/category)=false
      //  /home -> item1(/cart)=false
      //  /home -> item1(/profile)=false
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    itemCilck() {
      this.$router.push(this.path);
      console.log(this.path);
      // console.log(this.$router);
      
    }
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  margin: 5px 0;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
}
/* .ative {
  color: #439efb;
} */
</style>