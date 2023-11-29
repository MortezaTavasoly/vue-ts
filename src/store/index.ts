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
    updateLogging(context, action) {
      if (action === "logging-in") {
        context.commit("logging", true);
      } else if (action === "logging-out") {
        context.commit("logging", false);
      }
    },
  },
});
