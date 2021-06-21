import {
    createApp
} from 'vue'
import App from './App.vue'
import store from '../../store'
import VueI18n from '../../i18n/entry'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.use(VueI18n)
app.use(ElementPlus, {
    i18n: VueI18n.global.t
})
app.use(store).mount('#demo')
