<template>
    <div class="moment-wrapper">
        <div class="moment-col">
            <div class="moment-item"
                 v-for="moment in momentListLeft"
                 :key="moment.id">

                <router-link class="moment-content" :to="{ name: 'goodsDetailId', params: { id: moment.id }}">
                    <img :src="moment.image" alt="">
                    <div class="moment-detail">
                        <div class="moment-title">{{moment.title}}</div>
                        <div class="moment-info">
                            <div class="moment-sower">转发:{{moment.sower}}</div>
                            <div class="moment-time">{{moment.time}}</div>
                        </div>
                        <div class="moment-action">
                            <router-link class="moment-author" :to="{ name: 'goodsDetailId', params: { id: moment.authorID }}">
                                <img :src="moment.avator" alt="">
                                <span>{{moment.author}}</span>
                            </router-link>
                            <div class="moment-liker">
                                <icon name="heart" scale="1"></icon>
                                <span>{{moment.liker}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="moment-col">
            <div class="moment-item"
                 v-for="moment in momentListRight"
                 :key="moment.id">

                <router-link class="moment-content" :to="{ name: 'goodsDetailId', params: { id: moment.id }}">
                    <img :src="moment.image" alt="">
                    <div class="moment-detail">
                        <div class="moment-title">{{moment.title}}</div>
                        <div class="moment-info">
                            <div class="moment-sower">转发:{{moment.sower}}</div>
                            <div class="moment-time">{{moment.time}}</div>
                        </div>
                        <div class="moment-action">
                            <router-link class="moment-author" :to="{ name: 'goodsDetailId', params: { id: moment.authorID }}">
                                <img :src="moment.avator" alt="">
                                <span>{{moment.author}}</span>
                            </router-link>
                            <div class="moment-liker">
                                <icon name="heart" scale="1"></icon>
                                <span>{{moment.liker}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';

    export default {
        name: "communityMoment",
        computed: {
            ...mapState('appShell/community/communityMoment', [
                'momentListLeft',
                'momentListRight'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

    .moment-wrapper
        display flex
        flex-direction row
        justify-content space-between
        overflow-x hidden
        overflow-y scroll

        .moment-col
            width 47vw

            & > div
                margin-top 3vw

                &:last-child
                    margin-bottom 8vw

            .moment-item
                position relative
                width 46vw
                background #ffffff
                border-radius 2vw
                box-shadow 2px 2px 2px #dcdcdc
                z-index 10

                .moment-content

                    img
                        width 46vw
                        border-radius 2vw 2vw 0 0

                    .moment-detail
                        padding 2vw

                        & > div
                            margin-bottom 1vw

                            &:last-child
                                margin-bottom 0

                        .moment-title
                            color #363636
                            font-size 14px
                            font-weight bold
                            text-align left
                            overflow hidden

                        .moment-info
                            display flex
                            flex-direction row
                            justify-content space-between
                            align-items center

                            .moment-sower
                            .moment-time
                                color #444555
                                font-size 12px

                        .moment-action
                            display flex
                            flex-direction row
                            justify-content space-between
                            align-items center

                            .moment-author
                                display flex
                                flex-direction row
                                align-items center
                                color #333333
                                font-size 10px
                                font-weight bold

                                img
                                    width 7vw
                                    height 7vw
                                    margin-right 1vw
                                    border-radius 50%

                            .moment-liker
                                display flex
                                flex-direction row
                                justify-content center
                                align-items center
                                font-size 10px
                                color #636363

                                span
                                    margin-left 1vw


</style>
