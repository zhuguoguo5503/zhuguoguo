<template>
    <transition name="slide-down">
        <header class="app-header-wrapper" v-show="show">
            <div class="app-header-left">
                <v-btn
                    icon
                    v-if="showBack"
                    @click.native="handleClick('back')">
                    <v-icon color="black" class="app-header-icon">arrow_back</v-icon>
                </v-btn>
                <div v-if="showLogo" @click="handleClick('logo')">
                    <slot name="logo">
                        <img v-if="logoIcon.src" :src="logoIcon.src" :alt="logoIcon.alt" class="app-header-logo"/>
                    </slot>
                </div>
            </div>
            <div class="app-header-middle" v-cloak>
                <slot name="title" v-if="showTitle">
                    {{ title }}
                </slot>
                <slot name="community" v-if="showCommunity">
                    <div class="community-tab-bar">
                        <div class="community-tab-item"
                             v-for="(item, index) in community"
                             :key="index"
                             :class="communityActive === index ? 'active' : ''"
                             @click="switchCommunity(index)">{{item}}</div>
                    </div>
                </slot>
            </div>
            <div class="app-header-right">
                <slot name="actions"
                      v-if="showActions"
                      v-for="(action, actionIdx) in actions"
                      :icon="action.icon"
                      :route="action.route">
                    <v-btn
                        icon="icon"
                        @click.native="handleClick('action', {actionIdx, route: action.route})">
                        <v-icon color="black" v-if="action.icon" class="app-header-icon">{{ action.icon }}</v-icon>
                    </v-btn>
                </slot>
            </div>
        </header>
    </transition>
</template>

<script>

    import {mapState} from 'vuex';
    import EventBus from '@/core/event-bus';

    export default {
        data() {
            return {
                communityActive: 0
            }
        },
        name: 'appHeader',
        computed: {
            ...mapState('appShell/appHeader', [
                'show',
                'showBack',
                'showLogo',
                'showTitle',
                'showCommunity',
                'showActions',
                'logoIcon',
                'title',
                'community',
                'actions'
            ]),
            ...mapState('appShell/common', [
                'isPageSwitching'
            ])
        },
        methods: {
            /**
             * 处理按钮点击事件
             *
             * @param {string} source 点击事件源名称 menu/logo/action
             * @param {Object} data 随点击事件附带的数据对象
             */
            handleClick(source, {actionIdx, route} = {}) {

                // 页面正在切换中，不允许操作，防止滑动效果进行中切换
                if (this.isPageSwitching) {
                    return;
                }
                let eventData = {};

                // 点击右侧动作按钮，事件对象中附加序号
                if (source === 'action') {
                    eventData.actionIdx = actionIdx;
                }

                // 发送给父组件，内部处理
                this.$emit(`click-${source}`, eventData);

                // 发送全局事件，便于非父子关系的路由组件监听
                EventBus.$emit(`app-header:click-${source}`, eventData);

                // 如果传递了路由对象，进入路由
                if (route) {
                    this.$router.push(route);
                }
            },
            switchCommunity(index) {
                if (this.communityActive !== index) {
                    this.communityActive = index;
                }
            }
        }
    };
</script>

<style lang="stylus" scoped>
    @require '~@/assets/stylus/variable'
    $btn-color = #000

    .app-header-wrapper
        display flex
        justify-content space-between
        align-items center
        height $app-header-height
        background $colorPrimaryBlue
        color $btn-color
        padding 12vw 5vw 0 5vw

        &.slide-down-enter,
        &.slide-down-leave-to
            transform translate(0, -100%)

        & > div
            display flex
            justify-content center
            align-items center

        .community-tab-bar
            display flex
            flex-direction row
            justify-content center
            align-items center
            width 90vw
            height 14vw
            /*border-bottom 1px solid gray*/

            .community-tab-item
                margin 0 2vw
                font-size 18px

                &.active
                    font-size 20px
                    font-weight bold
                    color #e15517

        // 改变 logo 大小
        .app-header-logo
            width 14vw
            height 14vw
            border 1px solid transparent
            border-radius 2vw
            box-sizing border-box

        // 改变 icon 大小
        .app-header-icon
            color $btn-color
            width 20px
            height 20px

</style>
