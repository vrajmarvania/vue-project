<template>

<div style="background-color:black;" v-if="!loading">

  <div class="container" style="background-color:black;">
    
    <div class="container-fluid my-5 p-0" >
      <div class="container">
        <h2
          class="text-white text-center hed display-5"
          style="line-height: 1.2em; font-weight: bolder; margin-bottom: 20px"
        >
          {{title}}
        </h2>
      </div>
      <div
        class="slider1">


  <Carousel :settings="settings" :wrap-around="true" :breakpoints='breakpoints' id="hideArrowsExample"  >
    <Slide v-for="s in sdata" :key="s">
      <div class="carousel__item"><card :slide=s></card></div>
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
  
<!-- {{sdata}} -->
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import card from "../card.vue";
import Product from "../../Service/Product";

export default defineComponent({
  name: "HiddenArrows",
  components: {
    Carousel,
    Slide,
    card,
    Navigation,
  },
  props:['title','Query'],
  data: () => ({
    // carousel settings
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
                snapAlign: "start",

      },
      992: {
        itemsToShow: 2,
        // snapAlign: "center",
                snapAlign: "start",

      },
      
       1200: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
    // SliderName: ,
    sdata:[],
    loading:true
  }),
  mounted(){
  // var qu={"CategoryName" :"Wireless_Headphones"}
if(this.Query!=null){
 Product.getsliderdata(this.Query).then((response) => {
        //   this.tutorials = response.data;
        this.sdata = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  }
  }
});
</script>

<style>

#hideArrowsExample .carousel__prev--in-active,
#hideArrowsExample .carousel__next--in-active {
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
.slick-prev:before {
  content: "\f053";  /* this is your text. You can also use UTF-8 character codes as I do here */
  font-family: "Font Awesome 5 Free";
    color: red;
    margin-right:10px ;
  font-size: 30px;
     font-weight: bold;
      font-size: 45px;
}

.slick-next:before {
 
   content: "\f054";  /* this is your text. You can also use UTF-8 character codes as I do here */
  font-family: "Font Awesome 5 Free";
    color: red;
  font-size: 30px;
     font-weight: bold;
     font-size: 45px;

}

button.carousel__prev,button.carousel__next {
    background-color: black;
    color: red;

}
i.fas.fa-chevron-left,i.fas.fa-chevron-right {
    font-size: 45px;
}
</style>




       
