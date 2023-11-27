import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      userName: "username1",
      password: "1234",
    },
    loggedin: false,
  },
  mutations: {
    logging: (state) => {
      state.loggedin = !state.loggedin;
    },
  },
});
