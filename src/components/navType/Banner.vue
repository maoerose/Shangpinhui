<!--  -->
<template>
<div class="banner">
    <!-- <el-carousel :style="{height:'600px',width:'730px'}"> -->
    <el-carousel height="550px">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.url">
      </el-carousel-item>
    </el-carousel>
</div>
</template>

<script>
export default {
    name: "Banner",
    data () {
    return {
        imgList:[
            {
                url:require("./images/lol英雄联盟至尊 魔女 莫.jpg")
            },
            {
                url:require("./images/《卡坦岛VR Catan VR》5.jpg")
            },            {
                url:require("./images/《守望先锋》5120x1440游.jpg")
            },            {
                url:require("./images/新娘DVA3440x1440带鱼屏.jpg")
            },            {
                url:require("./images/李白 鸣剑曳影王者荣耀5.jpg")
            }
        ]
        };
  },

    components: {
        
     },

    computed: {

    },

    mounted() {
    },

    methods: {
    }
}

</script>
<style lang='less' scoped>
.banner{
    width: 730px;
    img{
            width: 900px;
            height: 600px;
        }
}
</style>