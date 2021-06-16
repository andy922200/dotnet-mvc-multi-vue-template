import {
    createApp
} from 'vue'
import App from './App.vue'
import store from '../../store'
import VueI18n from '../../i18n/entry'
import 'bootstrap/dist/css/bootstrap.css'

const app = createApp(App)
app.use(VueI18n)
app.use(store).mount('#demo')
