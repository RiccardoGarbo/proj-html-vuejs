<script>
import { footerAddresses, footerInfo, footerSupport } from '@/assets/data/data.js';

import HorizontalList from './HorizontalList.vue';
import HorizontalLinksMenu from './HorizontalLinksMenu.vue';
import FormComponent from './FormComponent.vue';

export default {
    name: 'FooterMenus',
    components: { HorizontalList, HorizontalLinksMenu, FormComponent },
    // Data properties initialized
    data() {
        return {
            footerAddresses: footerAddresses,
            footerInfo: footerInfo,
            footerSupport: footerSupport
        };
    }
};
</script>

<template>
    <div id="footer-menus">
        <div class="row">
            <div class="col">
                <HorizontalList :title="footerAddresses.title" :address="footerAddresses.address"
                    :number="footerAddresses.number" :email="footerAddresses.email" />
            </div>
            <div class="col">

                <HorizontalLinksMenu :title="footerInfo.title" :items="footerInfo.items" />
            </div>
            <div class="col">

                <HorizontalLinksMenu :title="footerSupport.title" :items="footerSupport.items" />
            </div>
            <div class="col-form">
                <FormComponent />
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

    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -50px;

        .col {
            flex: 1;
            margin: 0 50px;
        }

        .col-form {
            margin-right: 50px;
        }
    }
}
</style>
