<template>
    <div>
        <router-view />
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
        tabBar: [{
            icon: 'home',
            name: '主页',
            link: '/'
        },{
            icon: 'map-marker',
            name: '附近',
            link: '/nearby'
        },{
            icon: 'tree',
            name: '果园',
            link: '/recommend'
        },{
            icon: 'globe',
            name: '社区',
            link: '/community'
        },{
            icon: 'user',
            name: '我的',
            link: '/user'
        }]
    })
}

export default {
    name: 'index',
    metaInfo: {
        title: '主页',
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
