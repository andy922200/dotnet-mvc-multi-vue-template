<template>
    <div id="dashboard">
        <p>This is #dashboard page.</p>
        <p>{{resTest}}</p>
        <p>Selected Language: {{selectedLanguage}}</p>
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
            resTest: ''
        }
    },
    async created () {
        try {
            const { data: res } = await axios.get('/api/dashboardAPI/5')
            this.resTest = res
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
