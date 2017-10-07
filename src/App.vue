<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Mada:300,400,700');

  body {
    margin: 0;
    font-family: 'Mada', Helvetica, Arial, sans-serif;
    color: $white;
    background: $black;
  }
</style>
