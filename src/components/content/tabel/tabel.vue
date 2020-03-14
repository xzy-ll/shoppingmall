<template>
  <div id="tabel">
    <div
      v-for="(item,index) in tlites"
      :key="item.index"
      class="tabel-w"
      :class="{atives: index === currentindex
      }"
      @click="btnclick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabel",
  data() {
    return {
      currentindex: 0
    };
  },
  props: {
    tlites: {
      type: Array,
      defualt() {
        return [];
      }
    }
  },
  methods: {
    btnclick(index) {
      // console.log(index);
      this.currentindex = index;
      this.$emit("btnclick", index);
    }
  }
};
</script>

<style scoped>
#tabel {
  display: flex;
  justify-content: space-around;
}
.tabel-w {
  height: 44px;
  line-height: 44px;
}
.atives span {
  color: #439efb;
  border-bottom: #439efb 1px solid;
  padding: 5px;
}
</style>