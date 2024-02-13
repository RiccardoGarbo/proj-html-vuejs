<script>
export default {
    name: 'IconsWidget',
    data() {
        return {
            imageUrl: '@/assets/img/image (17).svg'
        };
    }
};
</script>

<template>
    <div id="widget-icon">
        <ul>
            <li><a href="#">icon</a></li>
            <li><a href="#">icon</a></li>
            <li><a href="#">icon</a></li>
            <li><a href="#">icon</a></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

ul {
    display: flex;
    margin-top: 20px;
}

li {
    margin: 0 5px;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: $orange-cs;
    }
}

.filtered-image {
    filter: grayscale(100%);
}
</style>