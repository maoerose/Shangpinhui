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
      <!-- <div class="leftNav">
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
            </div> -->
      <div class="oneNav">
        <div v-for="(c1, index) in this.tableData" 
        :key="index" @mousemove="mouseOver(index)" 
        @mouseleave="mouseLeave" 
        class="oneNavList" 
        :style="{ backgroundColor: currentIndex == index ? '#23c9fc' : '#f9f9f9' }" 
        @click="goSearch($event)">
          <a href="javascript:void(0)" class="oneNavA" :data-categoryName="c1.categoryName">{{ c1.categoryName }}</a>
          <div class="twoNav" :style="{ display: currentIndex == index ? 'block' : 'none' }">
            <div class="twoNavList">
                <dl v-for="(c2,index) in c1.categoryChild" :key="index">
                    <dt>
                        <a href="javascript:void(0)" :data-categoryName="c2.categoryName">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                        <em v-for="(c3,index) in c2.categoryChild" :key="index">
                            <a href="javascript:void(0)" :data-categoryName="c3.categoryName">{{c3.categoryName}}</a>
                        </em>
                    </dd>
                </dl>
            </div>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <Newsflash></Newsflash>
      <div>
      </div>
      <div></div>
    </div>
</div>
</template>

<script>
import { getCategories } from "../../utils/api";
import Banner from "./Banner.vue";
import Newsflash from "./Newsflash.vue";
export default {
  name: "TypeVue",
  data() {
    return {
      tableData: [],
      isSecondNavShow: false,
      currentIndex: -1,
    };
  },

  components: {
    Banner,
    Newsflash
  },

  computed: {},

  mounted() {
    console.log("mounted");
    this.getCateiory();
  },

  methods: {
    getCateiory() {
      getCategories().then((res) => {
        this.tableData = res.data.data;
        console.log(this.tableData);
      });
    },
    mouseOver(index) {
      this.isSecondNavShow = true;
      this.currentIndex = index;
      console.log("----" + this.isSecondNavShow);
      console.log(this.currentIndex);
    },
    mouseLeave() {
      this.isSecondNavShow = false;
      this.currentIndex = -1;
      console.log(this.isSecondNavShow);
    },
    goSearch(event){
        
        console.log("search..." + event.target.dataset.categoryname)
        this.$router.push('/search')
    }
  },
};
</script>
<style lang='less' scoped>
.navType {
  .topNav {
    border-bottom: #e61f1a solid 2px;
    ul {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      li {
        height: 40px;
        line-height: 40px;
        margin-right: 30px;
      }
      & > li:first-child {
        width: 208px;
        background-color: #e61f1a;
        color: aliceblue;
        text-align: center;
      }
    }
  }
  .bottomNav {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    .oneNav {
      display: flex;
      flex-direction: column;
      width: 208px;
      // padding: 5px 0 10px 25px;
      padding-bottom: 30px;
      font-size: 14px;
      background-color: #f9f9f9;
      position: relative;
      .oneNavList {
        padding: 0 0 0 20px;
        .oneNavA {
          margin: 3px 0;
          display: inline-block;
        }
        .twoNav {
          display: none;
          position: absolute;
          left: 208px;
          top: 0;
          z-index: 9999;
          width: 900px;
          padding: 20px 0 0 10px;
          background-color: #f9f9f9;
          min-height: 600px;
          min-width: 900px;
          .twoNavList{
            dl{
                display: flex;
                padding: 10px 0;
                dt{
                    width: 100px;
                    text-align: center;
                }
                dd{
                    display: flex;
                    flex-wrap: wrap;
                    width: 500px;
                    em{
                        padding: 0 8px;
                        border-left: #f6f6f6 solid 1px;
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