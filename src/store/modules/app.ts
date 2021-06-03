interface stateInter {
  [k: string]: never;
}

const state: stateInter = {};

const mutations = {};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
