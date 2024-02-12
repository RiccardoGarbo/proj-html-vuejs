<script>

export default {
    name: 'HorizontalList',
    props: {
        title: String,
        address: String,
        number: String,
        email: String

    }
};
</script>

<template>
    <div>
        <h2>{{ title.toUpperCase() }}</h2>
        <ul>
            <li>
                <p>{{ address }}</p>
            </li>
            <li>
                <p>T: {{ number }}</p>
            </li>
            <li>
                <p>Email: <a href="#">{{ email }}</a></p>
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




