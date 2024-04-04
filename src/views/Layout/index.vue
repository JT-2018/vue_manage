<template>
    <div class="layout">
         <!-- 左侧导航区 -->
         <MyMenu class="menu"/>
         <!-- 右侧导航 区 -->
         <MyContent class="content"/>
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
  }
}
 </script>
   
 <style lang="less" scoped>
 .layout{
    // display: flex;
    .menu{
        width: 200px;
        min-height: 100vh;
        background: #002140;
        color: white;
        flex: 200px;
        position: fixed;
        top:0;
        bottom: 0;
    }
    .content{
      width: 100%;
      margin-left: 200px;
    }
 }
 </style>