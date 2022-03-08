<template>
<div>
  <Navbar></Navbar>
  <div style="background-color: #ffffff" class="py-4">
    <div>
      <h3 class="fw-bolder text-center">Manage Your Orders</h3>
    </div>
    <div>
      <div class="px-4">
  


             <table class="table" id="datatable">
        <thead>
          <tr>
              <th scope="col">#</th>
              <th scope="col">Order Id</th>
              <th scope="col">Date</th>
              <th scope="col">Total Price</th>
              <th scope="col">Order Details</th>
          </tr>
        </thead>
        <tbody>
             <tr v-for="(i, j) in sdata" :key="i">
              <td>{{ j + 1 }}</td>
              <td>#{{ i.id }}</td>
              <td>{{ getdate(i.order_date) }}</td>
              <td>Rs.{{ i.Total_Price }}</td>
              <td scope="col">
                <router-link
                  :to="{ name: 'viewOrderDetails', params: { id: i.id } }"
                  class="px-4"
                  style="color: #000000"
                  >view order Details
                </router-link>
              </td>
            </tr>
        </tbody>
      </table>    
      </div>
    </div>
  </div>

  <marquee text="India’s No.1 Earwear Audio Brand."></marquee>

  <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import marquee from "../components/Marquee-text.vue";
import order from "../Service/order";
import moment from "moment";

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
// import axios from 'axios';
import $ from 'jquery'; 

export default {
  name: "Orderdetails",
  components: {
    Navbar,
    Footer,
    marquee,
  },
  mounted() {
    order
      .getallorder()
      .then((response) => {
        this.sdata = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
                $('#datatable').DataTable();

      });
 
  },
  methods:{
     getdate(date) {
      return moment(date).utc().format("DD-MM-YYYY");
    },
  },
  data() {
    return {
      sdata: [],
    };
  },
};
</script>

<style scoped></style>
