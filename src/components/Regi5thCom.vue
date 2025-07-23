<template>
  <div :class="css.regiBoxRap">
    <div style="width:38.5rem" v-bind:class="css.box">
      <p :class="css.boxTitle">5th</p>
      <div :class="css.boxCon">
        a
      </div>
      <div :class="css.boxBtnCon">
        <button :class="css.boxBtnPre" v-on:click="onPrevi5th">戻る</button>
        <button :class="css.boxBtnNext">次へ</button>
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
  },
  methods: {
    onPrevi5th() {
      this.$emit('previ5th');
    },
  },
};
</script>

<style lang="css">

</style>
