<template>
      <div class="menu">
            <div class="menuBox">
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
                        <el-menu-item index="/webnotes">
                              <i class="el-icon-edit"></i>
                              <span slot="title" class="fontcolor">我的WEB</span>
                        </el-menu-item>
                  </el-menu>
                  <div class="footer" @click="handleClick">
                        <div class="icon" v-show="!isCollapse"><i class="el-icon-back"></i></div>
                        <div class="icon" v-show="isCollapse"><i class="el-icon-right"></i></div>
                  </div>
            </div>
      </div>
</template>

<script>

export default {
      props: ['isCollapse'],
      data(){
            return {}
      },
      methods: {
            handleClick() {
                  // console.log(this.isCollapse)
                  this.$emit('toggleMenu')
            }
      }
}
</script>

<style lang="less" scoped>
.menu {
      .el-menu-vertical-demo:not(.menuBox) {
            width: 200px;
      }
      position: relative;
      .fontcolor{
            color: #fff;
      }
      .footer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 38px;
            background-color:silver;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            .icon {
                  width: 40px;
                  font-size: 24px;
            }
      }
}
</style>