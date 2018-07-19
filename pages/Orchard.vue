<template>

</template>

<script>

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showBack: true,
            showLogo: false,
            showTitle: false,
            showCommunity: false,
            showActions: false
        })
    }

    export default {
        name: "orchard",
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    }
</script>

<style scoped>

</style>
