<template>
  <div class="ServiceFlow_Wrapper">
    <div class="ServiceFlow">
      <div class="ServiceFlow_InnerWrapper">
        <div class="ServiceFlow_Title">
          <p>{{ t.serviceFlow.title }}</p>
        </div>
        <div class="ServiceFlow_InteracDia">
          <div class="ServiceFlow_Chart_Upper">
            <label for="select">
              <select id="select" v-model="workPattern">
                <option value="domestic">{{ t.serviceFlow.workPattern.domestic }}</option>
                <option value="abroad">{{ t.serviceFlow.workPattern.abroad }}</option>
              </select>
            </label>
          </div>
        </div>
        <ServiceFChart :work-pattern="workPattern"></ServiceFChart>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import ServiceFChart from '@/components/ServiceFChart.vue';
import text from '../assets/js/text';

/* eslint-disable */ 
export default {
  name: 'ServiceFlow',
  components: {
    ServiceFChart,
  },
  data() {
    return {
      t: text,
      workPattern: 'domestic',
    };
  },
  computed: {
    // ...mapState(['t']),
  },
  methods: {
  },
};
</script>

<style>

/*  */
/* ServiceFlow */
.ServiceFlow_Title{
  display: inline-block;
  margin: 72px 0 64px;
}
.ServiceFlow_Title p{
  font-size: 36px;
  color: #767676;
}
.ServiceFlow_MapImg img{
  height: 288px;
  margin: 0 0 48px 0;
}

.ServiceFlow_Chart_Inner{
  margin: 16px auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 300px;
}
.ServiceFlow_Chart_Main{
  display: flex;
  align-items: center;
}

.ServiceFlow_Chart_Upper{
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.ServiceFlow_Chart_Upper label{
  border: solid 2px #e5f8f8;
  border-radius: 10px;
}
.ServiceFlow_Chart_Upper select{
  padding: 8px 8px;
  /* border-color: #BDBDBD; */
  border-radius: 10px;
  /* color: #333333; */
}
.ServiceFlow_Chart_Upper select:focus{
  outline: none;
}

.ServiceFlow_Chart_Main .IllustPoints-Domestic{
  margin: 0 24px;
}
/* .ServiceFlow_Chart_Main .IllustPics{
  position: relative;
  bottom: 24px;
} */

.ServiceFlow_Chart_Main .IllustPointSet .active{
  border-radius: 5px;
  border: 2px solid #c9f2e285;
  animation: IllustPointSetRadi 2.2s infinite;
}
@keyframes IllustPointSetRadi {
  0% {
    /* border: solid 1px #dbe2cb; */
    border-radius: 5px;
    /* padding: 3px 5px; */
    box-shadow: 0 0 1px 0 #afefd7b0;
  }
  100%{
    border-radius: 5px;
    box-shadow: 0px 0px 0px 8px transparent;
  }
}
.ServiceFlow_Chart_Main .IllustPointSet input{
  display: none;
}
.ServiceFlow_Chart_Main .IllustPointSet:not(:last-child)::after{
  content: "↓";
  display: block;
}
.ServiceFlow_Chart_Main .IllustPointSet label{
  display: inline-block;
  width: 112px;
  border: solid 2px #fff0;
  padding: 4px 0;
  cursor: pointer;
}
.ServiceFlow_Chart_Main .IllustPointSet label:hover{
  border: solid 2px #e7efeb;
  border-radius: 5px;
}

.ServiceFlow_DescPart{
  width: 400px;
}
.ServiceFlow_DescPart img{
  margin: auto;
}

/*  */
.car button{
  border: none;
  background-color: #fff0;
}

.toggle p {
  display: none;
}
.toggle p.view {
  display: block;
}

.posi1 {
  transform: translateX(-1041px)!important;
}
.posi2 {
  transform: translateX(0px)!important;
}
.posi3 {
  transform: translateX(1317px)!important;
}

.prevBtn{
  position: relative;
  z-index: 3;
  cursor: pointer;
  margin: 8px 16px 0 0;
 }
.prevBtn::before{
  content: '';
  border-top: 4px solid #fff;
  border-left: 4px solid #fff;
  border-radius: 3px;
  padding: 6px;
  display: inline-block;
  position: absolute;
  transform: rotate(-45deg);
  left: 13px;
  top: 11px;
}
.prevBtn::after{
  content: '';
  background-color: #abd5d5;
  display: inline-block;
  padding: 19px;
  border-radius: 20px;
}
.nextBtn{
  position: relative;
  z-index: 3;
  cursor: pointer;
  margin: 8px 0 0 16px;
}
.nextBtn::before{
  content: '';
  border-top: 4px solid #fff;
  border-left: 4px solid #fff;
  border-radius: 3px;
  padding: 6px;
  display: inline-block;
  position: absolute;
  transform: rotate(135deg);
  left: 11px;
  top: 11px;
}
.nextBtn::after{
  content: '';
  background-color: #abd5d5;
  display: inline-block;
  padding: 19px;
  border-radius: 20px;
}

.ServiceFlow_DescPart .el-carousel__container{
  height: 104vw;
  max-height: 364px;
}
.ServiceFlow_DescPart .el-carousel__item{
  width: 100%;
}
.ServiceFlow_DescPart .el-carousel__item.is-animating{
  transition: none;
}

.ServiceFlow_DescPart dt{
  margin: 16px 16px;
  color: #333333;
}

.ServiceFlow_DescPart dd{
  margin: 0 24px 0;
  color: #333333;
}
</style>
