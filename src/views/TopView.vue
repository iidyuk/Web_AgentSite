<template>
  <div>
    <div class="TopImage_Wrapper">
      <div class="TopImage">
        <div class="TopImage_Logo">
        </div>
        <div class="TopImage_RegisterBtn">
          <router-link class="btn_02" to="/regi"><p>{{ t.registerType.register }}</p></router-link>
        </div>
        <div class="TopImage_Pic-Textbox">
          <div class="TopImage_TextBoxPolicy">
            <p v-for="(policy, key) in t.policy" :key="key">{{ policy }}</p>
          </div>
        </div>
        <div class="TopImage_TextBoxMission">
          <p v-for="(mission, key) in t.mission" :key="key" ref="scrollRlMission">{{ mission }}</p>
        </div>
      </div>
    </div>
    <!-- <AchieveCom /> -->
    <ServiceFlow />
    <FooterCom />
  </div>
</template>

<script>
// import { mapState } from 'vuex';

import ScrollReveal from 'scrollreveal';

import AchieveCom from '@/components/AchieveCom.vue';
import ServiceFlow from '@/components/ServiceFlow.vue';
import FooterCom from '@/components/FooterCom.vue';

import text from '../assets/js/text';

export default {
  /* eslint-disable */
  name: 'TopView',
  components: {
    AchieveCom,
    ServiceFlow,
    FooterCom,
  },
  mounted() {
    ScrollReveal().reveal(this.$refs.scrollRlMission,{
      duration: 2000, 
      origin: 'left', 
      distance: '72px',
      reset: false,
    })
  },
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
body.open{
  overflow: hidden;
}

/*  */
/* TopImage */
.TopImage{
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto 64px;
}

.TopImage_Logo{
  padding: 40px 0 0 0;
  text-align: left;
}
.TopImage_Logo img{
  width: 80px;
}
.TopImage_Logo_ImageData{
  display: inline-block;
  position: relative;
  bottom: 200px;
}
.TopImage_RegisterBtn{
  font-family: "Sawarabi Gothic";
}
.TopImage_Pic-Textbox{
  position: relative;
  text-align: right;
  z-index: -1;
  background-image: url(../assets/img/pic_city.png);
  background-size: 92% auto;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(100vw * 0.56);
}
.TopImage_TextBoxPolicy{
  display: inline-block;
  margin: 64px 16px 0 0;
  padding: 8px 16px;
  border: 1px solid #f4fdfc5c;
  backdrop-filter: blur(20px);
  background-image: linear-gradient(315deg, #ffffff94 25%, #f7fcfffa 70%, #ffffffad 85%);
  box-shadow: 4px 4px 4px 0px #89a99e0f;
  border-radius: 15px;
  text-align: left;
  font-size: 20px; /*for IE*/
  font-size: clamp(16px, 3vw - 2px, 28px);
  color: #400404;
}
.TopImage_TextBoxPolicy p{
  margin: 8px 0 8px;
}
.TopImage_TextBoxPolicy em{
  font-size: clamp(29px, 4vw, 36px);
  color: cadetblue;
  font-weight: 600;
}
.TopImage_TextBoxMission{
  margin: 32px 0 0;
  font-size: 20px;
  font-size: clamp(18px, 2.6vw, 32px);
}
.TopImage_TextBoxMission p{
  margin: 8px 0 8px;
}
.TopImage_TextBoxMission p:nth-child(2){
  text-align: center;
}

/* ↓↓ Button */
a.btn_02 {
  display: block;
  text-decoration: none;
  margin: 12px 32px 16px auto;
  width: 192px;
  height: 40px;
  transition: 0.3s ease-in-out;
  background-color: #A2F0F5;
  border-radius: 35px;
  color: darkslategrey;
  position: relative;
}
a.btn_02:hover{
  background-color: aliceblue;
}
a.btn_02::before {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: calc(100% + 8px);
  height: calc(100% + 8px);
  border: 2px solid #27acd9;
  border-radius: 35px;
  box-shadow: 2px 2px 1px 0px #93c2d326;
  transition: 0.2s;
  z-index: -1;
}
a.btn_02:hover::before {
  top: -3px;
  left: -3px;
  width: calc(100% + 6px);
  height: calc(100% + 5px);
  box-shadow: none;
}
a.btn_02 p{
  text-align: center;
  line-height: 40px;
}
/* ↑↑ Button */
</style>
