<template>
     <div class="content">
          <div class="header">
               <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                         <i class="el-icon-setting" style="margin-right: 15px"></i>
                         <el-dropdown-menu slot="dropdown">
                              <el-dropdown-item>查看</el-dropdown-item>
                              <el-dropdown-item>新增</el-dropdown-item>
                              <el-dropdown-item>删除</el-dropdown-item>
                         </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
               </el-header>
          </div>
          <div class="box">
               <router-view />
          </div>
     </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
.content {
     width: 100%;
     height: 100%;
     position: relative;
     .header {
          width: 100%;
          height: 48px;
          background-color: skyblue;
          position: sticky;
          top: 0;
     }

     .box {
          width: 100%;
          height: 1200px;
     }
}
</style>