<!--  -->
<template>
    <div class="brand">
        <ul>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_21.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_03.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_05.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_07.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_09.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_11.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_13.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_15.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_17.png" alt="">
            </li>
            <li>
                <img src="http://sph-list.atguigu.cn/img/brand_19.png" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Brand",
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
.brand{
    width: 1200px;
    margin: 10px auto;
    background-color: rgb(249, 249, 250);
    ul{
        display: flex;
        justify-content: space-between;
        li{
            margin: 10px 5px;
            flex-grow: 1;
            border-right: rgb(208, 205, 205) solid 1px;
            cursor: pointer;
        }
        &>li:last-child{
            border: none;
        }
    }
}
</style>