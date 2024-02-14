<script>
import { carousel } from '../../assets/data/data.js'
export default {
    name: 'BaseCarousel',
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
    methods: {
        createPath(img) {
            const url = new URL(`../../assets/img/${img}`, import.meta.url)
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
                <div class="card" v-for="card in showedImage">
                    <figure>
                        <img :src="createPath(card.img)" :alt="card.title" />
                    </figure>
                    <figcaption>
                        <h3 class="capital">{{ card.title }}</h3>
                        <div class="icon-date">
                            <font-awesome-icon :icon="'far fa-calendar-days'" />
                            <address>{{ card.date }}</address>
                        </div>
                        <p class="description">{{ card.text }}</p>
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
