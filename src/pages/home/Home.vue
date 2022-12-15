<!--  -->
<template>
<div>
    <NavType></NavType>
    <Recommend></Recommend>
    <Ranklist></Ranklist>
</div>
</template>

<script>
import NavType from '../../components/navType/NavType.vue';
import Recommend from '../../components/recommend/Recommend.vue';
import Ranklist from '../../components/ranklist/Ranklist.vue';
export default {
    name: "Home",
    data () {
    return {
        };
  },

    components: {
        NavType,
        Recommend,
        Ranklist
    },

    computed: {},

    // mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
</style>