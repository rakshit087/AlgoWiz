import { createStore } from "vuex";
export default createStore({
  state: {
    algos: {},
  },
  mutations: {
    saveAlgorithmInfo: function(state, algos) {
      console.log(algos);
      for (var cat of algos) {
        state.algos[cat["category"]] = new Array();
        for (var name of cat["algos"]) {
          state.algos[cat["category"]].push(name["name"]);
        }
      }
    }
  },
  actions: {
    saveAlgorithmInfo: function({ commit }, algos) {
      commit("saveAlgorithmInfo", algos);
    }
  },
  modules: {}
});
