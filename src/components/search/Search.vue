<!--  -->
<template>
    <div class="search">
        <img src="./images/logo.png" alt="">
        <div class="searchInput">
            <el-input placeholder="请输入内容" class="input-with-select">
                <el-button slot="append" class="searchBtn">搜索</el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: "Search",
    data () {
    return {
        };
  },

    components: {},

    // computed: {},

    // mounted() {},

    methods: {}
}

</script>
<style lang='less' scoped>
.search{
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: 108px;
    line-height: 108px;
    margin: 0 auto;
    img{
        width: 175px;
        height: 56px;
        margin: 30px 0 36px 60px;
    }
    .searchInput{
        .input-with-select{
            width: 500px;
            border: #e61f1a solid 3px;
            .searchBtn{
                background-color: #e61f1a;
                color: aliceblue;
                font-size: 16px;
                width: 70px;
                border: #e61f1a solid 2px;
            }
        }
    }
}
/deep/.el-input__inner{
        border: none;
}
/deep/.el-input-group__append,.el-button{
        border: none;
}
/deep/.el-button{
    border: none;
}
</style>