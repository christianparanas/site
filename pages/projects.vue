<template>
   <div id="project" class="project">
      <Nav />
      <div class="wrapper">
         <!-- passing the prop to procard compo -->
         <div class="card shadow" v-for="proj in projs" :key="proj.title">
            <Procard v-bind:content="proj" />
         </div>   
      </div>
   </div>
</template>

<script>
export default {
   head: {
    title: 'Projects',
    titleTemplate: "Christian Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { hid: 'keywords', name: 'keywords', content: 'Christian Paranas, Christian, Rosaroso, Paranas, Projects, Code, Programming'},
      { hid: 'description', name: 'description', content: "I'm Christian R. Paranas, I'm a software developer currently in Tacloban City, Philippines. Specializing in building websites and applications. My current toolset includes Vue, React, Redux, Node, Laravel and other various frameworks, libraries and technologies related to them." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

   name: 'project',
   data() {
      return {
         projs: [
                  {
                     title: "pro1",
                     discrip: "ako ay isang tagahanga mo ako na magdadala ng mga hawak mo",
                     tools: ['react', 'github api']
                  },
                  {
                     title: "pro2",
                     discrip: "ako ay isang tagahanga mo ako na magdadala ng mga hawak mo",
                     tools: ['vue', 'firebase']
                  },
                  {
                     title: "pro3",
                     discrip: "ako ay isang tagahanga mo ako na magdadala ng mga hawak mo",
                     tools: ['electron', 'node']
                  },
                ]
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
      display: grid;
      grid-row-gap: 12px;
   }

   .card {
      background-color: var(--menubg);
      padding: 10px;
      border-radius: 4px;
   }
</style>