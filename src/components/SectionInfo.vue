<script>
import { buttonText } from '@/assets/data/data.js';
import ButtonComponent from '@/components/ButtonComponent.vue';

import { infoDown } from '../assets/data/data';
export default {
    name: "SectionInfo",
    components: { ButtonComponent },
    data() {
        return {
            infoDown,
            buttonText: buttonText
        }
    },
    methods: {
        iconSrc(element) {
            const url = new URL(`../assets/img/image ${element}.svg`, import.meta.url);
            return url.href
        }
    }
};


</script>

<template>
    <div id=top-info>
        <div>
            <h2>INSTRUMENTAL ROCK</h2>
            <h1>ALBUM OUT NOW</h1>
            <ButtonComponent :buttonText="buttonText.readMore" />
        </div>
    </div>
    <div id="down-info">
        <div>
            <div v-for="info in this.infoDown">
                <img :src="iconSrc(info.icon)" :alt="info.text">
                <h4>{{ info.number }}</h4>
                <h2>{{ info.text }}</h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped >
#top-info h2 {
    color: #f2870c;
    font-size: 1.5rem;
}

#top-info h1 {
    color: white;
    font-size: 6rem
}



#top-info {
    background-image: url('../assets/img/cms_parallax.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 750px;
    display: flex;
    align-items: center;

    div {
        width: 1500px;
        margin: 0 auto;
    }

    button {
        border: 1px solid #f2870c;
        background-color: transparent;
        padding: 1rem 4rem;
        color: white;
        transition: background-color 0.5s;
        margin-top: 2rem;
        cursor: pointer;


    }

    button:hover {
        background-color: #f2870c;
    }
}

#down-info {
    height: 500px;
    background-image: url('../assets/img/counter_parallax.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 1500px;
        margin: 0 auto;

        div {
            display: flex;
            flex-direction: column;
            text-align: center;

            img {
                filter: invert(96%) sepia(96%) saturate(94%) hue-rotate(148deg) brightness(112%) contrast(104%);
                width: 70px;
                height: 70px;
            }

            h2 {
                font-size: 24px;

            }

            h4 {
                font-size: 4rem;

            }
        }
    }


}
</style>