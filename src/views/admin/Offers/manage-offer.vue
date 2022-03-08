<template>
  <!-- <h1>manage-offer</h1> -->
  <div class="card sb mt-4">
    <!-- <div class="card-header fw-bolder py-3" style="background-color: #ffffff">
      Offer info  Createoffer
    </div> -->

    <div
      class="card-header fw-bolder py-3 d-flex"
      style="
        background-color: #ffffff;
        display: flex !important;
        justify-content: space-between;
        align-items: center;"
    >
      <div>Offer info</div>
      <div class="text-end">
        <router-link
          class="btn"
          style="background-color: #fff300;"
          :to="{ name: 'Createoffer' }"
          > Createoffer</router-link>
      </div>
    </div>
    <div class="card-body p-5 m-2">

             <table class="table  table-hover" id="datatable">
        <thead class="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">OfferName</th>
            <th scope="col">Offer_Start_Date</th>
            <th scope="col">Offer_End_Date</th>
            <th scope="col">IsDeleted</th>
            <th scope="col">offer pct</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in datas" :key="i">
            <td>#{{ i.Offer_id }}</td>
            <td>{{ i.OfferName }}</td>
            <td>{{ getdate(i.Offer_Start_Date) }}</td>
            <td>{{ getdate(i.Offer_End_Date) }}</td>
            <td>
              <h6 v-if="i.IsDeleted">YES</h6>
              <h6 v-else>NO</h6>
            </td>
            <td>{{ i.Offer_pct }}</td>

            <td>
              <router-link
                class="btn"
                style="background-color: #fff300"
                :to="{
                  name: 'EditOffer',
                  params: { id: i.id },
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Offer from "../../../Service/offer";
import moment from "moment";

import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

export default {
  name: "manage-offer",
  data() {
    console.log(
      moment("2022-02-07T11:50:00.000Z").utc().format("YYYY-MM-DD:HH:MM")
    );

    return {
      datas: [],
    };
  },
  methods: {
    getdate(date) {
      return moment(date).utc().format("YYYY-MM-DD:HH:MM");
    },
    getdata() {
      Offer.getall_Offer()
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
                          $('#datatable').DataTable();

        });
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
            Offer.delete_Offer(ids)
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
  },
};
</script>
<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
</style>
