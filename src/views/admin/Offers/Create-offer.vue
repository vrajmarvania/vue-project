<template>
  <div class="card sb">
    <div class="card-body p-5 m-2">
      <form class="row g-3" @submit="submit">
        <h5 class="fw-bolder">Category New Offer</h5>
        <div class="col-md-6">
          <label for="CategoryName" class="form-label">OfferName</label>
          <input
            type="text"
            v-bind:class="{
              'form-control': true,
            }"
            id="CategoryName"
            v-model="list.OfferName"
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
            v-model="list.Offer_Start_Date"
            required
          />
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
            v-model="list.Offer_End_Date"
            required
          />
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
            v-model="list.Offer_pct"
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
            Create Offer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Offer from "../../../Service/offer";

export default {
  name: "Create-offer",
  data() {
    return {
      list: {},
    };
  },
  methods: {
    submit(e) {
      console.log(this.list);

      Offer.post_Offer(this.list)
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
