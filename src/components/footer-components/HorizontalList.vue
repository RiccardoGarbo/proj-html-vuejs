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
            <li>{{ address }}</li>
            <li>{{ number }}</li>
            <li>{{ email }}</li>
        </ul>
    </div>
</template>


