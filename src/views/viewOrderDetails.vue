<template>
<div>
  <Navbar></Navbar>
  <section class="h-100 gradient-custom m-5" v-if="!loading">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-10 col-xl-8">
          <div class="card" style="border-radius: 10px">
            <div class="card-header px-4 py-5">
              <h2 class="mb-0" style="color: white">
                Thanks for your Order
                <span style="color: #a8729a">{{ sdata.User.First_Name }}</span
                >!
              </h2>
            </div>
            <div class="card-body p-4">
              <div
                class="d-flex justify-content-between align-items-center mb-4"
              >
                <p class="lead fw-normal mb-0" style="color: #a8729a">
                  Receipt
                </p>
                <p class="small text-muted mb-0">
                  Receipt Voucher : 1KAU9-84UIL
                </p>
              </div>

              <div
                class="card shadow-0 border mb-4"
                v-for="i in sdata.OrderDetail.Cart_Products"
                :key="i"
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-2">
                      <img
                        :src="i.Product.Products_data[0].img"
                        style="max-width: 109px"
                        class="img-fluid"
                        alt="Phone"
                      />
                    </div>
                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <p class="text-muted mb-0">{{ i.Product.Name }}</p>
                    </div>

                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <!-- <p class="text-muted mb-0 small" style="width: 15px; height: 15px;">White</p> -->
                        <span
                    class="veriant_sect"
                    style="
                      border-radius: 15px;
                      width: 25px;
                      height: 25px;
                      border: 2px solid;
                      display: inline-block;
                    "
                    :style="
                      'background-color:' + i.Product.Products_data[0].Color
                    "
                    title="Lightpink"
                  ></span>
                    </div>
                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <p class="text-muted mb-0 small">
                        RS: {{ i.Product.Price }}
                      </p>
                    </div>
                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <p class="text-muted mb-0 small">
                        Qty: {{ i.Products_qty }}
                      </p>
                    </div>
                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <p class="text-muted mb-0 small">
                        Rs: {{ i.Products_qty * i.Product.Price }}
                      </p>
                    </div>
                    <div
                      class="col-md-2 text-center d-flex justify-content-center align-items-center"
                    >
                      <p class="text-muted mb-0 small"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="d-flex justify-content-between pt-2">
                <p class="fw-bold mb-0">Order Details</p>
                <p class="text-muted mb-0">
                  <span class="fw-bold me-4">Total</span>
                  {{ sdata.Total_Price }}
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <p class="text-muted mb-0">Invoice Date :{{sdata.order_date}}</p>
                <p class="text-muted mb-0"><span class="fw-bold me-4">GST 0%</span> 0</p>
              </div>

              <div class="d-flex justify-content-between mb-5">
                <p class="text-muted mb-0">
                  Payment Id: {{ sdata.Payment_Id._id }}
                </p>
                <p class="text-muted mb-0">
                  <span class="fw-bold me-4">Delivery Charges</span> Free
                </p>
              </div>
            </div>
            <div
              class="card-footer border-0 px-4 py-5"
              style="
                background-color: rgb(27 19 15);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
              "
            >
              <h5
                class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
              >
                Total paid:
                <span class="h2 mb-0 ms-2">{{ sdata.Total_Price }}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import order from "../Service/order";

export default {
  name: "viewOrderDetails",

  components: {
    Navbar,
  },
  props: ["id"],

  data() {
    return {
      loading: true,
      sdata: [],
    };
  },


  mounted() {
    if (this.id != null) {
      order
        .getOrderbyId(this.id)
        .then((response) => {
          this.sdata = response.data[0];
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    } else {
      this.$router.push("Orderdetails");
    }
  },
};
</script>


<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
}
.card-header.px-4.py-5 {
  background-color: #1b130f;
}
.card-header {
  background-color: rgb(27 19 15);
}
.text-muted {
  color: #000000 !important;
}
</style>
