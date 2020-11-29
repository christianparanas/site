<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  head: {
    title: 'Software Developer',
    titleTemplate: "Christian Paranas | %s",
    htmlAttrs: {
      lang: 'en',
      amp: true
    },
    meta: [
      { name: 'keywords', content: 'Christian Paranas, Paranas Christian, Christian, Paranas, Christian R. Paranas, christianparanas, Web Developer, Student, Tacloban, Philippines'},
      { hid: 'description', name: 'description', content: "I'm Christian R. Paranas, I'm a software developer currently in Tacloban City, Philippines. Specializing in building websites and applications. My current toolset includes Vue, React, Redux, Node, Laravel and other various frameworks, libraries and technologies related to them." },
      { property: "og:title", content: "Christian Paranas | Software Developer" },
      { property: "og:url", content: "https://christianparanas.me" },
      { property: "og:site_name", content: "Christian Paranas | Software Developer" },
      { property: "og:image", content: "https://og-image.vercel.app/christianparanas.me.png" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "Christian Paranas is a software developer currently in Tacloban City, Philippines. Specializing in building websites and applications."
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>