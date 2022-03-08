<template>
      <!-- ad line -->
  

    <div class="pt-4" style="background-color: BLACK">
        <p class="text-center" style="font-size: 29px;">
            <marquee scrollamount="10">

                <span class="text-white text-bold ang">{{text}} </span>
                <span class="text-stroke cng ang">{{text}} </span>
               
                <span class="text-white text-bold ang">{{text}} </span>
                <span class="text-stroke cng ang">{{text}} </span>
               
                <span class="text-white text-bold ang">{{text}} </span>
                <span class="text-stroke cng ang">{{text}} </span>
               
            </marquee>
        </p>
    </div>

</template> 
<script>

export default ({
   name:'Marquee-text',
   props: ['text']
})
</script >
<style  scoped>
.ang {
   
    font-weight: 900;
}
p {
    margin-top: 0;
    margin-bottom: 0rem;
}

</style>
