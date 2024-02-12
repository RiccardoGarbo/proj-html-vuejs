<script>
export default {
    name: 'HorizontalLinksMenu',
    props: {
        items: Array,
    }
};
</script>

<template>
    <ul>
        <li v-for="(item, i) in items" :key="i">
            <p><a :href="item.href">{{ item.text }}</a></p>
        </li>
    </ul>
</template>


<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

p {
    margin: 8px 0;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: $orange-cs;
    }
}
</style>