<script>
import { gallery } from '../../assets/data/data.js'
import GalleryCard from './GalleryCard.vue'
export default {
    name: "SectionGallery",
    data: () => ({
        gallery,
    }),
    components: {
        GalleryCard,
    },
};
</script>

<template>
    <section id="gallery">
        <div class="gallery-base">
            <div class="title">
                <h4>WHO WE ARE</h4>
                <h2>SENSE THE JAZZ</h2>
            </div>
            <div class="row">
                <div class="col">
                    <GalleryCard v-for="gal in gallery" :key="gal.id" :gal="gal" span="Stream On: " />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped >
@use '../../assets/scss/vars' as *;

#gallery {
    color: white;
}

.title {
    text-align: center;

    h4 {
        color: $orange-cs;
    }

    h2 {
        font-size: 3rem;
        margin-bottom: 20px;
    }
}

.gallery-base {
    max-width: 1500px;
    margin: 0 auto;
    padding: 100px 0;
}

.col {
    display: flex;
    flex-basis: calc(100% / 3);
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>