<template>
  <article class="slug">
     <Nav />
     <div class="contents">
        <nuxt-content class="content" :document="article" />
     </div>
     <NuxtLink to="/blogs" class="backblogs px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none">Go back</NuxtLink>
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
      margin: 24px;
      background-color: #6B21A8;
   }

   .contents {
      padding-top: 100px;
   }

   .content {
      padding: 100px 24px 20px;
      z-index: -1;
   }

</style>