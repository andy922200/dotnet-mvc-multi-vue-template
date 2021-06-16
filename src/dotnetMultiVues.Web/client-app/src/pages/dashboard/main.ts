import {
    createApp
} from 'vue'
import App from './App.vue'
import store from '../../store'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).mount('#dashboard')
