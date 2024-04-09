<template>
     <div class="goods">
          <div class="search">
               <el-input v-model="input" placeholder="请输入内容"></el-input>
               <el-button style="margin-left: 32px">默认按钮</el-button>
               <el-button type="primary">主要按钮</el-button>
          </div>
          <div class="wraper">
               <el-table :data="tableData" style="width: 100%" border>
                    <el-table-column prop="date" label="日期" width="180">
                    </el-table-column>
                    <el-table-column prop="name" label="姓名" width="180">
                    </el-table-column>
                    <el-table-column prop="address" label="地址">
                    </el-table-column>
               </el-table>
          </div>
     </div>
</template>

<script>
export default {
     name: "",
     components: {},
     props: {},
     data() {
          return {
               input: '',
               tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
               }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
               }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
               }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
               }]
          };
     },
     watch: {},
     computed: {},
     methods: {},
     created() { },
     mounted() { }
};
</script>
<style scoped lang="less">
.goods {
     margin: 20px;
     .search {
          display: flex;
     }
     .wraper {
          margin-top: 28px;
     }
}
</style>