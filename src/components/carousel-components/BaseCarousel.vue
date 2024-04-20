<script>
import { carousel } from '../../assets/data/data.js'
export default {
    name: 'BaseCarousel',
<<<<<<< HEAD
   props:{
    infos: Array
   },
=======
    data: () => ({
        step: '',
        carousel,
        showedImage: [],
    }),
    props: {
        title: String,
        date: String,
        img: String,
        text: String,
        infos: Array
    },
>>>>>>> 24cb821a0a4e9a6da9685e0642e652bf5fb7db16
    methods: {
        createPath(img) {
            const url = new URL (`../../assets/img/${img}`, import.meta.url)
            return url.href;
        },
        fillArray() {
        this.carousel.forEach((img) => {
            if (this.showedImage.length < 10) {
                this.showedImage.push(img)
            }
        })
        },
        moveImage(target) {
            if (target === 'next') {
                this.showedImage.shift()
                this.carousel.forEach((img) => {
                    this.showedImage.push(img)
                })
            } 
        },
    },
    mounted() {
        this.fillArray()
    }
}
</script>

<template>
    <section id="music-blog">
        <div class="titles">
            <h5>MUSIC BLOG</h5>
            <h2>BEST MUSIC BLOG</h2>
        </div>
        <div class="carousel">
            <button @click="moveImage('next')">
                <img class="prev" src="../../assets/img/left-arrow.svg" />
            </button>
            <div class="wrapper">
<<<<<<< HEAD
                <div class="card" v-for="(info, i) in infos" :key="info.i">
=======
                <div class="card" v-for="card in showedImage">
>>>>>>> 24cb821a0a4e9a6da9685e0642e652bf5fb7db16
                    <figure>
                        <img :src="createPath(info.img)" :alt="info.title" />
                    </figure>
                    <figcaption>
                        <h3 class="capital">{{ info.title }}</h3>
                        <div class="icon-date">
                            <font-awesome-icon :icon="'far fa-calendar-days'" />
                            <address>{{ info.date }}</address>
                        </div>
                        <p class="description">{{ info.text }}</p>
                    </figcaption>
                </div>
            </div>
            <button @click="moveImage('next')">
                <img class="next" src="../../assets/img/right-arrow.svg" />
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>

*:not(img) {
    padding: .2rem 0;
}

#music-blog {
    padding: 6rem 0 8rem 0;
}
.titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.carousel {
    width: 1500px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    
}

button {
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
}
.next,
.prev {
    width: 25px;
    height: 25px;
    color: #000000;
}

.card {
    padding: 0 10px;
    flex-basis: calc(100/3);
}

figure {
    overflow: hidden;
    width: 450px;
    height: 301px;
    cursor: pointer;
}

figure img {
    max-width: 100%;
    display: block;
    transition: .5s ease;

    &:hover {
        scale: 1.1;
    }
}

.capital {
    text-transform: uppercase;
    cursor: pointer;
}

.icon-date {
    display: flex;
    align-items: center;
    gap: 10px;
}

h5,
address,
.fa-calendar-days {
    color: #f2870c;
}

address {
    font-style: normal;
}

h2,
h3 {
    color: #ffffff;
}

h3:hover {
    color: #f2870c;

}

h2 {
    font-size: 60px;
}

figcaption h3 {
    font-size: 26px;
}

.description {
    color:  Rgb(204, 204, 204);
    font-size: 15px;
    line-height: 28.5px;
    font-family: Sans-Serif;
}
</style>
