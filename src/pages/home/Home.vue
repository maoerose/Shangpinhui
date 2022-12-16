<!--  -->
<template>
<div>
    <NavType></NavType>
    <Recommend></Recommend>
    <Ranklist></Ranklist>
    <Ulike></Ulike>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
</div>
</template>

<script>
import NavType from '../../components/navType/NavType.vue';
import Recommend from '../../components/recommend/Recommend.vue';
import Ranklist from '../../components/ranklist/Ranklist.vue';
import Ulike from '../../components/ulike/Ulike.vue';
import Floor from '../../components/floor/Floor.vue';
import Brand from '../../components/brand/Brand.vue';
export default {
    name: "Home",
    data () {
    return {
        };
  },

    components: {
        NavType,
        Recommend,
        Ranklist,
        Ulike,
        Floor,
        Brand
    },

    computed: {},

    // mounted: {},

    methods: {}
}

</script>
<style lang='less' scoped>
</style>