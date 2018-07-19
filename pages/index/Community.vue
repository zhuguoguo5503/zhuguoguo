<template>
    <div class="community-wrapper">
        <community-moment class="community-moment"></community-moment>
    </div>
</template>

<script>

    import CommunityMoment from '@/components/community/CommunityMoment';

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showLogo: false,
            showBack: false,
            showTitle: false,
            showCommunity: true,
            showActions: false,
            community: [
                '最新',
                '热门',
                '附近',
                '关注'
            ]
        });
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            active: 3
        })
    }

    export default {
        name: "community",
        components: {
            CommunityMoment
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

    .community-wrapper
        position absolute
        top 0
        right 0
        bottom 12vw
        left 0
        padding 0 2vw 0 3vw
        margin 0
        overflow-x hidden
        overflow-y scroll

        .community-moment
            position relative
            z-index 10

</style>
