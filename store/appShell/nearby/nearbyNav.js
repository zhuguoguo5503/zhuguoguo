/**
 * @file appShell/nearby/nearbyNav module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_NEARBY_NAV = 'SET_NEARBY_NAV';

export const state = () => {
    return {
        show: false,
        mainNav: [],
        subNav: []
    };
};

export const mutations = {
    [SET_NEARBY_NAV](state, indexTabBar) {
        state = Object.assign(state, indexTabBar);
    }
};

export const actions = {

    /**
     * 设置附近页导航目录
     *
     * @param {Function} commit commit
     * @param {Object} nearbyNav nearbyNav
     */
    setNearbyNav({commit}, nearbyNav) {
        commit(SET_NEARBY_NAV, nearbyNav);
    }
};
