<script>
import { footerAddresses, footerInfo, footerSupport } from '@/assets/data/data.js';
import HorizontalList from './HorizontalList.vue';
import HorizontalLinksMenu from './HorizontalLinksMenu.vue';
import FormComponent from './FormComponent.vue';
import IconsWidget from './IconsWidget.vue'

export default {
    name: 'FooterMenus',
    components: { HorizontalList, HorizontalLinksMenu, FormComponent, IconsWidget },
    // declaring event form submit
    emits: ['form-submit'],
    data() {
        return {
            footerAddresses: footerAddresses,
            footerInfo: footerInfo,
            footerSupport: footerSupport
        };
    },
    methods: {
        handleFormSubmit(formData) {
            // Emit the form-submit event to the parent component AppFooter
            this.$emit('form-submit', formData);
        }
    }
};
</script>

<template>
    <div id="footer-menus">
        <div class="row">
            <div class="col">
                <HorizontalList :title="footerAddresses.title" :address="footerAddresses.address"
                    :number="footerAddresses.number" :email="footerAddresses.email" />
                <IconsWidget />
            </div>
            <div class="col">
                <HorizontalLinksMenu :title="footerInfo.title" :items="footerInfo.items" />
            </div>
            <div class="col">
                <HorizontalLinksMenu :title="footerSupport.title" :items="footerSupport.items" />
            </div>
            <div class="col-form">
                <!-- Send handleSubmit as a prop to the FormComponent component.-->
                <FormComponent @form-submit="handleFormSubmit" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@use '@/assets/scss/_vars.scss' as *;

#footer-menus {
    height: 400px;
    color: $gray-cs;
    letter-spacing: 2px;
    padding: 60px 20px;
    margin: 40px 0;

    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -50px;

        .col {
            flex: 1;
            margin: 0 50px;
        }

        .col-form {
            flex: 2;
        }


    }

}
</style>
