<!--  -->
<template>
  <div class="ranklist">
    <div class="title">
        <p>
            <i class="iconfont icon-hot"></i>
            <span>热卖排行</span>
        </p>
        <p>
            <i class="iconfont icon-hot"></i>
            <span>特价排行</span>
        </p>
        <p>
            <i class="iconfont icon-hot"></i>
            <span>新品排行</span>
        </p>
    </div>
    <div class="warp">
        <div class="item">
            <img src="http://sph-list.atguigu.cn/img/1.jpg" alt="">
            <p>
                <span class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</span>
                <span class="price">定金：¥100.00</span>
            </p>
        </div>
        <div class="item">
            <img src="http://sph-list.atguigu.cn/img/1.jpg" alt="">
            <p>
                <span class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</span>
                <span class="price">定金：¥100.00</span>
            </p>
        </div>
        <div class="item">
            <img src="http://sph-list.atguigu.cn/img/1.jpg" alt="">
            <p>
                <span class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</span>
                <span class="price">定金：¥100.00</span>
            </p>
        </div>
        <div class="item">
            <img src="http://sph-list.atguigu.cn/img/1.jpg" alt="">
            <p>
                <span class="name">【官网价直降1100】Apple iPhone 8 Plus 256GB 银色 移动联通电信4G手机</span>
                <span class="price">定金：¥100.00</span>
            </p>
        </div>
    </div>

    <!-- <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div> -->
  </div>
</template>

<script>
export default {
  name: "Ranklist",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {},
};
</script>
<style lang='less' scoped>
.ranklist {
    width: 1200px;
    margin: 10px auto;
    .title{
        display: flex;
        margin: 10px auto;
        justify-content: center;
        p{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 12px;
            .iconfont{
                font-size: 24px;
            }
            span{
                font-size: 16px;
            }
        }
    }
    .warp{
        display: flex;
        justify-content: space-between;
        .item{
            height: 400px;
            border: red solid 1px;
            // flex-basis: 25%;
            width: 285px;
            // margin: 0 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            img{
                padding: 20px;
            }
            p{
                display: flex;
                flex-direction: column;
                background-color: #f8f8f8;
                padding: 10px;
                .name{
                    font-size: 14px;
                    margin-bottom: 10px;
                }
                .price{
                    color: red;
                    font-size: 22px;
                }
            }
        }
    }
}
</style>