import {
    Locales
} from './locales'

import enUs from '../en_us.json'
import zhTw from '../zh_tw.json'
import zhCn from '../zh_cn.json'

/* element ui default locale */
import enUsLocale from 'element-plus/lib/locale/lang/en'
import zhCnLocale from 'element-plus/lib/locale/lang/zh-cn'
import zhTwLocale from 'element-plus/lib/locale/lang/zh-tw'

export const messages = {
    [Locales.enUs]: {
        el: enUsLocale.el,
        message: enUs
    },
    [Locales.zhTw]: {
        el: zhTwLocale.el,
        message: zhTw
    },
    [Locales.zhCn]: {
        el: zhCnLocale.el,
        message: zhCn
    }
}

export const defaultLocale = Locales.enUs
