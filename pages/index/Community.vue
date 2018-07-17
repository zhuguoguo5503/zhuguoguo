<template>
    <div class="community-wrapper"></div>
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

<style lang="stylus" scoped>

    .community-wrapper
        position absolute
        top 0
        right 0
        bottom 12vw
        left 0
        padding 0 5vw
        margin 0
        overflow-x hidden
        overflow-y scroll

</style>
