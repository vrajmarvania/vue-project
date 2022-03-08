<template>
  <div class="card sb">
    <div class="card-body p-5 m-2">
      <form class="row g-3" @submit="submit">
        <h5 class="fw-bolder">Category Basic information</h5>
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">CategoryName</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
              'is-invalid': errors.CategoryName != null,
            }"
            id="CategoryName"
            v-model="CategoryName"
            required
          />
          <div id="CategoryType" class="invalid-feedback">
            {{ errors.CategoryName }}
          </div>
        </div>
        <b />
        <div class="col-md-6">
          <label for="CategoryType" class="form-label">Category Type</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
              'is-invalid': errors.Type != null,
            }"
            id="CategoryType"
            required
            v-model="Type"
          />
          <div id="CategoryType" class="invalid-feedback">
            {{ errors.Type }}
          </div>
        </div>
        <b />
        <!-- <div class="col-md-6">
          <label for="CategoryImage" class="form-label"
            >Category Image Url</label
          >
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
              'is-invalid': errors.Fimg != null,
            }"
            id="CategoryImage"
            required
            v-model="Fimg"
          />
          <div id="CategoryType" class="invalid-feedback">
            {{ errors.Fimg }}
          </div>
        </div> -->
         <label for="CategoryImage" class="form-label"
            >Category Image </label
          >
<div class="col-md-6 d-flex"><input type="file" @change="Images_onFileChanged"  v-bind:class="{
              'form-control': true,
              'is-invalid': errors.Fimg != null,
            }"><button
        @click.prevent="Images_onUpload"
      >
        Upload!
      </button>
      </div>
       <div id="CategoryType"  class="invalid-feedback">
            {{ errors.Fimg }}
          </div>
      <div v-if="img!=''">
            <img :src=img style="height: 175px;width: 175px"  >
              
</div>

        <div class="col-12">
          <button
            class="btn fw-bolder"
            style="background-color: red; color: white"
            type="submit"
          >
            Create Category
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import collection from "../../../Service/Collection";
import imageservice from "../../../Service/image.service.js"
export default {
  name: "Create-Category",
  
  methods: {
      Images_onFileChanged(event) {
      this.selectedFile = event.target.files[0];
    },
        Images_onUpload() {
          const mypostparameters = new FormData();
      mypostparameters.append(
        "image",
        this.selectedFile,
        this.selectedFile.name
      );
          imageservice.uploadimage(mypostparameters).then((response) => {
          this.img = response.data.url;
                    this.Fimg = response.data.url;

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
        }
  },
  data() {
    const schema = yup.object({
      CategoryName: yup.string().required("is CategoryName required"),
      Type: yup.string().required("is CategoryType required"),
      Fimg: yup.string().required("is CategoryImage required"),
    });
    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });

    const { value: CategoryName } = useField("CategoryName");
    const { value: Type } = useField("Type");
    const { value: Fimg } = useField("Fimg");

    const submit = handleSubmit((values) => {
      console.log(values);
      collection
        .post_collecion(values)
        .then((response) => {
          if (response.data.errmsg == null) {
            this.$swal.fire({
              icon: "success",
              title: "Category success created",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push("Manage-Category");

            // this.$emit("getdata");
            // console.log(response);
          } else {
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
      this.$forceUpdate();
    });
    return {
      CategoryName,
      Type,
      Fimg,
      errors,
      submit,
      img:''
    };
  },
};
</script>
<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
</style>
