<template>
    <div class="layout">
         <!-- 左侧导航区 -->
         <MyMenu :isCollapse="isCollapse" @toggleMenu="toggleMenu" class="menu"/>
         <!-- 右侧导航 区 -->
         <MyContent :class="{isActive: isCollapse}" :isCollapse="isCollapse" class="content"/>
    </div>
 </template>
   
 <script>
import MyMenu from './menus.vue'
import MyContent from './content.vue'

export default {
//   name: 'app',
  components: {
    MyMenu,
    MyContent
  },
  data() {
    return {
        isCollapse: false
    }
  },
  methods: {
    toggleMenu() {
          this.isCollapse = !this.isCollapse
    }
  }
}
 </script>
   
 <style lang="less" scoped>
 .layout{
    // display: flex;
    .menu {
        // width: 200px;
        min-height: 100vh;
        background: #002140;
        color: white;
        position: fixed;
        top:0;
        bottom: 0;
        // transition: 1s;
    }
    .content{
      width: calc(100% - 200px);
      margin-left: 200px;
      background-color: #f5f5f5;
    }
    .isActive {
      width: calc(100% - 64px);
      margin-left: 64px;
    }
 }
 </style>