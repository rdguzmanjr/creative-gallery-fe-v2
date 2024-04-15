import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faChevronLeft,faChevronRight,faChevronDown,faChevronUp,faFilter,faMagnifyingGlass,faList} from '@fortawesome/free-solid-svg-icons'
//import { faChevronRight} from '@fortawesome/free-solid-svg-icons'
/* add  to the library */
library.add(faChevronRight,faChevronLeft,faChevronDown,faChevronUp,faMagnifyingGlass,faFilter,faList)


const pinia = createPinia()

const app = createApp(App)
            .component('fa-icon',FontAwesomeIcon)
            .use(pinia)
            .use(router)
            .mount('#app')
