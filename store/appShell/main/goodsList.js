/**
 * @file appShell/main/goodsList module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_GOODS_LIST = 'SET_GOODS_LIST';

export const state = () => {
    return {
        goodsListLeft: [{
            id: 1,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531824417128&di=1a8fad952c141c35ba3accdfa10e1bbd&imgtype=0&src=http%3A%2F%2Fec8.images-amazon.com%2Fimages%2FI%2F71%252BMaNr8aWL._SL1300_.jpg',
            price: 10.24,
            sales: [
                '包邮'
            ],
            location: '杭州',
            sold: 567,
        },{
            id: 3,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531824417127&di=094107a4134a25f8a389a4401f1e76f0&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Ff31fbe096b63f6241885c5ef8c44ebf81b4ca306.jpg',
            price: 10.24,
            sales: [
                '满减'
            ],
            location: '上海',
            sold: 567,
        },{
            id: 5,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531824417127&di=853091869e66545cd9b0f1edaa52c570&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2FpopWaterMark%2Fjfs%2Ft841%2F169%2F414058082%2F118770%2Fcec70271%2F5521f713N7e47ad4a.jpg',
            price: 10.24,
            sales: [
                '满减'
            ],
            location: '白山',
            sold: 567,
        }],
        goodsListRight: [{
            id: 2,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531824417127&di=f6b1d0f1ec9759915fb798d259664bd5&imgtype=0&src=http%3A%2F%2Fp0.ifengimg.com%2Fpmop%2F2017%2F0904%2F48017EBB0BD414CA32A2AFAA32E892F5C0F795A7_size87_w800_h1246.jpeg',
            price: 10.24,
            sales: [
                '七折'
            ],
            location: '北京',
            sold: 567,
        },{
            id: 4,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531825886498&di=b6b51d02a7e55bf9f647bcfedaeb1051&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2156748352%2C3203296059%26fm%3D214%26gp%3D0.jpg',
            price: 10.24,
            sales: [
                '包邮'
            ],
            location: '上海',
            sold: 567,
        },{
            id: 6,
            name: '好吃的',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531824417121&di=9095b711d41e8e544b2f8d99e5991752&imgtype=0&src=http%3A%2F%2Finfo.moonbasa.com%2Ffiles%2F2017%2F6%2F23%2F29-883174513919.jpg',
            price: 10.24,
            sales: [
                '七折'
            ],
            location: '深圳',
            sold: 567,
        }]
    };
};

export const mutations = {
    [SET_GOODS_LIST](state, goodsList) {
        state = Object.assign(state, goodsList);
    }
};

export const actions = {

    /**
     * 设置同城页导航目录
     *
     * @param {Function} commit commit
     * @param {Object} goodsList goodsList
     */
    setNearbyNav({commit}, goodsList) {
        commit(SET_GOODS_LIST, goodsList);
    }
};
