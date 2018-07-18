/**
 * @file appShell/appHeader module
 * @author Tricker(tricker.pan@gmail.com)
 */

export const SET_APP_HEADER = 'SET_APP_HEADER';

export const state = () => {
    return {
        /**
         * 是否展示顶部导航栏
         *
         * @type {boolean}
         */
        show: true,

        /**
         * 标题内容
         *
         * @type {string}
         */
        title: '助果果',

        /**
         * 标题内容
         *
         * @type {Array}
         */
        community: [],

        /**
         * logo图标
         *
         * @type {object}
         */
        logoIcon: {
            src: '',
            alt: ''
        },

        /**
         * 是否展示左侧返回图标
         *
         * @type {boolean}
         */
        showBack: false,

        /**
         * 是否展示左侧logo
         *
         * @type {boolean}
         */
        showLogo: false,

        /**
         * 是否展示中间标题
         *
         * @type {boolean}
         */
        showTitle: false,


        /**
         * 是否展示中间标题
         *
         * @type {boolean}
         */
        showCommunity: false,

        /**
         * 是否展示右侧actions
         *
         * @type {boolean}
         */
        showActions: false,

        /**
         * 右侧操作按钮数组
         *
         * @type {Array}
         */
        actions: []
    };
};

export const mutations = {
    [SET_APP_HEADER](state, appHeader) {
        state = Object.assign(state, appHeader);
    }
};

export const actions = {

    /**
     * 设置顶部导航条
     *
     * @param {Function} commit commit
     * @param {Object} appHeader appHeader
     */
    setAppHeader({commit}, appHeader) {
        commit(SET_APP_HEADER, appHeader);
    }
};
