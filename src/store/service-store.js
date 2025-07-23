// import text from '../assets/js/text';

export default {
  // namespaced: true,
  state: {
    // t: text,

    // imagePath: '', // 初期の画像情報
    // t: text,
    // ↓ slider のポジション設定
    // workPattern: 'domestic',
    test1: '',
    test2: '',
    test3: '',
    test4: '',
    test5: '',
    checkedRadi: 'radio01',
    slidePosiLeft: {
      posi1: true, posi2: false, posi3: false, 'is-animating': true,
    },
    slidePosiCenter: {
      posi1: false, posi2: true, posi3: false, 'is-animating': true,
    },
    slidePosiRight: {
      posi1: false, posi2: false, posi3: true, 'is-animating': true,
    },
    // ↑ slider のポジション設定
    // ↓ domestic-abroad の表示切替フラグ, watch で切り替え処理を定義
    isDomestic: true,
    isAbroad: false,
    // ↑ domestic-abroad の表示切替フラグ
  },
  mutations: {
    beforeUp(state) {
      state.test1 = state.slidePosiCenter;
      state.test2 = state.slidePosiRight;
      state.test3 = state.slidePosiRight;
      state.test4 = state.slidePosiRight;
      state.test5 = state.slidePosiRight;
      const newTagClass = [
        state.test1,
        state.test2,
        state.test3,
        state.test4,
        state.test5,
      ];
      // state.t.serviceFlow.descrip.domestic.forEach((item, index) => {
      //   item.tagClass = newTagClass[index];
      // });
      // state.t.serviceFlow.descrip.abroad.forEach((item, index) => {
      //   item.tagClass = newTagClass[index];
      // });
      state.t.serviceFlow.descrip.domestic.map((item, index) => ({
        ...item,
        tagClass: newTagClass[index],
      }));
      state.t.serviceFlow.descrip.abroad.map((item, index) => ({
        ...item,
        tagClass: newTagClass[index],
      }));
    },
    upCheckedRadi(state, newValue) {
      state.checkedRadi = newValue;
    },
    upIsDome(state, newValue) {
      state.isDomestic = newValue;
    },
    upIsAbroad(state, newValue) {
      state.isAbroad = newValue;
    },
    toggleBtn(state, payload) {
      switch (payload) {
        case 1:
          state.test1 = state.slidePosiCenter;
          state.test2 = state.slidePosiRight;
          state.test3 = state.slidePosiRight;
          state.test4 = state.slidePosiRight;
          state.test5 = state.slidePosiRight;
          break;
        case 2:
          // 1枚目をposi1, 2枚目をposi2
          state.test1 = state.slidePosiLeft;
          state.test2 = state.slidePosiCenter;
          state.test3 = state.slidePosiRight;
          state.test4 = state.slidePosiRight;
          state.test5 = state.slidePosiRight;
          break;
        case 3:
          state.test1 = state.slidePosiLeft;
          state.test2 = state.slidePosiLeft;
          state.test3 = state.slidePosiCenter;
          state.test4 = state.slidePosiRight;
          state.test5 = state.slidePosiRight;
          break;
        case 4:
          state.test1 = state.slidePosiLeft;
          state.test2 = state.slidePosiLeft;
          state.test3 = state.slidePosiLeft;
          state.test4 = state.slidePosiCenter;
          state.test5 = state.slidePosiRight;
          break;
        case 5:
          state.test1 = state.slidePosiLeft;
          state.test2 = state.slidePosiLeft;
          state.test3 = state.slidePosiLeft;
          state.test4 = state.slidePosiLeft;
          state.test5 = state.slidePosiCenter;
          break;
        default:
          break;
      }
    },

  },
  getters: {
    test1Set(state) {
      state.test1 = state.slidePosiCenter;
      return state.test1;
      // testSet1: state => state.slidePosiCenter;
    },
    test2Set(state) {
      state.test2 = state.slidePosiRight;
      return state.test2;
    },
    test3Set(state) {
      state.test3 = state.slidePosiRight;
      return state.test3;
    },
    test4Set(state) {
      state.test4 = state.slidePosiRight;
      return state.test4;
    },
    test5Set(state) {
      state.test5 = state.slidePosiRight;
      return state.test5;
    },
  },
  actions: {
    workPattern(context, state, payload) {
      switch (payload) {
        case 'domestic':
          state.isDomestic = true;
          state.isAbroad = false;
          // state.toggleBtn(1);
          context.commit('toggleBtn(1)');
          state.checkedRadi = 'radio01';
          break;
        case 'abroad':
          state.isDomestic = false;
          state.isAbroad = true;
          // state.toggleBtn(1);
          context.commit('toggleBtn(1)');
          state.checkedRadi = 'radio01';
          break;
        default:
          break;
      }
    },
    prevBtn(context, state) {
      switch (state.checkedRadi) {
        case 'radio01':
          context.commit('toggleBtn(5)');
          state.checkedRadi = 'radio05';
          break;
        case 'radio02':
          context.commit('toggleBtn(1)');
          state.checkedRadi = 'radio01';
          break;
        case 'radio03':
          context.commit('toggleBtn(2)');
          state.checkedRadi = 'radio02';
          break;
        case 'radio04':
          context.commit('toggleBtn(3)');
          state.checkedRadi = 'radio03';
          break;
        case 'radio05':
          context.commit('toggleBtn(4)');
          state.checkedRadi = 'radio04';
          break;
        default:
          break;
      }
    },
    nextBtn(context, state) {
      switch (state.checkedRadi) {
        case 'radio01':
          context.commit('toggleBtn(2)');
          state.checkedRadi = 'radio02';
          break;
        case 'radio02':
          context.commit('toggleBtn(3)');
          state.checkedRadi = 'radio03';
          break;
        case 'radio03':
          context.commit('toggleBtn(4)');
          state.checkedRadi = 'radio04';
          break;
        case 'radio04':
          context.commit('toggleBtn(5)');
          state.checkedRadi = 'radio05';
          break;
        case 'radio05':
          context.commit('toggleBtn(1)');
          state.checkedRadi = 'radio01';
          break;
        default:
          break;
      }
    },
  },
};
