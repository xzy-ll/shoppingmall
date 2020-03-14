<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tabels class="tabels" :tlites="arr" @btnclick="btnclick" v-show="isshowtab"></tabels>
    <srcoll
      class="content"
      ref="srcoll"
      :probetypes="3"
      @scroll="scrollbackclicktop"
      :pull-up-loads="true"
      @pullingUp="loadmore"
    >
      <sipwer class="sipwer">
        <sipwer-item v-for="item in banner" :key="item.id">
          <img :src="item.imageUrl" alt />
        </sipwer-item>
      </sipwer>
      <min-banner :recommends="recommend" class="min-banner"></min-banner>
      <home-image></home-image>
      <tabels :tlites="arr" @btnclick="btnclick"></tabels>
      <goods :goodslist="showgoods"></goods>
    </srcoll>
    <top @click.native="backclick" v-show="isshow"></top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar";
import Srcoll from "../../components/common/Srcoll/srcoll";

import Sipwer from "../../components/common/Siwper/siwper";
import SipwerItem from "../../components/common/Siwper/siwperitem";

import MinBanner from "./homeconenter/minbanner";
import HomeImage from "./homeimage/homeiage";
import goods from "components/content/goods/goodslist";


import Tabels from "../../components/content/tabel/tabel";
import Top from "../../components/content/top^/top^";

import { gethomemutlidata, gethomegoods } from "network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Sipwer,
    SipwerItem,
    MinBanner,
    HomeImage,
    Tabels,
    goods,
    Srcoll,
    Top
  },
  data() {
    return {
      banner: [],
      recommend: [],
      arr: ["流行", "新款", "精选"],
      goods: {
        "1": { page: 0, list: [] },
        "4": { page: 0, list: [] },
        "3": { page: 0, list: [] }
      },
      currenttype: "1",
      isshow: false,
      isshowtab: false
    };
  },
  // 挂载在dom节点是执行的created
  created() {
    // 多个数据
    this.gethomemutlidata();
    // 商品数据
    this.gethomegoods(1);
    this.gethomegoods(4);
    this.gethomegoods(3);
  },
  computed: {
    showgoods() {
      return this.goods[this.currenttype].list;
    }
  },
  methods: {
    // 方法
    btnclick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currenttype = "1";
          break;
        case 1:
          this.currenttype = "4";
          break;
        case 2:
          this.currenttype = "3";
          break;
      }
    },
    backclick() {
      console.log();
      this.$refs.srcoll.srcoll.scrollTo(0, 0);
    },
    // 监听滚动
    scrollbackclicktop(position) {
      // console.log(position);
      this.isshow = -position.y > 1000;
      // this.isshowtab = -position.y > 597;
      // 决定tabels是否吸顶
      if (-position.y > 593) {
        this.isshowtab = true;
      } else if (-position.y < 593) {
        this.isshowtab = false;
      }
    },
    // 上拉加载
    loadmore() {
      // console.log("上拉加载");
      this.gethomegoods(this.currenttype);
    },
    // 网络请求
    gethomemutlidata() {
      gethomemutlidata()
        .then(res => {
          // console.log(res.data.banners);
          // console.log(res.data.banner);
          // this.banner = res.data.banners;
          this.banner = res.data.banners;
          this.recommend = res.data.topList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    gethomegoods(id) {
      const page = this.goods[id].page;
      gethomegoods(id, page).then(res => {
        // console.log(res.data.list);
        this.goods[id].list.push(...res.data.list);
        this.goods[id].page += 20;
        this.$refs.srcoll.srcoll.finishPullUp();
      });
    }
  }
};
</script>

<style scoped>
#home {
  position: relative;
}
.home-nav {
  background-color: #439efb;
  color: white;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.tabels {
  /* position: sticky; */
  position: relative;
  /* top: 44px; */
  background-color: #fff;
  z-index: 99;
}
.content {
  position: relative;
  /* top: 44px; */

  /* height: calc(100% - 103px); */
  height: 555px;
  overflow: hidden;
}
</style>