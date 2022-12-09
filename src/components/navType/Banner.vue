<!--  -->
<template>
<div class="banner">
    <!-- <el-carousel :style="{height:'600px',width:'730px'}"> -->
    <el-carousel height="550px">
      <el-carousel-item v-for="item in imgList" :key="item">
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
            // 'https://xdao.mypinata.cloud/ipfs/QmaPZHpjvZhuQHBuwAF7ms86QMQPmfCTjoG9B8tEX8ydv2',
            // 'https://xdao.mypinata.cloud/ipfs/QmfA6GGBKS88sSbH8uYvDtuiipQ4wNaGmyDsmosxWCwAzB'
            {url:require('./images/lol英雄联盟至尊 魔女 莫.jpg')},
            {url:require('./images/《卡坦岛VR Catan VR》5.jpg')},
            {url:require('./images/《奥日与精灵意志(Ori a.jpg')},
            {url:require('./images/新娘DVA3440x1440带鱼屏.jpg')},
            {url:require('./images/李白 鸣剑曳影王者荣耀5.jpg')},
            {url:require('./images/英雄联盟好运姐皮肤5120.jpg')}
          ]
        };
  },

    components: {
        
     },

    computed: {},

    mounted() {},

    methods: {}
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