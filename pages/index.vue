<template>
  <div id="App" class="main">
    <div class="hero">
      <Nav />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    
  },
  mounted() {
    $nuxt.$colorMode.preference = 'dark'
  }
  
}
</script>

<style scoped>
  .main {
    height: 100%;
  }

</style>
