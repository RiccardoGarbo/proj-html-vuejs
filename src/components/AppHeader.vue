<script>
import { headerNav } from '../assets/data/data'

export default {
    name: "AppHeader",
    data() {
        return {
            headerNav,
            cards: [
                {
                    img: 'speaker',
                    heading: 'Original ideas',
                    text: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.'
                },
                {
                    img: 'disc',
                    heading: 'Music Studio',
                    text: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.'
                },
                {
                    img: 'headphones',
                    heading: 'Acoustic covers',
                    text: 'Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.'
                },
            ]
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
                    <li v-for="(link, i) in headerNav" :key="i"><a :href="link.url" :class="{ active: i === 0 }">{{
                        link.title }}</a></li>
                </ul>
            </nav>

            <div id="search-icon">icona</div>
        </div>
    </header>

    <figure id="jumbotron">
        <img src="../assets/img/jumbotron img/image.png" alt="jumbotron">
        <div id="jumbo-text">
            <p>Instrumental Rock</p>
            <p>Music in this video</p>
            <button type="button" class="main-btn">Read more</button>
        </div>
    </figure>

    <div id="card-container" class="container">
        <div class="black-card">
            <img src="../assets/img/icon/speaker.svg" alt="speaker" class="icons">
            <h2>Original Ideas</h2>
            <p>Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
        </div>
        <div class="black-card">
            <img src="../assets/img/icon/disc.svg" alt="disc" class="icons">
            <h2>Music Studio</h2>
            <p>Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
        </div>
        <div class="black-card">
            <img src="../assets/img/icon/headphones.svg" alt="headphones" class="icons">
            <h2>Acoustic covers</h2>
            <p>Contrary Popular Belief, Lorem Ipsum Not Simply Ipsum Random Text.</p>
        </div>
    </div>

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


    img {
        width: 100%;
    }

    #jumbo-text {
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
        background-color: #121212 ;
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