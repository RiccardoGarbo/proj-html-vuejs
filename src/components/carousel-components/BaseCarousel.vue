<script>
import { carousel } from '../../assets/data/data.js'
export default {
    name: 'BaseCarousel',
    data: () => ({
        step: "",
        carousel
    }),

    computed: {
        isLastIndex() {
            return this.infos.i === this.infos.length - 1;
        },
        isFirstIndex() {
            return this.infos.i === 0;
        },

    },
    methods: {
        createPath(img) {
            const url = new URL(`../assets/img/${img}`, import.meta.url)
            return url.href;
        },
        setIndex(direction) {
            if (direction === "next") {
                if (this.isLastIndex) this.i = 0;
                else this.i++;
            } else if (direction === "prev") {
                if (this.isFirstIndex) this.isLastIndex;
                else this.i--;
            } else {
                this.i === direction;
            }
        },
        setStep() {

        }
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
            <button @click="setIndex('prev')">
                <img class="prev" src="../assets/img/left-arrow.svg" />
            </button>
            <div class="wrapper">
                <div class="card" v-for="(car, i) in carousel" :key="car.i">
                    <figure>
                        <img :src="createPath(carousel.img)" alt="info.title" />
                    </figure>
                    <figcaption>

                        <h3 class="capital">{{ car.title }}</h3>
                        <div class="icon-date">
                            <font-awesome-icon :icon="'far fa-calendar-days'" />
                            <address>{{ car.date }}</address>
                        </div>

                        <p>{{ car.text }}</p>

                    </figcaption>
                </div>
            </div>

            <button @click="setIndex('next')">
                <img class="next" src="../assets/img/right-arrow.svg" />
            </button>

        </div>
    </section>
</template>

<style lang="scss" scoped>
.titles {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.carousel {
    width: 1320px;
    margin: 0 -10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .wrapper{
    white-space: nowrap;
} */

button {
    cursor: pointer;
    border: none;
    padding: 0;
    background: none;
}

.next,
.prev {
    width: 10px;
    height: 10px;
    color: #000000;

}

.card {
    padding: 0 10px;
    flex-basis: 40px;
    display: inline-flex;
    flex-direction: column;
}

figure img {
    max-width: 100%;
    display: block;
}

.capital {
    text-transform: uppercase;
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

p {
    color: white;
}
</style>
