<template>
  <div id="home">
    <nav-bar></nav-bar>
    <cover></cover>
    <philosophy></philosophy>
    <expertise></expertise>
    <technology></technology>
    <projects></projects>
    <clients></clients>
    <about></about>
  </div>
</template>

<script>
  import NavBar from './NavBar'
  import Cover from './Cover'
  import Philosophy from './Philosophy'
  import Expertise from './Expertise'
  import Technology from './Technology'
  import Projects from './Projects'
  import Clients from './Clients'
  import About from './About'
  export default {
    name: 'home',
    components: {
      'nav-bar': NavBar,
      'cover': Cover,
      'philosophy': Philosophy,
      'expertise': Expertise,
      'technology': Technology,
      'projects': Projects,
      'clients': Clients,
      'about': About
    }
  }
</script>

<style lang="scss">
  
</style>
