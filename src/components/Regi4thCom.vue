<template>
  <!-- 省略記法「v-bind:--=""」 → 「:--=""」 -->
  <div :class="css.regiBoxRap">
    <div style="width:38.5rem" :class="css.box">
      <p :class="css.boxTitle">登録内容</p>
      <div :class="css.boxCon">
        <p>{{ loca }}</p>
        <p>{{ name }}</p>
        <p>{{ kana }}</p>
        <p>{{ mail }}</p>
        <p>{{ phone }}</p>
      </div>
      <div :class="css.boxBtnCon">
        <button :class="css.boxBtnTransi" v-on:click="onPrevi4th">戻る</button>
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsYbnckrfiFwhN2_Dz56bQGxp3eGJYfy9np8dp2nbTgu6aUQ/formResponse"
          method="post" target="afterSend" v-on:submit="sending" class="inline">
          <input type="hidden" name="entry.1883969767" :value="loca">
          <input type="hidden" name="entry.688168184" :value="name">
          <input type="hidden" name="entry.329353550" :value="kana">
          <input type="hidden" name="entry.1383150647" :value="mail">
          <input type="hidden" name="entry.1406772280" :value="phone">
          <input type="submit" name="send" value="送信" :class="css.boxBtnTransi">
        </form>
      </div>
      <div class="mx-2 flex items-center justify-center h-10 mt-4"><a href="/">Topへ戻る</a></div>
    </div>
    <iframe name="afterSend" style="display: none"
      id="iFAfterSend" title="transFrame" v-on:load="load">
    </iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      submitted: false,
    };
  },
  computed: {
    // memo css以外もmapStateで受け取れる？
    ...mapState(['css']),
    loca() {
      return this.$store.getters['reji/locaTrans'];
    },
    name() {
      return this.$store.state.reji.name;
    },
    kana() {
      return this.$store.state.reji.kana;
    },
    mail() {
      return this.$store.state.reji.mail;
    },
    phone() {
      return this.$store.state.reji.phone;
    },
  },
  methods: {
    onPrevi4th() {
      this.$emit('previ4th');
    },
    sending() {
      this.submitted = true;
    },
    load() {
      if (this.submitted) {
        window.location = '/';
      }
    },
  },
};
</script>
