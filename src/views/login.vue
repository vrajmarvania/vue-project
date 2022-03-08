<template>
  <div>
    <Navbar></Navbar>

    <div class="container-fluid p-0" style="background-color: white">
      <div id="notfoud"></div>
      <div class="container py-5 d-flex justify-content-center">
        <div class="formlog py-5" style="width: 420px">
          <div class="heading text-center">
            <h2 class="fw-700">Login</h2>
          </div>
          <div class="row d-felx justify-content-center pt-5">
            <div class="col px-1" style="text-align: end">
              <i
                class="fab fa-facebook"
                style="font-size: 38px; width: 53px; color: blue"
              ></i>
            </div>
            <div class="col px-1">
              <i class="fab fa-google" style="font-size: 38px"></i>
            </div>
          </div>
          <div class="fc mt-4">
            <form id="LOGIN" @submit="submit">
              <div class="form-group py-2">
                <label for="Email">Email</label>
                <input
                  type="Email"
                  v-model="Email"
                  class="form-control"
                  name="Email"
                  id="Email"
                  aria-describedby="EmailHelp"
                  placeholder="Enter Email"
                  required
                  style="padding: 11px 15px"
                />
              </div>
              <span class="text-danger">{{ errors["Email"] }}</span>
              <div class="form-group py-2">
                <label for="Password">Password</label>
                <input
                  type="Password"
                  v-model="Password"
                  class="form-control py-2"
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  style="padding: 11px 15px"
                  required
                />
              </div>
              <span class="text-danger">{{ errors["Password"] }}</span>
              <button
                type="submit"
                class="btn text-light col-12 mt-4 fw-bolder py-2"
                style="background-color: #ff0000"
              >
                Log in
              </button>
              <div class="form-group py-3">
                <router-link
                  class="fw-bolder"
                  to="/register"
                  style="color: #ff0000"
                  >Create account</router-link
                >
                <!-- <router-link to="/register" >Log in</router-link> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <marquee text="India’s No.1 Earwear Audio Brand."></marquee>

    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import marquee from "../components/Marquee-text.vue";
import { useForm, useField } from "vee-validate";
import { mapMutations } from "vuex";

import * as yup from "yup";
import user from "../Service/user";

export default {
  name: "login",
  components: {
    Navbar,
    Footer,
    marquee,
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    login(values) {
      console.log(values);
      user
        .login(values)
        .then((response) => {
          // this.sdata = response.data[0];
          console.log(response.data.error != "");
          console.log(response.data);

          if (response.data.error != null) {
            this.$swal.fire({
              position: "center",
              icon: "error",
              title: response.data.error,
              showConfirmButton: false,
              timer: 2000,
            });
          } else {
            var token = response.data.jwtoken;
            console.log(token, response.data.Type);
            if (response.data.jwtoken != null) {
              localStorage.setItem("token", token);
              localStorage.setItem("user", response.data.Type);

              this.setUser(response.data.Type);
              this.setToken(token);
              this.$store.dispatch("getUser");

              this.loginuser = false;

              this.$swal.fire({
                position: "center",
                icon: "success",
                title: "logged in successfully.",
                // showConfirmButton: false,
                timer: 2000,
              });
              console.log(response.data);

              //TYPE---->> 1=user// 2=admin

              if (response.data.Type == 2) {
                this.$router.push({ name: "index" });
              } else {
                this.$router.push({ path: "/admin" });
              }
            } else {
              console.log(response.data);
            }
          }
        })
        .catch((e) => {
          console.log(e.response.data);
          // alert('user not found')
          this.$swal.fire({
            position: "center",
            icon: "error",
            title: e.response.data.error,
            showConfirmButton: false,
            timer: 1500,
          });
          // this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  data() {
    const schema = yup.object({
      Email: yup.string().required("is required"),
      Password: yup.string().required("is required"),
    });
    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: Email } = useField("Email");
    const { value: Password } = useField("Password");
    const submit = handleSubmit((values) => {
      console.log(values);
      console.log("values------");

      this.login(values);
    });
    return {
      submit,
      Email,
      Password,
      errors,
    };
  },
};
</script>

<style scoped>
.fa-google {
  background: conic-gradient(
      from -45deg,
      #ea4335 110deg,
      #4285f4 90deg 180deg,
      #34a853 180deg 270deg,
      #fbbc05 270deg
    )
    73% 55%/150% 150% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}
</style>
