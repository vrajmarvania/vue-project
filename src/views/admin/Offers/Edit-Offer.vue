<template>
  <div class="card sb" v-if="!loading">
    <div class="card-body p-5 m-2">
      <form class="row g-3" @submit="submit">
        <h5 class="fw-bolder">Edit Offer</h5>
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">OfferName</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
            }"
            id="CategoryName"
            v-model="list[0].OfferName"
            required
          />
          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors.CategoryName }} -->
          </div>
        </div>
        <b />
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">Offer Start Date</label>
          <input
            type="datetime-local"
            v-bind:class="{
              'form-control': true,
            }"
            id="CategoryName"
            :v-model="list[0].Offer_Start_Date"
            required
          />
          <!-- <td> {{list[0].Offer_Start_Date}}</td> -->

          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors.CategoryName }} -->
          </div>
        </div>

        <b />
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">Offer End Date</label>
          <input
            type="datetime-local"
            v-bind:class="{
              'form-control': true,
            }"
            min="{{Offer_Start_Date}}"
            id="CategoryName"
            v-model="list[0].Offer_End_Date"
            required
          />
          <!-- {{getdate(list[0].Offer_End_Date)}} -->
          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors.CategoryName }} -->
          </div>
        </div>
        <b />
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">Offer PCT</label>
          <input
            type="number"
            v-bind:class="{
              'form-control': true,
            }"
            min="0"
            max="100"
            id="CategoryName"
            v-model="list[0].Offer_pct"
            required
          />

          <div id="CategoryType" class="invalid-feedback">
            <!-- {{ errors.CategoryName }} -->
          </div>
        </div>
        <b />
        <div class="col-12">
          <button
            class="btn fw-bolder"
            style="background-color: red; color: white"
            type="submit"
          >
            Submit Change
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Offer from "../../../Service/offer";
import moment from "moment";

export default {
  name: "Edit-Offer",
  data() {
    return {
      list: {},
      loading: true,
    };
  },
  props: ["id"],
  mounted() {
    console.log(this.id);
    if (this.id != null) {
      Offer.get_Offer(this.id)
        .then((response) => {
          this.list = response.data;
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  methods: {
    getdate(date) {
      return moment(date).utc().format("DD-MM-YYYY:HH:MM");
    },
    submit(e) {
      console.log(this.list);

      Offer.put_Offer(this.list[0])
        .then((response) => {
          if (response.data.errmsg == null) {
            this.$swal.fire({
              icon: "success",
              title: "Category success created",
              showConfirmButton: false,
              timer: 1500,
            });
            this.$router.push("ManageOffer");
          } else {
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: response.data.errmsg,
            });
          }
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });

      e.preventDefault();
    },
  },
};
</script>
