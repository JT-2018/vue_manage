<template>
    <div class="eventLoop">
        <h2 style="margin: 10px">事件循环</h2>
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>> -->
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
                <template slot="title">
                    <span class="text_indent20px">浏览器的进程模型</span>
                    <span><i class="header-icon el-icon-info"></i></span>
                </template>
                <div>
                    <ul>
                        <li><span class="text_indent20px"><h3>何为进程？</h3></span></li>
                        <li><span class="text_indent20px"></span></li>
                        <li><span class="text_indent20px"></span></li>
                    </ul>
                </div>
            </el-collapse-item>
            <el-collapse-item title="渲染主线程是如何工作的？" class="text_indent20px"  name="2">
                <div class="text_indent20px">1，</div>
                <div class="text_indent20px">2，</div>
            </el-collapse-item>
            <el-collapse-item title="若干解释" class="text_indent20px"  name="3">
                <div class="text_indent20px"><h3>何为异步？</h3></div>
                <div class="text_indent20px"><h3>JS为何会阻碍渲染？</h3></div>
                <div class="text_indent20px"><h3>任务有优先级吗？</h3></div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    // name: "",
    components: {},
    props: {},
    data() {
      return {
        activeNames: ['1']
      };
    },
    watch: {},
    computed: {},
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(value) {
        console.log(value,this.activeNames);
      },
    },
    created() { },
    mounted() { }
};
</script>
<style lang="less" scoped>
.eventLoop {
    width: calc(100% - 200px);
    margin: 20px;
    .text_indent20px {
        text-indent: 20px;
    }
    /deep/ .el-collapse-item__header {
        font-size: 1em;
        font-weight: bold;
        // color: red;
    }
}
</style>