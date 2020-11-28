<template>
   <div id="Nav" class="nav shadow-sm p-4 flex">
      <div class="flex-1 flex menu-icon">
         <NuxtLink to="/" class="flex-initial w-10 p-2 cursor-pointer">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
         </NuxtLink>
         <NuxtLink to="/" class="name py-2 cursor-pointer">
            christianparanas
         </NuxtLink>
      </div>
      <div @click="toggleModeMenu = !toggleModeMenu" class="menu-icon flex-initial w-10 p-1 mx-2 border-4 border-transparent cursor-pointer">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 8h16M4 16h16" />
         </svg>
      </div>
      <div v-if="toggleMode" @click="$colorMode.preference = 'light'; toggleMode = !toggleMode" class="menu-icon flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
      </div>
      <div v-else @click="$colorMode.preference = 'dark'; toggleMode = !toggleMode" class="menu-icon flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
      </div>

      <div v-if="toggleModeMenu" class="menu-overlay">
         <div class="options">
            <div class="cursor-pointer">About</div>
            <div class="cursor-pointer">Projects</div>
            <div class="cursor-pointer">Blogs</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'Nav',
   data() {
      return {
         toggleMode: false,
         toggleModeMenu: false
      }
   }
}
</script>

<style scoped>
   .nav {
      width: 100%;
      position: fixed;
      
   }

   .name {
      font-family: 'Fredoka One', cursive;
   }

   .menu-icon {
      z-index: 2;
   }

   .menu-overlay {
      z-index: 1;
      width: calc(100vw + 10px);
      height: calc(100vh + 10px);
      border: 1px solid pink;
      position: absolute;
      top: -5px;
      left: -3px;
      background-color: var(--menubg);
      letter-spacing: 2px;

      padding: 75px 20px;
   }

   

   .options > div {
      padding: 10px;
      border-radius: 5px;
      padding-left: 12px;
   }

   .options > div:hover {
      background-color: var(--hoverMenuOverlayBg);
   }
   
</style>
