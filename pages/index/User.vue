<template>
    <div class="user-wrapper">
        <div class="user-info">
            <img class="user-avatar" :src="avatar" />
            <div class="user-name">Tricker</div>
            <div class="app-system">设置</div>
        </div>
        <div class="user-zone">
            <div class="user-zone-title">
                <span>我的动态</span>
                <router-link to="/">查看全部动态<icon name="angle-right" scale="1"></icon></router-link>
            </div>
            <div class="user-zone-list">
                <div class="user-zone-item">
                    <span class="user-zone-number">777</span>
                    <span class="user-zone-char">我的粉丝</span>
                </div>
                <div class="user-zone-item">
                    <span class="user-zone-number">777</span>
                    <span class="user-zone-char">购物车</span>
                </div>
                <div class="user-zone-item">
                    <span class="user-zone-number">777</span>
                    <span class="user-zone-char">足迹</span>
                </div>
                <div class="user-zone-item">
                    <span class="user-zone-number">777</span>
                    <span class="user-zone-char">收藏夹</span>
                </div>
                <div class="user-zone-item">
                    <span class="user-zone-number">777</span>
                    <span class="user-zone-char">我的发表</span>
                </div>
            </div>
        </div>
        <div class="user-zone">
            <div class="user-zone-title">
                <span>我的订单</span>
                <router-link to="/">查看全部订单<icon name="angle-right" scale="1"></icon></router-link>
            </div>
            <div class="user-zone-list">
                <div class="user-zone-item">
                    <img class="user-zone-img" src="" alt="">
                    <span class="user-zone-char">待付款</span>
                </div>
                <div class="user-zone-item">
                    <img class="user-zone-img" src="" alt="">
                    <span class="user-zone-char">待发货</span>
                </div>
                <div class="user-zone-item">
                    <img class="user-zone-img" src="" alt="">
                    <span class="user-zone-char">待收货</span>
                </div>
                <div class="user-zone-item">
                    <img class="user-zone-img" src="" alt="">
                    <span class="user-zone-char">待评价</span>
                </div>
                <div class="user-zone-item">
                    <img class="user-zone-img" src="" alt="">
                    <span class="user-zone-char">退换货</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: false,
        });
        store.dispatch('appShell/appTabBar/setAppTabBar', {
            show: true,
            showBar: true,
            showHello: false,
            showCommunity: false,
            active: 4
        })
    }

    export default {
        data() {
            return {
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531908622076&di=28dd92c0ce4b5cbbf88907c3c214dbe9&imgtype=0&src=http%3A%2F%2Fimg1.touxiang.cn%2Fuploads%2F20140105%2F05-053825_199.jpg'
            }
        },
        name: "user",
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    }
</script>

<style lang="stylus" scoped>

    .user-wrapper
        position absolute
        top 0
        right 0
        bottom 12vw
        left 0
        padding 0 5vw
        overflow-x hidden
        overflow-y scroll

        & > div:last-child
            margin-bottom 20vw

        .user-info
            margin-top 12vw

            .app-system
                position absolute
                top 5vw
                right 5vw

            .user-avatar
                width 40vw
                height 40vw
                border-radius 50%

            .user-name
                font-size 20px
                font-weight bold

        .user-zone
            margin-top 8vw

            .user-zone-title
                display flex
                flex-direction row
                justify-content space-between
                align-items center
                padding 0 3vw
                margin-bottom 3vw
                border-bottom 1px solid #b8b8b8

                span
                    font-size 16px
                    color #363636

                a
                    display flex
                    flex-direction row
                    justify-content center
                    align-items center
                    font-size 12px
                    color #acacac

            .user-zone-list
                display flex
                flex-direction row
                justify-content space-between
                align-items center
                padding 3vw

                .user-zone-item
                    display flex
                    flex-direction column
                    justify-content space-around
                    align-items center
                    width 15vw
                    font-size 12px

                    img
                        width 6vw
                        height 6vw
                        margin-bottom 1vw
                        border 1px solid black
                        border-radius 50%


</style>
