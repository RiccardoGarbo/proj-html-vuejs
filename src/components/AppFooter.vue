<script>
import { footerAddresses, footerInfo, footerSupport } from '@/assets/data/data.js';
import FooterRights from './footer-components/FooterRights.vue';

export default {
    name: "AppFooter",
    components: { FooterRights, },
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
    <div id="footer-container">
        <div id="footer-menus"></div>
        <FooterRights />
    </div>
</template>

<style scoped >
#footer-container {
    max-width: 1400px;
    margin: 0 auto;
}



#footer-menus {
    min-height: 300px;
    border: 2px dotted white;

}
</style>