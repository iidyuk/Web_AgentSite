<template>
  <div>
    <div class="Achievement_Wrapper">
      <div class="Achievement">
        <div class="Achievement_Title">
          <p>業務実績</p>
        </div>
        <div class="Achievement_Slide">
          <el-carousel :interval="5000" trigger="click" arrow="always" :autoplay="false">
            <el-carousel-item v-for="(carousel, key) in t.achieveCarou" :key="key">
              <div class="Achievement_Slide_Category">
                <p>{{ carousel.category }}</p>
              </div>
              <div class="Achievement_Slide_PContentCard">
                <div class="Achievement_Slide_PContentCardPortrait">
                  <div class="Achievement_Slide_PContentCardPortraitTite">
                    <p>{{ carousel.title }}</p>
                  </div>
                  <div class="Achievement_Slide_PContentCardPortraitBox">
                    <img v-bind:src=carousel.img alt="">
                    <!-- <img src="@/assets/img/pic_city.png" alt=""> -->
                  </div>
                  <div class="Achievement_Slide_PContentCardPortraitCaption">
                    <p v-for="(caption, key) in carousel.caption" :key="key">{{ caption }}</p>
                  </div>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import { Carousel, CarouselItem } from 'element-ui';
import text from '../assets/js/text';

export default {
  name: 'AchieveCom',
  components: {
    'el-carousel': Carousel,
    'el-carousel-item': CarouselItem,
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
/*  */
/* Achievement */
.Achievement_Wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Sawarabi Gothic";
}
.Achievement_Title{
  text-align: center;
  margin: 40px 0;
}
.Achievement_Title p{
  font-size: 36px;
}
.Achievement_Slide{
  width: 95vw;
  max-width: 1200px;
  height: 36vw;
  max-height: 528px;
  min-height: 368px;
  background-color: #ffffff80;
  border-radius: 10px;
}
.Achievement_Slide .el-carousel__arrow{
  right: 37%;
  top: 100%;
  background-color: lightgray;
}
.Achievement_Slide .el-carousel__arrow:hover{
  background-color: aliceblue;
}
.Achievement_Slide .el-carousel__arrow--left{
  left: 24%;
}
.Achievement_Slide .el-carousel__arrow--left::before{
  content: '';
  display: block;
  height: 12px;
  width: 12px;
  margin: auto;
  position: relative;
  top: 7px;
  left: 2px;
  border-bottom: solid 4px #fff;
  border-left: solid 4px #fff;
  border-radius: 3px;
  transform: rotate(45deg);
}
.Achievement_Slide .el-carousel__arrow--right{
  right: 24%;
}
.Achievement_Slide .el-carousel__arrow--right::before{
  content: '';
  display: block;
  height: 12px;
  width: 12px;
  margin: auto;
  position: relative;
  top: 7px;
  right: 1px;
  border-top: solid 4px #fff;
  border-right: solid 4px #fff;
  border-radius: 3px;
  transform: rotate(45deg);
}
.Achievement_Slide .el-icon-arrow-left::before{
  content: none;
}
.Achievement_Slide .el-icon-arrow-right::before{
content: none;
}
.Achievement_Slide .el-carousel{
  height: 110%;
}
.Achievement_Slide .el-carousel__container{
  height: 94%;
}
.Achievement_Slide .el-carousel__button{
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: whitesmoke;
}
/* .Achievement_Slide_PTitle{
  margin: 40px 0 0 40px;
}
.Achievement_Slide_PTitle p{
  font-size: 24px;
} */
.Achievement_Slide_Category{
  width: 83vw;
  max-width: 1200px;
  margin: 16px auto;
  text-align: center;
}
.Achievement_Slide_Category p{
  font-size: 20px;
}
.Achievement_Slide_PContentCard{
  display: flex;
  justify-content: space-evenly;
}
.Achievement_Slide_PContentCard p{
  margin: 4px 0 0;
}
.Achievement_Slide_PContentCardPortrait{
  width: 38vw;
  max-width: 584px;
}
.Achievement_Slide_PContentCardPortraitBox{
  height: 22vw;
  max-height: 340px;
}
.Achievement_Slide_PContentCardPortraitTite{
  margin: 0 0 0px;
  font-size: clamp(16px, 1vw + 10px, 20px);
}
.Achievement_Slide_PContentCardPortrait img {
  width: 100%;
}
.Achievement_Slide_PContentCardPortrait video{
  width: 100%;
}
.Achievement_Slide_PContentCardPortraitCaption{
  font-size: clamp(14px, 1vw + 8px, 18px);
}

</style>
