<script>
export default {
    name: 'HeaderCard',
    props: {
        card: Object
    },
    methods: {
        imagePath(element) {
            const path = new URL(`../../assets/img/icon/${element}.svg`, import.meta.url);
            return path.href
        }
    }
}
</script>

<template>
    <div class="black-card">
        <figure>
            <img :src="imagePath(card.img)" :alt="card.img" class="icons">
        </figure>
        <h2>{{ card.heading }}</h2>
        <p>{{ card.text }}</p>
    </div>
</template>

<style lang='scss' scoped>
@use '../../assets/scss/vars' as *;

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

    figure {
        position: relative;
        width: 106px;
        height: 106px;
        margin: 0 auto;
        margin-bottom: 2rem;

        &::after {
            content: '';
            border: 4px solid $orange-cs;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 0;
            left: 0;
            transform: translate(-50%,-50%);
            z-index: 0;
            display: none;
            animation: soundwaveAnimation 1s linear  infinite
        }
    }

    figure:hover::after {
        display: block;
    }
    .icons {
        height: 106px;
        filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(91deg) brightness(103%) contrast(101%);
        cursor: pointer;
        position: relative;
        z-index: 1;

        &:hover {
            filter: invert(52%) sepia(81%) saturate(1169%) hue-rotate(358deg) brightness(98%) contrast(93%);
        } 
    }
    
    p {
        font-family: OpenSans, sans-serif;
        font-size: 15px;
        font-weight: normal;
        text-transform: capitalize;
    }
}

@keyframes soundwaveAnimation {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(1.7);
        opacity: 0;
    }
}
</style>