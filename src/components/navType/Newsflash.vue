<!--  -->
<template>
    <div class="newsflash">
        <div class="top">
            <div class="title">
                <span>尚品汇快报</span>
                <span>
                    更多
                    <i class="iconfont icon-gengduo"></i>
                </span>
            </div>
            <div class="newlist">
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
            </div>
            <ul class="newsnav">
                <li>
                    <i class="iconfont icon-huafei"></i>
                    <span>话费</span>
                </li>
                <li>
                    <i class="iconfont icon-jipiao"></i>
                    <span>机票</span>
                </li>
                <li>
                    <i class="iconfont icon-dianyingpiao"></i>
                    <span>电影票</span>
                </li>
                <li>
                    <i class="iconfont icon-youxi"></i>
                    <span>游戏</span>
                </li>
                <li>
                    <i class="iconfont icon-baitiao"></i>
                    <span>白条</span>
                </li>
                <li>
                    <i class="iconfont icon-lipinka"></i>
                    <span>礼品卡</span>
                </li>
                <li>
                    <i class="iconfont icon-jiudian"></i>
                    <span>酒店</span>
                </li>
                <li>
                    <i class="iconfont icon-huochepiao"></i>
                    <span>火车票</span>
                </li>
                <li>
                    <i class="iconfont icon-licai"></i>
                    <span>理财</span>
                </li>
                <li>
                    <i class="iconfont icon-caipiao"></i>
                    <span>彩票</span>
                </li>
                <li>
                    <i class="iconfont icon-jingdongzhongchou"></i>
                    <span>众筹</span>
                </li>
                <li>
                    <i class="iconfont icon-jiayouzhan"></i>
                    <span>加油站</span>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <img src="./images/lol英雄联盟至尊 魔女 莫.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Newsflash",
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
.newsflash{
    margin-left: 4px;
    width: 252px;
    .top{
        border: #e0e0e0 solid 1px;
        .title{
            margin: 0 6px;
            border-bottom: #e0e0e0 solid 1px;
            height: 38px;
            line-height: 38px;
            display: flex;
            justify-content: space-between;
        }
        .newlist{
            display: flex;
            flex-direction: column;
            padding: 0 6px;
            a{
                margin: 8px 0;
            }
        }
        .newsnav{
            display: flex;
            flex-wrap: wrap;
            border-top: #e0e0e0 solid 1px;
            li{
                width: 62.5px;
                height: 62px;
                line-height: 62px;
                text-align: center;
                border-right: #e0e0e0 solid 1px;
                border-bottom: #e0e0e0 solid 1px;
                &:nth-child(4n){
                    border-right: none;
                }
                &:nth-child(n+9){
                    border-bottom: none;
                }
                // display: flex;
                // flex-direction: column;
                // align-items: center;
                .iconfont{
                    display: block;
                    color: #e61;
                    height: 30px;
                    margin-top: -14px;
                }
                span{
                    font-size: 12px;
                    height: 40px;
                    margin-top: 10px;
                }
            }
        }
    }
    .bottom{
        img{
            width: 252px;
            height: 123px;
        }
    }
}
</style>