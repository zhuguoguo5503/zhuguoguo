<template>
    <div class="index-wrapper">
        <header class="index-header-wrapper">
            <div class="index-header-left">
                <img :src="logoSrc" class="index-header-logo"/>
            </div>
            <div class="index-header-right">
                <div>
                    <router-link to="/user">
                        个人中心
                        <img :src="userSrc" alt="">
                    </router-link>
                </div>
                <div>
                    <router-link to="/">
                        我的消息
                        <img :src="commentSrc" alt="">
                    </router-link>
                </div>
            </div>
        </header>
        <div class="index-search-wrapper">
            <router-link class="index-search" to="/search">
                <img :src="searchSrc" alt="">
                <span>搜索我的喜欢</span>
            </router-link>
        </div>
        <div class="index-nav-wrapper">
            <div class="index-nav-title">
                <span>您要去哪里</span>?
            </div>
            <index-tab-bar></index-tab-bar>
        </div>
    </div>
</template>

<script>

    import IndexTabBar from '@/components/index/IndexTabBar'

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: false,
            showBack: false,
            showLogo: false,
            showTitle: false,
            showActions: false
        });
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: false,
            showHello: true,
            active: 0,
        });
        store.dispatch('appShell/index/indexTabBar/setIndexTabBar', {
            show: true,
            tabBar: [{
                title: '同城购物',
                icon: '',
                intro: '提供同地区的\n商品/服务',
                link: '/nearby'
            },{
                title: '种草社区',
                icon: '',
                intro: '提供同地区的\n商品/服务',
                link: '/community',
            },{
                title: '我的果园',
                icon: '',
                intro: '提供同地区的\n商品/服务',
                link: '/orchard'
            },{
                title: '赶大集',
                icon: '',
                intro: '提供同地区的\n商品/服务',
                link: '/market'
            }]
        })
    }

    export default {
        data() {
            return {
                logoSrc: 'static/img/icons/apple-touch-icon-180x180.png',
                userSrc: 'static/img/main/user.png',
                commentSrc: 'static/img/main/comment.png',
                searchSrc: 'static/img/main/search.png'
            }
        },
        name: "index",
        metaInfo: {
            title: '首页',
            titleTemplate: '%s - 助果果',
            meta: [
                {name: 'keywords', content: 'lavas PWA'},
                {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
            ]
        },
        components: {
            IndexTabBar
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
    @require '~@/assets/stylus/variable'
    $btn-color = #000

    .index-wrapper
        position absolute
        top 0
        right 0
        bottom 20vw
        left 0
        padding 0 5vw
        margin 0
        overflow-x hidden
        overflow-y scroll

        .index-header-wrapper
            display flex
            justify-content space-between
            align-items center
            width 100%
            height $app-header-height
            background $colorPrimaryBlue
            font-size 12px
            color $btn-color
            padding 12vw 0 0 0

            & > div
                display flex
                justify-content space-between
                align-items center

            .index-header-logo
                width 14vw
                height 14vw
                border 1px solid transparent
                border-radius 2vw
                box-sizing border-box

            .index-header-right
                & > div
                    margin-left 4vw

                    a
                        color #a5a5a5

                        img
                            position relative
                            left -5px
                            width 24px
                            height 24px

        .index-search-wrapper
            margin-top 25vw

            .index-search
                display flex
                justify-content center
                align-items center
                border-bottom 1px solid #a5a5a5

                img
                    width 34px
                    height 34px

                span
                    position relative
                    top 2px
                    font-size 15px
                    color #969696


        .index-nav-wrapper
            display flex
            flex-direction column
            justify-content center
            align-items center
            margin-top 10vw

            .index-nav-title
                font-size 36px

                span
                    font-size 20px
</style>
