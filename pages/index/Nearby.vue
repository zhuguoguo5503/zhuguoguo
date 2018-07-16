<template>
    <div class="nearby-wrapper">
        <nearby-nav></nearby-nav>
    </div>
</template>

<script>

    import NearbyNav from '@/components/nearby/NearbyNav'

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showLogo: true,
            showTitle: true,
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
        store.dispatch('appShell/nearby/nearbyNav/setNearbyNav', {
            show: true,
            mainNav: [
                '推荐',
                '美食',
                '旅游',
                '服装',
                '美容',
                '娱乐',
                '洗浴'
            ]
        })
    }

    export default {
        name: "nearBy",
        components: {
            NearbyNav
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
        bottom 20vw
        left 0
        padding 0 5vw
        margin 0
        overflow-x hidden
        overflow-y scroll

</style>
