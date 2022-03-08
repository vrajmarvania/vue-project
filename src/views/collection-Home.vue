<template>
  <div>
    <Navbar></Navbar>

    <div class="in container-fluid" style="background-color: white">
      <div>
        <h1 class="text-center fw-bolder py-4">Our Collections</h1>
      </div>
      <div
        class="d-flex p-4"
        style="flex-direction: row; flex-wrap: wrap; justify-content: center"
      >
        <div class="collec-border" v-for="i in catimg" :key="i">
          <router-link :to="i.urllink">
            <img :src="i.img" style="width: 350px; height: 175px"
          /></router-link>
        </div>
      </div>
      <!-- </div> -->
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
  data() {
    return {
      catimg: [
        {
          urllink: "/collection/Wireless_Headphones",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_1.png",
        },
        {
          urllink: "/collection/Smart_Watches",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_2.png",
        },
        {
          urllink: "/collection/Wired_Earphones",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_3.png",
        },
        {
          urllink: "/collection/Wireless_Speakers",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_4.png",
        },
        {
          urllink: "/collection/Home_Audio",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_5.png",
        },
        {
          urllink: "/collection/Mobile_Accessories",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_6.png",
        },
        {
          urllink: "/collection/TRebel",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_7.png",
        },
        {
          urllink: "/collection/Limited_Edition",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_8.png",
        },
        {
          urllink: "/collection/Misfit",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_9.png",
        },
        {
          urllink: "/collection/Immortal_Gaming",
          img: "https://utioutll.sirv.com/Smart%20Watches/nav/20_10.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
.fa-google {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.collec-border {
  border: 1px solid #80808099;
  margin: 7px;
  border-radius: 13px;
}
</style>
