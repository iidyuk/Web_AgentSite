<template>
  <!-- 省略記法「v-bind:--=""」 → 「:--=""」 -->
  <div :class="css.regiBoxRap">
    <div style="width:38.5rem" :class="css.box">
      <p :class="css.boxTitle">3rd連絡先</p>
      <div class="flex flex-col w-72 mt-10 space-y-4">
        <label for="email" class="block">
          <input type="email" id="email" placeholder="E-Mail" maxlength="319" v-model="mail">
        </label>
        <label for="phone" class="block">
          <input type="text" id="phone" placeholder="Phone" maxlength="30" v-model="phone">
        </label>
      </div>
      <div :class="css.boxBtnCon">
        <button :class="css.boxBtnTransi" v-on:click="onPrevi3rd">戻る</button>
        <button :class="css.boxBtnTransi" v-on:click="onNext3rd">次へ</button>
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
    mail: {
      get() {
        return this.$store.state.reji.mail;
      },
      set(value) {
        this.$store.commit('reji/updateMail', value);
      },
    },
    phone: {
      get() {
        return this.$store.state.reji.phone;
      },
      set(value) {
        this.$store.commit('reji/updatePhone', value);
      },
    },
  },
  methods: {
    onPrevi3rd() {
      this.$emit('previ3rd');
    },
    onNext3rd() {
      this.$emit('next3rd');
    },
  },
};
</script>
