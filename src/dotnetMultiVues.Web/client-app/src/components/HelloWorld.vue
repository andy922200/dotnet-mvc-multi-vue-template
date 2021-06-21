<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p v-html="$t('message.intro.headline')"></p>
        <h3>{{ $t("message.intro.titles.links") }}</h3>
        <ul>
            <li v-for="(link, index) in essentialLinks" :key="index">
                <a :href="link.url" target="_blank" rel="noopener">{{ $t(`message.intro.essentialLinks.${link.caption}`) }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: String
    },
    setup () {
        const essentialLinks = [
            {
                caption: 'Core Docs',
                url: 'https://vuejs.org'
            },
            {
                caption: 'Forum',
                url: 'https://forum.vuejs.org'
            },
            {
                caption: 'Community Chat',
                url: 'https://chat.vuejs.org'
            },
            {
                caption: 'Twitter',
                url: 'https://twitter.com/vuejs'
            },
            {
                caption: 'News',
                url: 'https://news.vuejs.org'
            }
        ]
        return {
            essentialLinks
        }
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
