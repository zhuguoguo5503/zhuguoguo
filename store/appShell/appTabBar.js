/**
 * @file appShell/appTabBar module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_APP_TAB_BAR = 'SET_APP_TAB_BAR';

export const state = () => {
    return {
        show: false,
        showBar: false,
        showHello: false,
        tabBar: [],
        active: 0
    };
};

export const mutations = {
    [SET_APP_TAB_BAR](state, appTabBar) {
        state = Object.assign(state, appTabBar);
    }
};

export const actions = {

    /**
     * 设置底部导航条
     *
     * @param {Function} commit commit
     * @param {Object} appTabBar appTabBar
     */
    setAppTabBar({commit}, appTabBar) {
        commit(SET_APP_TAB_BAR, appTabBar);
    }
};
