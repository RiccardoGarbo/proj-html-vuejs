<script>
import ImgsRow from './carousel-components/ImgsRow.vue';
import BaseCarousel from './carousel-components/BaseCarousel.vue';
export default {
    name: 'SectionCarousel',
    components: { ImgsRow, BaseCarousel }


}
</script>

<template>
    <BaseCarousel />
    <ImgsRow />
</template>

<style lang='scss' scoped>
/* style here */
</style>