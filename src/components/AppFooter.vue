<script>
import FooterRights from './footer-components/FooterRights.vue';
import FooterMenus from './footer-components/FooterMenus.vue';

export default {
    name: "AppFooter",
    components: { FooterRights, FooterMenus },
};
</script>

<template>
    <!-- Container for footer content -->
    <div id="footer-container">
        <!-- component for footer menus -->
        <FooterMenus />
        <!-- component for footer rights -->
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
