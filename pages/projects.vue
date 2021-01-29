<template>
   <div id="project" class="project">
      <Nav />
      <h1>Projects I built</h1>
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
                     title: "Random",
                     discrip: "Random things in a web app",
                     tools: ['vue', 'nuxt', 'firebase', 'pwa'],
                     git: 'https://github.com/christianparanas/things',
                     site: 'https://things.vercel.app',
                     isLive: true
                  },
                  {
                     title: "TMDB App",
                     discrip: "Movie Information Web Application.",
                     tools: ['vue', 'nuxt', 'axios', 'tmdb-api', 'pwa'],
                     git: 'https://github.com/christianparanas/mobeapp',
                     site: 'https://mobeapp.vercel.app',
                     isLive: true
                  },
                  {
                     title: "Chatroom",
                     discrip: "Simple chatroom made with next and firebase",
                     tools: ['react', 'next', 'axios', 'firebase'],
                     git: 'https://github.com/christianparanas/chatroom',
                     site: 'https://chatroom-ten.vercel.app',
                     isLive: true
                  },
                  {
                     title: "Recipe",
                     discrip: "A recipe app where you can find your favorite recipe and its ingredients.",
                     tools: ['next', 'react', 'edamam-api', 'axios'],
                     git: 'https://github.com/christianparanas/recipe',
                     site: 'https://recipe-brown.vercel.app/',
                     isLive: true
                  },
                  {
                     title: "Crypto price tracker",
                     discrip: "Live price and trading for top cryptocurrencies like Bitcoin (BTC) and Ethereum (ETH) and more.",
                     tools: ['react', 'axios', 'coingecko-api'],
                     git: 'https://github.com/christianparanas/crypto-price-tracker',
                     isLive: false
                  },
                  {
                     title: "Coronavirus tracker",
                     discrip: "A web application for tracking coronavirus outbreak in the the world.",
                     tools: ['vanillajs', 'fetch', 'covid-api'],
                     git: 'https://github.com/christianparanas/coronavirus-tracker',
                     site: 'https://covidv2.netlify.app',
                     isLive: true
                  },
                  {
                     title: "Freedom Thoughts",
                     discrip: "A web app that lets you share/post your thoughts anonymously.",
                     tools: ['node', 'mongodb', 'express'],
                     git: 'https://github.com/christianparanas/Freedom',
                     site: 'https://freedomthoughts.herokuapp.com/',
                     isLive: true
                  },
                  {
                     title: "Segregator",
                     discrip: "A desktop application that will help you to segregate your scattered files in just one click.",
                     tools: ['electron', 'node'],
                     git: 'https://github.com/christianparanas/segregator',
                     isLive: false
                  },
                ]
      }
   }

   
}
</script>

<style scoped>
   * {
    font-family: 'Montserrat', sans-serif;
   }

   .project {
      height: fit-content;
   }

   h1 {
      padding-top: 100px;
      text-align: center;
   }

   .wrapper {
      padding: 20px 20px 30px;
      display: grid;
      grid-row-gap: 12px;
   }

   .card {
      background-color: var(--menubg);
      padding: 15px;
      border-radius: 8px;
      position: relative;
      z-index: 1; 
      padding-bottom: 40px;
   }

   @media (min-width: 991.98px) {
      .project {
         height: fit-content;
      }

      h1 {
         padding-top: 100px;
         text-align: center;
      }

      .wrapper {
         padding: 20px 20px 30px;
         display: grid;
         grid-row-gap: 12px;
         grid-template-columns: 1fr 1fr 1fr;
         grid-gap: 15px;
      }

      .card {
         background-color: var(--menubg);
         padding: 15px;
         border-radius: 8px;
         padding-bottom: 40px;
         z-index: 1;
      }

      .card:hover {
         top: -5px;
      }
   }
</style>
