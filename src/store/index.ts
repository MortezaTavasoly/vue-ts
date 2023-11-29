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
      localStorage.setItem("loggedIn", JSON.stringify(!state.loggedin));
      state.loggedin = !state.loggedin;
    },
  },

  // البته چون قراره فقط فرایند توی فرانت  فقط اتفاق بیفته توی
  //  اکشن بر فرض مثال یک ریکوئست برای تایید یوزرینم و پسورد صورت گرفته و جوابش مثبت بوده
  actions: {
    updateLogging(context) {
      context.commit("logging");
    },
  },
});
