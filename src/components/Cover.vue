<template>
  <section id="cover" @mousemove="focus" :style="{ background: 'radial-gradient(at ' + xAxis + 'px ' + yAxis + 'px, rgba(33, 33, 33, 0), rgb(33, 33, 33) 50%)' }">
    <blockquote id="cover_quote"><span>I bring togheter</span> <span class="highlight">awesome teams</span> <span>to create great</span> <span class="highlight">digital products</span></blockquote>
  </section>
</template>

<script>
  export default {
    name: 'cover',
    data () {
      return {
        xAxis: document.documentElement.clientWidth / 2,
        yAxis: document.documentElement.clientHeight / 2
      }
    },
    methods: {
      focus (event) {
        this.xAxis = event.clientX
        this.yAxis = event.clientY
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cover {
    width: 100%;
    height: 100vh;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      background: url('/static/img/pattern/dark.svg') repeat;
      background-size: 4em;
      z-index: -1;
    }
    blockquote {
      width: 95%;
      max-width: 18em;
      text-align: center;
      font-weight: 700;
      font-size: 2em;
      line-height: 1.05em;
      @media (min-width: 375px) {
        font-size: 2.5em;
      }
      span {
        display: inline-block;
        &.highlight {
          color: $highlight;
        }
      }
    }
  }
</style>
