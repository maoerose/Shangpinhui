<!--  -->
<template>
    <div class="floor">
        <div class="top">
            <div class="title"><strong>家用电器</strong></div>
            <div class="herflink">
                <a href="">热门</a>
                <a href="">大家电</a>
                <a href="">生活电器</a>
                <a href="">厨房电器</a>
                <a href="">应季电器</a>
                <a href="">高端电器</a>
                <a href="">空调</a>
            </div>
        </div>
        <div class="bottom">
            <div class="nav">
                <div class="navList">
                    <a href="">节能补贴</a>
                    <a href="">4K电视</a>
                    <a href="">空气净化器</a>
                    <a href="">电饭煲</a>
                    <a href="">洗衣机</a>
                    <a href="">电冰箱</a>
                </div>
                <img src="http://sph-list.atguigu.cn/img/floor-1-1.png" alt="">
            </div>
            <div class="calurse">
                <el-carousel height="370px">
                    <el-carousel-item v-for="item in imgList" :key="item">
                        <!-- <h3 class="middle">{{ item }}</h3> -->
                        <img :src="item.url" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="goods">
                <div class="left">
                    <img src="http://sph-list.atguigu.cn/img/floor-1-2.png" alt="">
                    <img src="http://sph-list.atguigu.cn/img/floor-1-3.png" alt="">
                </div>
                <div class="middle">
                    <img src="http://sph-list.atguigu.cn/img/floor-1-4.png" alt="">
                </div>
                <div class="right">
                    <img src="http://sph-list.atguigu.cn/img/floor-1-5.png" alt="">
                    <img src="http://sph-list.atguigu.cn/img/floor-1-6.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Floor",
    data () {
    return {
        imgList:[
            {
                url:require('../navType/images/lol英雄联盟至尊 魔女 莫.jpg')
            },
            {
                url:require('../navType/images/《卡坦岛VR Catan VR》5.jpg')
            },
            {
                url:require('../navType/images/新娘DVA3440x1440带鱼屏.jpg')
            },
        ]
    };
  },

    components: {},

    computed: {},

    mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
.floor{
    width: 1200px;
    // height: 720px;
    margin: 10px auto;
    .top{
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 24px;
        }
        .herflink{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            a{
                padding: 0 10px;
                border-right: #8b8c85 solid 1px;
                display: inline-block;
                font-size: 12px;
                &:last-child{
                    border: none;
                }
                &:first-child{
                    color: red;
                }
            }
        }
    }
    .bottom{
        display: flex;
        border-top: #b81b1b solid 4px;
        border-bottom: #e8e8e6 solid 1px;
        .nav{
            background-color: #fafafa;
            padding: 20px 10px;
            width: 210px;
            .navList{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                text-align: center;
                a{
                    padding: 5px 0;
                    width: 70px;
                    font-size: 14px;
                    border-bottom: #dfe0dd solid 1px;
                }
            }
        }
        .calurse{
            width: 330px;
            background-color: #8b8c85;
            // flex: auto;
            img{
                height: 370px;
                width: 330px;
            }
        }
        .goods{
            display: flex;
            justify-content: flex-end;
            width: 660px;
            div{
                flex: 0;
            }
            &>div:nth-child(2){
                border-left: #e8e8e6 solid 1px;
                border-right: #e8e8e6 solid 1px;
            }
            // &>div:nth-child(2n-1) img:first-child{
            //     border-bottom: #e8e8e6 solid 1px;
            // }
        }
    }
}
</style>