<template>
    <transition name="slide-down">
        <div class="nearby-nav-main">
            <div class="nearby-nav-item"
                 v-for="(item, index) in navList"
                 :key="index">
                <span @click="switchMainNav(index)"
                      :class="active === index ? 'active' : ''">{{item.name}}</span>
                <div class="nearby-nav-sub"
                     v-if="active === index ? 'active' : ''"
                     v-show="showSub"
                     @click="closeSubNav()">
                    <div>
                        <div class="nearby-nav-sub-item"
                             v-for="subItem in item.subList"
                             @click="getContent(subItem)">{{subItem}}</div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        data() {
            return {
                active: 0,
                showSub: false
            }
        },
        name: "nearbyNav",
        computed: {
            ...mapState('appShell/nearby/nearbyNav', [
                'navList'
            ])
        },
        methods: {
            switchMainNav(index) {
                if (this.active !== index) {
                    this.active = index;
                }
                if (this.active !== true && index !== 0){
                    this.showSub = true;
                } else {
                    console.log(index);
                    this.showSub = false;
                }
            },
            getContent(subItem) {
                console.log(subItem);
                this.showSub = false;
            },
            closeSubNav() {
                this.showSub = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .nearby-nav-main
        height 10vw
        margin 0 2vw
        white-space nowrap
        background #f5f5f5
        overflow-x scroll
        overflow-y hidden

        &.slide-down-enter,
        &.slide-down-leave-to
            transform translate(0, -100%)

        .nearby-nav-item
            display inline-block
            width 14vw
            height 10vw
            font-size 16px
            line-height 10vw
            box-sizing border-box

            & > span.active
                color #e15517
                font-size 18px
                font-weight bold

            .nearby-nav-sub
                position fixed
                top 36vw
                right 2vw
                left 2vw
                bottom 0

                & > div
                    display flex
                    flex-flow row wrap
                    align-items center
                    padding 2vw
                    background #f5f5f5
                    opacity .9

                    .nearby-nav-sub-item
                        padding 1vw
                        line-height 5vw



</style>
