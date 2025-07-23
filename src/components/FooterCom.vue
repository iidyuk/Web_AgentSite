<template>
  <div class="Footer_Wrapper">
    <div class="Footer">
      <div class="Footer_Menu">
        <ol>
          <li v-for="(footerMenu, key) in t.footerMenu" :key="key">
            <router-link v-bind:to="footerMenu.link">
              <p>{{ footerMenu.title }}</p>
            </router-link>
            <!-- <button v-bind:class="footerMenu.className" v-on:click="addBodyClass">
              {{ footerMenu.title }}
            </button> -->
          </li>
        </ol>
      </div>
      <div class="Footer_Logo">
        <!-- <a href="#">
          <img src="" alt="">
        </a> -->
      </div>
      <div class="Footer_Copyright"><p>{{ t.copyright }}</p></div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import text from '../assets/js/text';

export default {
  name: 'FooterCom',
  data() {
    return {
      t: text,
    };
  },
  computed: {
    // ...mapState(['t']),
  },
};
</script>

<style>
.Footer_Wrapper{
  display: flex;
  justify-content: center;
  margin: 40px 0 0;
  padding: 0 0 32px;
}
.Footer_Menu{
  margin: 120px 0 0;
}
.Footer_Menu ol{
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 560px;
}
.Footer_Menu ol a{
  text-decoration: none;
  color: inherit;
}
.Footer_Menu ol li{
  font-size: 16px;
}
.Footer_Menu ol li span{
  cursor: pointer;
}
.Footer_Logo{
  text-align: center;
  margin: 64px 0 0;
}
.Footer_Logo img{
  width: 26vw;
  max-width: 176px;
  min-width: 136px;
  margin: 0 auto;
}
.Footer_Copyright{
  margin: 64px 0 0;
  text-align: center;
}
</style>
