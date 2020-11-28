<template>
   <div id="project" class="project">
      <Nav />
      <div class="wrapper">
         <!-- passing the prop to procard compo -->
         <div class="card" v-for="pro in pros" :key="pro">
            <Procard v-bind:name="pro" />
         </div>   
      </div>
   </div>
</template>

<script>
export default {
   name: 'project',
   data() {
      return {
         pros: ['project1', 'project2', 'project3', 'project4']
      }
   }
}
</script>

<style scoped>
   .project {
      height: fit-content;
   }

   .wrapper {
      padding: 100px 20px;
   }

   .card {
      margin-bottom: 10px;
      border: 1px solid pink;
      padding: 5px;
   }
</style>