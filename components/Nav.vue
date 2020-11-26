<template>
   <div class="nav shadow-sm p-4 flex">
      <div class="flex-1 flex">
         <div class="flex-initial w-10 p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
         </div>
         <div class="py-2 text-white">
            christianparanas
         </div>
      </div>
      <div class="flex-initial w-10 p-1 mx-2 border-4 border-transparent cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 8h16M4 16h16" />
         </svg>
      </div>
      <div class="dark flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer">
         <svg class="dark-svg w-6 h-6" fill="#ffffff" stroke="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
         </svg>
      </div>
   </div>
</template>

<style scoped>
   .nav {
      background-color: #7000DF;
      width: 100%;
      position: fixed;
   }

   .dark:hover {
      background-color: #9061f9;
   }
   
</style>
