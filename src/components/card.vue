<template>
  <div class="mx-2 d-flex justify-content-center">
    <div
      class="card rounded-5 a"
      style="border: 0px; width: 365px; font-size: 16px; border-radius: 10px"
    >
      <div
        class="d-flex justify-content-center"
        style="
          background-color: silver;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        "
      >
        <img
          :src="slide.Products_data[0].img"
          style="height: 255px; width: 255px"
          class=""
          alt="..."
        />
      </div>
      <p
        class="px-2 py-1"
        style="
          left: 6px;
          background-color: white;
          text-align: left;
          top: 5%;
          position: absolute;
          width: 95px;
          top: 5%;
          transform: skew(-27deg);
          height: 24px;
        "
      ></p>
      <p
        class="px-2 py-1"
        style="
          background-color: rgb(255, 255, 255);
          font-size: 11px;
          text-align: left;
          top: 5%;
          color: #ff0000;
          font-weight: bold;
          position: absolute;
        "
      >
        You Save 10%
      </p>
      <div
        class="card-body"
        style="
          height: 180px;
          flex: 1 1 auto;
          padding-inline: 10px;
          padding-top: 5px;
          padding-bottom: 0px;
          border-radius: 10px;
          font-size: 10px;
          background-color: #f1f1f1;
        "
      >
        <div class="text-danger">
          <span v-for="i in 5.0" :key="i">
            <i v-if="i <= 3" class="fas fa-star active"></i>
            <!-- <i  v-else-if="i>star" class="fas fa-star-half-alt"></i> -->
            <i v-else class="far fa-star"></i>
          </span>

          <p class="d-inline text-secondary">{{ reviews }}20 reviews</p>
        </div>
        <h5 class="card-title" style="margin-bottom: 5px; font-size: 14px">
          {{ slide.Name }}
        </h5>
        <h5
          class="card-title text-danger fw-bold d-inline"
          style="font-size: 14px"
        >
          Rs. {{ slide.Price }}
        </h5>
        <h5
          class="card-text text-secondary text-decoration-line-through d-inline"
          style="font-size: 12px"
        >
          Rs. {{ slide.OldPrice }}
        </h5>
        <ul
          v-for="i in slide.Dis"
          :key="i"
          class="card-text text-decoration-square"
          style="font-size: 12px; padding-left: 13px; list-style-type: square"
        >
          <li>{{ i }}</li>
        </ul>
        <router-link
          :to="{ name: 'Product', params: { id: slide.id } }"
          class="btn btn-dark rounded-pill px-4"
          style="background-color: #000000; margin-top: 15px"
          >View more
        </router-link>
      </div>
      <!-- <p class="text-ligth">  {{slide}}</p> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "card",
  props: ["slide"],
  data() {
    return {
      // imgs: "https://utioutll.sirv.com/Smart%20Watches/1_1_12.png",
      // ProductName: "BOAT Airdopes 121 v2",
      // ProductPrice: 199,
      // productOldPrice: 300,
      // dis: [
      //   "Upto 75% Off On Best Sellers",
      //   "Stylish dual tone finish",
      //   "Immersive, HD sound quality",
      // ],
      // reviews: 19,
      // star: 3.5,
    };
  },
};
</script>
<style scoped></style>
