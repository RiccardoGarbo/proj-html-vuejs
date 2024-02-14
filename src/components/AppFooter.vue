<script>
import FooterRights from './footer-components/FooterRights.vue';
import FooterMenus from './footer-components/FooterMenus.vue';

export default {
    name: "AppFooter",
    components: { FooterRights, FooterMenus },
    // declaring event form submit
    emits: ['form-submit'],
    methods: {
        handleFormSubmit(formData) {
            // Emit the form-submit event to the parent component App
            this.$emit('form-submit', formData);
        }
    }
};
</script>
<template>
    <!-- Container for footer content -->
    <div id="footer-container">
        <!-- component for footer menus -->
        <FooterMenus @form-submit="handleFormSubmit" />
        <!-- component for footer rights -->
    </div>
    <FooterRights />
</template>

<style>
#footer-container {
    max-width: 1500px;
    margin: 0 auto;
}

/* Generics */
ul {
    list-style: none;
}
</style>
