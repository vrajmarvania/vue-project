<template>
<div>
   <div
      class="d-flex"
      style="flex-direction: row; flex-wrap: wrap; justify-content: center"
    >
      <!-- New orders card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons ">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../../assets/orders.png" />
            </div>
            <div class="col-6">
              <h5>New Products</h5>
              <h2 class="fw-bolder">{{ product_data.length }}</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Products card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../../assets/products.png" />
            </div>
            <div class="col-6">
              <h5>Total Products</h5>
              <!-- <h2 class="fw-bolder">{{ Total_Products }}</h2> -->
            </div>
          </div>
        </div>
      </div>
      <!-- Total categories card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../../assets/categories.png" />
            </div>
            <div class="col-6">
              <h5>Total categories</h5>
              <!-- <h2 class="fw-bolder">{{ Total_categories }}</h2> -->
            </div>
          </div>
        </div>
      </div>
      <!-- User card-->
      <div class="col-sm-12 col-md-6 col-lg-3 icons">
        <div
          class="card m-1 sb"
          style="
            border-radius: 10px;
            -webkit-box-shadow: 0 4px 20px 1px rgb(0 0 0 / 6%),
              0 1px 4px rgb(0 0 0 / 8%);
          "
        >
          <div class="card-body d-flex">
            <div class="col-6">
              <img src="../../../assets/user.png" />
            </div>
            <div class="col-6">
              <h5>User</h5>
              <!-- <h2 class="fw-bolder">{{ User }}</h2> -->
            </div>
          </div>
        </div>
      </div>

</div>
</div>
</template>
<script>
import Product from "../../../Service/Product";

export default {
    name:'Product-info',
    data(){
      return{
          product_data:[],
        Top_Product:[],
        out_of_stock_Product:[],
        near_to_out_of_stock_product:[]
      }
    },
    methods:{
      find_Top_Product(){
     this.Top_Product = this.product_data.sort((a, b) => b.Selling_count - a.Selling_count);
     console.log(this.Top_Product)
      },
     out_of_stock(){
       this.out_of_stock_Product=this.product_data.filter((i)=>{return  i.Products_data[0].Qty==0})
       console.log(this.out_of_stock_Product)
      //  alert(this.out_of_stock_Product.length)
     },
      near_to_out_of_stock(){
       this.near_to_out_of_stock_product=this.product_data.filter((i)=>{return  (i.Products_data[0].Qty>=0 && i.Products_data[0].Qty<=10)})
       console.log(this.near_to_out_of_stock_product)
      //  alert(this.near_to_out_of_stock_product.length)
     }

    },
    mounted(){
      Product.get_all()
        .then((response) => {
          console.log(response.data);
          this.product_data = response.data;
          this.find_Top_Product()
          this.out_of_stock()
          this.near_to_out_of_stock()
        })
        .catch(() => {
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
}
</script>
<style scoped>
.icons img {
  width: 90px;
}
.sb {
  box-shadow: 0px 0px 4px 1px #00000012;
}
</style>
