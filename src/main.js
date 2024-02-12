import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource-variable/oswald';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCirclePlay);


const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');
