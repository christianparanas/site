<template>
  <div id="App" class="main">
    <Nav />
    <div class="hero">
      <h2>Hi! I'm</h2>
      <h1>Christian R. Paranas</h1>
      <p>I'm a Student and a Freelance Web Developer currently in Tacloban City, Philippines.</p>
      <div class="options">
        <div class="pr">Projects</div>
        <div class="cv">Curriculum Vitae</div>
      </div>
    </div>
  </div>
</template>



<style scoped>
  .main {
    height: 100%;
    font-family: 'Fredoka One', cursive;
  }

  .hero {
    padding: 150px 20px 25px;
  }

  h2 {
    font-size: 15px;
  }

  h1 {
    font-size: 35px;
  }

  .options {
    display: grid;
    grid-row-gap: 12px;
    text-align: center;
    margin-top: 40px;
  }

  .pr, .cv {
    padding: 15px;
    border-radius: 6px;
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
