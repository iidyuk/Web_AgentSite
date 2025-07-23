<template>
  <div class="regi">
    <h1 v-bind:class="css.regiTitle">This is registration page</h1>
    <!-- <router-link to="/">Topへ戻る</router-link> -->
    <Regi1stCom v-show="show1st" v-on:next1st="next1st"/>
    <Regi2ndCom v-show="show2nd" v-on:previ2nd="previ2nd" v-on:next2nd="next2nd"/>
    <Regi3rdCom v-show="show3rd" v-on:previ3rd="previ3rd" v-on:next3rd="next3rd"/>
    <Regi4thCom v-show="show4th" v-on:previ4th="previ4th" v-on:next4th="next4th"/>
    <Regi5thCom v-show="show5th" v-on:previ5th="previ5th"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Regi1stCom from '@/components/Regi1stCom.vue';
import Regi2ndCom from '@/components/Regi2ndCom.vue';
import Regi3rdCom from '@/components/Regi3rdCom.vue';
import Regi4thCom from '@/components/Regi4thCom.vue';
import Regi5thCom from '@/components/Regi5thCom.vue';

export default {
  name: 'RegiView',
  components: {
    Regi1stCom,
    Regi2ndCom,
    Regi3rdCom,
    Regi4thCom,
    Regi5thCom,
  },
  data() {
    return {
      show1st: true,
      show2nd: false,
      show3rd: false,
      show4th: false,
      show5th: false,
    };
  },
  computed: {
    ...mapState(['css']),
  },
  methods: {
    next1st() {
      this.show1st = !this.show1st;
      this.show2nd = !this.show2nd;
    },
    previ2nd() {
      this.show1st = !this.show1st;
      this.show2nd = !this.show2nd;
    },
    next2nd() {
      this.show2nd = !this.show2nd;
      this.show3rd = !this.show3rd;
    },
    previ3rd() {
      this.show2nd = !this.show2nd;
      this.show3rd = !this.show3rd;
    },
    next3rd() {
      this.show3rd = !this.show3rd;
      this.show4th = !this.show4th;
    },
    previ4th() {
      this.show3rd = !this.show3rd;
      this.show4th = !this.show4th;
    },
    next4th() {
      this.show4th = !this.show4th;
      this.show5th = !this.show5th;
    },
    previ5th() {
      this.show4th = !this.show4th;
      this.show5th = !this.show5th;
    },

  },
};
</script>

<style lang="css">

</style>
