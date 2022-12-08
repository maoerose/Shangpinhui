<!--  -->
<template>
<div class="banner">
        <!-- <img src="./images/lol英雄联盟至尊 魔女 莫.jpg" alt=""> -->
    <slider animation="fade" :style="{width: '730px',height: '600px'}">
        <!-- <img src="./images/lol英雄联盟至尊 魔女 莫.jpg" alt=""> -->
        <slider-item v-for="(url,index) in imgList" :key="index">
            <img :src="url" alt="">
        </slider-item>
        <!-- <p v-for="(url,index) in imgList" :key="index">
            <img :src="url" alt="">
        </p> -->
    </slider>
        <!-- <Splide :options="{ rewind:true }">
            <SplideSlide v-for="(url,index) in imgList" :key="index">
                <img :src="url" alt="">
            </SplideSlide>
        </Splide> -->
</div>
</template>

<script>
export default {
    name: "Banner",
    data () {
    return {
        imgList:[
            'https://xdao.mypinata.cloud/ipfs/QmaPZHpjvZhuQHBuwAF7ms86QMQPmfCTjoG9B8tEX8ydv2',
            'https://xdao.mypinata.cloud/ipfs/QmfA6GGBKS88sSbH8uYvDtuiipQ4wNaGmyDsmosxWCwAzB'
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
    img{
        width: 900px;
        height: 700px;
    }
}
</style>