<template>
  <div>
    <Navbar></Navbar>

    <div class="container-fluid p-0" style="background-color: white">
      <div id="notfoud"></div>

      <div class="container py-5 d-flex justify-content-center">
        <div class="formlog py-5" style="width: 420px">
          <div class="heading text-center">
            <h2 class="fw-700">Create Account</h2>
          </div>
          <div class="row d-felx justify-content-center pt-3">
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
          <div class="fc">
            <form id="reg" @submit="submit">
              <label for="Type">Select User Type</label>

              <select id="Type" class="form-select" required v-model="Type">
                <option value="1" selected>User</option>
                <option value="2">Admin</option>
              </select>
              <div class="form-group py-2">
                <label for="First_Name">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="First_Name"
                  name="First_Name"
                  id="First_Name"
                  aria-describedby="emailHelp"
                  placeholder="Enter First Name"
                  required
                  style="padding: 11px 15px"
                />
              </div>
              <span class="text-danger">{{ errors["First_Name"] }}</span>
              <div class="form-group py-2">
                <label for="Last_Name">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="Last_Name"
                  name="Last_Name"
                  id="Last_Name"
                  aria-describedby="emailHelp"
                  placeholder="Enter Last Name"
                  required
                  style="padding: 11px 15px"
                />
              </div>
              <span class="text-danger">{{ errors["Last_Name"] }}</span>
              <div class="form-group py-2">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="Email"
                  name="Email"
                  id="Email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  style="padding: 11px 15px"
                />
              </div>
              <span class="text-danger">{{ errors["Email"] }}{{ errorm }}</span>

              <div class="form-group py-2">
                <label for="Password">Password</label>
                <input
                  type="password"
                  class="form-control py-2"
                  v-model="Password"
                  required
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  style="padding: 11px 15px"
                />
              </div>
              <span class="text-danger">{{ errors["Password"] }}</span>
              <button
                type="submit"
                class="btn text-light col-12 mt-4 fw-bolder py-2"
                style="background-color: #ff0000"
              >
                Create
              </button>
              <div class="form-group py-3" style=":none "></div>
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
import * as yup from "yup";
import user from "../Service/user";
import { useForm, useField } from "vee-validate";

export default {
  name: "register",
  components: {
    Navbar,
    Footer,
    marquee,
  },
  data() {
    const schema = yup.object({
      First_Name: yup.string().required("is required"),
      Last_Name: yup.string().required("is required"),
      Email: yup.string().required("is required"),
      Password: yup.string().required("is required"),
    });
    var { handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: Type } = useField("Type");
    const { value: First_Name } = useField("First_Name");
    const { value: Last_Name } = useField("Last_Name");
    const { value: Email } = useField("Email");
    const { value: Password } = useField("Password");
    const submit = handleSubmit((values) => {
      console.log(values);
      user
        .register(values)
        .then((response) => {
          console.log(response);
          if (response.data.code == 11000 && response.data.code != null) {
            this.errorm = "Email already exist";
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Email already exist!",
            });
          } else {
            this.errorm = "";
            this.$swal.fire({
              position: "center",
              icon: "success",
              title: "registration completed successfully",
              text: "Your account is not verified! To begin using our services please click the link that was sent to you by email. ",
            });
            this.$router.push({ name: "login" });
          }
        })
        .catch((e) => {
          console.log(e);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    });
    return {
      submit,
      Email,
      Password,
      Type,
      First_Name,
      Last_Name,
      errors,
      errorm: "",
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
