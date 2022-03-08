<template>
<div style="background-color:black;">
  <div class="container" style="background-color:black;">
    
    <div class="container-fluid my-5" >
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
       <VueSlickCarousel v-bind="settings">
      <div><card></card></div>
      <div><card></card></div>
      <div><card></card></div>
      <div><card></card></div>
    </VueSlickCarousel>
      </div>
    </div>
    
  </div>
  </div>
  
</template>
<script>

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import card from "./card.vue";

export default {
  name: "demo",
  components: { VueSlickCarousel, card },
  data() {
    return {
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
};
</script>
<style>
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
.slick-prev {
    left: -35px;
}
.slick-next {
    right: -25px;
}
</style>














// <template>
    
//     <!-- img-slider -->

//     <div class="container mt-5" id="imgslider">
//         <div class="container">
//             <h2 class="text-white text-center hed display-5" style="line-height: 1.2em;
//         font-weight: bolder;
//         margin-bottom: 20px;">Upto 75% Off On Earbuds</h2>
//         </div>
//         <VueSlickCarousel v-bind="settings">
//         <!-- <div class="slider1"> -->

//             <div class="mx-1 d-flex  justify-content-center">
//                 <img src="https://utioutll.sirv.com/Immortal%20Gaming/01_2.png" height="344.55px" width="368px" class="" alt="...">

//             </div>
//             <div class="mx-1 d-flex justify-content-center">
//                 <img src="https://utioutll.sirv.com/Immortal%20Gaming/01_3.png" height="344.55px" width="368px" class="" alt="...">

//             </div>
//             <div class="mx-1 d-flex justify-content-center">
//                 <img src="https://utioutll.sirv.com/Immortal%20Gaming/01_4.png" height="344.55px" width="368px" class="" alt="...">

//             </div>
//             <div class="mx-1 d-flex justify-content-center">
//                 <img src="https://utioutll.sirv.com/Immortal%20Gaming/01_5.png" height="344.55px" width="368px" class="" alt="...">

//             </div>
//             <div class="mx-1 d-flex justify-content-center">
//                 <img src="https://utioutll.sirv.com/Immortal%20Gaming/01_6.png" height="344.55px" width="368px" class="" alt="...">

//             </div>
//             </VueSlickCarousel>
//         <!-- </div> -->
//     </div>

// </template>
// <script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// export default ({
//    name:'Threeimgslider',
//   components: { VueSlickCarousel },
//   data() {
//     return {
//       settings: {
//         dots: true,
//         prevArrow:
//           '<i class="fa fa-chevron-left d-flex align-items-center"></i>',
//         nextArrow:
//           '<i class="fa fa-chevron-right d-flex align-items-center"></i>',
//         arrows: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         pauseOnDotsHover: true,
//         pauseOnFocus: true,
//         pauseOnHover: true,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true,
//             },
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       },
//     };
//   }}
// );
// </script>
// <style>
// button.slick-arrow.slick-prev,
// button.slick-arrow.slick-next {
//   color: black;
//   background-color: black;
// }

// </style>
