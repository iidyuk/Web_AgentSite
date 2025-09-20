<template>
  <!-- 省略記法「v-bind:--=""」 → 「:--=""」 -->
  <div :class="css.regiBoxRap">
    <div style="width:38.5rem" :class="css.box">
      <p :class="css.boxTitle">働く場所</p>
      <div class="flex justify-evenly w-72 mt-10">
        <div class="flex flex-col">
          <label for="dome" class="block mb-2">
            <input type="radio" id="dome" name="entryaaa" v-model="loca" value="domestic">日本企業で働く
          </label>
          <label for="abroad" class="block">
            <input type="radio" id="abroad" name="entryaaa" v-model="loca" value="abroad">海外企業で働く
          </label>
        </div>
      </div>
      <div :class="css.boxBtnCon">
        <!-- <router-link to="/"><p :class="css.boxBtnPre">Topへ戻る</p></router-link> -->
        <!-- <a href="/"><button :class="css.boxBtnTransi">Topへ戻る</button></a> -->
        <p class="mx-2 flex items-center justify-center h-10"><a href="/">Topへ戻る</a></p>
        <button :class="css.boxBtnTransi" v-on:click="onNext1st">次へ</button>
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
    loca: {
      get() {
        return this.$store.state.reji.location;
      },
      set(value) {
        this.$store.commit('reji/updateLoca', value);
      },
    },
  },
  methods: {
    onNext1st() {
      this.$emit('next1st');
    },
  },

};
</script>

<style lang="css">

</style>
