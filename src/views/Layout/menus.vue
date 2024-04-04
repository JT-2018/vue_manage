<template>
      <div class="menu">
            <el-aside width="200px" style="background-color: #002140">
                  <el-menu 
                        :default-openeds="['/order']" 
                        background-color="#002140" 
                        router 
                        :collapse="isCollapse"
                  >
                        <el-menu-item index="/">
                              <i class="el-icon-menu"></i>
                              <span slot="title" class="fontcolor">首页</span>
                        </el-menu-item>
                        <el-menu-item index="/goods">
                              <i class="el-icon-s-management"></i>
                              <span slot="title" class="fontcolor">商品管理</span>
                        </el-menu-item>
                        <el-menu-item index="/params">
                              <i class="el-icon-setting"></i>
                              <span slot="title" class="fontcolor">参数配置</span>
                        </el-menu-item>
                        <el-menu-item index="/weekend">
                              <i class="el-icon-menu"></i>
                              <span slot="title" class="fontcolor">欢快周末</span>
                        </el-menu-item>
                        <el-submenu index="/order">
                              <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span class="fontcolor">订单信息</span>
                              </template>
                              <el-menu-item-group>
                                    <el-menu-item index="/orderList" class="fontcolor">订单管理</el-menu-item>
                                    <el-menu-item index="/orderBack" class="fontcolor">退货管理</el-menu-item>
                              </el-menu-item-group>
                        </el-submenu>
                  </el-menu>
            </el-aside>
      </div>
</template>

<script>

export default {
      data(){
            return {
                  isCollapse: false
            }
      }
}
</script>

<style lang="less" scoped>
.menu{
      .fontcolor{
            color: #fff;
      }
}
</style>