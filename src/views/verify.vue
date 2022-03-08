<template>
  <!-- <button class="btn">login</button> -->
   <loading
          :active=true
          :can-cancel="true"
          :on-cancel="onCancel"
          loader="dots"
          color="#f00"
          opacity="1"
          :is-full-page="fullPage"
        />
</template>
<script>
import user from "../Service/user";

 import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: "verify",
  props: ["id", "token"],
  components:{
    Loading
  },
  data() {
    return {
      sdata: [],
      loading: true,
      errored: false,
        isLoading: false,
      fullPage: true,
      sflag:false
    };
  },
  mounted() {
    user
      .verify(this.id, this.token)
      .then((response) => {
        this.sdata = response.data;

        if (this.sdata.mes != "") {
          this.$swal.fire({
            position: "center",
            icon: "success",
            title: "email verified sucessfully",
            // showConfirmButton: false,
            // timer: 2000,
          });
          this.$router.push({name:'index'})
        } else {
          this.$swal.fire({
            position: "center",
            icon: "error",
            title: "Verification was not successful; please try again",
            // showConfirmButton: false,
            // timer: 2000,
          });
          this.$router.push({name:'index'})

        }
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
          this.$swal.fire({
            position: "center",
            icon: "error",
            title: e,
            showConfirmButton: false,
            // timer: 2000,
          });
          this.$router.push({name:'index'})
        this.errored = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>
<style></style>
