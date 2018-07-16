<template>

</template>

<script>

    function setState(store) {
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            active: 4
        })
    }

    export default {
        name: "user",
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
