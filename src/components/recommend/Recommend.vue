<!--  -->
<template>
    <div class="recommend">
        <div class="title">
            <i class="iconfont icon-007-clock"></i>
            <h3>今日推荐</h3>
        </div>
        <div>
            <img src="http://sph-list.atguigu.cn/img/today01.png" alt="">
        </div>
        <div>
            <img src="http://sph-list.atguigu.cn/img/today02.png" alt="">
        </div>
        <div>
            <img src="http://sph-list.atguigu.cn/img/today03.png" alt="">
        </div>
        <div>
            <img src="http://sph-list.atguigu.cn/img/today04.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Recommend",
    data () {
    return {
        };
  },

    components: {},

    computed: {},

    mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
.recommend{
    width: 1200px;
    margin: 5px auto;
    // background-color: #e8e8e8;
    display: flex;
    height: 163px;
    // line-height: 164px;
    text-align: center;
    &>div:first-child{
        width: 200px;
        color: #fff;
        font-size: 22px;
        padding-top: 15px;
        background-color: #524847;
        .iconfont{
            font-size: 36px;
            margin-bottom: 20px;
        }
        h3{
            margin-top: 20px;
        }
    }
    &>div:nth-child(n+1){
        // width: 200px;
        flex: 1;
    }
}
</style>