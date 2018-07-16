<template>
    <transition name="slide-down">
        <div class="nearby-nav-main" v-show="show">
            <div class="nearby-nav-item"
                 v-for="(item, index) in navList"
                 :key="index">
                <span @click="switchMainNav(index)"
                      :class="active === index ? 'active' : ''">{{item.name}}</span>
                <div class="nearby-nav-sub"
                     v-if="active === index ? 'active' : ''">
                    <div @click="closeSubList()">
                        <div class="nearby-nav-sub-item"
                             v-for="subItem in item.subList"
                             @click="getContent(subItem)"
                             v-show="showSub">{{subItem}}</div>
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
                'show',
                'navList'
            ])
        },
        methods: {
            switchMainNav: function (index) {
                if (this.active !== index) {
                    this.active = index;
                }
                if (this.active !== true){
                    this.showSub = true;
                }
            },
            getContent: function (subItem) {
                console.log(subItem);
                this.showSub = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .nearby-nav-main
        position fixed
        top 26vw
        right 5vw
        left 5vw
        height 10vw
        white-space nowrap
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
                right 5vw
                left 5vw
                bottom 20vw

</style>
