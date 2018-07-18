<template>
    <div class="nearby-wrapper">
        <nearby-nav class="nearby-nav"></nearby-nav>
        <goods-list class="nearby-goods-list"></goods-list>
    </div>
</template>

<script>

    import NearbyNav from '@/components/nearby/NearbyNav';
    import GoodsList from '@/components/main/GoodsList';

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showLogo: true,
            showTitle: true,
            showCommunity: false,
            showActions: true,
            title: '白山',
            actions: [
                {
                    icon: 'search',
                    route: {
                        name: 'search'
                    }
                }
            ]
        });
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            active: 1
        });
    }

    export default {
        name: "nearBy",
        components: {
            NearbyNav,
            GoodsList
        },
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    }
</script>

<style lang="stylus" scoped>

    .nearby-wrapper
        position absolute
        top 0
        right 0
        bottom 12vw
        left 0
        padding 0 5vw
        margin 0
        overflow-x hidden
        overflow-y scroll

        .nearby-nav
            position fixed
            top 26vw
            right 0
            left 0
            z-index 12

        .nearby-goods-list
            position relative
            top 10vw
            right 0
            left 0
            z-index 0

</style>
