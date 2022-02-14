<template>
  <div id="Procard" class="project_card shadow">
    <div class="top-container">
      <h1>{{ content.title }}</h1>
      <div class="links">
        <div class="icon">
          <a :href="content.git" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#BCCDDF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6 svg cursor-pointer feather feather-github"
            >
              <path
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>
        <div v-if="content.isLive" class="icon">
          <a :href="content.site" target="_blank">
            <svg
              class="svg cursor-pointer h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#BCCDDF"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
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
  name: "ProjectCard",
  props: ["content"]
};
</script>

<style lang="scss" scoped>
.project_card {
  background-color: var(--menubg);
  padding: 15px;
  border-radius: 8px;
  position: relative;
  padding-bottom: 40px;
  box-shadow: 0 10px 20px -10px rgb(0 64 128 / 20%);
  transition: box-shadow 0.3s;
  z-index: -1;

  .top-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 3;

    h1 {
      font-size: 16px;
    }

    .links {
      display: flex;
      gap: 10px;
    }

    .svg:hover {
      stroke: #8b5cf6;
    }

    .icon {
      width: 28px;
    }
  }

  p {
    margin: 18px 0;
    font-size: 13px;
    padding-right: 8px;
  }

  .tools {
    display: flex;
    gap: 5px;
    position: absolute;
    bottom: 15px;

    .tool {
      padding: 2px 4px;
      border-radius: 3px;
      background-color: var(--bgtools);
      color: var(--tooltext);
      font-size: 14px;
    }
  }
}

@media (min-width: 991.98px) {
  .project_card {
    background-color: var(--menubg);
    padding: 15px;
    border-radius: 8px;
    padding-bottom: 40px;
  }
}
</style>
