<script>
import { headerNav} from '../../assets/data/data'
  export default {
    name: 'HeaderNavbar',
    data() {
        return {
            headerNav
        }
    },
  }
</script>

<template>
  <nav>
        <ul>
            <li v-for="(link, i) in headerNav" :key="i">
                <a :href="link.url" :class="{ active: link.active }">{{
                    link.title }}
                </a>
                <span>
                    <img src="../../assets/img/image (7).svg" v-if="link.sublist" alt="arrow-down" class="arrow-down">
                </span>
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

        &:hover  {
            color: $orange-cs;
        }

        
    }

    nav li {
        display: flex;
        align-items: center;
        gap: 2px;
        line-height: 24px;

        &:hover .arrow-down {
            filter: invert(52%) sepia(81%) saturate(1169%) hue-rotate(358deg) brightness(98%) contrast(93%);
        }

        &:hover a {
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
</style>