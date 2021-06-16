import {
    createI18n
} from 'vue-i18n'

import {
    messages, defaultLocale
} from './config/index'

import {
    storedVuex
} from '@/store'

const i18n = createI18n({
    messages,
    locale: storedVuex ? storedVuex.selectedLanguage : defaultLocale,
    fallbackLocale: defaultLocale
})

export default i18n
