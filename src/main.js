import { createApp } from 'vue'
import App from './App.vue'
import { faInfoCircle, faArrowAltCircleRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import VTooltipPlugin from 'v-tooltip'
import {
    VTooltip,
    VClosePopper,
    Dropdown,
    Tooltip,
    Menu
} from 'v-tooltip'

import 'v-tooltip/dist/v-tooltip.css'

library.add(faInfoCircle)
library.add(faCheckCircle)
library.add(faArrowAltCircleRight)

const app = createApp(App)
app.use(router).component('fas', FontAwesomeIcon).mount('#app')

app.use(VTooltipPlugin)
app.directive('tooltip', VTooltip)
app.directive('close-popper', VClosePopper)

app.component('VDropdown', Dropdown)
app.component('VTooltip', Tooltip)
app.component('VMenu', Menu)