<template>
   <div id="Procard">
      <h1>{{ name }}</h1>
   </div>
</template>


<script>
export default {
   // accepting the passed prop and putting it to the template
  name: 'Procard',
  props: ['name'],

}
</script>
