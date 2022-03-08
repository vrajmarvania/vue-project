<template>
  <div style="background-color: #000000">
    <Navbar></Navbar>
    <div class="!loading">
      <div class="d-flex">
        <div class="col-2" style="background-color: #262626; margin: 20px">
          <div class="m-3" style="color: #ffffff">
            <h4 class="mx-3 fw-bolder" style="color: #ffffff">Filter by</h4>
            <hr />
            <a
              class="d-flex px-3"
              data-bs-toggle="collapse"
              href="#Price"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style=".d-flex {
    display: flex!important;
    justify-content: space-between;
    align-items: baseline; text-decoration: none;"
            >
              <h6 style="color: white">Price</h6>
              <i class="fas fa-chevron-down"></i>
            </a>

            <div class="mt-5 p-2">
              <Slider
                :format="{
                  prefix: '₹',
                }"
                :step="500"
                @Click="onchnage"
                @input="onchnage"
                @close="onchnage"
                @select="onSelect"
                :min="500"
                :max="5000"
                v-model="checkedNames.price"
              />
            </div>
            <hr />
            <a
              class="d-flex px-3"
              data-bs-toggle="collapse"
              href="#Availability"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style=".d-flex {
    display: flex!important;
    justify-content: space-between;
    align-items: baseline; text-decoration: none;"
            >
              <h6 style="color: white">Availability</h6>
              <i class="fas fa-chevron-down"></i>
            </a>

            <div class="collapse" id="Availability">
              <div class="card card-body" style="background-color: #262626">
                <div class="form-check">
                  <label class="form-check-label" for="Stock">
                    Include Out Of Stock</label
                  >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="Stock"
                    value="true"
                    @Click="onchnage"
                    v-model="checkedNames.available"
                  />
                </div>
                <!-- {{CategoryNamee}} -->
                <br />
              </div>
            </div>
            <hr />
            <a
              class="d-flex px-3"
              data-bs-toggle="collapse"
              href="#Category"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
              style=".d-flex {
    display: flex!important;
    justify-content: space-between;
    align-items: baseline; text-decoration: none;"
            >
              <h6 style="color: white">Category</h6>
              <i class="fas fa-chevron-down"></i>
            </a>

            <div class="collapse" id="Category">
              <div class="card card-body" style="background-color: #262626">
                <div class="form-check">
                  <div v-for="i in collection" :key="i">
                    <label class="form-check-label" for="Wireless_Headphones">
                       {{  i.CategoryName.substring(0,16) }}</label
                    >

                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="Smart_Watches"
                      name="Smart_Watches"
                      :value="i.CategoryName"
                      v-model="checkedNames.CategoryName"
                      @change="onchnage"
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
            <hr />
          </div>
        </div>

        <div class="col-10">
          <div class="container" id="title">
            <h2 class="fw-bolder pagename" style="color: white">{{ q }}</h2>
            <h6 style="color: white">
              Showing {{ datas.length }} items
            </h6>
          </div>
          <div class="container-fluid">
            <div v-if="datas.length == 0">
              <h1 class="text-center my-5" style="color: white">
                No results found .
              </h1>
              <div class="text-center container">
                <img
                  src="../assets/notfound.png"
                  style="width: 100%; min-height: 500px"
                />
              </div>
            </div>
            <div
              v-else
              class="d-flex justify-content-start flex-wrap"
              id="cardin"
            >
              <Search_Card
                wi="300"
                v-for="i in datas"
                :key="i"
                :products="i"
              ></Search_Card>
            </div>
          </div>
        </div>
      </div>
      <marquee text="India’s No.1 Earwear Audio Brand."></marquee>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import search from "../Service/search";
import Search_Card from "../components/Crads/Search_Card.vue";
import marquee from "../components/Marquee-text.vue";
import collection from "../Service/Collection";
import Slider from "@vueform/slider";

export default {
  name: "search",
  components: {
    Footer,
    Navbar,
    marquee,
    Search_Card,
    Slider,
  },
  data() {
    return {
      checkedNames: { CategoryName: [], available: "true", price: [500, 5000] },
      datas: [],
      loading: true,
      collection,
      query: "",
    };
  },
  props: ["q"],
  mounted() {
    this.query = this.q;
    console.log(this.q);
    this.getdata(this.checkedNames, this.q);
    collection
      .getall_collection()
      .then((response) => {
        this.collection = response.data;
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

  watch: {
    q: function () {
      this.getdata(this.checkedNames, this.q);
    },
    checkedNames: function () {
      this.getdata(this.checkedNames, this.q);
    },
  },

  methods: {
    onchnage() {
      this.getdata(this.checkedNames, this.q);
    },
    getdata(cn, qu) {
      search
        .get_all(cn, qu)
        .then((response) => {
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
  },
};
</script>

<style scoped>
i.fas.fa-chevron-down {
  color: red;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
