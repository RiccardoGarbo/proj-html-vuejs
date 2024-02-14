<script>
import { instagramImages } from '../../assets/data/data'
export default {
    name: 'ImgsRow',
    data: () => ({
        instagramImages,
        currentIndex: 1
    }),
    methods: {
        imgSrc(element) {
            const url = new URL(`../../assets/img/${element}`, import.meta.url);
            return url.href
        },
       
    },
}
</script>
<template>
    <section>
        <div v-for="img in instagramImages" :key="img.id">
            <figure>
                <img :src="imgSrc(img.img)" alt="singer img">
            </figure>
        </div>
    </section>
</template>
<style lang="scss" scoped>
section {
    overflow-x: hidden;
    display: flex;
    // transform: translateX(-239px);

    figure {
        overflow: hidden;
        width: 237px;
        height: 238px;
        cursor: pointer;

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