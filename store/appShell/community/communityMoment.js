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
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
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
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848707905&di=e3308d6ed844b2e0fa93e844bd83efa7&imgtype=0&src=http%3A%2F%2Fimg3.pxto.com.cn%2F201710%2F04%2F59d47dc5cd5e0.jpg',
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
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848794833&di=3ff0bbf786a2da46aaceaad5679e5f00&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN01%2FM00%2FAF%2F38%2FCgQCrlIgW8CAMHdBAAGxTOqj0CM90500.jpg',
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
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848816909&di=3369167917a24b6bd27f1b48849439ef&imgtype=0&src=http%3A%2F%2Fd6.yihaodianimg.com%2FN00%2FM08%2FEA%2FA7%2FCgMBmVNqD_CAe4gDAAHUNIMsiMM38200.jpg',
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
            article: '五十三年前成立于巴黎。创始人伊夫圣洛朗最开始为迪奥公司设计时装，后成立自己的品牌，前卫而古典，至今品牌的旗舰产品仍然是昂贵的高级时装，品牌产品中包括时装，香水、饰品、鞋帽,、护肤化妆品及香烟等。',
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848707905&di=e3308d6ed844b2e0fa93e844bd83efa7&imgtype=0&src=http%3A%2F%2Fimg3.pxto.com.cn%2F201710%2F04%2F59d47dc5cd5e0.jpg',
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
            image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531848905626&di=c414950d0800f07abf31221883c9a80f&imgtype=0&src=http%3A%2F%2Fcp2.douguo.net%2Fupload%2Fcaiku%2F7%2Ff%2F9%2Fyuan_7ffc376c354aedaf7481fc4e4d244c99.jpg',
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
