<script>
import SectionCarousel from './SectionCarousel.vue';
import SectionVideo from './SectionVideo.vue';
import SectionGallery from './gallery-components/SectionGallery.vue'
import SectionInfo from './SectionInfo.vue';
export default {
    name: "AppMain",
    components: { SectionVideo, SectionGallery, SectionInfo, SectionCarousel }
};
</script>

<template>
    <SectionVideo />
    <SectionGallery />
    <SectionInfo />
    <SectionCarousel />
</template>

<style lang="scss" scoped >
/* Style here */
</style>