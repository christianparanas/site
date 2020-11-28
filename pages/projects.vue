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
   head: {
    title: 'Projects',
    titleTemplate: "Christian R. Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { hid: 'keywords', name: 'keywords', content: 'Christian Paranas, Christian, Rosaroso, Paranas, Projects, Code, Programming'},
      { hid: 'description', name: 'description', content: "I'm a Student and a Freelance Web Developer currently in Tacloban City, Philippines." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

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