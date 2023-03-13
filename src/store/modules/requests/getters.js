export default {
  requests(state, getters, rootGetters, rootState) {
    const coachId = rootGetters.userId;
    console.log(state.requests);
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
