<template>
  <div class="card sb mt-4">
    <div class="card-header fw-bolder py-3" style="background-color: #ffffff">
      Order info
    </div>
    <div class="card-body p-5 m-2">
      <div class="px-4">

               <table class="table  table-hover" id="datatable">
        <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Order Id</th>
              <th scope="col">Date</th>
              <th scope="col">Total Price</th>
              <!-- <th scope="col">status</th> -->
              <th scope="col">Order Details</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, j) in sdata" :key="i">
              <!-- {{i}} -->
              <td>{{ j + 1 }}</td>
              <td>#{{ i.id }}</td>
              <td>{{ getdate(i.order_date) }}</td>
              <td>Rs.{{ i.Total_Price }}</td>
              <!-- <td>Rs.{{i}}</td> -->
              <!-- <td><span class="badge bg-success" v-if="i.Payment_Id.Status=='paid'">Success</span>
        <span v-else class="badge bg-danger">cancelled</span></td> -->
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
</template>

<script>
import order from "../../../Service/order";
import moment from "moment";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


export default {
  name: "manage-Order",
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

<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
</style>
