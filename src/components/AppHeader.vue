<script>
import { headerNav, headerCards } from '../assets/data/data'

export default {
    name: "AppHeader",
    data() {
        return {
            headerNav,
            headerCards,
            currentImage: 0,
            autoplay: null
        }
    },
    methods: {
        imagePath(element) {
            const path = new URL(`../assets/img/icon/${element}.svg`, import.meta.url);
            return path.href
        },
        changeIndex() {
            this.currentImage = this.currentImage === 0 ? 1 : 0;
        },
        changeImage() {
            clearInterval(this.autoplay);
            this.changeIndex()
            this.startAutoplay()
        },
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.changeIndex()
            }, 4000)
        }
    },
    created() {
        this.startAutoplay()
    }
};
</script>

<template>
    <header>
        <figure>
            <img src="../assets/img/Logo.png" alt="logo">
        </figure>
        <div id="right-header">

            <nav>
                <!-- fare la classe active nei data, fare un altro component di questo e importare lì i data -->
                <ul>
                    <li v-for="(link, i) in headerNav" :key="i"><a :href="link.url" :class="{ active: i === 0 }">{{
                        link.title }}</a></li>
                </ul>
            </nav>

            <!-- fare un altro component anche di questo, l'immagine non si vede -->
            <div id="search-icon"><img src="../assets/img/image (8).svg" alt="lente"></div>
        </div>
    </header>

    <!-- fare un altro component anche di questo -->
    <figure id="jumbotron">
        <transition name="fade" mode="out-in">
            <img v-if="currentImage === 0" src="../assets/img/jumbotron img/image.png" alt="jumbotron">
            <img v-else src="../assets/img/jumbotron img/image (1).png" alt="jumbotron">
        </transition>
        <div class="jumbo-text">
            <p>Instrumental Rock</p>
            <transition name="fade" mode="out-in">
                <p v-if="currentImage === 0">Music of the spirit</p>
                <p v-else>Music in this video</p>
            </transition>
            <button type="button" class="main-btn">Read more</button>
        </div>
        <div class="arrow-container left-arrow" @click="changeImage"><img src="../assets/img/left-arrow.svg"
                alt="left-arrow" class="arrow"></div>
        <div class="arrow-container right-arrow" @click="changeImage"><img src="../assets/img/right-arrow.svg"
                alt="right-arrow" class="arrow"></div>
    </figure>


    <div id="card-container" class="container">
        <!-- fare un altro component anche di questo -->
        <div class="black-card" v-for="card in headerCards">
            <img :src="imagePath(card.img)" :alt="card.img" class="icons">
            <h2>{{ card.heading }}</h2>
            <p>{{ card.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped >
@use '../assets/scss/vars' as *;

* {
    //da mettere nel body
    color: white;
    text-transform: uppercase;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    position: sticky;
    left: 0;
    top: 0;
    right: 0;
    background-color: $black-cs;
    z-index: 2;

    nav ul {
        display: flex;
        align-items: center;
        gap: 45px;
        list-style-type: none;


        .active {
            color: $orange-cs;
        }
    }

    nav a {
        font-size: 15px;
        text-decoration: none;
        font-weight: 700;
        line-height: 24px;
        cursor: pointer;
    }

    #search-icon {
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(102%) contrast(103%);
    }
}

#right-header {
    display: flex;
    align-items: center;
    gap: 30px;

    #search-icon {
        padding: 0 1rem;
    }
}

#jumbotron {
    width: 100%;
    position: relative;
    text-align: center;

    &:hover .arrow-container {
        opacity: 1;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s ease-in;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: .5;
    }

    img {
        width: 100%;
    }

    .arrow-container {

        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        top: 45%;
        padding: 13px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        cursor: pointer;

        &:hover {
            background-color: $black-cs;
        }
    }

    .left-arrow {
        left: 50px;
    }

    .right-arrow {
        right: 50px;
    }

    .arrow {
        width: 7px;
    }

    .jumbo-text {
        position: absolute;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);

        p {

            padding: .8rem;
            font-weight: 500;

            &:first-of-type {
                color: $orange-cs;
                font-size: 22px;
                line-height: 26px;
                letter-spacing: .1rem;
            }

            &:nth-of-type(2) {
                font-size: 100px;
                line-height: 120px;
            }
        }

        button {
            padding: 15px 60px;
            border: 1px solid $orange-cs;
            background-color: transparent;
            cursor: pointer;
            font-size: 15px;
            font-weight: 500;
            margin-top: 1rem;
            transition: .2s ease-in;

            &:hover {
                background-color: $orange-cs;
            }
        }

    }
}

.container {
    max-width: 1500px;
    margin: 0 auto;
}

#card-container {

    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-180px);

    .black-card {
        background-color: #121212;
        text-align: center;
        justify-content: space-between;
        padding: 5rem 3rem;
        margin: 0 1rem;
        flex-basis: calc(100% /3);


        h2 {
            font-size: 24px;
            font-weight: 500;
            margin-bottom: .8rem;
        }

        .icons {
            height: 106px;
            filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(91deg) brightness(103%) contrast(101%);
            margin-bottom: 2rem;
        }

        p {
            font-family: OpenSans, sans-serif;
            font-size: 15px;
            font-weight: normal;
            text-transform: capitalize;
        }


    }


}
</style>