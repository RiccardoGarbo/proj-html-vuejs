<script>
import { footerAddresses, footerInfo, footerSupport } from '@/assets/data/data.js';

import HorizontalList from './HorizontalList.vue';

export default {
    name: 'FooterMenus',
    components: { HorizontalList, },
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
                <h3>Bookings</h3>
                <ul>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                </ul>
            </div>
            <div class="col">
                <h3>Bookings</h3>
                <ul>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                    <li>Url</li>
                </ul>
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

<style scoped>
#footer-menus {
    min-height: 300px;
    border: 2px dotted white;
    color: white;
    padding: 20px;
}


.row {
    display: flex;
    flex-wrap: wrap;
}

.col {
    flex: 1;
    margin: 0 10px;
    /* Aggiungi margine tra le colonne */
}
</style>
