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
        <img :src="imagePath(card.img)" :alt="card.img" class="icons">
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

    .icons {
        height: 106px;
        filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(91deg) brightness(103%) contrast(101%);
        margin-bottom: 2rem;
        cursor: pointer;

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
</style>