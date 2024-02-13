<script>
import { headerNav } from '../../assets/data/data'
export default {
    name: 'HeaderNavbar',
    data() {
        return {
            headerNav,
            isHovering: false,
            hoveredSublist: null
        }
    },
    methods: {
        showSublist(sublist) {
            this.hoveredSublist = sublist
        },
        hideSublist() {
            this.hoveredSublist = null
        }
    }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="(link, i) in headerNav" :key="i">
                <a class="list-a" :href="link.url" :class="{ active: link.active }" @mouseover="showSublist(link.sublist)" >
                {{ link.title }}
                </a>
                <span>
                    <img src="../../assets/img/image (7).svg" v-if="link.sublist" alt="arrow-down" class="arrow-down">
                </span>
                <ul class="sublist" v-show="hoveredSublist === link.sublist">
                    <li v-for="(sublink, i) in link.sublist" :key="i">
                        <a href="#">{{ sublink.label }}</a>
                        <span>
                            <i class="fa-solid fa-chevron-right arrow-right" v-if="sublink.list"></i>
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>
@use '../../assets/scss/vars' as *;

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
    color: $white-cs;

    &:hover {
        color: $orange-cs;
    }


}

nav li {
    gap: 2px;
    line-height: 24px;
    position: relative;

    &:hover .arrow-down {
        filter: invert(52%) sepia(81%) saturate(1169%) hue-rotate(358deg) brightness(98%) contrast(93%);
    }

    &:hover .list-a {
        color: $orange-cs;
    }
}

span {
    line-height: 24px;
}

.arrow-down {

    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(102%) contrast(103%);

    height: 15px;
    cursor: pointer;
}

.sublist {
    position: absolute;
    background-color: #202020;
    top: 100%;
    width: 280px;
    display: block;
    font-size: 14px;
    font-weight: 700;
    left: -120px;
    transform: translateY(40px);

    li {
        padding: .8rem 1rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }

    li:not(:last-of-type) {
        border-bottom: 1px solid rgba(128, 128, 128, 0.247);
    }

    .arrow-right {
        font-size: .7rem;
    }
}

</style>