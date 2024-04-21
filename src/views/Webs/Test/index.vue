<template>
    <div class="webnotes">
        <h2>我的笔记</h2>
        <el-collapse accordion>
            <el-collapse-item>
                <template slot="title">
                    组件级权限控制的最佳实践<i class="header-icon el-icon-info"></i>
                </template>
                <div>
                    <ul>
                        <li>页面级  路由守卫 侵入性</li>
                        <li>组件级  侵入性</li>
                        <li>代码级（函数级）</li>
                    </ul>
                </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    name: "",
    components: {},
    props: {},
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style lang="less" scoped>
.webnotes {
    width: calc(100% - 200px);
    margin: 20px
}
</style>