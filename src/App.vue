<template>
      <router-view :key="$route.fullPath"/>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted(){
    this.$store.dispatch("getUser");

  }
}
</script>

<style>
</style>
