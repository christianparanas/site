<template>
<section class="blog body-font">
   <Nav />
  <div class="container px-5 py-24 mx-auto">
    <h1 class="sm:text-3xl text-2xl font-medium title-font text-center mb-20">Random
      <br class="hidden sm:block">thoughts
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex">
        <div class="blogincon shadow-md flex-grow p-5">
          <h2 class="text-lg title-font font-medium mb-2">Shooting Stars</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard ugh iceland kickstarter tumblr live-edge tilde.</p>
          <a class="mt-3 text-teal-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>
   .blog {
      background-color: var(--bg);
      color: var(--color);
   }

   .blogincon {
      border-radius: 7px;
      background-color: var(--menubg);
   }
</style>