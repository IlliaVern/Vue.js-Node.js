<template>
    <div>        
        <table>
    <tr v-for="(prod,index) in getProducts" 
    :key="index">
        <td>
            {{prod.title}}
        </td>
        <td>
            {{prod.price}}
        </td>
    </tr>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:"ProductsTable",

        computed: {
            ... mapGetters(['getProducts'])
        },

    }
</script>

<style lang="scss" scoped>

</style>