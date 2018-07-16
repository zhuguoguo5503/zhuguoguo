<template>

</template>

<script>

    function setState(store) {
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            active: 3
        })
    }

    export default {
        name: "community",
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
