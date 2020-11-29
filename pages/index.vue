<template>
  <div id="App" class="main">
    <Nav />
    <div class="hero">
      <h2>Hi I'm</h2>
      <h1>Christian R. Paranas</h1>
      <p>I'm a Student and a Freelance Web Developer currently in Tacloban City, Philippines.</p>
      <div class="options">
        <NuxtLink to="/projects" class="pr shadow-md cursor-pointer">
          <div class="text">Projects</div>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </NuxtLink>
        <a href="/Curriculum Vitae.txt" download class="cv shadow-md cursor-pointer">
          <div class="text">Curriculum Vitae</div>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
        </a>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {

}
</script>



<style scoped>
  .main {
    height: 100%;
    font-family: 'Fredoka One', cursive;
    position: relative;
  }

  .hero { padding: 150px 20px 25px; }

  h2 { font-size: 15px; }
  h1 { font-size: 30px; }

  .options {
    display: grid;
    grid-row-gap: 10px;
    text-align: center;
    margin-top: 25px;
  }

  .pr, .cv {
    padding: 12px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: 0px 3px 5px 2px rgba(9,26,40,0.49);
-moz-box-shadow: 0px 3px 5px 2px rgba(9,26,40,0.49);
box-shadow: 0px 3px 5px 2px rgba(9,26,40,0.49);
  }

  .text {
    padding-right: 6px;
  }

  .pr {
    background-color: var(--hero1bg);
    color: var(--hero1color);
  }

  .cv {
    background-color: var(--hero2bg);
    color: var(--hero2color);
  }

</style>
