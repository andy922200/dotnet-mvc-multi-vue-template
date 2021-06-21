<template>
    <div id="dashboard">
        <p>This is #dashboard page.</p>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>

        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2"></el-slider>
        <p>{{resTest}}</p>
        <p>Selected Language: {{selectedLanguage}}</p>
        <p>{{resTextFromOtherAPI}}</p>
        <p>{{resTextFromOtherPostAPI}}</p>
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
            resTextFromOtherAPI: '',
            resTextFromOtherPostAPI: '',
            radio: '1',
            value2: 50
        }
    },
    async created () {
        try {
            const { data: res } = await axios.get('/v0.1.0/dashboardAPI/5')
            const { data: testRes } = await axios.get('/v0.1.0/dashboardAPI/toOtherAPI')
            const headers = {
                'Content-Type': 'application/json'
            }
            const { data: testRes2 } = await axios.post('/v0.1.0/dashboardAPI/toOtherAPIPost', JSON.stringify({
                firstName: 'Finn',
                lastName: 'Williams'
            }), {
                headers
            })

            this.resTest = res
            this.resTextFromOtherAPI = testRes
            this.resTextFromOtherPostAPI = testRes2
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
