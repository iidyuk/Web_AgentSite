<template>
  <!-- 省略記法「v-bind:--=""」 → 「:--=""」 -->
  <div :class="css.regiBoxRap">
    <div style="width:38.5rem" :class="css.box">
      <p :class="css.boxTitle">お名前</p>
      <div :class="css.boxCon">
        <label for="name">
          <input type="text" id="name" placeholder="ご氏名" maxlength="30"
            :class="css.boxConInputText" v-model="name" name="entryaaa">
        </label>
        <label for="kana">
          <input type="text" id="kana" placeholder="よみ" maxlength="50"
            :class="css.boxConInputText" v-model="kana" name="entryaaa">
        </label>
      </div>
      <div :class="css.boxBtnCon">
        <button :class="css.boxBtnTransi" v-on:click="onPrevi2nd">戻る</button>
        <button :class="css.boxBtnTransi" v-on:click="onNext2nd">次へ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['css']),
    name: {
      get() {
        return this.$store.state.reji.name;
      },
      set(value) {
        this.$store.commit('reji/updateName', value);
      },
    },
    kana: {
      get() {
        return this.$store.state.reji.kana;
      },
      set(value) {
        this.$store.commit('reji/updateKana', value);
      },
    },
  },
  methods: {
    onPrevi2nd() {
      this.$emit('previ2nd');
    },
    onNext2nd() {
      this.$emit('next2nd');
    },
  },
};
</script>
