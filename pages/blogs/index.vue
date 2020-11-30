<template>
   <section id="Blog" class="blog body-font">
      <Nav />
   <div class="container px-5 pt-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-center mb-4">Random
         <br class="hidden sm:block">thoughts
      </h1>
      <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
         <div class="blogwrapper p-4 md:w-1/3 md:mb-0 mb-6">
         <div v-for="article in articles" :key="article.id" class="blogincon shadow-md flex-grow p-5">
            <div class="header-blog">
               <h2 class="text-lg title-font font-medium mb-2">{{ article.title }}</h2>
               <div class="date createdAt">{{ $dateFns.format(new Date(article.createdAt), 'dd MMM yyyy') }}</div>
            </div>
            <p class="leading-relaxed text-base">{{ article.description }}</p>
            <nuxt-link :to="`/blogs/${article.slug}/`" class="mt-3 text-teal-500 inline-flex items-center">
               Learn More
               <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
               <path d="M5 12h14M12 5l7 7-7 7"></path>
               </svg>
            </nuxt-link>
         </div>
         </div>
      </div>
   </div>
   </section>
</template>

<script>
export default {
   name: 'Blog',
   async asyncData(context) {
      // fetch the .md from the /content/blogs/ and put it into articles array
      const { $content } = context
      const articles = await $content('blogs').fetch()
      console.log(articles)
      return {
         articles
      }
   }
}
</script>

<style scoped>
   .container {
      width: 100%;
   }

   .date {
      font-size: 12px;
   }

   .blog {
      background-color: var(--bg);
      color: var(--color);
   }

   .blogwrapper {
      width: 100%;
      display: grid;
      grid-row-gap: 15px;
   } 

   .header-blog {
      display: flex;
      justify-content: space-between;
   }

   .blogincon {
      border-radius: 7px;
      background-color: var(--menubg);
   }
</style>