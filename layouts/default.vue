<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Christian Paranas',
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "I'm a Student and a Freelance Web Developer currently in Tacloban City, Philippines." }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>