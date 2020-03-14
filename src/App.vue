<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/ic_tabbar_home_select.png" alt />
        <img slot="item-icon-active" src="~assets/img/ic_tabbar_home_select (1).png" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="~assets/img/tabbar.png" alt />
        <img slot="item-icon-active" src="~assets/img/tabbar (1).png" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/icon_tabbar_shoppingup.png" alt />
        <img slot="item-icon-active" src="~assets/img/icon_tabbar_shoppingup (1).png" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/file">
        <img slot="item-icon" src="~assets/img/icon_tabbar_myup.png" alt />
        <img slot="item-icon-active" src="~assets/img/icon_tabbar_myup (1).png" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar";
import TabBarItem from "components/common/tabbaritem";
export default {
  name: "App",
  components: { TabBar, TabBarItem }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
