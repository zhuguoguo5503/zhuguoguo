<template>
    <div>
        <router-view></router-view>
        <tab-bar class="app-tab-bar"></tab-bar>
    </div>
</template>

<script>

    import {mapActions} from 'vuex';
    import TabBar from '@/components/AppTabBar';

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showLogo: true,
            logoIcon: {
                src: 'static/img/icons/apple-touch-icon-180x180.png',
                alt: 'Logo'
            }
        });
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            tabBar: [{
                active: 'static/img/tab/index-white.png',
                noactive: 'static/img/tab/index-gray.png',
                name: '首页',
                link: '/'
            }, {
                active: 'static/img/tab/nearby-white.png',
                noactive: 'static/img/tab/nearby-gray.png',
                name: '同城',
                link: '/nearby'
            }, {
                active: 'static/img/tab/orchard-white.png',
                noactive: 'static/img/tab/orchard-gray.png',
                name: '我的果园',
                link: 'orchard'
            }, {
                active: 'static/img/tab/community-white.png',
                noactive: 'static/img/tab/community-gray.png',
                name: '种草区',
                link: '/community'
            }, {
                active: 'static/img/tab/user-white.png',
                noactive: 'static/img/tab/user-gray.png',
                name: '个人中心',
                link: '/user'
            }]
        });
    }

    export default {
        name: 'index',
        metaInfo: {
            title: '首页',
            titleTemplate: '%s - 助果果',
            meta: [
                {name: 'keywords', content: 'lavas PWA'},
                {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
            ]
        },
        components: {
            TabBar
        },
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    };

</script>

<style lang="stylus" scoped>

    .app-tab-bar
        position fixed
        left 0
        right 0
        bottom 0

</style>
