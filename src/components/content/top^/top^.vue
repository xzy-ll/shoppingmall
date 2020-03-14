<template>
  <div id="top">
    <img src="../../../assets/img/top^.png" alt />
  </div>
</template>

<script>
export default {
  name: "top",
  // methods:{
  //   backclick(){
  //     // console.log('dddd');
  //     this.$emit('backclick')
  //   }
  // }
};
</script>

<style scoped>
#top {
  position: fixed;
  bottom: 70px;
  right: 10px;

  width: 50px;
  height: 50px;
  border-radius: 25px;
  z-index: 99;
}
#top img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255);
}
</style>
