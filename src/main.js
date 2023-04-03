import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import "/node_modules/flag-icons/css/flag-icons.min.css";
// fonts
import "@fontsource/bebas-neue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faStar, faXmark } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faStar, faXmark);

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
