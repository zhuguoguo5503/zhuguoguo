<template>
    <div class="goods-list-wrapper">
        <div class="goods-col">
            <div class="goods-item"
                 v-for="goods in goodsListLeft"
                 :key="goods.id">
                <router-link :to="{ name: 'goodsDetailId', params: { id: goods.id }}">
                    <img :src="goods.image" alt="">
                    <div class="goods-intro">
                        <div class="goods-intro-top">
                            <div class="goods-name">{{goods.name}}</div>
                        </div>
                        <div class="goods-intro-center">
                            <div class="goods-sales">
                                <div class="goods-sales-item"
                                     v-for="(sales, index) in goods.sales"
                                     :key="index">{{sales}}</div>
                            </div>
                            <div class="goods-location">{{goods.location}}</div>
                        </div>
                        <div class="goods-intro-bottom">
                            <div class="goods-price">￥{{goods.price}}</div>
                            <div class="goods-sold">{{goods.sold}}人付款</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="goods-col">
            <div class="goods-item"
                 v-for="goods in goodsListRight"
                 :key="goods.id">
                <router-link :to="{ name: 'goodsDetailId', params: { id: goods.id }}">
                    <img :src="goods.image" alt="">
                    <div class="goods-intro">
                        <div class="goods-intro-top">
                            <div class="goods-name">{{goods.name}}</div>
                        </div>
                        <div class="goods-intro-center">
                            <div class="goods-sales">
                                <div class="goods-sales-item"
                                     v-for="(sales, index) in goods.sales"
                                     :key="index">{{sales}}</div>
                            </div>
                            <div class="goods-location">{{goods.location}}</div>
                        </div>
                        <div class="goods-intro-bottom">
                            <div class="goods-price">￥{{goods.price}}</div>
                            <div class="goods-sold">{{goods.sold}}人付款</div>
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
        name: "goodsList",
        computed: {
            ...mapState('appShell/main/goodsList', [
                'goodsListLeft',
                'goodsListRight'
            ])
        }
    }
</script>

<style lang="stylus" scoped>

    .goods-list-wrapper
        display flex
        flex-direction row
        justify-content space-between
        overflow-x hidden
        overflow-y scroll

        .goods-col
            width 45vw

            & > div
                margin-top 3vw

                &:last-child
                    margin-bottom 8vw

            .goods-item
                position relative
                width 42vw
                background #ffffff
                border-radius 2vw
                box-shadow 2px 2px 2px #dcdcdc
                z-index 10

                img
                    position relative
                    width 42vw
                    margin-bottom -2vw
                    border-radius 2vw 2vw 0 0

                .goods-intro
                    padding 1vw

                    .goods-intro-top

                        .goods-name
                            text-align left
                            color gray

                    .goods-intro-center
                    .goods-intro-bottom
                        display flex
                        flex-direction row
                        justify-content space-between
                        align-items center
                        color #acacac
                        font-size 10px

                    .goods-price
                        font-size 12px
                        color red

</style>
