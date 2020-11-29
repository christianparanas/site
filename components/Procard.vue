<template>
   <div id="Procard">
      <!-- <div class="ping">
         <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex w-3 h-3 rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
         </span>
      </div> -->
      <h1>{{ content.title }}</h1>
      <p>{{ content.discrip }}</p>
      <div class="tools">
         <div class="tool shadow" v-for="tool in content.tools" :key="tool">
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
   h1, p {
      margin-bottom: 10px;
   }

   .tools {
      display: flex;
      justify-content: flex-start;
      gap: 5px;
   }

   .tool {
      padding: 2px 4px;
      border-radius: 3px;
      background-color: #6B21A8;
      color: var(--tooltext);
   }
</style>


