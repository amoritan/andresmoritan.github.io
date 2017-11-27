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
    <contact></contact>
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
  import Contact from './Contact'
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
      'about': About,
      'contact': Contact
    }
  }
</script>

<style lang="scss">
  
</style>
