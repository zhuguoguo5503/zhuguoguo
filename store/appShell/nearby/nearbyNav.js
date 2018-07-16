/**
 * @file appShell/nearby/nearbyNav module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_NEARBY_NAV = 'SET_NEARBY_NAV';

export const state = () => {
        return {
            show: false,
            navList: [{
                name: '推荐',
                subList: []
            }, {
                name: '美食',
                subList: [
                    '好吃的',
                    '不好吃',
                    '好吃的',
                    '不好吃',
                    '好吃的',
                    '不好吃',
                    '好吃的',
                    '不好吃',
                    '好吃的',
                    '不好吃'
                ]
            },{
                name: '旅游',
                subList: [
                    '好玩的',
                    '不好玩',
                    '好玩的',
                    '不好玩',
                    '好玩的',
                    '不好玩',
                    '好玩的',
                    '不好玩',
                    '好玩的',
                    '不好玩'
                ]
            },{
                name: '服装',
                subList: []
            },{
                name: '美容',
                subList: []
            },{
                name: '娱乐',
                subList: []
            },{
                name: '洗浴',
                subList: []
            }]
        };
    };

export const mutations = {
    [SET_NEARBY_NAV](state, indexTabBar) {
        state = Object.assign(state, indexTabBar);
    }
};

export const actions = {

    /**
     * 设置同城页导航目录
     *
     * @param {Function} commit commit
     * @param {Object} nearbyNav nearbyNav
     */
    setNearbyNav({commit}, nearbyNav) {
        commit(SET_NEARBY_NAV, nearbyNav);
    }
};
