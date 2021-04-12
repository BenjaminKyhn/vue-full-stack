<template>
    <div id="page-wrap">
        <ProductsGrid :products="products"/>
    </div>
</template>

<script>
    import axios from 'axios'
    import ProductsGrid from "../components/ProductsGrid";

    export default {
        name: "ProductsPage",
        components: {ProductsGrid},
        data() {
            return {
                products: []
            }
        },
        async created() {
            const result = await axios.get('/api/products')
            this.products = result.data
        }
    }
</script>

<style scoped>
</style>

