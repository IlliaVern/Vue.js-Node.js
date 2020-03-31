<template>
    <div>
        <left-filter-panel/>
        <products-content/>
    </div>
</template>

<script>
    import ProductsContent from "./c/ProductsContent";
    import LeftFilterPanel from "./c/LeftFilterPanel";

    export default {
        name:"ProductsViewer",
        components: {
            LeftFilterPanel,
            ProductsContent
        },
    }
</script>

<style lang="scss" scoped>

</style>