<template>
<div>
   <div >
     <p>Dashboard</p>
   </div>
  <div class="container">
    <div
      class="d-flex"
      style="flex-direction: row; flex-wrap: wrap; justify-content: center"
    >
      <!-- New orders card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons ">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../assets/orders.png" />
            </div>
            <div class="col-6">
              <h5>New orders</h5>
              <h2 class="fw-bolder">{{tweened_New_orders.toFixed(0)}}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Products card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../assets/products.png" />
            </div>
            <div class="col-6">
              <h5>Total Products</h5>
              <h2 class="fw-bolder">{{tweened_Total_Products.toFixed(0)}}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- Total categories card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../assets/categories.png" />
            </div>
            <div class="col-6">
              <h5>Total categories</h5>
              <h2 class="fw-bolder">{{tweened_Total_categories.toFixed(0)}}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- User card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../assets/user.png" />
            </div>
            <div class="col-6">
              <h5>User</h5>
              <h2 class="fw-bolder">{{tweened_User.toFixed(0)}}</h2>
            </div>
          </div>
        </div>
      </div>

 <!-- categories info chary.js-->
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-header fw-bolder" style="background-color: #ffffff">
            categories info
          </div>

          <div class="card-body">
            <DoughnutChart v-if="!loading1" :chartData="testData" />
          </div>
        </div>
      </div>
      <!-- sales info chart.js-->
      <div class="col-sm-12 col-md-12 col-lg-6">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-header fw-bolder" style="background-color: #ffffff">
            sales info
          </div>

          <div class="card-body">
            <PolarAreaChart v-if="!loading1" :chartData="testData2" />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { PolarAreaChart, DoughnutChart } from "vue-chart-3";
import collection from "../../Service/Collection";
import order from "../../Service/order";
import Product from "../../Service/Product";
import user from "../../Service/user";
import gsap from 'gsap'

export default defineComponent({
  name: "Dashboard",
  components: { PolarAreaChart, DoughnutChart },

  data() {
    return {
      tweened_New_orders:0,
      New_orders: 0,

      tweened_Total_Products:0,
      Total_Products: 0,

      tweened_Total_categories:0,
      Total_categories: 0,

      tweened_User:0,
      User: 0,

      data: [],
      catinfolabels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      catinfodata: [30, 40, 60, 70, 5],
      catinfolabels2: [],
      catinfodata2: [],
      loading1: true,
      orders: [],
      finalorder: [],
      // testData:{}
    };
  },
   watch: {
    New_orders(n) {
      gsap.to(this, { duration: 0.5, tweened_New_orders: Number(n) || 0 })
    },
    Total_Products(n) {
      gsap.to(this, { duration: 0.5, tweened_Total_Products: Number(n) || 0 })
    }
    ,
    Total_categories(n) {
      gsap.to(this, { duration: 0.5, tweened_Total_categories: Number(n) || 0 })
    },
    User(n) {
      gsap.to(this, { duration: 0.5, tweened_User: Number(n) || 0 })
    }
  },
  setup() {
    // get all user
    user
      .getall()
      .then((response) => {
        this.User = response.data.length;
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  },
  mounted() {
// get all collections
    collection
      .getall_collection2()
      .then((response) => {
        this.data = response.data;
        this.collection = response.data;
        this.Total_categories = response.data.length;
        for (var i of this.collection) {
          this.catinfolabels2.push(i.CategoryName);
          this.catinfodata2.push(i.Data.length);
        }
        this.catinfolabels = this.catinfolabels2;
        this.catinfodata = this.catinfodata2;
        this.testData = {
          labels: this.catinfolabels2,
          datasets: [
            {
              data: this.catinfodata2,
              backgroundColor: [
                "#ffbe0b",
                "#fb5607",
                "#ff006e",
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(201, 203, 207)",
                "rgb(54, 162, 235)",
                "#8338ec",
                "#3a86ff",
              ],
            },
          ],
        };
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading1 = false;
      });
// get all orders
    order
      .getallorder()
      .then((response) => {
        this.New_orders = response.data.length;
        this.orders = response.data;
        const monthCountArr = new Array(12).fill(0);
        this.orders.forEach(
          ({ order_date }) =>
            (monthCountArr[new Date(order_date).getMonth()] += 1)
        );
        this.finalorder = monthCountArr;
        this.testData2 = {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          datasets: [
            {
              data: monthCountArr,
              backgroundColor: [
                "#ffbe0b",
                "#fb5607",
                "#ff006e",
                "rgb(255, 99, 132)",
                "rgb(75, 192, 192)",
                "rgb(255, 205, 86)",
                "rgb(201, 203, 207)",
                "rgb(54, 162, 235)",
                "#8338ec",
                "#3a86ff",
              ],
            },
          ],
        };
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
// get all product data
    Product.get_all()
      .then((response) => {
        this.Total_Products = response.data.length;
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
// get users data 
    user
      .getall()
      .then((response) => {
        this.User = response.data.length;
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });

    // return { testData };
  },
});
</script>
<style scoped>
.icons img {
  width: 90px;
}
.sb {
  box-shadow: 0px 0px 4px 1px #00000012;
}
</style>
