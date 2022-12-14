<!--  -->
<template>
<div>
    <NavType></NavType>
    <Recommend></Recommend>
</div>
</template>

<script>
import NavType from '../../components/navType/NavType.vue';
import Recommend from '../../components/recommend/Recommend.vue';
export default {
    name: "Home",
    data () {
    return {
        };
  },

    components: {
        NavType,
        Recommend
    },

    computed: {},

    // mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
</style>