<template>
  <div id="Nav" class="nav p-4 flex">
    <div class="flex-1 flex menu-icon">
      <NuxtLink to="/" class="name py-2 cursor-pointer">
        christianparanas
      </NuxtLink>
    </div>
    <div
      @click="toggleModeMenu = !toggleModeMenu"
      class="menu-icon flex-initial w-10 p-1 mx-2 border-4 border-transparent cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M4 8h16M4 16h16"
        />
      </svg>
    </div>
    <div
      v-if="toggleMode"
      @click="
        $colorMode.preference = 'light';
        toggleMode = !toggleMode;
      "
      class="menu-icon flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    </div>
    <div
      v-else
      @click="
        $colorMode.preference = 'dark';
        toggleMode = !toggleMode;
      "
      class="menu-icon flex-initial w-10 p-1 border-4 border-transparent rounded-full cursor-pointer"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    </div>

    <div v-if="toggleModeMenu" class="menu-overlay">
      <div class="inner">
        <div class="options" @click="toggleModeMenu = !toggleModeMenu">
          <NuxtLink to="/" class="pat cursor-pointer">Home</NuxtLink>
          <NuxtLink to="/" class="pat cursor-pointer">About</NuxtLink>
          <NuxtLink to="/projects" class="pat cursor-pointer"
            >Projects</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      toggleMode: false,
      toggleModeMenu: false
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  font-family: "Fredoka One", cursive;
}

.nav {
  width: 100%;
  max-width: 1199.98px;
  position: fixed;

  .menu-icon {
    z-index: 101;
  }

  .menu-overlay {
    opacity: 0.9;
    width: 100%;
    height: calc(100vh + 10px);
    position: fixed;
    z-index: 100;
    top: -5px;
    left: 0;
    background-color: var(--menubg);
    letter-spacing: 2px;
    padding: 75px 20px;

    .inner {
      max-width: 1180px;
      margin: 0 auto;

      .options {
        display: grid;

        .pat {
          width: 100%;
          padding: 10px;
          border-radius: 7px;
          padding-left: 12px;
          -webkit-tap-highlight-color: transparent;
        }

        .pat:hover {
          color: #fff;
          background-color: var(--hoverMenuOverlayBg);
        }
      }
    }
  }
}
</style>
