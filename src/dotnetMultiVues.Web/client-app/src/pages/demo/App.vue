<template>
    <div id="demo">
        <img alt="Vue logo" src="../../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'

export default defineComponent({
    name: 'demo',
    components: {
        HelloWorld
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
