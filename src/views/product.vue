<template>
  <div style="background-color: #000000">
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <div v-else>
      <Navbar ref="Navbar"></Navbar>

      <div v-if="loading">
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

      <div
        v-else
        class="container-fluid px-0"
        style="color: white; background-color: #2c2c2c"
      >
        <div class="container-fluid py-4 px-0">
          <ol
            class="breadcrumb m-0 pl-2 col-12"
            style="padding-left: 28px; width: 100%"
          >
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ sdata.Name }}
            </li>
          </ol>
          <div class="card border-0" style="">
            <div
              class="row g-0"
              style="
                background: linear-gradient(
                  to bottom,
                  #2c2c2c 0%,
                  #000 81%,
                  #2c2c2c 30%,
                  #2c2c2c 100%
                );
              "
            >
              <div class="col-md-7">
                <div class="col-10">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <!-- <div id="back"></div> -->
                    <div
                      class="carousel-inner"
                      v-for="(i, id) in sdata.Products_data"
                      :key="id"
                    >
                      <div v-if="i._id == idc._id" class="carousel-item active">
                        <img
                          :src="i.img"
                          id="img"
                          style="height:500px width:500px"
                          class="d-block"
                          alt="..."
                        />
                      </div>
                      <div v-else class="carousel-item">
                        <img
                          :src="i.img"
                          id="img"
                          style="height:500px width:500px"
                          class="d-block"
                          alt="..."
                        />
                      </div>
                      <!-- <div class="carousel-item">
                                    <img src="Assets/img/43_2.png" height="491px" width="491px" class="d-block "
                                        alt="...">
                                </div> -->
                    </div>

                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <p
                    class="px-2 py-1"
                    style="
                      left: 50px;
                      background-color: white;
                      text-align: left;
                      top: 5%;
                      position: absolute;
                      width: 95px;
                      top: 5%;
                      transform: skew(-27deg);
                      height: 25px;
                    "
                  ></p>
                  <p
                    class="px-2 py-1"
                    style="
                      left: 30px;
                      background-color: rgb(255, 255, 255);
                      font-size: 12px;
                      text-align: left;
                      top: 5%;
                      color: #ff0000;
                      font-weight: bold;
                      position: absolute;
                    "
                  >
                    You Save 71%
                  </p>
                </div>
              </div>
              <div class="col-md-5 d-flex align-items-center">
                <div class="card-body text-md-start text-center">
                  <h1 class="fw-bolder" id="name">{{ sdata.Name }}</h1>
                  <h5 class="text-secondary fw-bolder" id="type">
                    {{ sdata.CategoryName }}
                  </h5>

                  <div class="text-danger">
                    <span v-for="i in 5.0" :key="i">
                      <i v-if="i <= 3" class="fas fa-star active"></i>
                      <!-- <i  v-else-if="i>star" class="fas fa-star-half-alt"></i> -->
                      <i v-else class="far fa-star"></i>
                    </span>
                    <h6 class="d-inline text-light">
                      {{ sdata.reviews }}20 reviews 
                    </h6>
                  </div>

                  <div
                    class="colors d-flex justify-content-md-start justify-content-center pt-3"
                  >
                    <ul v-for="(i, id) in sdata.Products_data" :key="id">
                      <li v-if="id == 0">
                        <label>
                          <input
                            type="radio"
                            name="color"
                            v-model="idc"
                            :value="i"
                            checked
                          />

                          <span
                            class="swatch"
                            :style="'background-color:' + i.Color"
                          ></span>
                        </label>
                      </li>
                      <li v-else>
                        <label>
                          <input
                            type="radio"
                            name="color"
                            v-model="idc"
                            :value="i"
                            style="background-color: i.Color"
                          />

                          <span
                            class="swatch"
                            :style="'background-color:' + i.Color"
                          ></span>
                        </label>
                      </li>
                    </ul>
                  </div>

                  <h2 class="text-danger fw-bolder d-inline" id="price">
                    Rs. {{ sdata.Price }}
                  </h2>
                  <h3
                    class="text-secondary text-decoration-line-through d-inline"
                    id="oldprice"
                  >
                    Rs. {{ sdata.OldPrice }}
                  </h3>
                  <h5 class="text-light fw-700">YOU SAVE {{ offerpct }}%</h5>
                  <h6 id="text">Inclusive of all taxes</h6>
                  <p id="text " class="fw-bolder d-inline">Or pay later with</p>
                  <!-- <img
                    src="Assets/img/45_4.svg"
                    class="d-inline"
                    height="17px"
                  /> -->
                  <br />
                  <h6 id="text" class="d-inline">
                    Get 20% cashback upto Rs. 150 using
                  </h6>
                  <!-- <img
                    src="Assets/img/45_2.png"
                    class="d-inline bg-light"
                    height="16px"
                  /> -->

                  <div class="py-3" v-if="idc.Qty < 1">
                    <button
                      type="button"
                      id="ADD_TO_CART"
                      class="btn btn-secondary fw-bolder"
                      style="padding: 15px 25px; width: 227px"
                      disabled
                    >
                      OUT OF STOCK
                    </button>
                  </div>
                  <div class="py-3" v-else>
                    <button
                      type="button"
                      id="ADD_TO_CART"
                      v-on:click="add_to_cart(sdata, idc)"
                      class="btn btn-outline-light fw-bolder"
                      style="padding: 15px 25px; width: 227px"
                    >
                      ADD TO CART
                    </button>
                    <button
                      type="button"
                      class="btn text-light fw-bolder my-2"
                      style="
                        background-color: #ff0000;
                        padding: 15px 25px;
                        width: 227px;
                      "
                      v-on:click="buy_Now(sdata, idc)"

                    >
                      BUY IT NOW
                    </button>
                  </div>

                   </div>
              </div>
            </div>
            <!-- </div> -->
            <div class="container text-center">
              <img
                alt="image"
                src="../assets/productinfo.png"
                style="height: 121px"
              />
            </div>
          </div>
        </div>
        <marquee text="India’s No.1 Earwear Audio Brand."></marquee>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import Product from "../Service/Product";
import marquee from "../components/Marquee-text.vue";
import cart from "../Service/cart";

// import { computed } from '@vue/reactivity';

 import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "Product",
  components: {
    Footer,
    Navbar,
    marquee,
    Loading
  },
  props: ["id"],
  data() {
    return {
      data: [],
      sdata: null,
      idc: [],
      loading: true,
        isLoading: false,
      fullPage: true,
      errored: false,
      //   sdata:null
    };
  },
  mounted() {
    Product.get_Product(this.id)
      .then((response) => {
        //   this.tutorials = response.data;
        this.sdata = response.data[0];
        this.idc = this.sdata.Products_data[0];
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
  methods: {
    update(temp) {
      cart
        .update_cart(temp)
        .then((response) => {
          // this.products= response
          console.log(response);

          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added to Cart",
            // showConfirmButton: false,
            timer: 1500,
          });
          this.$refs.Navbar.cartlen();
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    add_to_cart(data, pc) {
      console.log(data);
      if (localStorage.getItem("token")) {
        var temp = {
          Cart_Products: [
            {
              P_id: data._id,
              P_Color_id: pc._id,
              Products_qty: 1,
            },
          ],
          Total_price: data.Price,
        };
        this.update(temp);
      } else {
        this.$swal.fire({
          position: "bottom-end",
          icon: "warning",
          title: "Login Required",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
    buy_Now(sdata, idc){
       this.add_to_cart(sdata, idc)
       this.$router.push({name:'cart'})
    }
  },
};
</script>

<style scoped>
.card.border-0 {
  background: linear-gradient(
    to bottom,
    #2c2c2c 0%,
    #000 100%,
    #2c2c2c 43%,
    #2c2c2c 100%
  );
  /* padding-bottom: 170px; */
}
.form-check-input:checked {
  /* background-color: #0d6efd; */
  border-color: #722424;
}
.form-check-input:checked[type="radio"] {
  /* background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e); */
}
button.btn.text-light.fw-bolder {
  margin-left: 10px;
}
.rdc {
  height: 25px;
  width: 25px;
  /* margin: 2px; */
}
.form-check {
  margin-left: 10px;
}

.colors ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.colors li {
  margin: 0 0 10px 0;
}

.colors label {
  cursor: pointer;
}

.colors input {
  display: none;
}
.colors input[type="radio"] + .swatch {
  border-radius: 31px;
}

.colors input[type="radio"]:checked + .swatch {
  box-shadow: 0px 0px 0px 2px rgb(255 255 255);

  border-radius: 31px;
}

.swatch {
  display: inline-block;
  vertical-align: middle;
  height: 30px;
  width: 30px;
  margin: 0 5px 0 0;
  border: 1px solid #d4d4d4;
}
.carousel-item img {
  animation: bounceImage 1.5s ease-in-out infinite alternate;
  -webkit-animation: bounceImage 1.5s ease-in-out infinite alternate;
  transition: all 0.5s ease-in-out;
  position: relative;
}
@keyframes bounceImage {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-10px);
  }
}

img#img {
  width: 396px;
}
div#back {
  height: 380px;
  position: absolute;
  border-radius: 200px;
  background-color: gray;
  width: 380px;
  left: 70px;
  top: 115px;
}
</style>
