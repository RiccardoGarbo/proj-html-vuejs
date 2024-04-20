<script>
import { carousel } from '../assets/data/data';
import ImgsRow from './carousel-components/ImgsRow.vue';
import BaseCarousel from './carousel-components/BaseCarousel.vue';
export default {
    name: 'SectionCarousel',
    components: { ImgsRow, BaseCarousel  },
    data() {
        return {
            carousel
        }
    }


}
</script>

<template>
    <BaseCarousel  :infos="carousel"/>
    <ImgsRow />
</template>

<style lang='scss' scoped>
/* style here */
</style>