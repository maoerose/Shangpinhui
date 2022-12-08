<!--  -->
<template>
    <div class="newsflash">
        <div class="top">
            <div class="title">
                <span>尚品汇快报</span>
                <span>更多</span>
            </div>
            <div class="newlist">
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
                <a href="">[特惠]备战开学季 全民半价购数码</a>
            </div>
            <div class="newsnav">
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
                <a href="">
                    <span></span>
                    <span>话费</span>
                </a>
            </div>
        </div>
        <div class="bottom"></div>
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
    min-width: 252px;
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
                margin: 5px 0;
            }
        }
        .newsnav{
            display: flex;
            flex-wrap: wrap;
        }
    }
}
</style>