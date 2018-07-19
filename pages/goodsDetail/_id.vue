<template>
    <div class="goods-detail-wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide.image" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>

    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    function setState(store) {
        store.dispatch('appShell/appHeader/setAppHeader', {
            show: true,
            showBack: true,
            showLogo: false,
            showCommunity: false,
            showTitle: false,
            showActions: false,
        })
    }

    export default {
        data () {
            return {
                swiperOption: {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                },
                swiperSlides: [{
                    id: 1,
                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532010420659&di=c3e378fdc541e328af8e67d9538bf8c7&imgtype=0&src=http%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft160%2F102%2F117048819%2F140429%2Fdaf122d6%2F5380414fN10572ac4.jpg'
                },{
                    id: 2,
                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532010420658&di=83f7241ac7f16345a0c619408c6c3d9d&imgtype=0&src=http%3A%2F%2Fimg10.360buyimg.com%2Fimgzone%2Fjfs%2Ft157%2F232%2F121956790%2F183154%2Ffb18b7e8%2F53804135N6a532899.jpg'
                },{
                    id: 3,
                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532010494631&di=e7d4273a679247212974753c87066178&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D3281445799%2C2059957436%26fm%3D214%26gp%3D0.jpg'
                },{
                    id: 4,
                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532010420654&di=7b901eb27846da71ac7a67dff638c8e1&imgtype=0&src=http%3A%2F%2Fimg.11665.com%2Fimg04_p%2Fi4%2FT1hvVcFKpaXXXXXXXX_%2521%25210-item_pic.jpg'
                },{
                    id: 5,
                    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532010493631&di=76274ebf4b847ed6660e666a20373745&imgtype=0&src=http%3A%2F%2Fimg007.hc360.cn%2Fm5%2FM05%2F0C%2FCF%2FwKhQ6lRw4cmECLBDAAAAAONyXLg464.jpg'
                },]
            }
        },
        name: "goodsDetailId",
        metaInfo() {
            return {
                title: `${this.$route.params.name}`,
                titleTemplate: '%s - 助果果',
                meta: [
                    {name: 'keywords', content: 'lavas PWA'},
                    {name: 'description', content: '基于 Vue 的 PWA 解决方案，帮助开发者快速搭建 PWA 应用，解决接入 PWA 的各种问题'}
                ]
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mounted() {
        },
        async asyncData({store, route}) {
            setState(store);
        },
        activated() {
            setState(this.$store);
        }
    }
</script>

<style lang="stylus" scoped>

    .goods-detail-wrapper
        position absolute
        top 26vw
        right 0
        bottom 0
        left 0

        .swiper-slide
            width 100%
            height 150vw
            background #e15517

            img
                width 100%
                height 150vw

</style>
