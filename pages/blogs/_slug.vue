<template>
  <article class="slug">
     <Nav />
     <div class="contents">
        <nuxt-content class="content" :document="article" />
     </div>
     <NuxtLink to="/blogs" class="backblogs px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">Go back</NuxtLink>
  </article>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const article = await $content('blogs', params.slug).fetch()
      return {
         article
      }
   }
}
</script>

<style>
   .backblogs {
      margin: 25px;
   }

   .contents {
      padding-top: 100px;
   }

   .content {
      padding: 60px 13px 20px;
      z-index: -1;
   }

</style>