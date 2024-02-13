<script>
import { headerNav, headerCards } from '../assets/data/data'
import HeaderNavbar from './header-components/HeaderNavbar.vue';
import HeaderSearchbar from './header-components/HeaderSearchbar.vue';
import HeaderLogo from './header-components/HeaderLogo.vue';
import HeaderCard from './header-components/HeaderCard.vue';
import HeaderJumbotron from './header-components/HeaderJumbotron.vue';

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
    components: {HeaderNavbar, HeaderSearchbar, HeaderLogo, HeaderCard, HeaderJumbotron},
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
    <!-- header -->
    <header>
        <HeaderLogo/>

        <div id="right-header">
            <HeaderNavbar/>
            <HeaderSearchbar />
        </div>
    </header>

    <!-- jumbotron -->
    <HeaderJumbotron @on-arrow-click="changeImage" :index="currentImage"/>

    <!-- cards -->
    <div id="card-container" class="container">
        <HeaderCard v-for="(card, i) in headerCards" :key="i" :card="card"/>
    </div>
</template>

<style lang="scss" scoped >
@use '../assets/scss/vars' as *;

* {
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
}

#right-header {
    display: flex;
    align-items: center;
    gap: 30px;
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
}
</style>