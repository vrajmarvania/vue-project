<template>
  <section v-if="errored">
    <p>
      We're sorry, we're not able to retrieve this information at the moment,
      please try back later
    </p>
  </section>
  <div v-else>
    {{ products.Cart_Products }}

    <Navbar ref="Navbar"></Navbar>
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
      <div class="container-fluid" style="background-color: white">
        <div>
          <h1 class="fw-bolder text-center p-4">Your Cart</h1>
        </div>
        <div id="app">
          <transition name="fade-up">
            <transition-group name="plants-group" tag="div" class="plants">
              <div
                class="plant"
                style="
                  width: 100%;
                  display: flex !important;
                  align-items: center;
                  justify-content: space-between;
                  flex-wrap: wrap;
                "
              >
                <h6>Product</h6>
                <div>
                  <h6 class="veriant_sect">Color</h6>
                </div>
                <div class="description">
                  <h6>Name</h6>
                </div>
                <div>
                  <h6 class="price">Price</h6>
                </div>

                <div class="d-flex" style="flex-direction: row">
                  <h6>Quantity</h6>
                </div>
                <div>
                  <h3 class="price">Total</h3>
                </div>
              </div>
              <div
                class="plant"
                v-for="i in products.data.Cart_Products[0]"
                :key="i._id"
                style="
                  width: 100%;
                  display: flex !important;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <img :src="i.Product.Products_data[0].img" />
                <div>
                  <span
                    class="veriant_sect"
                    style="
                      border-radius: 15px;
                      width: 25px;
                      height: 25px;
                      border: 2px solid;
                      display: inline-block;
                    "
                    :style="
                      'background-color:' + i.Product.Products_data[0].Color
                    "
                    title="Lightpink"
                  ></span>
                </div>
                <div class="description">
                  <h4>{{ i.Product.Name }}</h4>
                  <!-- <transition name="change-price"> -->
                  <!-- <span class="price">${{plant.price}}</span> -->
                  <!-- </transition> -->
                </div>
                <div>
                  <h3 class="price">Rs.{{ i.Product.Price }}</h3>
                </div>

                <div class="quantity d-flex" style="flex-direction: row">
                  <button @click="decrease(i)" class="btn remove">
                    <i class="fas fa-minus"></i>
                  </button>
                  <transition name="scale" mode="out-in">
                    <span
                      :key="i.Products_qty"
                      class="number scale-animation"
                      >{{ i.Products_qty }}</span
                    >
                  </transition>
                  <button @click="add(i)" class="btn add">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
                <div>
                  <h3 class="price">
                    Rs.{{ i.Product.Price * i.Products_qty }}
                  </h3>
                </div>
              </div>
              <hr />
            </transition-group>
          </transition>
          <div
            class="checkout"
            style="align-items: flex-end; flex-direction: column"
          >
            <div class="total">
              <transition name="scale" mode="out-in">
                <span :key="sum" class="scale-animation"
                  >Total: Rs. {{ sum }}</span
                >
              </transition>
            </div>
            <!-- <transition name="opacity" mode="out-in"> -->
            <button :disabled="sum == 0" v-if="!checkout" @click="checkoutCart">
              Checkout
            </button>
            <!-- </transition> -->
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
import marquee from "../components/Marquee-text.vue";
import cart from "../Service/cart";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "login",
  components: {
    Navbar,
    Footer,
    marquee,
    Loading,
  },

  data() {
    return {
      products: [],
      checkout: false,
      loading: true,
      errored: false,
    };
  },

  computed: {
    sum: function () {
      return this.products.data.Cart_Products[0].reduce((sum, i) => {
        console.log(i.Product.Price);
        return sum + i.Product.Price * i.Products_qty;
      }, 0);
    },
  },

  mounted() {
    // get user cart data ------>
    this.calldata();
  },

  methods: {
    // get user cart data ------>
    calldata() {
      // call first get cart length for navbar-------->
      this.$refs.Navbar.cartlen();

      // get user cart --------->
      cart
        .get_cart()
        .then((response) => {
          this.products = response;
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    // update cart data---------->
    update(temp) {
      cart
        .update_cart(temp)
        .then((response) => {
          // this.products= response
          console.log(response);

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
    // delete product-------------->
    deletep(temp) {
      cart
        .delete_cart(temp)
        .then((response) => {
          console.log(response);
          this.calldata();
        })
        .catch((e) => {
          console.log(e);
          // this.errored = true;
        })
        .finally(() => {
          // this.loading = false;
        });
      // this.$forceUpdate();
    },
    // add product----------------->
    add(data) {
      data.Products_qty = data.Products_qty += 1;
      var temp = {
        Cart_Products: [
          {
            P_id: data._id,
            P_Color_id: data.Product.Products_data[0]._id,
            Products_qty: data.Products_qty,
          },
        ],
        Total_price: this.sum,
      };
      this.update(temp);
    },
    // decrease Qty---------------->
    decrease(data) {
      if (data.Products_qty > 1) {
        data.Products_qty = data.Products_qty -= 1;
        var temp = {
          Cart_Products: [
            {
              P_id: data._id,
              P_Color_id: data.Product.Products_data[0]._id,
              Products_qty: data.Products_qty,
            },
          ],
          Total_price: this.sum,
        };
        this.update(temp);
      } else {
        temp = {
          Cart_Products: [
            {
              P_id: data._id,
              P_Color_id: data.Product.Products_data[0]._id,
            },
          ],
          Total_price: this.sum,
        };
        this.deletep(temp);
      }
    },
    // remove Qty------------------>
    remove(plantIDToRemove) {
      this.plants = this.plants.filter((plant) => {
        return plant.id !== plantIDToRemove;
      });
    },
    // final checkoutCart-------------->
    checkoutCart() {
      this.$router.push("Checkout");
    },
  },
};
</script>

<style scoped>
.img {
  height: "100%";
  width: "100%";
}

#app {
  position: relative;
  width: 100%;
  /* height: 645px; */
  /* display: flex; */
  background: #ffffff;
  /* flex-direction: column; */
  align-items: center;
  /* overflow: hidden; */
  border-radius: 20px;
  box-shadow: 0px 7px 25px rgba(140, 140, 140, 0.2);
  transition: 0.3s all ease;
}

#app .plants {
  /* position: absolute; */
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  /* width: inherit; */
  background: white;
  border-radius: 20px;
  box-shadow: 0px 7px 25px rgba(140, 140, 140, 0.2);
}

#app .plants .plant {
  display: flex;
  flex-wrap: wrap;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  border-radius: 20px;
  transition: 0.3s all ease;
  padding: 10px;
  margin: 20px 0;
}

#app .plants .plant:hover {
  box-shadow: 0px 7px 15px rgba(140, 140, 140, 0.2);
}
#app .plants .plant:hover img {
  transform: scale(1.1);
}
#app .plants .plant img {
  width: 100px;

  height: auto;
  border-radius: 20px;
  transition: 0.3s all ease;
}
#app .plants .plant .description {
  width: 180px;
  padding-left: 25px;
}
#app .plants .plant .description h4 {
  margin-top: 5px;
}
#app .plants .plant .description p {
  color: #8c8c8c;
}
#app .plants .plant .description .price {
  font-weight: 600;
}

#app .plants .plant .quantity {
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-left: 35px;
  padding: 0 20px;
  font-size: 18px;
  background: rgba(178, 206, 187, 0.3);
  border-radius: 20px;
}
#app .plants .plant .quantity .btn {
  border: none;
  background: none;
  color: #8c8c8c;
  transition: 0.3s all ease;
  cursor: pointer;
}
#app .plants .plant .quantity .btn:hover {
  transform: scale(1.45);
}
#app .plants .plant .quantity .number {
  font-weight: 600;
  -webkit-animation: scale 0.3s ease;
  animation: scale 0.3s ease;
}
#app .checkout {
  /* position: absolute; */
  /* top: 520px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
#app .checkout .total {
  font-weight: 900;
  display: flex;
  align-items: flex-end;
  font-size: 20px;
  margin-bottom: 20px;
}
#app .checkout .total span {
  font-size: 24px;
  margin-left: 9px;
}
#app .checkout button {
  font-size: 18px;
  background: #ff0000;
  color: #fff;
  font-weight: 700;
  padding: 10px 100px;
  border: none;
  border-radius: 20px;
  transition: 0.3s all ease;
  cursor: pointer;
}
#app .checkout button:hover {
  box-shadow: 0px 7px 25px rgba(140, 140, 140, 0.2);
}
#app .checkout button:disabled {
  background-color: #8c8c8c;
  cursor: not-allowed;
}
#app .cart-checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 480px;
  margin-top: 20px;
}
#app .cart-checkout .cart-plants {
  display: flex;
  height: 300px;
}
#app .cart-checkout p {
  font-size: 34px;
  font-weight: 600;
  text-align: center;
  width: 240px;
}

*:focus {
  outline-color: #f9a100;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: #424242;
  background-image: linear-gradient(to right top, #fff, #c8e6c9);
}

.fade-up-leave-active {
  transition: 0.6s all ease;
}

.fade-up-leave {
  transform: translateY(0);
}

.fade-up-enter,
.fade-up-leave-to {
  transform: translateY(-500px);
}

.scale-enter-active {
  transition: 0.3s all ease;
}

.scale-leave-active {
  transition: 0.3s all ease;
}

.scale-enter,
.scale-leave-to {
  transform: scale(1.2);
}

.opacity-leave-active {
  transition: 0.3s all ease;
}

.opacity-enter,
.opacity-leave-to {
  transform: translateY(60px);
  opacity: 0;
}

.plants-group-leave-active {
  transition: 0.3s all ease;
}

.plants-group-enter,
.plants-group-leave-to {
  transform: translateX(200px);
  opacity: 0;
}

.order-group-enter-active {
  transition: 2s all ease;
}

.order-group-enter,
.order-group-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}

.fa-instagram {
  position: absolute;
  color: #b2cebb;
  top: 3%;
  right: 2%;
  font-size: 38px;
}

.fa-instagram:hover {
  font-size: 42px;
  color: #f9a100;
  transition: all 0.1s linear;
  cursor: pointer;
}

span.number.scale-animation {
  font-size: 30px;
  padding-inline: 10px;
}
</style>
