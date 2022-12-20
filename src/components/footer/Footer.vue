<!--  -->
<template>
    <div class="footer">
        <div class="top">
            <div>
                <ul>
                    <li>购物指南</li>
                    <li>购物流程</li>
                    <li>会员介绍</li>
                    <li>生活旅行/团购</li>
                    <li>常见问题</li>
                    <li>购物指南</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>配送方式</li>
                    <li>上门自提</li>
                    <li>211限时达</li>
                    <li>配送服务介绍</li>
                    <li>海外配送</li>
                    <li>配送费用</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>配送方式</li>
                    <li>上门自提</li>
                    <li>211限时达</li>
                    <li>配送服务介绍</li>
                    <li>海外配送</li>
                    <li>配送费用</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>配送方式</li>
                    <li>上门自提</li>
                    <li>211限时达</li>
                    <li>配送服务介绍</li>
                    <li>海外配送</li>
                    <li>配送费用</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>配送方式</li>
                    <li>上门自提</li>
                    <li>211限时达</li>
                    <li>配送服务介绍</li>
                    <li>海外配送</li>
                    <li>配送费用</li>
                </ul>
            </div>
        </div>
        <div class="bottom">
            <div class="about">
                <ul>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>关于我们</li>
                    <li>联系我们</li>
                </ul>
            </div>
            <div class="address">地址：杭州市上城区城站</div>
            <div class="report">浙备0-13njw--33j3</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    data () {
    return {
        };
  },

    components: {},

    computed: {},

    mounted() {},

    methods: {}
}

</script>
<style lang='less' scoped>
.footer{
    background-color: #e5e5e5;
    height: 500px;
    .top{
        padding: 30px 50px;
        border-bottom: #b3b3ae solid 1px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        ul{
            &>li:nth-child(n+1){
                cursor: pointer;
                margin: 2px 0;
            }
            &>li:first-child{
                padding-bottom: 10px;
                font-size: 24px;
            }
        }
    }
    .bottom{
        width: 1200px;
        margin: 10px auto;
        padding: 20px 0;
        text-align: center;
        .about{
            ul{
                display: flex;
                justify-content: center;
                li{
                    padding: 0 10px;
                    border-right: #b3b3ae solid 1px;
                    cursor: pointer;
                }
                &>li:last-child{
                    border: none;
                }
            }
        }
        .address{
            margin: 10px 0 40px 0;
        }
    }
}
</style>