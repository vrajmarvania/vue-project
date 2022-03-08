<template>
  <div style="background-color: #000000">
    <Navbar></Navbar>

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
      {{ errored }}
    </section>
    <div v-else>
      <div v-if="loading">
        <div class="vld-parent">
          <loading
            :active="loading"
            :can-cancel="true"
            :on-cancel="onCancel"
            loader="dots"
            color="#f00"
            opacity="0"
            :is-full-page="fullPage"
          />
        </div>
      </div>
      <div v-else>
        <!-- fullpage img -->
        <div class="container-fluid p-0">
          <img :src="datas[0].Fimg" id="fimg" class="col-12" />
        </div>

        <!-- breadcrumb path -->
        <div class="container mt-5" aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active">
              <a
                class="text-decoration-none text-light"
                href=""
                onclick="window.history.back();"
                >Home</a
              >
            </li>
            <li
              class="breadcrumb-item active text-light pagename"
              aria-current="page"
            >
              collection
            </li>
            <li
              class="breadcrumb-item active text-light pagename"
              aria-current="page"
            >
              {{ datas[0].CategoryName }}
            </li>
          </ol>
        </div>

        <div class="container-fluid">
          <div class="container" id="title">
            <h2 class="fw-bolder pagename" style="color: white">
              {{ datas[0].CategoryName }}
            </h2>
          </div>
          <div
            class="d-flex container"
            style="flex-direction: row; justify-content: flex-end"
          >
     <div class="dropdown">
            <a
              class="dropdown-toggle"
              style="color: #a9a9a9; text-decoration: none"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              SORT BY
            </a>
            <ul
              class="dropdown-menu"
              style="background-color: #fff0"
              aria-labelledby="dropdownMenuButton1"
            >
              <li >
                <button class="btn b px-5 m-1" @click="sortarr">
                  Price, low to high
                </button>
              </li>
              <li>
                <button class="btn b px-5 m-1" @click="sortarr2">
                  Price, high to low
                </button>
              </li>
            </ul>
          </div>
          </div>
     
          <div class="container-fluid">
            <div class="d-flex justify-content-center flex-wrap" id="cardin">
              <Collection_Card
                wi="390"
                v-for="i in datas[0].Data"
                :key="i"
                :products="i"
              ></Collection_Card>
              <!-- <Collection_Card wi="390"></Collection_Card>
            <Collection_Card wi="390"></Collection_Card>
            <Collection_Card wi="390"></Collection_Card> -->
            </div>
          </div>
        </div>
        <marquee text="India’s No.1 Earwear Audio Brand."></marquee>

        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import Collection_Card from "../components/Crads/Collection_Card.vue";
import Collection from "../Service/Collection";
import marquee from "../components/Marquee-text.vue";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "collections",
  components: {
    Collection_Card,
    marquee,
    Footer,
    Navbar,

    Loading,
  },
  props: ["id"],
  data() {
    return {
      datas: [],
      isLoading: false,
      fullPage: true,
      loading: true,
      errored: false,
      sflag: false,
    };
  },
  mounted() {
    Collection.get_collection(this.id)
      .then((response) => {
        //   this.tutorials onmouseover = response.data;
        this.datas = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  computed: {},
  methods: {
    sflage() {
      this.sflag = !this.sflag;
    },
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 5000);
    },
    onCancel() {
      console.log("User cancelled the loader.");
    },
    sortarr() {
      this.datas[0].Data.sort((a, b) => {
        return a.Productid.Price - b.Productid.Price;
      });
      console.log(this.datas[0].Data);
    },
    sortarr2() {
      this.datas[0].Data.sort((a, b) => {
        return b.Productid.Price - a.Productid.Price;
      });
      console.log(this.datas[0].Data);
    },
  },
};
</script>

<style scoped>
.b {
  background-color: red;
  color: white;
}
.show li{
  width: 200px;
}
</style>
