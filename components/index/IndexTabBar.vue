<template>
    <transition name="fade">
        <div class="index-nav-box" v-show="show">
            <div class="index-nav-item"
                 v-for="(bar, index) in tabBar" :key="index">
                <router-link :to="bar.link">
                    <img class="index-nav-item-icon" :src="bar.icon" alt="">
                    <span class="index-nav-item-title">{{bar.title}}</span>
                    <pre class="index-nav-item-intro">{{bar.intro}}</pre>
                </router-link>
            </div>
        </div>
    </transition>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        name: "indexTabBar",
        computed: {
            ...mapState('appShell/index/indexTabBar', [
                'show',
                'tabBar'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

    .index-nav-box
        white-space nowrap
        width 100%
        height 63vw
        overflow-x scroll
        overflow-y hidden

        .index-nav-item
            display inline-block
            width 33vw
            height 63vw
            margin-right 1vw
            border-radius 3vw
            background orange

            &:last-child
                margin-right 0

            & > a
                display flex
                flex-direction column
                justify-content center
                align-items center
                width 100%
                height 100%
                padding 3vw

                .index-nav-item-icon
                    width 25vw
                    height 25vw
                    margin-top 3vw
                    margin-bottom 3vw
                    border 1px solid #ffffff
                    border-radius 50%

                .index-nav-item-title
                    width 100%
                    margin-bottom 3vw
                    font-size 18px
                    color #ffffff
                    border-bottom 1px solid #ffffff

                .index-nav-item-intro
                    font-size 11px
                    color #ffffff


</style>
