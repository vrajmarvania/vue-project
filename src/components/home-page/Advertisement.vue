<template>
  <div class="container-fluid " id="ifram">
        <video width="100%" height="100%" controls autoplay muted loop preload="none">
            <source :src=Videolink
                type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    </div>
</template>
<script>
export default ({
name:'Advertisement',
data(){
    return{
        //   Videolink:'../..//src/assets/video/add.mp4'

        Videolink:'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/70_OFF_H.264.mp4?v=1633166498'
    }
}
})
</script>
<style scoped>
 video {
    height: 100%;
    width: 100%;
}
</style>