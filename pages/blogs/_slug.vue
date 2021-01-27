<template>
  <article class="slug">
     <Nav />
     <div class="blog-info">
        <div class="title">{{  blog.title }}</div>
        <div class="date">{{ $dateFns.format(new Date(blog.createdAt), 'dd MMM yyyy') }}</div>
     </div>
      <nuxt-content class="px-6 py-8" :document="blog" />
     <NuxtLink to="/blogs" class="backblogs px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none">Go back</NuxtLink>
  </article>
</template>

<script>
export default {
   async asyncData({ $content, params }) {
      const blog = await $content('blogs', params.slug).fetch()
      return {
         blog
      }
   }
}
</script>

<style scoped>
   * {
    font-family: 'Montserrat', sans-serif;
  }

   .blog-info {
      display: flex;
      justify-content: space-between;
      padding: 100px 20px 0px 20px;
   }

   .title {
      font-size: 18px;
   }

   .date {
      font-size: 15px;
   }

   .backblogs {
      margin: 24px;
      background-color: #6B21A8;
   }

</style>
