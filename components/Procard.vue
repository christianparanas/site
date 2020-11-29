<template>
   <div id="Procard">
      <div class="ping">
         <span class="flex h-3 w-3">
            <span class="animate-ping absolute inline-flex w-3 h-3 rounded-full bg-purple-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
         </span>
      </div>
      <h1>{{ content.title }}</h1>
      <p>{{ content.discrip }}</p>
   </div>
</template>


<script>
export default {
   // accepting the passed prop and putting it to the template
  name: 'Procard',
  props: ['content'],

}
</script>


