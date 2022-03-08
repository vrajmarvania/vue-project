<template>
  <!-- full img slider -->

  <div
    id="carouselExampleControls"
    class="carousel slide fullpage"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="imgs[0]" class="d-block w-100" alt="..." />
      </div>

      <div class="carousel-item" v-for="i = 1 of imgs.length - 1" :key="i">
        <img :src="imgs[i]" class="d-block w-100" alt="..." />
      </div>
    </div>

    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "imgslider",
  data() {
    return {
      imgs: [
        "https://utioutll.sirv.com/Smart%20Watches/imgslider/13_1.png",
        "https://utioutll.sirv.com/Smart%20Watches/imgslider/13_2.png",
        "https://utioutll.sirv.com/Smart%20Watches/imgslider/13_3.png",
        "https://utioutll.sirv.com/Smart%20Watches/imgslider/13_4.png",
        "https://utioutll.sirv.com/Smart%20Watches/imgslider/13_5.png",
      ],
    };
  },
};
</script>
<style scoped></style>
