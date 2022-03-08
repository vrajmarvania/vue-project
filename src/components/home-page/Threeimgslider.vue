

<template>

<div style="background-color:black;">
  <div class="container" style="background-color:black;">
    
    <div class="container-fluid my-5 p-0" >
      <div class="container">
        <h2
          class="text-white text-center hed display-5"
          style="line-height: 1.2em; font-weight: bolder; margin-bottom: 20px"
        >
          Upto 75% Off On Best Sellers
        </h2>
      </div>
      <div
        class="slider1">


  <Carousel :items-to-show="3" :wrap-around="true" :breakpoints='breakpoints'>
    <Slide v-for="img in imgs" :key="img">
      <div class="carousel__item">
        <div  class="sliderimg" >
                         <img :src=img class="sliderimg" alt="...">
                        
</div>

      </div>
    </Slide>

  <template #addons>
        <navigation>
          <template #next>
            <i class="fas fa-chevron-right"></i>
          </template>
          <template #prev>
           <i class="fas fa-chevron-left"></i>
          </template>
        </navigation>
      </template>

  </Carousel>
  
      </div>
    </div>
    
  </div>
  </div>
  

</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
// import card from "./card.vue";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    // card,
    Navigation,
  },
  data: () => ({
    imgs:["https://utioutll.sirv.com/Immortal%20Gaming/01_2.png","https://utioutll.sirv.com/Immortal%20Gaming/01_3.png","https://utioutll.sirv.com/Immortal%20Gaming/01_4.png","https://utioutll.sirv.com/Immortal%20Gaming/01_5.png","https://utioutll.sirv.com/Immortal%20Gaming/01_6.png"],
     settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
     breakpoints: {
      // 700px and up
      1: {
        itemsToShow: 1,
        // snapAlign: "center",
      },
      700: {
        itemsToShow: 1,
        // snapAlign: "center",
      },
       900: {
        itemsToShow: 2,
        // snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    }, 
  }),
});
</script>

<style scoped>

.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}

.carousel {
   
    text-align: start;
    
}
.carousel__prev {
   
    left: -25px;
}
.carousel__next  {
   
        right: -25px;

}



button.slick-arrow.slick-prev,
button.slick-arrow.slick-next {
  color: black;
  background-color: black;
}
.sliderimg img {
    width: 364px;
}
button.carousel__prev,button.carousel__next {
    background-color: black;
    color: red;

}
i.fas.fa-chevron-left,i.fas.fa-chevron-right {
    font-size: 45px;
}
</style>




       
