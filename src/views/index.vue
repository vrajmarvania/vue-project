<template>
  <div style="background-color: #000000">
    <Navbar></Navbar>
    <imgslider></imgslider>
    <marquee text="FLAUNT YOUR FITNESS"></marquee>
    <Advertisement></Advertisement>
    <slider
      title="Best Sellers"
      :Query="{ Q: {isdeleted: false}, S: { Selling_count: -1 } }"
    ></slider>
    <slider title="Just Launched" :Query="{ Q: {isdeleted: false}, S: { Date: -1 } }"></slider>
    <New_Launche></New_Launche>
    <Threeimgslider></Threeimgslider>
    <slider
      title="Smart Watches"
      :Query="{
        Q: { CategoryName: 'Smart_Watches',isdeleted: false },
        S: { Selling_count: -1 },
      }"
    ></slider>
    <slider
      title="Wireless Headphones"
      :Query="{
        Q: { CategoryName: 'Wireless_Headphones',isdeleted: false },
        S: { Selling_count: -1 },
      }"
    ></slider>
    <collection></collection>
    <celebreview></celebreview>
    <blogs></blogs>
    <productreview></productreview>
    <quateslider></quateslider>
    <sponser></sponser>
    <marquee text="India’s No.1 Earwear Audio Brand."></marquee>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import slider from "../components/home-page/slider.vue";
import imgslider from "../components/home-page/imgslider.vue";
import marquee from "../components/Marquee-text.vue";
import New_Launche from "../components/home-page/New_Launche.vue";
import Threeimgslider from "../components/home-page/Threeimgslider";
import blogs from "../components/home-page/blogs.vue";
import celebreview from "../components/home-page/celebreview.vue";
import productreview from "../components/home-page/productreview.vue";
import quateslider from "../components/home-page/quateslider.vue";
import sponser from "../components/home-page/sponser.vue";
import collection from "../components/home-page/collection.vue";
import Advertisement from "../components/home-page/Advertisement.vue";

export default {
  name: "index",
  components: {
    Navbar,
    Footer,
    slider,
    imgslider,
    marquee,
    New_Launche,
    Threeimgslider,
    blogs,
    celebreview,
    productreview,
    quateslider,
    sponser,
    collection,
    Advertisement,
  },
};
</script>
<style scoped></style>
