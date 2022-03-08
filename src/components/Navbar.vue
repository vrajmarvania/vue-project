<template>
  <div>
    <!-- new offer -->
    <div class="text-center" id="ban" style="background-color: #ff0000">
      <a
        href="https://www.boat-lifestyle.com/collections"
        style="text-decoration: none"
      >
        <div class="announcement__inner" style="color: white; padding: 6px">
          <b class="fw-bolder" style="font-size: 12.23px">
            UPTO 75% OFF SITEWIDE* | GET UPTO Rs150 OFF USING LAZYPAY* | GET
            FLAT Rs75 CASHBACK USING MOBIKWIK*</b
          >
        </div>
      </a>
    </div>
    <!-- nav -->
    <nav class="navbar navbar-expand-lg" style="background-color: rgb(0, 0, 0)">
      <div class="container-fluid d-flex">
        <div class="order-md-1 d-lg-none d-lg-block p-2 bd-highlight">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            v-on:click="opennav()"
            data-bs-target=""
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="fa fa-bars" style="color: rgb(255, 255, 255)"></span>
          </button>
          <!-- <b-button v-b-toggle.sidebar-backdrop class="color:rgb(0,0,0)"><span class="fa fa-bars" style="color: rgb(255, 255, 255)"></span></b-button> -->
        </div>
        <div class="order-md-1 order-1 py-2 bd-highlight">
          <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'index' }">
              <img
                src="https://utioutll.sirv.com/Smart%20Watches/nav/logo.png"
                height="44px"
                id="logo"
            /></router-link>
          </div>
        </div>
        <div class="order-md-2 d-none d-lg-block p-2 bd-highlight">
          <div class="p-2 bd-highlight ml-5 justify-item-start">
            <ul class="navbar-nav d-flex justify-content-center">
              <li
                class="nav-item dropdown bore"
                @mouseover="listOne = true"
                @mouseleave="listOne = false"
              >
                <a
                  class="nav-link"
                  href="#"
                  id="shopout"
                  role="button"
                  data-bs-toggle=""
                  aria-expanded="false"
                >
                  <b>Shop</b>
                  <i class="fas fa-angle-down"></i>
                </a>
                <ul>
                  <div
                    class="container-fluid position-fixed pt-2 px-0"
                    id="shopitemout"
                    onmouseover="show"
                    v-if="listOne"
                    @click="listOne = false"
                    @wheel.prevent
                    @touchmove.prevent
                    @scroll.prevent
                    style="
                      top: 68px;
                      left: 0px;
                      transition-timing-function: linear;
                      z-index: 999;
                      transition: width 4s;
                      overflow: hidden;
                    "
                  >
                    <br />
                    <Transition>
                      <div
                        class="d-flex bg-dark p-4"
                        style="
                          flex-direction: row;
                          flex-wrap: wrap;
                          justify-content: center;
                        "
                      >
                        <div v-for="i in catimg" :key="i">
                          <router-link :to="i.urllink">
                            <img
                              :src="i.img"
                              style="width: 290px; height: 145px"
                          /></router-link>
                        </div>
                      </div>
                    </Transition>
                  </div>
                </ul>
              </li>
              <li class="nav-item bore">
                <a class="nav-link" @Click="call"
                  >The Ultimate Sail <span class="tmenu_item_text"></span
                ></a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link"
                  href="#"
                  id="morea"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                  <i class="fas fa-angle-down"></i>
                </a>
                <ul
                  class="dropdown-menu px-3 dropdown-toggle"
                  id="moredrop"
                  aria-labelledby="navbarDropdownMenuLink"
                  style="dispaly: none; background-color: BLACK"
                  onmouseleave="funclose()"
                >
                  <br />
                  <li class="mb-2">
                    <a class="dropdown-item" href="#">Plug-In Sale</a>
                  </li>
                  <li class="mb-2">
                    <a class="dropdown-item" href="#">Float Your boAt</a>
                  </li>
                  <li class="mb-2">
                    <a class="dropdown-item" href="#">Meet the boAtheads</a>
                  </li>
                  <li class="mb-2">
                    <a class="dropdown-item" href="#">Earn Rs.100</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="order-md-4 order-1 p-2 bd-highlight">
          <div class="d-flex justify-content-start">
            <a href="" class="m-1"
              ><img
                src="https://utioutll.sirv.com/Smart%20Watches/nav/icon1.png"
                style="height: 21px"
            /></a>
            <a
              data-bs-toggle="collapse"
              href="#collapseExample"
              class="m-1"
              id="user"
              ><img
                src="https://utioutll.sirv.com/Smart%20Watches/nav/icon3.png"
                style="height: 21px"
              />
            </a>
            <router-link :to="{ name: 'cart' }" class="m-1 position-relative">
              <img
                src="https://utioutll.sirv.com/Smart%20Watches/nav/icon2.png"
                style="height: 21px"
              />

              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style="background-color: red"
              >
                {{ products }}
                <span class="visually-hidden">unread messages</span>
              </span></router-link
            >
          </div>
        </div>
        <div class="order-md-3 order-3 d-lg-block d-none p-2 bd-highlight">
          <div class="bd-highlight">
            <div class="d-flex serach">
              <span
                class="fa fa-search form-control-feedback"
                style="top: 17px"
              ></span>
              <input
                v-on:keyup.enter="onEnter"
                class="form-control me-2 rounded-pill px-5"
                id="serch"
                v-model="query"
                style="height: 40.67px"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <div
        class="row d-lg-none d-block"
        style="width: 101%; margin-inline: 5px"
      >
        <div class="order-md-3 order-3 d-block p-2 bd-highlight">
          <div class="bd-highlight">
            <div class="d-flex serach">
              <span
                class="fa fa-search form-control-feedback"
                style="top: 58px"
              ></span>
              <input
                v-on:keyup.enter="onEnter"
                v-model="query"
                class="form-control me-2 rounded-pill px-5"
                id="serch"
                style="height: 40.67px"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              {{ query }}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- <h1 style="color: red">{{ loginuser }}</h1> -->

    <div>
      <!--user toggle -->
      <div
        class="collapse position-absolute"
        id="collapseExample"
        style="z-index: 1000; top: 80px; right: 10px"
      >
        <div class="card card-body">
          <div class="" v-if="loginuser" id="login">
            <h6 class="fw-bolder text-danger">Hi boAthead!</h6>
            <div class="form-group">
              <!-- <h1>{{ isLoggedIn }}</h1> -->

              <router-link
                to="/login"
                v-bind:class="HOME"
                class="btn text-light col-12 mt-4 fw-bolder py-2"
                style="width: 197px; background-color: #ff0000"
                >Log in</router-link
              >
            </div>
          </div>
          <div v-else class="" id="logout">
            <h6 class="fw-bolder text-danger" id="username">Hi boAthead!</h6>
            <div>
              <!-- <routing-link :to="/Orderdetails">Manage Your Orders</routing-link> -->
            </div>
            <div>
              <router-link
                to="/Orderdetails"
                class="mt-1"
                style="color: black; text-decoration: none"
              >
                <h6>Manage Your Orders</h6>
              </router-link>
            </div>
            <div>
              <router-link
                to="/admin"
                class="mt-1"
                style="color: black; text-decoration: none"
              >
                <h6>Admin Panel</h6>
              </router-link>
            </div>
            <hr />

            <div class="form-group">
              <button
                type="button"
                v-on:click="logout()"
                class="btn text-light col-12 fw-bolder py-2"
                style="width: 197px; background-color: #ff0000"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- side nav -->

      <div id="closenav" v-on:Click.self="closenavb">
        <div
          class="vnav"
          id="vnav"
          style="background-color: rgb(0, 0, 0); width: 0%"
        >
          <ul class="p-0" style="list-style-type: none">
            <a>
              <!-- <div> -->
              <li id="shopin">
                <a
                  data-bs-toggle="collapse"
                  href="#im"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <b
                    >Shop
                    <i class="fas fa-angle-down px-4" style="font-size: 15px">
                    </i>
                  </b>
                </a>
                <div class="row collapse" id="im">
                  <div v-for="i in catimg" :key="i">
                    <router-link :to="i.urllink">
                      <img :src="i.img" class="navimg" />
                    </router-link>
                  </div>
                </div>
              </li>
            </a>
            <a href="/a">
              <li>Pro It Up</li>
            </a>
            <a href="/a">
              <li>Sound Of Champions</li>
            </a>
            <!-- </li> -->

            <li>
              <a href="javascript:" class="moredatab" id="moredatab"
                ><b
                  >More
                  <i
                    class="fas fa-angle-down px-4"
                    style="font-size: 15px"
                  ></i></b
              ></a>
              <ul class="moredata" id="moredata" style="display: none">
                <li><a class="dropdown-item" href="#">Plug-In Sale</a></li>
                <li><a class="dropdown-item" href="#">Float Your boAt</a></li>
                <li>
                  <a class="dropdown-item" href="#">Meet the boAtheads</a>
                </li>
                <li><a class="dropdown-item" href="#">Earn Rs.100</a></li>
              </ul>
            </li>
            <!-- </li> -->
            <a href="">
              <li>Track Your Order</li>
            </a>
            <a v-on:click="logout()" style="color: red">
              <li>Log in</li>
            </a>
          </ul>
        </div>
      </div>
      <!-- </b-sidebar> -->
    </div>
  </div>
</template>

<script>
import cart from "../Service/cart";
import { mapMutations } from "vuex";

export default {
  data() {
    var token = window.localStorage.getItem("token");
    if (token == null) {
      this.loginuser = true;
    } else {
      this.loginuser = false;
    }
    return {
      query: "",
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

      isOpen: false,
      listOne: false,
      token,
      products: 0,
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.cartlen();
    }
  },
  methods: {
    ...mapMutations(["setUser", "setToken", "remove_User"]),

    onEnter(e) {
      console.log(e.target.value);

      this.$router.push({ name: "search", params: { q: this.query } });
    },
    call(){
      this.$router.push({ name: "collection-Home" });

    },
     cartlen(){
    if (localStorage.getItem('token')){
     
      cart.get_cart()
        .then((response) => {
          this.products = response.data.Cart_Products[0].length;
          console.log();
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        })
    }
    },
    logout: function () {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "Are You sure you want to logout?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirm !",
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            this.setUser("");
            this.setToken("");
            this.remove_User([]);

            this.loginuser = true;
            this.$swal.fire(
              "Logged out!",
              "You have successfully logged out!",
              "success"
            );
            this.$forceUpdate();
          }
        });
    },

    mouseover: function () {
      this.isOpen = true;
    },
    mouseleave: function () {
      this.isOpen = false;
    },
    hid: function () {
      document.getElementById("shopitemout").style.display = "none";
      window.onscroll = function () {};
    },
    opennav: function () {
      document.getElementById("vnav").style.width = "82%";
      document.getElementById("closenav").style.width = "100%";
      document.getElementById("closenav").style.height = "100%";
    },
    closenavb: function () {
      document.getElementById("vnav").style.width = "0";
      document.getElementById("closenav").style.width = "0";
      document.getElementById("closenav").style.height = "0";
    },
    show: function () {
      var x = document.getElementById("shopitemout");
      x.style.display = "block";
      window.onscroll = function () {
        window.scrollTo(0, 0);
      };
    },

    //  openNav:function() {
    // document.getElementById("vnav").style.width = "82%"
    // document.getElementById("closenav").style.width = "100%"
    // document.getElementById("closenav").style.height = "100%"
    // }
  },
};
</script>
<style>
.navimg {
  width: 300px;
  aspect-ratio: auto 200 / 100;
  height: 150px;
}
* {
  font-family: "Montserrat";
}
/* body{
  overflow-x: hidden;

} */

/* red line */
#ban {
  font-size: 11.8px;
  line-height: 1.4em;
  position: relative;
  z-index: 99;
}
img#logo {
  height: 44px;
}
/*navbar*/
.navbar-nav a {
  padding: 0px;
  color: white;
}
.bore {
  border-right: 2px solid red;
}

.navbar-nav a {
  padding: 0px;
  color: white;
}

.bore {
  border-right: 2px solid red;
}

.serach {
  background-image: src("./Assets/IMG/icon4.png");
  background-repeat: no-repeat;
  background-size: 13px !important;
  background-position-x: 12px !important;
  background-position-y: center !important;
  background-repeat: no-repeat !important;
  padding-left: 35px;
}

body {
  font-family: "Open Sans", sans-serif;
  background-color: black;
}

.form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  width: 3.375rem;
  height: 1.37rem;
  line-height: 3.012em;
  text-align: center;
  pointer-events: none;
  color: #000;
}
.serach {
  padding-left: 0px;
}

@media screen and (max-width: 767px) and (min-width: 523px) {
  form.d-flex.serach {
    /* margin: 0; */
    padding: 0;
    /* width: 512px; */
  }
  #logo img {
    height: 20.4px;
  }
}

@media screen and (max-width: 523px) and (min-width: 479px) {
  form.d-flex.serach {
    /* margin: 0; */
    padding: 0;
    /* width: 412px; */
  }
  #logo img {
    height: 30px;
  }
}
@media (max-width: 740px) {
  nav.navbar.navbar-expand-lg.nav-light.d-flex.d-lg-block.flex-nowrap.bd-highlight.align-items-center.justify-content-between {
    display: inline-block;
  }
  #logo img {
    height: 30px;
  }
  #user {
    display: none;
  }
  .container-fluid.d-flex {
    padding: 0px;
  }
}

.vnav dl,
ol,
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding: 0px;
  margin: 0px;
}

.vnav li {
  padding: 14px 20px;
  border-bottom: 1px solid rgb(194, 194, 194);
}

.vnav a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 16px;
}

#moredata li {
  list-style-type: none;
  padding: 5px 5px;

  border-bottom: 0px solid rgb(194, 194, 194);
}
.vnav a:hover {
  color: rgb(255, 0, 0);
  text-decoration: none;
}

.vnav {
  font-family: "Montserrat";
  font-size: 16px;
  top: 0;
  position: fixed;

  width: 0;
  overflow: auto;
  height: 100%;
}

.vnav .fab {
  color: white;
  font-size: 40px;
}

#closenav {
  top: 0;
  background: #0000004d;

  position: fixed;
}

span.text-stroke.cng {
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}

.text-white {
  font-weight: 600;
  color: #fff !important;
}

div#closenav {
  z-index: 9999;
}

.col {
  flex: 0 0 0%;
}

.slider .prev {
  color: rgb(255, 0, 0);
  top: 25%;
  left: -31px;
  font-size: 3.5em;
  display: flex;
  color: rgb(255, 0, 0);
  flex-direction: column;
  justify-content: end;
  bottom: top;
  position: absolute;
  top: 308%;
}

.slider .next {
  color: rgb(255, 0, 0);
  top: 25%;
  right: 10px;
  font-size: 3.5em;

  display: flex;
  color: rgb(255, 0, 0);
  flex-direction: column;
  justify-content: end;
  bottom: top;
  position: absolute;
  top: 308%;
}

.slider .fact {
  vertical-align: top;
  display: inline-block;
  margin: 0px 25px 0px 0px;
}

.fa-chevron-left:before {
  margin-left: 54px;
  content: "\f053";
}

.m-5 {
  margin: 0rem !important;
}

.card.rounded-5.m-5.a {
  border-radius: 15px;
}

img.card-img-top {
  min-height: 235px;
  height: 255px;
  padding-inline: 42px;
  background-color: #80808052;
}

.gridheadphones:hover {
  transition: all 1.1s ease-in-out;
  opacity: 0.4;
  z-index: 999;
}
.imgcon:hover {
  transition: all 1.1s ease-in-out;
  opacity: 0.6;
  z-index: 99;
}

.gridheadphones:hover + .txt,
.txt:hover {
  top: 35% !important;
}

.gridheadphones:hover + .txt:hover {
  filter: brightness(0.4);
}

/* fullscreen slider */
.carousel-item {
  /* -webkit-transition:all 1.0s ease-in-out; */
  /* -moz-transition:all 1.0s ease-in-out; */
  /* -o-transition:all 1.0s ease-in-out; */
  /* transition:all 1.0s ease-in-out; */
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
  display: flex;
  justify-content: center;
}

.carousel-inner .carousel-item-end,
.carousel-inner .carousel-item-start {
  transform: translateX(0);
}
::marker {
  list-style-type: square;
  font-size: 12px;
  color: red;
}

/*not tslider */
.fullcardslider .row.g-0 {
  background-color: #363636;
  color: red;
}

.fullcardslider .row.g-0 {
  max-width: 2000px;
  margin: auto;
  display: flex !important;
  align-items: center;
}

.fullcardslider .card {
  border-color: #363636;
  border: 0px;
}

/* resopn */
@media (max-width: 1000px) {
  .carousel-inner .carousel-item > div {
    display: none;
  }

  .carousel-inner .carousel-item > div:first-child {
    display: block;
  }
  img#logo {
    width: 65px;
    height: 29px;
  }
  .navbar-brand {
    margin-right: 0rem;
  }
  /* h2{
  font-size: 35px;
} */
  .hed {
    font-size: 30px;
  }
  .flogo img {
    width: 320px;
    height: 100px;
  }
}

/* medium and up screens */
@media (min-width: 768px) {
  .carousel-inner .carousel-item-end.active,
  .carousel-inner .carousel-item-next {
    transform: translateX(25%);
  }

  .carousel-inner .carousel-item-start.active,
  .carousel-inner .carousel-item-prev {
    transform: translateX(-25%);
  }
  .hed {
    font-size: 50px;
  }

  .iconnav .col-4 {
    text-align: end;
  }
}

/* blog */

.blog h5.card-title {
  color: white;
}

.blog h5.card-title:hover {
  color: red;
}

.blog .card.h-100 {
  background-color: black;
}

.blog button.btn.btn-outline-danger {
  color: white;
}

.blog img.inimg {
  /* opacity: .7; */
  filter: grayscale(100%);
}

.blog img.inimg:hover {
  filter: grayscale(0%);
}

.slide2 .card {
  background: linear-gradient(
    to bottom,
    #000 0,
    #000 30%,
    #eb2128 30%,
    #eb2128 100%
  );
  padding: 0px;
}

.slide2 .col {
  flex: 0 0 0%;
}

.slide2 .col.gx-0 {
  padding: 8px;
}

.comicon img:hover {
  filter: grayscale(0);
}

.comicon img {
  filter: grayscale(1);
}

.iconnav .col-4 {
  text-align: end;
}

.iconnav .col-8 {
  text-align: start;
}

footer a {
  text-decoration: none;
  color: white;
}

footer a:hover {
  color: white;
}

footer ul {
  list-style-type: none;
}

footer li {
  padding: 5px 0px;
}

footer .fab {
  color: white;
  font-size: 30px;
}
.imgshow {
  display: none;
}
.fa-chevron-left:before,
.fa-chevron-left:before {
  content: "\f053";
  margin-left: 0px;
}

.labt {
  background-color: white;
  text-align: left;
  top: 5%;
  position: absolute;
  width: 97px;
  top: 5%;
  transform: skew(-27deg);
  height: 24px;
}

.nav-link:focus,
.nav-link:hover {
  color: #e4e3e5;
}
img.gridheadphones {
  padding: 0px;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #ff0000;
  background-color: #000000;
}

.mbslider img.card-img-top {
  min-height: 0px;
  width: 90px;

  height: 255px;
  padding-inline: 10px;
  /* background-color: #80808052; */
  background-color: #e2e0df;
}

/* mb -view */
@media screen and (max-width: 370px) {
  .uns {
    justify-content: start;
  }
}

@media screen and (min-width: 370px) {
  .uns {
    justify-content: center;
  }
}

/* .dropdown-content a:hover {
    background-color: #ddd;
  }
   */
#morea:hover .dropdown-menu.show {
  display: block;
}

/* .dropdown-menu.show {
    display: none;
} */

.imgcon {
  position: relative;
  text-align: center;
  color: rgba(0, 0, 0, 0);
}
a:hover{
  color:rgba(255, 255, 255, 0)
}
.center {
  position: absolute;
  top: 80%;

  left: 50%;
  transform: translate(-50%, -50%);
}

.imgcon:hover .center {
  position: absolute;
  top: 61%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.imgcon:hover .infod {
  display: block;
}

.infod {
  display: none;
}

#que img {
  max-width: 30px;
}
</style>
