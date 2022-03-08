<template>
  <div>
    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>
    <div v-else style="background-color: white">
      <div v-if="loading">Loading...</div>
      <div v-else class="container-fluid d-flex p-0">
        <div class="col-7" style="padding-top: 40px; padding: 40px">
          <div>
            <img src="../../src/assets/blacklogo.png" style="height: 44px" />
          </div>
          <div>
            <ol class="breadcrumb pt-2">
              <li class="breadcrumb-item active">
                <a
                  class="text-decoration-none text-dark"
                  href=""
                  onclick="window.history.back();"
                  >Information</a
                >
              </li>
              <li
                class="breadcrumb-item active text-dark pagename"
                aria-current="page"
              >
                Payment
              </li>
            </ol>
            <div>
              <h5>DELIVERY ADDRESS</h5>
            </div>
            <div>
              <form class="row g-3" @submit="submit">
                <div class="col-md-12">
                  <label for="validationServer01" class="form-label"
                    >Address</label
                  >
                  <textarea
                    type="text"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': errors.Address != null,
                    }"
                    id="Address"
                    v-model="Address"
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    class="invalid-feedback"
                  >
                    Please choose a Address.
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="Phone_No" class="form-label">Phone_No</label>
                  <div class="input-group has-validation">
                    <input
                      type="text"
                      v-bind:class="{
                        'form-control': true,
                        'is-invalid': errors.Phone_No != null,
                      }"
                      v-model="Phone_No"
                      id="Phone_No"
                      aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                      required
                    />
                    <div
                      id="validationServerUsernameFeedback"
                      class="invalid-feedback"
                    >
                      Please choose a Phone_No.
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <label for="City" class="form-label">City</label>
                  <input
                    type="text"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': errors.City != null,
                    }"
                    v-model="City"
                    id="City"
                    aria-describedby="validationServer03Feedback"
                    required
                  />

                  <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="validationServer04" class="form-label"
                    >State</label
                  >
                  <input
                    type="text"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': errors.State != null,
                    }"
                    v-model="State"
                    id="State"
                    aria-describedby="validationServer03Feedback"
                    required
                  />
                  <div id="validationServer04Feedback" class="invalid-feedback">
                    Please select a valid state.
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="Pincode" class="form-label">Pincode</label>
                  <input
                    type="text"
                    v-bind:class="{
                      'form-control': true,
                      'is-invalid': errors.Pincode != null,
                    }"
                    v-model="Pincode"
                    id="Pincode"
                    aria-describedby="validationServer05Feedback"
                    required
                  />
                  <!-- {{errors.Pincode}} -->
                  <div id="validationServer05Feedback" class="invalid-feedback">
                    Please provide a valid Pincode.
                  </div>
                </div>

                <div class="col-12">
                  <button
                    type="submit"
                    class="btn text-light col-12 mt-4 fw-bolder py-2"
                    style="background-color: #ff0000; border-radius: 40px"
                  >
                    PLACE ORDER
                  </button>
                </div>
              </form>
              <!-- <button
              id="rzp-button1"
              class="btn text-light col-12 mt-4 fw-bolder py-2"
              style="background-color: #ff0000; border-radius: 40px"
              @Click="demo"
            >
              PLACE ORDER
            </button> -->
            </div>
          </div>
        </div>

        <div
          class="col-5"
          style="
            background-color: #fafafa;
            padding-left: 35.5417px;
            padding-top: 56px;
          "
        >
          <div>
            <table class="product-table">
              <thead class="product-table__header"></thead>
              <tbody data-order-summary-section="line-items">
                <tr
                  v-for="i in products.data.Cart_Products[0]"
                  :key="i"
                  class="mt-2"
                >
                  <!-- {{i.Product.Products_data[0].img}} -->
                  <td class="product__image">
                    <div class="product-thumbnail">
                      <div class="product-thumbnail__wrapper">
                        <img
                          alt="BOAT Airdopes 131 - Wireless Earbuds - boAt Lifestyle"
                          class="product-thumbnail__image"
                          :src="i.Product.Products_data[0].img"
                          style="
                            height: 60px;
                            width: 60px;
                            border: 1px solid;
                            padding-top: 10px;
                          "
                        />
                        <span
                          class="position-absolute top--1 start-90 translate-middle badge rounded-pill bg-danger"
                        >
                          {{ i.Products_qty }}
                          <span class="visually-hidden">unread messages</span>
                        </span>
                      </div>
                    </div>
                  </td>
                  <th class="product__description" scope="row">
                    <span
                      class="product__description__name order-summary__emphasis"
                      >{{ i.Product.Name }}</span
                    >
                    <h6
                      class="product__description__variant order-summary__small-text"
                    >
                      {{ i.Product.Products_data[0].Color }}
                    </h6>
                  </th>
                  <td class="product__quantity">
                    <span class="visually-hidden">{{ i.Products_qty }}</span>
                  </td>

                  <td class="product__price">
                    <span class="order-summary__emphasis skeleton-while-loading"
                      >₹{{ i.Products_qty * i.Product.Price }}</span
                    >
                  </td>
                </tr>
                <hr />
              </tbody>
            </table>
            <hr />
            <div>
              <table class="total-line-table">
                <tbody>
                  <tr>
                    <th scope="row">Subtotal</th>
                    <td>
                      <span> ₹ {{ sum }} </span>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">
                      <span> Shipping </span>
                    </th>
                    <td>Calculated at next step</td>
                  </tr>
                </tbody>
              </table>
              <hr />

              <table>
                <tbody>
                  <tr>
                    <th>INR</th>
                    <td>
                      <h3>₹ {{ sum }}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart from "../Service/cart";
import payment from "../Service/payment";
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
import order from "../Service/order";
import { loadScript } from "vue-plugin-load-script";
const crypto = require("crypto");
import { mapGetters } from 'vuex'

export default {
  name: "login",
  components: {},
  data() {
    // form Yup validation----------------------------->
    const schema = yup.object({
      Phone_No: yup.string().required("is required"),
      Address: yup.string().required("is required"),
      City: yup.string().required("is required"),
      State: yup.string().required("is required"),
      Pincode: yup.string().required("is required"),
      // Zip: yup.string().required("is required"),
    });

    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: Pincode } = useField("Pincode");
    const { value: State } = useField("State");
    const { value: City } = useField("City");
    const { value: Address } = useField("Address");
    const { value: Phone_No } = useField("Phone_No");
    // const { value: Zip } = useField("Zip");

    const submit = handleSubmit((values) => {
      this.$swal
        .fire({
          title: "Do you want to confirm this order ?",
          showCancelButton: true,
          confirmButtonText: "Pay Now",
        })
        .then((result) => {
          if (result.isConfirmed) {
            // save order details into order table------------>
            order
              .add_order(values)
              .then((response) => {
                console.log(response.data.errmsg == null);
                if (response.data.errmsg == null) {
                  //  after order call payment method--------->
                  this.demo(
                    response.data.Total_Price,
                    response.data._id,
                    response.data.id
                  );
                } else {
                  this.$swal.fire(response.data.errmsg, "", "error");
                  this.$router.push({ name: "cart" });
                }
              })
              .catch((e) => {
                console.log(e);
                this.errored = true;
                this.$swal.fire(e, "", "error");
              })
              .finally(() => {
                this.loading = false;
              });
          } else if (result.isDenied) {
            this.$swal.fire("Changes are not saved", "", "info");
          }
        });

      // user
      //   .register(values)
      //   .then((response) => {
      //    console.log(response)
      //   })
      //   .catch((e) => {
      //     console.log(e);
      //     this.errored = true;
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });
    });
    return {
      submit,
      errors,
      Pincode,
      State,
      City,
      Address,
      Phone_No,
      products: [],
      checkout: false,
      loading: true,
      errored: false,
    };
  },
  computed: {
    sum: function () {
      return this.products.data.Cart_Products[0].reduce((sum, i) => {
        console.log(i.Product.Price);
        return sum + i.Product.Price * i.Products_qty;
      }, 0);
    },
    
  },
  mounted() {
        console.log(this.$store.getters.getusername.First_Name)
                console.log(this.$store.getters.getusername.Email)


    this.calldata();
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  },
  methods: {
    ...mapGetters(['getusername']),
    // get cart data-------------------------->
    calldata() {
      cart
        .get_cart()
        .then((response) => {
          this.products = response;
          // console.log(this.products.data);
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },

    // payment method------------------------>
    async demo(price, _id, id) {
      var oid = id;
      var data = await payment.setPayment({ price: price });
      console.log(data);
      var options = {
        key: "rzp_test_EuKQOIglRDuah5", // Enter the Key ID generated from the Dashboard
        amount: price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "boat-lifestyle.com",
        description: "Test Transaction",
        image: "/img/blacklogo.f86cde47.png",
        order_id: data.data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
        handler: (response) => {
          this.verifySignature(response, _id, price, oid);
        },
        // prefill: {
        //   // name: "vraj marvania",
        //   // email: "vraj.marvania2000@gmail.com",
        //   // contact: "9999999999",

        //   name:this.$store.getters.getusername[0].First_Name,
        //   email: this.$store.getters.getusername[0].Email,
        //   contact: "9999999999",
        // },
        notes: {
          address: "Boat Corporate Office",
        },
        theme: {
          color: "#0021ff8f",
        },
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        // alert(response.error.code);
        // alert(response.error.description);
        // alert(response.error.source);
        // alert(response.error.step);
        // alert(response.error.reason);
        // alert(response.error.metadata.order_id);
        // alert(response.error.metadata.payment_id);
        // this.$swal.fire("payment fail!", "", "error");
        alert("payment fail!");

        var qdata = {
          User_Order_Id: _id,
          PaymentId: response.error.metadata.order_id,
          Razorpay_Order_Id: response.error.metadata.payment_id,
          Amount: price,
          Status: "cancelled",
        };
        payment
          .SavePayment(qdata)
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.log(e);
          });

        // rzp1.open();
      });
      rzp1.open();

      // e.preventDefault();
    },

    // verifySignature ------------------------->
    verifySignature(response, _id, price, oid) {
      var generatedSignature = crypto
        .createHmac("SHA256", "7xU5OxpYtO60kDIYJvPkpWAa")
        .update(response.razorpay_order_id + "|" + response.razorpay_payment_id)
        .digest("hex");

      var isSignatureValid = generatedSignature == response.razorpay_signature;
      var qdata = {
        User_Order_Id: _id,
        PaymentId: response.razorpay_payment_id,
        Razorpay_Order_Id: response.razorpay_order_id,
        Amount: price,
        Status: "panding",
      };
      if (isSignatureValid) {
        // Signature  Valid the set status  paid ---------->
        qdata.Status = "paid";
      } else {
        // Signature  Valid the set status  cancelled------>
        qdata.Status = "cancelled";
        alert("error");
      }
      // save payment data into payment table ------------->
      payment
        .SavePayment(qdata)
        .then((response) => {
          console.log(response);
          if (oid != undefined) {
            this.$router.push({
              name: "viewOrderDetails",
              params: { id: oid },
            });
          } else {
            this.$router.push({ name: "index" });
          }
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(oid);
      this.$swal.fire("order placed successfully!", "", "success");
    },
  },
};
</script>
<style scoped></style>
