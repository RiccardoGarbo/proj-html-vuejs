<script>
export default {
    name: 'HorizontalLinksMenu',
    props: {
        title: String,
        items: Array,
    }
};
</script>

<template>
    <div>
        <h2>{{ title.toUpperCase() }}</h2>
        <ul>
            <li v-for="(item, i) in items" :key="i">
                <p><a :href="item.href">{{ item.text }}</a></p>
            </li>
        </ul>
    </div>
</template>


<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

h2 {
    font-size: 1.60rem;
    margin: 30px 0;
    color: white;
}

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
