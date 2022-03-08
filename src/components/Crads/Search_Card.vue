<template>
  <div class="">
    <!-- <a
      :href="{'product/'+id}" class="text-decoration-none text-dark"
    > -->
     <router-link :to="{ name: 'Product', params: { id:ids }}" >
                 <!-- :to="{ name: 'category/edit', params: { categoryId: category.id }" -->
      <div
        class="card rounded-5 a m-2" v-bind:style="{ width: w + 'px' }"
        style="
          border: 0px;
          <!-- width: 390px; -->
          height: 352px;
          font-size: 16px;
          border-radius: 10px;
          background-color:#f1f1f1;
        "
      >
        <div
          class="text-center"
          style="
            background-color: silver;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          "
        >
          <img
            :src="imgs"
            style="height:255px
            width:255px"
            class=""
            alt="..."
          />
          <div v-if=" this.products.Offer_id!=null">
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
            You Save {{ offerpct }}%
          </p>
          </div>
        </div>
        <div class="card-body" style="height: auto">
          <div class="text-danger" style="font-size: 12px">
            <span v-for="i in 5.0" :key="i">
              <i v-if="i <= star" class="fas fa-star active"></i>
              <!-- <i  v-else-if="i>star" class="fas fa-star-half-alt"></i> -->
              <i v-else class="far fa-star"></i>
            </span>
            <h6 class="d-inline text-secondary">{{ reviews }} reviews</h6>
          </div>
          <h5
            class="card-title fw-bolder"
            style="margin-bottom: 5px; font-size: 14px"
          >
            {{ ProductName.substring(0,30) }}
          </h5>
          <h5
            class="card-title text-danger fw-bolder d-inline"
            style="font-size: 14px"
          >
            Rs. {{ ProductPrice }}
          </h5>
          <h5
            class="card-text text-secondary text-decoration-line-through d-inline"
            style="font-size: 12px"
          >
            Rs. {{ productOldPrice }}
          </h5>
        </div>
      </div>
      </router-link> 
  </div>
</template>
<script>
export default {
  name: "Search_Card",
  props:['wi','products'],
  data() {
    return {
      // product:this.products.Productid,
      imgs: this.products.Products_data[0].img,
      ProductName: this.products.Name,
      ProductPrice: this.products.Price,
      productOldPrice: this.products.OldPrice,
      dis: [
        "Upto 75% Off On Best Sellers",
        "Stylish dual tone finish",
        "Immersive, HD sound quality",
      ],
      reviews: 19,
      star: 3.5,
      w:this.wi,
      ids:this.products.id
      
    };
  },
};
</script>
<style scoped>a {
    color: #000000;
    text-decoration: none;
}</style>
