<!--  -->
<template>
    <div class="top">
        <div class="container">
            <div class="left">
                <span>北京，尚品汇欢迎你</span>
                <router-link to="/login" class="login">请登录</router-link>
                <router-link to="/register" class="register">请注册</router-link>
            </div>
            <div class="right">
                <ul>
                    <li>
                        <a href="">我的订单</a>
                    </li>
                    <li>
                        <a href="">我的购物车</a>
                    </li>
                    <li>
                        <a href="">我的会员</a>
                    </li>
                    <li>
                        <a href="">我的尚品汇</a>
                    </li>
                    <li>
                        <a href="">企业采购</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
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
<style lang="less" scoped>
.top{
    background-color: #e7e7e7;
    .container{
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: 1200px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        color: #8b8b8b;
        font-size: 12px;
        .left{
            display: flex;
            .login{
                margin: 0 20px;
            }
        }
        .right{
            ul{
                display: flex;
                justify-content: space-around;
                li{
                    a{
                        padding: 0 10px;
                        border-right: #8b8b8b solid 1px;
                    }
                    &:last-child{
                        a:last-child{
                            border-right: none;
                            // background-color: blue;
                        }
                    }
                };
            }
        }
    }
}
</style>