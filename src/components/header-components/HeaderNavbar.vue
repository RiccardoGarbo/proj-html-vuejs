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
        color: white;
    }
</style>