<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Web Developer',
    titleTemplate: "Christian R. Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { hid: 'description', name: 'description', content: "I'm a Student and a Freelance Web Developer currently in Tacloban City, Philippines." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>