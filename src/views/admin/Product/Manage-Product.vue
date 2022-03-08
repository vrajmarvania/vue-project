<template>
  <div>
    <div>
      <ol
        class="breadcrumb m-0 pl-2 col-12"
        style="padding-left: 0px; width: 100%"
      >
        <li class="breadcrumb-item">Dashboard</li>
        <li class="breadcrumb-item">Manage-Product</li>
      </ol>
    </div>

    <div
      class="d-flex"
      style="flex-direction: row; flex-wrap: wrap; justify-content: center"
    >
      <!-- New orders card-->
      <div class="col-sm-12 col-md-12 col-lg-6 icons">
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
              <!-- <img src="../../../assets/orders.png" /> -->
              <i class="fas fa-cube ic" style="font-size: 70px" />
            </div>
            <div class="col-6">
              <h5>Total Products</h5>
              <h2 class="fw-bolder">{{ datas.length }}</h2>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 mt-3">
          <div
            class="card m-1 sb mt-1"
            style="
              border-radius: 10px;
              -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
                0 1px 4px rgb(0 0 0 / 8%);
            "
          >
            <div
              class="card-header fw-bolder my-2"
              style="background-color: #ffffff"
            >
              New Launches
            </div>

            <div class="card-body" v-if="!loading2">
              <div v-for="(i, j) in New_Launches" :key="i">
                <div
                  class="d-flex"
                  v-if="!(j > New_Launches.length - 4)"
                  style="align-items: center; justify-content: space-around"
                >
                  <div>
                    <img
                      :src="i.Products_data[0].img"
                      style="height: 50px; width: 50px"
                    />
                  </div>
                  <div>
                    <b>{{ i.Name }}</b>
                  </div>
                  <div>
                    <b>₹{{ i.Price }}</b>
                  </div>
                </div>
                <hr class="my-2" v-if="!(j > New_Launches.length - 4)" />
              </div>
            </div>
          </div>
        </div>
      </div>
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
            Top Selling Product info
          </div>

          <div class="card-body">
            <PieChart v-if="!loading1" :chartData="testData" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="loading">
      <div class="vld-parent">
        <loading
          :active="loading"
          :can-cancel="true"
          :on-cancel="onCancel"
          loader="bars"
          color="#f00"
          opacity="0"
          :is-full-page="true"
        />
      </div>
    </div>
    <div class="card sb mt-4" v-else>
      <div
        class="card-header fw-bolder py-3 d-flex"
        style="
          background-color: #ffffff;
          display: flex !important;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div>Product info</div>
        <div class="text-end">
          <router-link
            class="btn"
            style="background-color: #fff300"
            :to="{ name: 'AddProduct' }"
            >Add New product</router-link
          >
        </div>
      </div>

      <div class="card-body p-5 m-2">
        <table class="table table-hover" id="datatable">
          <thead class="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Img</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Qty</th>
              <th scope="col">CategoryName</th>
              <th scope="col">Product type</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <!-- <th scope="col">Deleted</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="i in datas"
              :key="i"
              style="border-bottom: 1px solid black"
            >
              <td>#{{ i.id }}</td>
              <td>{{ i.Name }}</td>
              <td>
                <img :src="i.Products_data[0].img" style="width: 70px" />
              </td>
              <td>₹{{ i.Price }}</td>
              <td>{{ i.Products_data[0].Qty }}</td>

              <td>{{ i.CategoryName }}</td>
              <td>{{ i.Products_data.length }}</td>
              <td>
                <router-link
                  class="btn"
                  style="background-color: #fff300"
                  :to="{
                    name: 'EditProduct',
                    params: { ProductData: i.id },
                  }"
                  ><i class="fas fa-edit fonticon"></i
                ></router-link>
              </td>
              <td>
                <button
                  v-bind:class="{
                    btn: true,
                    disabled: false,
                  }"
                  style="background-color: red; color: #ffffff"
                  @Click="del(i._id)"
                >
                  <i class="fas fa-trash-alt fonticon"></i>
                </button>
              </td>

              <!-- <td>
                <h6 v-if="i.isdeleted">YES</h6>
                <h6 v-else>NO</h6>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
// import axios from 'axios';
import $ from "jquery";
// import order from "../Service/order";
import moment from "moment";
import Product from "../../../Service/Product";
import { PieChart } from "vue-chart-3";

export default {
  components: { PieChart },

  methods: {
    getdata() {
      Product.get_all()
        .then((response) => {
          // this.sdata = response.data;
          console.log(response.data);
          this.datas = response.data;
          this.product_data = response.data;
          this.find_Top_Product();
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          this.demo();
        });
    },
    getdate(date) {
      return moment(date).utc().format("DD-MM-YYYY");
    },
    demo() {
      $("#datatable").DataTable();
    },
    edit(datas) {
      console.log(datas);
      this.$router.push({ name: "EditCategory", params: { data: datas } });
    },
    find_Top_Product() {
      this.Top_Product = this.product_data.sort(
        (a, b) => b.Selling_count - a.Selling_count
      );
      this.Top_Product = this.Top_Product.slice(0, 10);
      this.Temp = this.Top_Product.forEach((element) => {
        this.Top_Products_label.push(element.Name);
        this.Top_Products_Data.push(element.Selling_count);
      });
      this.testData = {
        labels: this.Top_Products_label,
        datasets: [
          {
            data: this.Top_Products_Data,
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
    },
    del(ids) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            console.log(ids);
            Product.delete_Product(ids)
              .then((response) => {
                console.log(response);
                this.$swal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                );
                this.getdata();
              })
              .catch((e) => {
                console.log(e);
                this.errored = true;
              })
              .finally(() => {
                this.loading = false;
              });
          }
        });
    },
  },
  mounted() {
    this.getdata();

    Product.get_all()
      .then((response) => {
        // this.sdata = response.data;
        // console.log(response.data);
        this.datas = response.data;
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
        this.demo();
      });

    Product.getsliderdata({ Q: { isdeleted: false }, S: { Date: -1 } })
      .then((response) => {
        //   this.tutorials = response.data;
        this.New_Launches = response.data;
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading2 = false;
      });
  },
  data: function () {
    return {
      datas: [],
      products: [
        {
          id: 1,
          product_title: "sasa",
          product_price: 1212,
          created_at: "12121212",
        },
        {
          id: 2,
          product_title: "sasa",
          product_price: 1212,
          created_at: "12121212",
        },
      ],
      Top_Product: [],
      Top_Products_label: [],
      Top_Products_Data: [],
      New_Launches: [],
      loading2: true,
    };
  },
};
</script>
<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
.icons img {
  width: 90px;
}
</style>
