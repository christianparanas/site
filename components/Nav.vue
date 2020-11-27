<template>
   <div class="nav shadow-sm p-4 flex">
      <div class="flex-1 flex">
         <div class="flex-initial w-10 p-2 cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
         </div>
         <h2 class="name py-2 text-white">
            christianparanas
         </h2>
      </div>
      <div class="flex-initial w-10 p-1 mx-2 border-4 border-transparent cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 8h16M4 16h16" />
         </svg>
      </div>
      <div @click="$colorMode.preference = 'dark'" class="dark flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer">
         <svg class="dark-svg w-6 h-6" fill="#ffffff" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
         </svg>
      </div>
      <div @click="$colorMode.preference = 'light'" class="dark flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer">
         <svg class="dark-svg w-6 h-6" fill="#ffffff" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
         </svg>
      </div>
   </div>
</template>

<style scoped>
   .nav {
      width: 100%;
      position: fixed;
   }

   .name {
      font-family: 'Fredoka One', cursive;
   }
   
</style>
