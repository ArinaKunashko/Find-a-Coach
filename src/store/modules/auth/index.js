import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  state() {
    return {
      token: null,
      userId: null,
      didAutoLogout: false,
    };
  },
  getters,
  mutations,
  actions,
};
