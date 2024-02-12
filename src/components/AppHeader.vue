<script>
import {headerNav} from '../assets/data/data'

export default {
    name: "AppHeader",
    data() {
        return  {
            headerNav
        }
    }
};
</script>

<template>
    <header>
        <figure>
            <img src="../assets/img/Logo.png" alt="">
        </figure>
        <div id="right-header">

            <nav>
                <!-- fare la classe active nei data -->
                <ul>
                    <li v-for="(link, i) in headerNav" :key="i"><a :href="link.url" :class="{ active: i === 0 }">{{ link.title }}</a></li>
                </ul>
            </nav>

            <div id="search-icon">icona</div>
        </div>
    </header>

    <figure id="jumbotron">
        <img src="../assets/img/jumbotron img/image.png" alt="">
    </figure>
</template>

<style lang="scss" scoped >
@use '../assets/scss/vars' as *;
* {
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


    img {
        width: 100%;
    }
}
</style>