export default {
  namespaced: true,
  state: {
    location: '',
    locaText: '',
    name: '',
    kana: '',
    mail: '',
    phone: '',
  },
  mutations: {
    updateLoca(state, newValue) {
      state.location = newValue;
    },
    updateName(state, newValue) {
      state.name = newValue;
    },
    updateKana(state, newValue) {
      state.kana = newValue;
    },
    updateMail(state, newValue) {
      state.mail = newValue;
    },
    updatePhone(state, newValue) {
      state.phone = newValue;
    },
  },
  getters: {
    locaTrans(state) {
      if (state.location === 'domestic') {
        state.locaText = '日本企業で働く';
      } else if (state.location === 'abroad') {
        state.locaText = '海外企業で働く';
      }
      return state.locaText;
    },
  },
};
