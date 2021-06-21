<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item class="el-menu-item--custom" index="1">
            <a href="/">DotnetVues</a>
        </el-menu-item>
        <el-menu-item class="el-menu-item--custom" index="2">
            <a href="/Dashboard">Dashboard</a>
        </el-menu-item>
        <el-menu-item class="el-menu-item--custom" index="3">
            <a href="/Dashboard/AnotherPage">Dashboard AnotherPage</a>
        </el-menu-item>
        <el-menu-item class="el-menu-item--custom" index="4">
            <a href="/Dashboard/Demo">Demo</a>
        </el-menu-item>
    </el-menu>

    <div id="demo">
        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld :msg="$t('message.intro.titles.main')" />

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
    defineComponent, computed, ref
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
        const activeIndex = ref('4')
        const handleSelect = function (key:string, path:string) {
            console.log(key, path)
        }

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
            LayoutLanguages,
            activeIndex,
            handleSelect
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

    a {
        padding: 22px 20px;
        text-decoration: none;
    }

    .el-menu-item--custom {
        padding: 0;
    }
}
</style>
