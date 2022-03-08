<template>
  <div class="card sb mt-4">
    <!-- <div class="card-header fw-bolder py-3" style="background-color: #ffffff">
      Category info
    </div> -->
    
 <div
      class="card-header fw-bolder py-3 d-flex"
      style="
        background-color: #ffffff;
        display: flex !important;
        justify-content: space-between;
        align-items: center;"
    >
      <div>Category info</div>
      <div class="text-end">
        <router-link
          class="btn"
          style="background-color: #fff300;"
          :to="{ name: 'CreateCategory' }"
          >Add New Category</router-link>
      </div>
    </div>
    
    <div class="card-body p-5 m-2">
            <!-- <div class="text-end">

          <router-link
          class="btn"
          style="background-color: #fff300"
          :to="{ name: 'CreateCategory' }"
          >Add New Category</router-link>
      </div> -->
      <table class="table  table-hover" id="datatable">
        <thead class="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">CategoryName</th>
            <th scope="col">Category Img</th>
            <th scope="col">Qty</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
            <th scope="col">Deleted</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, j) in datas" :key="i">
            <td>{{ j + 1 }}</td>
            <td>{{ i.CategoryName }}</td>
            <td><img :src="i.Fimg" style="hight: 100px; width: 200px" /></td>
            <td>{{ i.Data.length }}</td>
            <td>
              <router-link
                class="btn"
                style="background-color: #fff300"
                :to="{
                  name: 'EditCategory',
                  params: { datass: i.CategoryName },
                }"
                ><i class="fas fa-edit fonticon"></i
              ></router-link>
            </td>
            <td>
              <button
                v-bind:class="{
                  btn: true,
                  disabled: i.Data.length > 0,
                }"
                style="background-color: red; color: #ffffff"
                @Click="del(i._id)"
              >
                <i class="fas fa-trash-alt fonticon"></i>
              </button>
            </td>

            <td>
              <h6 v-if="i.IsDeleted">YES</h6>
              <h6 v-else>NO</h6>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- {{datas.length}} -->
    </div>
  </div>
</template>
<script>
import collection from "../../../Service/Collection";
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
export default {
  name: "Manage-Category",
  components: {},
  data() {
    return {
      datas: [],
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      collection
        .getall_collection()
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
                    $('#datatable').DataTable();

        });
    },
    edit(datas) {
      console.log(datas);
      this.$router.push({ name: "EditCategory", params: { data: datas } });
    },
    del(id) {
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
            console.log(id);
            collection
              .delete_collection(id)
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
};
</script>

<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
.fonticon {
  font-size: 21px;
}
</style>
