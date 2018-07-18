<template>
    <div class="moment-wrapper">
        <div class="moment-col">
            <div class="moment-item"
                 v-for="moment in momentListLeft"
                 :key="moment.id">
                <router-link class="moment-author" :to="{ name: 'goodsDetailId', params: { id: moment.authorID }}">
                    <img :src="moment.avator" alt="">
                    <span>{{moment.author}}</span>
                </router-link>
                <router-link class="moment-content" :to="{ name: 'goodsDetailId', params: { id: moment.id }}">
                    <img :src="moment.image" alt="">
                    <div class="moment-detail">
                        <div class="moment-title">{{moment.title}}</div>
                        <div class="moment-preview">{{moment.article}}</div>
                        <div class="moment-info">
                            <div class="moment-sower">转发:{{moment.sower}}</div>
                            <div class="moment-time">{{moment.time}}</div>
                        </div>
                        <div class="moment-action">
                            <div class="moment-liker">{{moment.liker}}</div>
                            <div class="moment-comment">{{moment.comment}}</div>
                            <div class="moment-relay">{{moment.relay}}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="moment-col">
            <div class="moment-item"
                 v-for="moment in momentListRight"
                 :key="moment.id">
                <router-link class="moment-author" :to="{ name: 'goodsDetailId', params: { id: moment.authorID }}">
                    <img :src="moment.avator" alt="">
                    <span>{{moment.author}}</span>
                </router-link>
                <router-link class="moment-content" :to="{ name: 'goodsDetailId', params: { id: moment.id }}">
                    <img :src="moment.image" alt="">
                    <div class="moment-detail">
                        <div class="moment-title">{{moment.title}}</div>
                        <div class="moment-preview">{{moment.article}}</div>
                        <div class="moment-info">
                            <div class="moment-sower">转发:{{moment.sower}}</div>
                            <div class="moment-time">{{moment.time}}</div>
                        </div>
                        <div class="moment-action">
                            <div class="moment-liker">{{moment.liker}}</div>
                            <div class="moment-comment">{{moment.comment}}</div>
                            <div class="moment-relay">{{moment.relay}}</div>
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
            width 45vw

            & > div
                margin-top 3vw

                &:last-child
                    margin-bottom 8vw

            .moment-item
                position relative
                width 42vw
                background #ffffff
                border-radius 2vw
                box-shadow 2px 2px 2px #dcdcdc
                z-index 10

                .moment-author
                    display flex
                    flex-direction row
                    align-items center
                    padding 2vw
                    color #333333
                    font-weight bold

                    img
                        width 10vw
                        height 10vw
                        margin-right 1vw
                        border-radius 50%

                .moment-content

                    img
                        width 42vw

                    .moment-detail
                        padding 2vw 2vw 0 2vw

                        & > div
                            margin-bottom 1vw

                            &:last-child
                                margin-bottom 0

                        .moment-title
                            color #363636
                            font-size 16px
                            font-weight bold
                            overflow hidden
                            text-overflow ellipsis
                            white-space nowrap

                        .moment-preview
                            height 24px
                            color #636363
                            font-size 12px
                            line-height 12px
                            overflow hidden
                            text-overflow ellipsis

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
                            position relative
                            left -2vw
                            display flex
                            flex-direction row
                            width 42vw
                            background #696969
                            border-radius 0 0 2vw 2vw

                            .moment-liker
                            .moment-comment
                            .moment-relay
                                flex-grow 1
                                color #f5f5f5
                                border-right 2px solid #d8d8d8


</style>
