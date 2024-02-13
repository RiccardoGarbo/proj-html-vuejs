
<script>
export default {
    name: 'IconsWidget',
};
</script>

<template>
    <ul>
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
    </ul>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

ul {
    display: flex;
    margin-top: 20px;
}

li {
    margin: 0 10px;
}

a {
    color: $white-cs;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: $orange-cs;
    }
}
</style>
