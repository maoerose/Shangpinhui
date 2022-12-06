<!--  -->
<template>
    <div class="navType">
        <div class="topNav">
            <ul>
                <li>全部商品分类</li>
                <li>服装城</li>
                <li>美妆馆</li>
                <li>尚品汇超市</li>
                <li>全球购</li>
                <li>闪购</li>
                <li>秒杀</li>
            </ul>
        </div>
        <div class="bottomNav">
            <div class="leftNav">
                <ul>
                    <li v-for="(c1,c1Index) in this.tableData" :key="c1Index" @mouseover="mouseOver(c1Index)" @mouseleave="mouseLeave">
                        <a href="">{{c1.categoryName}}</a>
                        <ul class="secondNav" :style="{ display: currentIndex == c1Index ? 'block' : 'none' }">
                            <li v-for="(c2,c1Index) in c1.categoryChild" :key="c1Index" class="secondLi">
                                <a href="">{{c2.categoryName}}</a>
                                <ul class="thirdNav">
                                    <li v-for="(c3,c1Index) in c2.categoryChild" :key="c1Index" class="thirdLi">
                                        <a href="">{{c3.categoryName}}</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <Banner></Banner>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { getCategories } from '../../utils/api';
import Banner from './Banner.vue';
export default {
    name: "TypeVue",
    data () {
    return {
        tableData: [],
        isSecondNavShow: false,
        currentIndex: -1
    };
  },

    components: {
        Banner
    },

    computed: {},

    mounted() {
        console.log("mounted")
        this.getCateiory()
    },

    methods: {
        getCateiory(){
            getCategories().then(res => {
                this.tableData = res.data.data
                console.log(this.tableData)
            })
        },
        mouseOver(index){
            this.isSecondNavShow = true
            this.currentIndex = index
            console.log("----"+this.isSecondNavShow)
            console.log(this.currentIndex)
        },
        mouseLeave(){
            this.isSecondNavShow = false
            this.currentIndex = -1
            console.log(this.isSecondNavShow)
        }
    }
}

</script>
<style lang='less' scoped>
.navType{
    .topNav{
        border-bottom: #e61f1a solid 2px;
        ul{
            width: 1200px;
            margin: 0 auto;
            display: flex;
            li{
                height: 40px;
                line-height: 40px;
                margin-right: 30px;
            }
            &>li:first-child{
                width: 208px;
                background-color: #e61f1a;
                color: aliceblue;

            }
        }
    }
    .bottomNav{
        display: flex;
        width: 1200px;
        margin: 0 auto;
        .leftNav{
            width: 208px;
            &:first-child{
                padding: 5px 0 0 0;
                background: #f9f9f9;
                position: relative;
                li{
                    padding-left: 20px;
                    padding-bottom: 10px;
                    font-size: 14px;
                    text-align: left;
                    .secondNav{
                        position: absolute;
                        top: 0;
                        left: 208px;
                        width: 720px;
                        .secondLi{
                            display: flex;
                            padding: 0;
                            // width: 720px;
                            a{
                                display: block;
                                padding: 10px;
                                // flex: 0;
                                width: 100px;
                            }
                            .thirdNav{
                                display: flex;
                                flex: 1;
                                .thirdLi{
                                    padding: 0 0 0 8px;
                                    flex: 1;
                                    a{
                                        font-size: 8px;
                                        padding: 10 0 0 0 ;
                                        // width: 60px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>