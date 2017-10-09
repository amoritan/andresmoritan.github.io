<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'normalize.css'
  import 'animate.css'
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro:300,400,700|Source+Sans+Pro:300,400,700');

  body {
    margin: 0;
    font-family: $main-font;
    color: $white;
    background: $black;
  }

  .red {
    color: $red;
  }
  .orange {
    color: $orange;
  }
  .yellow {
    color: $yellow;
  }
  .lightblue {
    color: $lightblue;
  }
  .blue {
    color: $blue;
  }
  .violet {
    color: $violet;
  }

  .fa-icon {
    position: relative;
    top: .125em;
  }
</style>
