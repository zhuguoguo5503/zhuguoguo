<template>
    <transition name="slide-up">
        <div class="app-tab-wrapper" v-show="show">
            <div class="app-tab-bar"
                 v-if="showBar"
                 v-for="(bar, index) in tabBar"
                 :key="index"
                 @click="switchBar(index)"
                 :class="index === active ? 'active' : ''">
                <router-link class="app-tab-item" :class="index === active ? 'active' : ''" :to="bar.link">
                    <img :src="index === active ? bar.active : bar.noactive" alt="">
                    <div v-if="index !== active">{{bar.name}}</div>
                </router-link>
            </div>
            <div class="app-tab-hello active" v-if="showHello">
                <div class="app-tab-item active">
                    <img :src="indexSrc" alt="">
                </div>
            </div>
            <div class="app-tab-say-hello" v-if="showHello">
                <span>尊敬的潘星宇先生, 上午好!</span>
                <span>欢迎来到助果果共享平台, 共享美好生活!</span>
            </div>
        </div>
    </transition>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                indexSrc: 'static/img/tab/index-white.png'
            }
        },
        name: "appTabBar",
        computed: {
            ...mapState('appShell/appTabBar', [
                'show',
                'showBar',
                'showHello',
                'tabBar',
                'active'
            ])
        },
        methods: {
            switchBar: function (index) {
                if (index !== this.active && index !== 2) {
                    this.active = index;
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @require '~@/assets/stylus/variable'

    .app-tab-wrapper
        display flex
        justify-content space-between
        align-items center
        width 100%
        height $app-tab-height
        padding 0 5vw
        background #ffffff

        & > div
            display flex
            justify-content center
            align-items center
            width 14vw
            height 14vw

            &.active
                position relative
                top -4vw
                border 1px solid black
                border-radius 50%
                background #f5f5f5

        .app-tab-item
            display flex
            flex-direction column
            justify-content center
            align-items center
            width 12vw
            height 12vw
            color #b5b5b5
            font-size 10px
            text-decoration none

            img
                width 6vw
                height 6vw

            &.active
                position relative
                color #ffffff
                border-radius 50%
                background black

        .app-tab-say-hello
            position absolute
            top -3vw
            left 20vw
            display flex
            flex-direction column
            justify-content center
            align-items flex-start
            width 72vw
            height 14vw

            & > span
                font-size 12px
                line-height 16px

</style>
