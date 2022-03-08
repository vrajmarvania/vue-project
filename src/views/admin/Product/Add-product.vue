<template>
<div>
  <div class="my-3">
    <ol
      class="breadcrumb m-0 pl-2 col-12"
      style="padding-left: 0px; width: 100%"
    >
      <li class="breadcrumb-item">Dashboard</li>
      <li class="breadcrumb-item">Manage-Product</li>
      <li class="breadcrumb-item">Add-product</li>
    </ol>
  </div>
  <div class="card sb">
    <div class="card-body p-5 m-2">
      <form class="row g-3" @submit="submit">
        <h5 class="fw-bolder">Add New Product</h5>
        <!-- Name -->
        <div class="col-md-6">
          <label for="Name" class="form-label">Name</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
              'is-invalid': errors.Name != null,
            }"
            id="CategoryName"
            v-model="Name"
            required
          />
          <div id="CategoryType" class="invalid-feedback">
            {{ errors }}
          </div>
        </div>

        <b />
        <!-- CategoryName -->
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">CategoryName</label>
          <select
            v-model="CategoryName"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option selected></option>
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
              'is-invalid': errors.Price != null,
            }"
            id="Price"
            v-model="Price"
            required
          />
          <div id="Price" class="invalid-feedback">
            {{ errors.Price }}
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
              'is-invalid': errors.OldPrice != null,
            }"
            id="OldPrice"
            v-model="OldPrice"
            required
          />
          <div id="OldPrice" class="invalid-feedback">
            {{ errors.OldPrice }}
          </div>
        </div>
        <b />
        <!-- offer         -->
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">offer</label>
          <select
            class="form-select"
            v-model="offer"
            aria-label="Default select example"
            required
          >
            <option selected></option>
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
              'is-invalid': errors.Name != null,
            }"
            id="CategoryName"
            v-model="Dis0"
            required
          />
          <input
            type="text"
            v-bind:class="{
              'form-control mt-1': true,
              'is-invalid': errors.Name != null,
            }"
            id="CategoryName"
            v-model="Dis1"
            required
          />
          <input
            type="text"
            v-bind:class="{
              'form-control mt-1': true,
              'is-invalid': errors.Name != null,
            }"
            id="CategoryName"
            v-model="Dis2"
            required
          />

          <div id="CategoryType" class="invalid-feedback">
            {{ errors.Name }}
          </div>
        </div>
        <b />

        <h5 class="fw-bolder">Add product colors</h5>
        <div class="col-md-12 p-2" style="border: 1px solid #0000002b">
          <div v-for="i in c" :key="i">
            <div class="text-end">
              <button class="btn btn-danger" v-if="i == c" @Click="remove">
                X
              </button>
            </div>
            <!-- <div class="col-md-6">
              <label for="img" class="form-label">img Url</label>
              <input
                type="text"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': false,
                }"
                id="img"
                required
                v-model="Products_data[i - 1].img"
              /> -->
            <!-- <div id="CategoryType" class="invalid-feedback"> -->
            <!-- {{ errors.img }} -->
            <!-- </div> -->
            <!-- <img :src="Products_data[i - 1].img" style="width: 50px" /> -->
            <!-- </div> -->
            <label for="img" class="form-label">img Url</label>

            <div class="col-md-6 d-flex">
              <input
                type="file"
                @change="Images_onFileChanged"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': Products_err[i - 1] == true,
                }"
                required
              /><button @click.prevent="Images_onUpload(i - 1)">Upload!</button>
              <!-- {{ Products_err[i - 1] }}
              {{ Products_err[i - 1] == true }} -->
            </div>
            <div id="CategoryType" class="invalid-feedback">
              <!-- {{ errors.Fimg }} -->
               <span>Category required</span>

            </div>
            <div v-if="Products_data[i - 1].img != ''">
              <img
                :src="Products_data[i - 1].img"
                style="height: 175px; width: 175px"
              />
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
                v-model="Products_data[i - 1].Qty"
              />
              <div id="Qty" class="invalid-feedback">
                <!-- {{ errors.Qty }} -->
                <span>Qty required</span>
              </div>
            </div>

            <div class="col-md-6">
              <label for="exampleColorInput" class="form-label">Color </label>
              <input
                type="color"
                class="form-control form-control-color"
                id="exampleColorInput"
                v-model="Products_data[i - 1].Color"
                required
                title="Choose your color"
              />
            </div>

            <div>
              <!-- {{ Products_err }} -->
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
            type="submit"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import collection from "../../../Service/Collection";
import Offer from "../../../Service/offer";
import Product from "../../../Service/Product";
import imageservice from "../../../Service/image.service.js";

export default {
  name: "AddProduct",
  data() {
    const schema = yup.object({
      Name: yup.string().required("is Name required"),
      CategoryName: yup.string().required("is CategoryName required"),
      Price: yup.number().required("is Price required"),
      OldPrice: yup.number().required("is Price required"),
      Dis: yup.array().required("is Price required"),
      offer: yup.string().required("is offer required"),

      Products_data: yup
        .array()
        .of(
          yup.object().shape({
            Color: yup.string().required().label("Color"),
            img: yup.string().required().label("img"),
            Qty: yup.number().required().label("Qty"),
          })
        )
        .strict(),
    });
    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: Name } = useField("Name");
    const { value: CategoryName } = useField("CategoryName");
    const { value: OldPrice } = useField("OldPrice");
    const { value: Price } = useField("Price");
    const { value: offer } = useField("offer");
    const { value: Dis0 } = useField("Dis[0]");
    const { value: Dis1 } = useField("Dis[1]");
    const { value: Dis2 } = useField("Dis[2]");
    const submit = handleSubmit((values) => {
      values["Products_data"] = this.Products_data;
      console.log(values);
      this.validate();
      let checker = (Products_err) => Products_err.every((v) => v === false);
      console.log(checker(this.Products_err));
      if (checker(this.Products_err)) {
        Product.post_Product(values)
          .then((response) => {
            if (response.data.errmsg == null) {
              console.log(response);
              this.$swal.fire({
                icon: "success",
                title: "post_Product success created",
                showConfirmButton: false,
                timer: 1500,
              });
              this.$router.push("Manage-Product");
              console.log(response);
            } else {
              // this.$swal.fire({
              //   icon: "error",
              //   title: "Oops...",
              //   text: response.data.errmsg,
              // });
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
      //   this.$forceUpdate();
    });
    return {
      c: 1,
      CategoryName,
      Name,
      offer,
      Price,
      OldPrice,
      errors,
      submit,
      Dis0,
      Dis1,
      Dis2,
      Products_data: [{ img: "", Qty: 20, Color: "" }],
      collection: [],
      offers: [],
      Products_err: [],
    };
  },
  methods: {
    validate() {
      // alert();
      this.Products_err = [];

      for (var i = 0; i < this.Products_data.length; i++) {
        console.log(this.Products_data[i]);
        if (this.Products_data[i].img == "") {
          console.log(i);
          this.Products_err.push(true);
        } else {
          this.Products_err.push(false);

          //  this.Products_err[i].push({errmes:''})
        }
      }
    },
    add() {
      this.c = this.c + 1;
      this.Products_data.push({ img: "", Qty: 20, Color: "" });
    },
    remove() {
      if (this.c > 1) {
        this.c = this.c - 1;
        this.Products_data.pop();
      }
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
          this.Products_data[i].img = response.data.url;
          console.log(response.data.url);
        })
        .catch((e) => {
          console.log(e);
          // this.errored = true;
        })
        .finally(() => {
          // this.loading = false;
        });
      // e.preventdefault()
    },
  },

  mounted() {
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
