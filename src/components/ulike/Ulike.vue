<!--  -->
<template>
    <div class="ulike">
        <div class="top">
            <span class="title"><strong>猜你喜欢</strong></span>
            <span>
                换一换  
                <i class="iconfont icon-huanyipi"></i>
            </span>
        </div>
        <div class="bottom">
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
            <div class="item">
                <img src="http://sph-list.atguigu.cn/img/like_02.png" alt="">
                <div class="desc">
                    <div class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</div>
                    <div class="price">定金：¥100.00</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Ulike",
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
.ulike{
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 1200px;
    .top{
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 24px;
        }
        .icon-huanyipi{
            margin-left: 10px;
        }
    }
    .bottom{
        border: red solid 1px;
        // height: 200px;
        display: flex;
        justify-content: space-evenly;
        .item{
            img{

            }
            .desc{
                margin: 10px;
                border-right: red solid 1px;
                .name{
                    font-size: 12px;
                    margin: 0 10px 10px 0;
                }
                .price{
                    color: red;
                }
            }
        }
        &>div:last-child div:last-child{
            // color: aqua;
            border: none;
        }
    }
}
</style>