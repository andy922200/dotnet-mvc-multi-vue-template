<template>
    <div id="demo">
        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld :msg="$t('intro.titles.main')" />

        <select v-model="selectedLanguageModel" placeholder="Please Select">
            <option
                v-for="(item) in LayoutLanguages"
                :key="item.param"
                :label="item.title"
                :value="item.param"
            >
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import {
    defineComponent, computed
} from 'vue'
import {
    LayoutLanguages
} from '@/i18n/config/locales'
import {
    useStore
} from 'vuex'
import {
    useI18n
} from 'vue-i18n'

import HelloWorld from '../../components/HelloWorld.vue'

export default defineComponent({
    name: 'demo',
    components: {
        HelloWorld
    },
    setup () {
        const store = useStore()
        const { locale } = useI18n()
        return {
            selectedLanguageModel: computed({
                get () {
                    return store.getters.selectedLanguage
                },
                set (value: string) {
                    locale.value = value
                    store.dispatch('selectNewDefaultLanguage', value)
                }
            }),
            LayoutLanguages
        }
    }
})
</script>

<style lang="scss">
#demo {
    margin-top: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
