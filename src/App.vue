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
    @media (min-width: 1024px) {
      font-size: 1.25em;
    }
    @media (min-width: 1920px) {
      font-size: 1.5em;
    }
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
  .purple {
    color: $purple;
  }

  .fa-icon {
    position: relative;
    top: .125em;
  }

  section {
    padding: 3em 1em;
    &.inverted {
      background: $highlight;
      color: $black;
      h2 {
        color: $black;
      }
    }
  }
  
  h2 {
    font-size: 2em;
    font-weight: 300;
    color: $highlight;
  }
  h3 {
    font-size: 1.75em;
    font-weight: 300;
  }

  p {
    max-width: 40em;
    margin: 1em auto;
  }

  .windowWrapper {
    font-family: $alt-font;
    background: $highlight;
    padding: .25em;
    .windowHeader {
      height: 1.5em;
      position: relative;
      color: transparentize($black, .25);
      span {
        font-size: .8em;
      }
      &::after {
        content: '';
        display: block;
        width: 1em;
        height: 1em;
        position: absolute;
        top: .125em; right: 0;
        background: transparentize($black, .75);
      }
    }
    .windowContent {
      background: $black;
      min-height: 4em;
      padding: .25em;
      span {
        font-size: .8em;
      }
    }
  }
</style>
