import { createStore } from "vuex";

export default createStore({
  state: {
    loggedin: false,
  },

  getters: {
    logginStatus: (state) => {
      return state.loggedin;
    },
  },

  mutations: {
    logging: (state, payload) => {
      if (payload) {
        localStorage.setItem("loggedIn", JSON.stringify(payload));
        state.loggedin = payload;
      } else {
        localStorage.setItem("loggedIn", JSON.stringify(payload));
        state.loggedin = payload;
      }
    },
  },

  // البته چون قراره فقط فرایند توی فرانت  فقط اتفاق بیفته توی
  //  اکشن بر فرض مثال یک ریکوئست برای تایید یوزرینم و پسورد صورت گرفته و جوابش مثبت بوده
  actions: {
    userLoggingOut(context) {
      context.commit("logging", false);
    },
    userLoggingIn(context, action) {
      context.commit("logging", true);
    },
  },
});
