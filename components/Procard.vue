<template>
   <div id="Procard">
      <!-- <div class="ping">
         <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex w-3 h-3 rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
         </span>
      </div> -->
      <div class="link">
         <div class="">
            <h1>{{ content.title }}</h1>
         </div>
         <div class="">
            <a :href="content.git" target="_blank">
               <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cursor-pointer feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
               </svg>
            </a>
         </div>
         <div v-if="content.isLive">
            <a :href="content.site" target="_blank">
               <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
               </svg>
            </a>
         </div>
      </div>
      <p>{{ content.discrip }}</p>
      <div class="tools">
         <div class="tool shadow-sm" v-for="tool in content.tools" :key="tool">
            {{ tool }}
         </div>
      </div>
   </div>
</template>


<script>
export default {
   // accepting the passed prop and putting it to the template
  name: 'Procard',
  props: ['content'],

}
</script>

<style scoped>
   .link {
      display: grid;
      grid-template-columns: 1fr 24px 26px;
      grid-column-gap: 15px;
   }

   h1 {
      font-size: 18px;
   }

   p {
      margin: 18px 0;
      font-size: 15px;
      padding-right: 8px;
   }

   .tools {
      display: flex;
      justify-content: flex-start;
      gap: 5px;
   }

   .tool {
      padding: 2px 4px;
      border-radius: 3px;
      background-color: var(--bgtools);
      color: var(--tooltext);
      font-size: 14px;
   }
</style>


