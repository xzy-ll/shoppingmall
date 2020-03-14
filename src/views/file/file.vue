<template>
  <div>
    <div class="my">
      <img src="../../assets/img/y.jpg" alt />
      <div class="name">xyz</div>
    </div>
    <div>
      商城项目vue练习，用到的插件vue-routet,vuex,element-ui,axios,
      运用到最多的指令v-for,v-bind:v-on,其次：v-show，v-model，
      插槽slot,具名插槽，
      数据传递props,$emit,url传参：this.$router.push（/路径/+传递值）,接受$route.params.传递值
    </div>
  </div>
</template>

<script>
export default {
  name: "File"
};
</script>

<style scoped>
.my {
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.my img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin-top: 20px
}
.name {
  padding: 10px;
  font-size: 20px;
}
</style>