/**
 * @file appShell/community/moment module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_MOMENT = 'SET_MOMENT';

export const state = () => {
    return {
        momentList: []
    };
};

export const mutations = {
    [SET_MOMENT](state, momentList) {
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
    setNearbyNav({commit}, momentList) {
        commit(SET_MOMENT, momentList);
    }
};
