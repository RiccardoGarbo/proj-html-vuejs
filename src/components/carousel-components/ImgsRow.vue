<script>
import { instagramImages } from '../../assets/data/data'
export default {
    name: 'ImgsRow',
    data: () => ({
        instagramImages,
        slidingDistance: -239,
        showedImage: [],
        currentLastImage: 7
    }),
    methods: {
        imgSrc(element) {
            const url = new URL(`../../assets/img/${element}`, import.meta.url);
            return url.href
        },
        fillArray() {
            this.instagramImages.forEach((img) => {
                if (this.showedImage.length < 10) {
                    this.showedImage.push(img)
                }
            })
        },
        updateArray() {
            this.showedImage.shift()
            this.instagramImages.forEach((img) => {
                    this.showedImage.push(img)
            })
        }
       
    },
    mounted() {
        this.fillArray()

        setInterval(() => {
            this.updateArray();
        }, 3000);
    }
}
</script>
<template>
    <section class="imageContainer" ref="imageContainer">
        <div v-for="img in showedImage" :key="img.i" >
            <figure>
                <img :src="imgSrc(img.img)" alt="singer img">
            </figure>
        </div>
    </section>
</template>
<style lang="scss" scoped>
.imageContainer {
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    transition: transform 1s ease-in-out;

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