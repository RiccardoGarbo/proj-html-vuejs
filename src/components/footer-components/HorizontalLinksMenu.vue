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
    margin-bottom: 30px;
    color: white;
}

p {
    margin-top: 10px;
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
