<!--  -->
<template>
    <div class="searchDetail">
        <GoodsList></GoodsList>
    </div>
</template>

<script>
import GoodsList from "../../components/goods/GoodsList.vue"
export default {
    name: "Search",
    data () {
    return {
        };
  },

    components: {
        GoodsList
    },

    computed: {},

    mounted() {},

    methods: {}
}

</script>
<style lang='less' scoped>
.searchDetail{
    width: 1200px;
    margin: 0 auto;
    // background-color: aquamarine;
}
</style>