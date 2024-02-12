<script>
import FooterRights from './footer-components/FooterRights.vue';
import FooterMenus from './footer-components/FooterMenus.vue';

export default {
    name: "AppFooter",
    components: { FooterRights, FooterMenus },
};
</script>

<template>
    <div id="footer-container">
        <FooterMenus />
        <FooterRights />
    </div>
</template>

<style>
#footer-container {
    max-width: 1400px;
    margin: 0 auto;
}

/* Generics */
ul {
    list-style: none;
}
</style>
