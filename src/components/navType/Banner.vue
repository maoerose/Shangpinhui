<!--  -->
<template>
<div class="banner">
    <!-- <el-carousel :style="{height:'600px',width:'730px'}"> -->
    <el-carousel height="550px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <img :src="item">
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
    width: 730px;
    el-carousel-item{
        height: 630px;
        img{
            width: 900px;
            height: 600px;
        }
    }
}
</style>