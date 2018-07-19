/**
 * @file appShell/community/communityMoment module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_COMMUNITY_MOMENT = 'SET_COMMUNITY_MOMENT';

export const state = () => {
    return {
        momentListLeft: [{
            id: 1,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎创始人伊夫圣洛朗最开始为迪奥公司设计时装后成立自己的品牌前卫而古典至今品牌的旗舰产品仍然是昂贵的高级时装品牌产品中包括时装香水饰品鞋帽护肤化妆品及香烟等',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531843897232&di=5fcf2eeb8c8907b11882320bc1115b4f&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170602%2F0ce77e7fcc9e40999d45e2baef8a74db_th.png',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531844048110&di=f96d9205903e80f25220f01c4a3c0d71&imgtype=0&src=http%3A%2F%2Fupload.mcchina.com%2F2014%2F1223%2F1419308619284.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        },{
            id: 3,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898933148&di=3070bbeff3b288b4b789e687a416666b&imgtype=0&src=http%3A%2F%2Fs.handu.com%2Fimages%2Fupload%2FImage%2F20141117%2F20141117131040_29521.png',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531844048110&di=f96d9205903e80f25220f01c4a3c0d71&imgtype=0&src=http%3A%2F%2Fupload.mcchina.com%2F2014%2F1223%2F1419308619284.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        },{
            id: 5,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899102615&di=0da0cfedfcfddac50bc07fbf57499120&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2641489306%2C4195637275%26fm%3D214%26gp%3D0.jpg',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531844048110&di=f96d9205903e80f25220f01c4a3c0d71&imgtype=0&src=http%3A%2F%2Fupload.mcchina.com%2F2014%2F1223%2F1419308619284.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        }],
        momentListRight: [{
            id: 2,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531899102615&di=0da0cfedfcfddac50bc07fbf57499120&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2641489306%2C4195637275%26fm%3D214%26gp%3D0.jpg',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531844048110&di=f96d9205903e80f25220f01c4a3c0d71&imgtype=0&src=http%3A%2F%2Fupload.mcchina.com%2F2014%2F1223%2F1419308619284.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        },{
            id: 4,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎创始人伊夫圣洛朗最开始为迪奥公司设计时装后成立自己的品牌前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898932959&di=a0a2b9305527c0a37f2ec6e2bb66e847&imgtype=0&src=http%3A%2F%2Fwww.71lady.com%2Fuploads%2Fallimg%2F141125%2F1_141125165747_1.jpg',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848863308&di=cde032d6bab6fc30d2b25ddc96330626&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9f2f070828381f307d06c434a3014c086e06f014.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        },{
            id: 6,
            title: '超级好看的YSL超级好看的YSL',
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531898933083&di=73002326816c0f2b2ab6efb1360571b7&imgtype=0&src=http%3A%2F%2Fimg10.makepolo.net%2Fimages%2Fformals%2Fimg%2Fproduct%2F145%2F467%2F3_23b9dc93954738c4a7b7767c9b20fa16.jpg',
            authorID: 1,
            author: 'Tricker',
            avator: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531844048110&di=f96d9205903e80f25220f01c4a3c0d71&imgtype=0&src=http%3A%2F%2Fupload.mcchina.com%2F2014%2F1223%2F1419308619284.jpg',
            sower: 'Logicer',
            liker: 666,
            comment: 888,
            relay: 999,
            time: '25分钟前'
        }],
    };
};

export const mutations = {
    [SET_COMMUNITY_MOMENT](state, momentList) {
        state = Object.assign(state, momentList);
    }
};

export const actions = {

    /**
     * 设置同城页导航目录
     *
     * @param {Function} commit commit
     * @param {Object} momentList momentList
     */
    setCommunityMoment({commit}, momentList) {
        commit(SET_COMMUNITY_MOMENT, momentList);
    }
};
