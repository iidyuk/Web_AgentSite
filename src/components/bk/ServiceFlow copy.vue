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
          <div class="ServiceFlow_Chart" ref="scrollRlChart">
            <div class="ServiceFlow_Chart_Inner">
              <div class="ServiceFlow_Chart_Main">
                <!-- Domestic -->
                <div class="IllustPoints-Domestic" v-if="isDomestic">
                  <div class="IllustPointSet"
                    v-for="(dome, key) in t.serviceFlow.chart.domestic" :key="key">
                    <label v-bind:for="dome.id"
                      v-bind:class="{ active: checkedRadi === dome.value }">
                      <input v-bind:id="dome.id" type="radio" name="fruits"
                        v-bind:value="dome.value" v-on:click="toggleBtn(dome.click)"
                        v-model="checkedRadi"/>
                        {{ dome.text }}
                    </label>
                  </div>
                </div>
                <!-- Abroad -->
                <div class="IllustPoints-Abroad" v-if="isAbroad">
                  <div class="IllustPointSet"
                    v-for="(a, key) in t.serviceFlow.chart.abroad" :key="key">
                    <label v-bind:for="a.id"
                      v-bind:class="{ active: checkedRadi === a.value }">
                      <input v-bind:id="a.id" type="radio" name="fruits"
                        v-bind:value="a.value" v-on:click="toggleBtn(a.click)"
                        v-model="checkedRadi" />
                        {{ a.text }}
                    </label>
                  </div>
                </div>
              </div>
              <div class="ServiceFlow_DescPart car"  ref="scrollRlDescP">
                <div v-if="isDomestic">
                  <el-carousel arrow="never" trigger="click" :autoplay="false">
                    <el-carousel-item v-for="(descripDomes, key) in t.serviceFlow.descrip.domestic"
                      :key="key" v-bind:class=descripDomes.tagClass>
                      <dt>{{ descripDomes.title }}</dt>
                      <dd>{{ descripDomes.text }}</dd>
                      <dd><img v-bind:src="descripDomes.img" alt=""></dd>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <div v-if="isAbroad">
                  <el-carousel :interval="5000" arrow="never" trigger="click" :autoplay="false">
                    <el-carousel-item v-for="(descripA, key) in t.serviceFlow.descrip.abroad"
                      :key="key" v-bind:class=descripA.tagClass>
                      <dt>{{ descripA.title }}</dt>
                      <dd>{{ descripA.text }}</dd>
                    </el-carousel-item>
                  </el-carousel>
                </div>
                <button type="button" class="prevBtn"  alt="Previous_button" v-on:click="prevBtn">
                </button>
                <button type="button" class="nextBtn" alt="Next_button" v-on:click="nextBtn">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import ScrollReveal from 'scrollreveal';
import { Carousel, CarouselItem } from 'element-ui';

import text from '../assets/js/text';

/* eslint-disable */ 
export default {
  name: 'ServiceFlow',
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
  },
  mounted() {
    // var sr = ScrollReveal();
    ScrollReveal().reveal(this.$refs.scrollRlChart,{
      duration: 2000, 
      origin: 'bottom', 
      distance: '40px',
      reset: false,
    })
    ScrollReveal().reveal(this.$refs.scrollRlDescP,{
      duration: 2500, 
      origin: 'bottom', 
      distance: '88px',
      reset: false,
    })
  },
  data() {
    return {
      imagePath: "", // 初期の画像情報
      t: text,
      // ↓ slider のポジション設定
      workPattern: 'domestic',
      test1: this.slidePosiCenter,
      test2: this.lidePosiRight,
      test3: this.lidePosiRight,
      test4: this.lidePosiRight,
      test5: this.lidePosiRight,
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

    };
  },
  beforeUpdate() {  // beforeUpdate() | データが変更され、DOMに反映される前
    // ↓ v-for で importしたobjectデータ(JS)の値を変数に再代入する (import時は変数で受け取れないため)
    const newTagClass =[
      this.test1,
      this.test2,
      this.test3,
      this.test4,
      this.test5,
    ];
    this.t.serviceFlow.descrip.domestic.forEach((item, index) => {
      item.tagClass = newTagClass[index];
    });
    this.t.serviceFlow.descrip.abroad.forEach((item, index) => {
      item.tagClass = newTagClass[index];
    });
    // ↑ v-for で importしたobjectデータ(JS)の値を変数に再代入する
  },
  computed: {
    // ...mapState(['t']),
  },
  watch: {
    // ↓ domestic-abroad の表示切替処理
    workPattern(wp) {
      switch (wp) {
        case 'domestic':
          this.isAbroad = false;
          this.isDomestic = true;
          this.toggleBtn(1);
          this.checkedRadi = 'radio01';
          break;
        case 'abroad':
          this.isAbroad = true;
          this.isDomestic = false;
          this.toggleBtn(1);
          this.checkedRadi = 'radio01';
          break;
        default:
          break;
      }
    },
    // ↑ domestic-abroad の表示切替処理
  },
  methods: {
    // ...mapMutations(['updateTagClassD', 'updateTagClassA']),
    // ↓ radioボタンからの slide表示 切替処理, toggleBtn()でスライドの配置を処理
    toggleBtn(n) {
      switch (n) {
        case 1:
          this.test1 = this.slidePosiCenter;
          this.test2 = this.slidePosiRight;
          this.test3 = this.slidePosiRight;
          this.test4 = this.slidePosiRight;
          this.test5 = this.slidePosiRight;
          break;
        case 2:
          // 1枚目をposi1, 2枚目をposi2
          this.test1 = this.slidePosiLeft;
          this.test2 = this.slidePosiCenter;
          this.test3 = this.slidePosiRight;
          this.test4 = this.slidePosiRight;
          this.test5 = this.slidePosiRight;
          break;
        case 3:
          this.test1 = this.slidePosiLeft;
          this.test2 = this.slidePosiLeft;
          this.test3 = this.slidePosiCenter;
          this.test4 = this.slidePosiRight;
          this.test5 = this.slidePosiRight;
          break;
        case 4:
          this.test1 = this.slidePosiLeft;
          this.test2 = this.slidePosiLeft;
          this.test3 = this.slidePosiLeft;
          this.test4 = this.slidePosiCenter;
          this.test5 = this.slidePosiRight;
          break;
        case 5:
          this.test1 = this.slidePosiLeft;
          this.test2 = this.slidePosiLeft;
          this.test3 = this.slidePosiLeft;
          this.test4 = this.slidePosiLeft;
          this.test5 = this.slidePosiCenter;
          break;
        default:
          break;
      }
    },
    /* memo:　5を押したとき、v-modelの値<x<5のxを非表示にする→　特に問題はないのでそのまま変えない。*/
    // ↑ radioボタンからの slide表示 切替処理
    // ↓ prevボタンからの slide表示 切替処理
    prevBtn() {
      switch (this.checkedRadi) {
        case 'radio01':
          this.toggleBtn(5);
          this.checkedRadi = 'radio05';
          break;
        case 'radio02':
          this.toggleBtn(1);
          this.checkedRadi = 'radio01';
          break;
        case 'radio03':
          this.toggleBtn(2);
          this.checkedRadi = 'radio02';
          break;
        case 'radio04':
          this.toggleBtn(3);
          this.checkedRadi = 'radio03';
          break;
        case 'radio05':
          this.toggleBtn(4);
          this.checkedRadi = 'radio04';
          break;
        default:
          break;
      }
    },
    // ↑ prevボタンからの slide表示 切替処理
    // ↓ nextボタンからの slide表示 切替処理
    nextBtn() {
      switch (this.checkedRadi) {
        case 'radio01':
          this.toggleBtn(2);
          this.checkedRadi = 'radio02';
          break;
        case 'radio02':
          this.toggleBtn(3);
          this.checkedRadi = 'radio03';
          break;
        case 'radio03':
          this.toggleBtn(4);
          this.checkedRadi = 'radio04';
          break;
        case 'radio04':
          this.toggleBtn(5);
          this.checkedRadi = 'radio05';
          break;
        case 'radio05':
          this.toggleBtn(1);
          this.checkedRadi = 'radio01';
          break;
        default:
          break;
      }
    },
    // ↑ nextボタンからの slide表示 切替処理
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
