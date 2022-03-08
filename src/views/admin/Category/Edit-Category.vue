<template>
  <div class="card sb" v-if="!loading">
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
            v-model="CategoryNamee"
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
            v-model="Typee"
          />
          <div id="CategoryType" class="invalid-feedback">
            {{ errors }}
          </div>
        </div>
        <b />
        <label for="CategoryImage" class="form-label">Category Image </label>
        <div class="col-md-6 d-flex">
          <input
            type="file"
            @change="Images_onFileChanged"
            v-bind:class="{
              'form-control': true,
              'is-invalid': errors.Fimg != null,
            }"
          /><button @click.prevent="Images_onUpload">Upload!</button>
        </div>
        <div id="CategoryType" class="invalid-feedback">
          {{ errors.Fimg }}
        </div>
        <div v-if="Fimge != ''">
          <img :src="Fimge" style="height: 200px" />
        </div>
        <!-- {{Fimge}} -->
        <div class="col-12">
          <button
            class="btn fw-bolder"
            style="background-color: red; color: white"
            type="submit"
          >
            Edit Category
          </button>
        </div>
      </form>
    </div>
    <!-- {{ Fimge }} -->
  </div>
</template>
<script>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import collection from "../../../Service/Collection";
import imageservice from "../../../Service/image.service.js";

export default {
  name: "EditCategory",
  props: ["datass"],
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
      imageservice
        .uploadimage(mypostparameters)
        .then((response) => {
          this.img = response.data.url;
          this.Fimge = response.data.url;

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
  data() {
    const schema = yup.object({
      CategoryName: yup.string().required("is CategoryName required"),
      Type: yup.string().required("is CategoryType required"),
      Fimg: yup.string().required("is CategoryImage required"),
    });
    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });

    const { value: CategoryNamee } = useField("CategoryName");
    const { value: Typee } = useField("Type");
    const { value: Fimge } = useField("Fimg");

    const submit = handleSubmit((values) => {
      console.log(values);
      values._id = this.datas[0]._id;
      values.data = this.datas[0].Data;
      console.log(values);
      this.$swal
        .fire({
          title: "Do you want to save the changes?",
          showCancelButton: true,
          confirmButtonText: "Save",
          denyButtonText: `Don't save`,
        })
        .then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            collection
              .put_collecion(values)
              .then((response) => {
                console.log(response);
                this.$swal.fire("Saved!", "", "success");
                this.$router.push("Manage-Category");
              })
              .catch((e) => {
                console.log(e);
                this.$swal.fire(e, "", "error");
                this.errored = true;
              })
              .finally(() => {
                this.loading = false;
              });
          }
        });
    });

    return {
      datas: [],
      CategoryNamee,
      Typee,
      Fimge,
      errors,
      submit,
      loading: true,
    };
  },
  mounted() {
    console.log(this.datass);
    if (this.datass != undefined) {
      collection
        .get_collection(this.datass)
        .then((response) => {
          this.datas = response.data;
          this.CategoryNamee = this.datas[0].CategoryName;
          this.Typee = this.datas[0].Type;
          this.Fimge = this.datas[0].Fimg;
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    } else {
      this.$router.push({ name: "ManageCategory" });
    }
  },
};
</script>
<style scoped>
.sb {
  box-shadow: 0px 0px 5px 2px #00000012;
}
</style>
WWWW
