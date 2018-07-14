<template>
    <transition name="slide-up">
        <div class="app-tab-wrapper" v-show="show">
            <div class="app-tab-bar"
                 v-for="(bar, index) in tabBar"
                 @click="switchBar(index)"
                 :class="index === active ? 'active' : ''">
                <router-link class="app-tab-item" :class="index === active ? 'active' : ''" :to="bar.link">
                    <icon :name="bar.icon" scale="1.5"></icon>
                    <div v-if="index !== active">{{bar.name}}</div>
                </router-link>
            </div>
        </div>
    </transition>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                active: 0
            }
        },
        name: "appTabBar",
        computed: {
            ...mapState('appShell/appTabBar', [
                'show',
                'tabBar'
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
        justify-content space-around
        align-items center
        background #ffffff

        & > div
            display flex
            justify-content center
            align-items center
            width 14vw
            height 14vw

            &.active
                position relative
                top -7vw
                border 1px solid black
                border-radius 50%

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

            &.active
                position relative
                color #ffffff
                border-radius 50%
                background black

</style>
