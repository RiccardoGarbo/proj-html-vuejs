<script>
import { footerAddresses, footerInfo, footerSupport } from '@/assets/data/data.js';

import HorizontalList from './HorizontalList.vue';
import HorizontalLinksMenu from './HorizontalLinksMenu.vue';


export default {
    name: 'FooterMenus',
    components: { HorizontalList, HorizontalLinksMenu },
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
                <h2>{{ footerAddresses.title.toUpperCase() }}</h2>
                <HorizontalList :address="footerAddresses.address" :number="footerAddresses.number"
                    :email="footerAddresses.email" />
            </div>
            <div class="col">
                <h2>{{ footerInfo.title.toUpperCase() }}</h2>
                <HorizontalLinksMenu :items="footerInfo.items" />
            </div>
            <div class="col">
                <h2>{{ footerSupport.title.toUpperCase() }}</h2>
                <HorizontalLinksMenu :items="footerSupport.items" />

            </div>
            <div class="col">
                <h3>Bookings</h3>
                <ul>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>UrlS</li>
                </ul>
            </div>
            <div class="col">
                <form>
                    <!-- Form content -->
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Inserisci la tua email" required><br><br>

                    <label for="message">Messaggio:</label>
                    <textarea id="message" name="message" placeholder="Inserisci il tuo messaggio" rows="4" cols="50"
                        required></textarea><br><br>

                    <button type="submit">Invia</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/_vars.scss' as *;

#footer-menus {
    min-height: 350px;
    border: 2px dotted white;
    color: $gray-cs;
    line-height: 1.50rem;
    letter-spacing: 2px;
    padding: 20px;

    h2 {
        font-size: 1.60rem;
        margin: 30px 0;
        color: white;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        .col {
            flex: 1;
            margin: 0 10px;
        }
    }
}
</style>
