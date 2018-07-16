/**
 * @file appShell/index/indexTabBar module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_INDEX_TAB_BAR = 'SET_INDEX_TAB_BAR';

export const state = () => {
    return {
        show: false,
        tabBar: []
    };
};

export const mutations = {
    [SET_INDEX_TAB_BAR](state, indexTabBar) {
        state = Object.assign(state, indexTabBar);
    }
};

export const actions = {

    /**
     * 设置首页导航条
     *
     * @param {Function} commit commit
     * @param {Object} indexTabBar indexTabBar
     */
    setIndexTabBar({commit}, indexTabBar) {
        commit(SET_INDEX_TAB_BAR, indexTabBar);
    }
};
