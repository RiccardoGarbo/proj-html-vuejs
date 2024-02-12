<script>
export default {
    name: 'FooterRights',
};
</script>

<template>
    <div id="footer-rights">
        <p>© 2024 All Rights Reserved. Developed By The Boolean Guys with Blood and Tears &hearts;</p>

    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/_vars.scss' as *;

#footer-rights {
    padding: 15px 0 15px 0;
    border-top: 1px solid $gray-cs;

    color: $gray-cs;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
}
</style>