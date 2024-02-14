<script>
import { instagramImages } from '../assets/data/data'
export default {
    name: 'ImgsRow',
    data: () => ({
        instagramImages
    }),
    methods: {
        imgSrc(element) {
            const url = new URL(`../assets/img/${element}`, import.meta.url);
            return url.href
        }
    }
}
</script>
<template>
    <section>

        <div v-for="img in this.instagramImages" :key="img.id">
            <figure>
                <img :src="imgSrc(img.img)" alt="immagine di un cantante">
            </figure>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    display: flex;

    figure {
        overflow: hidden;
        width: 237px;
        height: 238px;

        img {
            transition: scale 0.7s ease;
            border: 1px solid black;
        }
    }
}

img:hover {
    scale: 1.1;
}
</style>