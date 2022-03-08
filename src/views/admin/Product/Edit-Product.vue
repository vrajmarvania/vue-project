<template>
<div>
  <div class="my-3">
    <ol
      class="breadcrumb m-0 pl-2 col-12"
      style="padding-left: 0px; width: 100%"
    >
      <li class="breadcrumb-item">Dashboard</li>
      <li class="breadcrumb-item">Manage-Product</li>
      <li class="breadcrumb-item">Edit-Product</li>
    </ol>
  </div>
  <div class="card sb" v-if="!loading">
    <div class="card-body p-5 m-2">
      <form class="row g-3" @submit="SubmitProduct">
        <h5 class="fw-bolder">Edit Product</h5>
        <!-- Name -->
        <div class="col-md-6">
          <label for="Name" class="form-label">Name</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
              'is-invalid': false,
            }"
            id="CategoryName"
            v-model="datas.Name"
            required
          />
          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors }} -->
          </div>
        </div>

        <b />
        <!-- CategoryName -->
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">CategoryName</label>
          <select
            v-model="datas.CategoryName"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected>{{ datas.CategoryName }}</option>
            <option v-for="i in collection" :key="i" :value="i.CategoryName">
              {{ i.CategoryName }}
            </option>
          </select>
        </div>

        <b />
        <!-- Price -->
        <div class="col-md-6">
          <label for="Price" class="form-label">Price</label>
          <input
            type="number"
            min="0"
            v-bind:class="{
              'form-control': true,
              'is-invalid': false,
            }"
            id="Price"
            v-model="datas.Price"
            required
          />
          <div id="Price" class="invalid-feedback">
            <!-- {{ errors.Price }} -->
          </div>
        </div>
        <b />
        <!-- OldPrice -->
        <div class="col-md-6">
          <label for="OldPrice" class="form-label">Old Price</label>
          <input
            type="number"
            min="0"
            v-bind:class="{
              'form-control': true,
              'is-invalid': false,
            }"
            id="OldPrice"
            v-model="datas.OldPrice"
            required
          />
          <div id="OldPrice" class="invalid-feedback">
            <!-- {{ errors.OldPrice }} -->
          </div>
        </div>
        <b />
        <!-- offer  -->
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">offer</label>
          <select
            class="form-select"
            v-model="datas.Offer_id"
            aria-label="Default select example"
          >
            <!-- <option selected>{{datas.Offer_id}}</option> -->
            <option v-for="i in offers" :key="i" :value="i._id">
              {{ i.OfferName }}
            </option>
          </select>
        </div>

        <b />
        <!-- Product Dis -->
        <div class="col-md-6">
          <label for="Name" class="form-label">Product Dis</label>
          <input
            type="text"
            v-bind:class="{
              'form-control mt-1': true,
              'is-invalid': false,
            }"
            id="CategoryName"
            v-model="datas.Dis[0]"
            required
          />
          <input
            type="text"
            v-bind:class="{
              'form-control mt-1': true,
              'is-invalid': false,
            }"
            id="CategoryName"
            v-model="datas.Dis[1]"
            required
          />
          <input
            type="text"
            v-bind:class="{
              'form-control mt-1': true,
              'is-invalid': false,
            }"
            id="CategoryName"
            v-model="datas.Dis[2]"
            required
          />

          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors.Name }} -->
          </div>
        </div>
        <b />
        <h5 class="fw-bolder">Add product colors</h5>
        <div class="col-md-12 p-2" style="border: 1px solid #0000002b">
          <div v-for="(i, j) in datas.Products_data" :key="i">
            <div class="text-end">
              <button class="btn btn-danger" @Click="remove(j)">X</button>
            </div>





  <div class="col-md-6 d-flex">
              <input
                type="file"
                @change="Images_onFileChanged"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': Products_err[j] == true,
                }"
                required
              /><button @click.prevent="Images_onUpload(j)">Upload!</button>
         
           
            </div>
  <div v-if="i.img != ''">
              <img
                :src="i.img"
                style="height: 175px; width: 175px"
              />
              <!-- {{j}} -->
            </div>







            <div class="col-md-6">
              <label for="Qty" class="form-label">Qty</label>
              <input
                type="number"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': false,
                }"
                id="Qty"
                required
                v-model="i.Qty"
              />
              <div id="Qty" class="invalid-feedback">
                <!-- {{ errors.Qty }} -->
              </div>
            </div>

            <div class="col-md-6">
              <label for="exampleColorInput" class="form-label">Color </label>
              <input
                type="color"
                class="form-control form-control-color"
                id="exampleColorInput"
                v-model="i.Color"
                required
                title="Choose your color"
              />
            </div>

            <div>
              <hr />
            </div>
          </div>
          <button class="btn btn-secondary mt-3" @Click="add" type="button">
            Add New Color +
          </button>
        </div>
        <div class="col-12">
          <button
            class="btn fw-bolder"
            style="background-color: red; color: white"
            @Click="SubmitProduct"
          >
            Submit Product Changes
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
// import { useForm, useField } from "vee-validate";
// import * as yup from "yup";
import collection from "../../../Service/Collection";
import Offer from "../../../Service/offer";
import Product from "../../../Service/Product";
import imageservice from "../../../Service/image.service.js";

export default {
  name: "EditProduct",
  props: ["ProductData"],
  data() {
    return {
      c: 1,
      Products_data: [{ img: "", Qty: 20, Color: "" }],
      collection: [],
      offers: [],
      datas: [],
      loading: true,
      Products_err:[]
    };
  },
  methods: {
      validate() {
      this.Products_err = [];

      for (var i = 0; i < this.datas.Products_data.length; i++) {
        // console.log(this.Products_data[i]);
        if (this.datas.Products_data[i].img == "") {
          console.log(i);
          this.Products_err.push(true);
        } else {
          this.Products_err.push(false);

          //  this.Products_err[i].push({errmes:''})
        }
      }
    },
    add() {
      // this.c=this.c+1;
      this.datas.Products_data.push({ img: "", Qty: 0, Color: "" });
    },
    remove(id) {
      this.datas.Products_data.splice(id, 1);
    },
    SubmitProduct(e) {


        this.validate();
      let checker = (Products_err) => Products_err.every((v) => v === false);
      console.log(checker(this.Products_err));
      if (checker(this.Products_err)) {
      Product.put_Product(this.datas)
        .then((response) => {
          if (response.data.errmsg == null) {
            this.$swal.fire({
              icon: "success",
              title: "Updated successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push("Manage-Product");

            console.log(response);
          } else {
            console.log(response.data.errmsg)
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data.errmsg,
            });
          }
        })
        .catch((errmsg) => {
          console.log(errmsg);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
      }
     e.preventDefault();
    },
     Images_onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
    Images_onUpload(i) {
      console.log(i);
      const mypostparameters = new FormData();
      mypostparameters.append(
        "image",
        this.selectedFile,
        this.selectedFile.name
      );
      imageservice
        .uploadimage(mypostparameters)
        .then((response) => {
          // this.img = response.data.url;
          // i= response.data.url;
          // console.log( this.Products_data[i])
                    console.log(  this.datas.Products_data[i].img)

          this.datas.Products_data[i].img = response.data.url;
                    console.log( this.datas.Products_data[i].img)

        })
        .catch((e) => {
          console.log(e);
          // this.errored = true;
        })
        .finally(() => {
          // this.loading = false;
        });
      // e.preventdefault()
    }
  },
  mounted() {
    if (this.ProductData != null) {
      Product.get_Product(this.ProductData)
        .then((response) => {
          //   this.tutorials onmouseover = response.data;
          this.datas = response.data[0];
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
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
    Offer.getall_Offer()
      .then((response) => {
        this.offers = response.data;
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
};
</script>
<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
label.form-label {
  font-weight: 600;
}
</style>
