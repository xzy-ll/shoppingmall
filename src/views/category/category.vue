<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{$store.state.shopdata.length}})</div>
    </nav-bar>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>
    <div style="margin: 15px 0;">{{'总计'+num}}</div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">
        <div class="flex">
          <div class="divimg">
            <img :src="city.image" alt />
          </div>
          <div class="center">
            <div class="title">{{city.title}}</div>
            <div class="price">{{city.price+'￥'}}</div>
            <div class="count">{{'x'+city.count}}</div>
          </div>
        </div>
      </el-checkbox>
    </el-checkbox-group>

    <!-- <div class="flex" v-for="item in $store.state.shopdata" :key="item.id">
      <div class="divimg">
        <img :src="item.image" alt />
      </div>
      <div class="center">
        <div class="title">{{item.title}}</div>
        <div class="price">{{item.price+'￥'}}</div>
        <div class="count">{{'x'+item.count}}</div>
      </div>
    </div>-->

    <!-- <div>{{}}</div> -->
  </div>
</template>

<script>
import NavBar from "components/common/navbar";
// const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Category",
  components: {
    NavBar
  },
  data() {
    return {
      checkAll: false,
      checkedCities: [],
      cities: this.$store.state.shopdata,
      isIndeterminate: true,
      num: 0
    };
  },
  created() {
    console.log(this.$store.state.shopdata);
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.$store.state.shopdata : [];
      this.isIndeterminate = false;
      if (val === true) {
        for (let i = 0; i < this.checkedCities.length; i++) {
          this.num +=
            parseFloat(this.checkedCities[i].price) *
            this.checkedCities[i].count;
        }
      } else {
        this.num = 0;
      }
    },
    handleCheckedCitiesChange(value) {
      this.num = 0;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
      // close.log(checkedCount[0].price);
      if (value.length !== 0) {
        for (let i = 0; i < value.length; i++) {
          this.num += parseFloat(value[i].price) * value[i].count;
        }
      } else {
        this.num = 0;
      }

      // return this.$store.state.shopdata
      //   .filter(item => {
      //     return item.checked;
      //   })
      //   .reduce((previousValue, item) => {
      //     return previousValue + item.price * item.count;
      //   });
    }
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: #439efb;
  color: #fff;
}
.divimg {
  width: 100px;
  height: 100px;
}
.divimg img {
  width: 100px;
  height: 100px;
}
.flex {
  display: flex;
  flex-direction: row;
  padding: 10px;
}
.center {
  /* width: calc(100% - 248px); */
  width: 200px;
}
.count {
  padding: 10px;
  text-align: left;
}
.price {
  color: red;
  padding: 10px;
  text-align: left;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.el-checkbox {
  display: flex;
  align-items: center;
  padding: 5px 0 5px 10px;
}
</style>

