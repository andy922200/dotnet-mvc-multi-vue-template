<template>
    <div id="dashboard">
        <p>This is #dashboard page.</p>
        <p>{{resTest}}</p>
        <p>Selected Language: {{selectedLanguage}}</p>
        <p>{{resTextFromOtherAPI}}</p>
        <a class="navbar-item brand-text" href="./Dashboard/AnotherPage">DashboardAnotherPage</a>
    </div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import {
    mapState
} from 'vuex'

import axios from 'axios'

export default defineComponent({
    name: 'dashboard',
    data () {
        return {
            test: 'Test String',
            resTest: '',
            resTextFromOtherAPI: ''
        }
    },
    async created () {
        try {
            const { data: res } = await axios.get('/v0.1.0/dashboardAPI/5')
            const { data: testRes } = await axios.get('/v0.1.0/dashboardAPI/toOtherAPI')
            this.resTest = res
            this.resTextFromOtherAPI = testRes
        } catch (err) {
            console.log(err)
        }
    },
    computed: {
        ...mapState(['selectedLanguage'])
    }
})
</script>

<style lang="scss">
#dashboard {
    margin-top: 60px;
    font-size: 28px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
