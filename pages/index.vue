<template>
  <div id="App" class="main">
    <Nav />
    <div class="main-wrapper">
      <div class="hero">
        <div class="container info">
          <p>Hello, <span>I am</span></p>
          <h1>Christian R. Paranas</h1>
          <p class="para">
            a software developer currently in Tacloban city, Philippines.
            Specializing in building websites and applications. My current
            toolset includes Vue, React, Redux, Node, Laravel, and other various
            frameworks, libraries, and technologies related to them.
          </p>
        </div>

        <div class="container hero-links">
          <NuxtLink
            to="/projects"
            class="link-wrapper shadow-md cursor-pointer"
          >
            <div class="text">Projects</div>
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
          </NuxtLink>
          <a
            href="/Curriculum Vitae.txt"
            download
            class="link-wrapper shadow-md cursor-pointer"
          >
            <div class="text">Curriculum Vitae</div>
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
                d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  position: relative;

  .main-wrapper {
    padding: 20px;

    .hero {
      padding: 110px 0 50px;
      display: grid;
      gap: 40px;

      .info {
        h1 {
          font-size: 24px;
        }

        span,
        .para {
          color: rgb(175, 173, 173);
        }
      }

      .hero-links {
        display: grid;
        gap: 10px;
        display: grid;
        text-align: center;
        margin-top: 25px;

        .link-wrapper {
          padding: 12px;
          border-radius: 7px;
          display: flex;
          justify-content: center;
          -webkit-box-shadow: 0px 1px 5px 1px rgba(9, 26, 40, 0.49);
          -moz-box-shadow: 0px 1px 5px 1px rgba(9, 26, 40, 0.49);
          box-shadow: 0px 1px 5px 1px rgba(9, 26, 40, 0.49);

          .text {
            margin-right: 5px;
          }
        }

        .link-wrapper:nth-child(1) {
          background-color: var(--hero1bg);
          color: var(--hero1color);
        }

        .link-wrapper:nth-child(2) {
          background-color: var(--hero2bg);
          color: var(--hero2color);
        }
      }
    }
  }
}

@media (min-width: 991.98px) {
}
</style>
