<template>
<div>
       <!-- blog -->
    <div class="container">
        <h1 class="p-3 fw-bolder display-5 text-center " style="color:#FFFFFF">boAt Blog</h1>
    </div>

    <div class="container blog d-flex-column justify-content-center px-0 " style="overflow-x: auto;">

        <div class="d-flex flex-row row-cols-1 row-cols-md-3 g-4 px-5">
            <div class="m-2">
                <div class="card h-100 ">
                    <img src="https://utioutll.sirv.com/Immortal%20Gaming/7_1.png" class="inimg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">The Ultimate Smartwatch Guide - Get The World On Your Wrist
                        </h5>
                    </div>
                    <div class="card-footer">
                        <button type="button text-light" class="btn btn-outline-danger">Read more</button>
                    </div>
                </div>
            </div>
            <div class="m-2">
                <div class="card h-100">
                    <img src="https://utioutll.sirv.com/Immortal%20Gaming/7_2.png" class="inimg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">Top Shaving Mistakes You Should Stop Making</h5>
                    </div>
                    <div class="card-footer">
                        <button type="button text-light" class="btn btn-outline-danger">Read more</button>
                    </div>
                </div>
            </div>
            <div class="m-2">
                <div class="card h-100">
                    <img src="https://utioutll.sirv.com/Immortal%20Gaming/7_3.png" class="inimg" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">The Ultimate Sail of the Year is here…Powered by 4 Crazy
                            boAt
                            Launches!</h5>
                    </div>
                    <div class="card-footer">
                        <button type="button text-light" class="btn btn-outline-danger">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

export default ({
   name:'blogs'
})
</script>
<style scoped>

/* blog */

.blog h5.card-title {
  color: white;
}

.blog h5.card-title:hover {
  color: red;
}

.blog .card.h-100 {
  background-color: black;
}

.blog button.btn.btn-outline-danger {
  color: white;
}

.blog img.inimg {
  /* opacity: .7; */
  filter: grayscale(100%);
}

.blog img.inimg:hover {
  filter: grayscale(0%);
}
</style>
