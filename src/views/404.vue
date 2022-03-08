<template>
  <div style="background-color: black">

    <Navbar></Navbar>

    <div class="container-fluid">
      <router-link to="/">
        <img
          src="https://utioutll.sirv.com/Smart%20Watches/error.png"
          class="img"
          style="width: 100%"
        />
      </router-link>
    </div>

    <marquee text="India’s No.1 Earwear Audio Brand."></marquee>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import marquee from "../components/Marquee-text.vue";

export default {
  name: "login",
  components: {
    Navbar,
    Footer,
    marquee,
  },
};
</script>

<style scoped>
.img {
  height: "100%";
  width: "100%";
}
</style>
