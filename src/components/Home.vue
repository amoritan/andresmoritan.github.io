<template>
  <div id="home">
    <nav-bar></nav-bar>
    <cover></cover>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Cover from './Cover'
  export default {
    name: 'home',
    components: {
      'nav-bar': NavBar,
      'cover': Cover
    }
  }
</script>

<style lang="scss">
  
</style>
