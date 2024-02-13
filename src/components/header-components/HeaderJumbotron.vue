<script>
export default {
    name: 'HeaderJumbotron',
    props: {
        index: Number
    },
    emits: ['on-arrow-click'],
    
}
</script>

<template>
    <figure id="jumbotron">
        <transition name="fade" mode="out-in">
            <img v-if="index === 0" src="../../assets/img/jumbotron img/image.png" alt="jumbotron">
            <img v-else src="../../assets//img/jumbotron img/image (1).png" alt="jumbotron">
        </transition>
        <div class="jumbo-text">
            <p>Instrumental Rock</p>
            <transition name="fade" mode="out-in">
                <p v-if="index === 0">Music of the spirit</p>
                <p v-else>Music in this video</p>
            </transition>
            <button type="button" class="main-btn">Read more</button>
        </div>
        <div class="arrow-container left-arrow" @click="$emit('on-arrow-click')">
            <img src="../../assets/img/left-arrow.svg" alt="left-arrow" class="arrow">
        </div>
        <div class="arrow-container right-arrow" @click="$emit('on-arrow-click')">
            <img src="../../assets/img/right-arrow.svg" alt="right-arrow" class="arrow">
        </div>
    </figure>
</template>

<style lang='scss' scoped>
@use '../../assets/scss/vars' as *;

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
            color: white;

            &:hover {
                background-color: $orange-cs;
            }
        }

    }
}
</style>