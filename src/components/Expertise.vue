<template>
  <section id="expertise">

    <h2>Areas of <strong>Expertise</strong></h2>

    <ul class="areas">
      <li class="area">
        <object id="softwareIcon" type="image/svg+xml" data="/static/img/areas/code.svg"></object>
        <h3 id="softwareTitle" class="animated" :class="{ fadeInUp: softwareTitle }"><span>Software</span> Development</h3>
      </li>
      <li class="area">
        <object id="uxIcon" type="image/svg+xml" data="/static/img/areas/pointer.svg"></object>
        <h3 id="uxTitle" class="animated" :class="{ fadeInUp: uxTitle }"><span>User</span> Experience</h3>
      </li>
      <li class="area">
        <object id="designIcon" type="image/svg+xml" data="/static/img/areas/nib.svg"></object>
        <h3 id="designTitle" class="animated" :class="{ fadeInUp: designTitle }"><span>Identity</span> Design</h3>
      </li>
      <li class="area">
        <object id="marketingIcon" type="image/svg+xml" data="/static/img/areas/megaphone.svg"></object>
        <h3 id="marketingTitle" class="animated" :class="{ fadeInUp: marketingTitle }"><span>Digital</span> Marketing</h3>
      </li>
    </ul>

  </section>
</template>

<script>
  import Vivus from 'vivus'
  export default {
    name: 'expertise',
    data () {
      return {
        softwareTitle: false,
        uxTitle: false,
        designTitle: false,
        marketingTitle: false
      }
    },
    mounted () {
      var _this = this
      this.softwareIcon = new Vivus('softwareIcon', {duration: 100}, function () {
        _this.softwareTitle = true
      })
      this.uxIcon = new Vivus('uxIcon', {duration: 100}, function () {
        _this.uxTitle = true
      })
      this.designIcon = new Vivus('designIcon', {duration: 100}, function () {
        _this.designTitle = true
      })
      this.marketingIcon = new Vivus('marketingIcon', {duration: 100}, function () {
        _this.marketingTitle = true
      })
    }
  }
</script>

<style lang="scss" scoped>
  #expertise {
    .areas {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      list-style: none;
      margin: 2em 0;
      padding: 0;
      @media (min-width: 1280px) {
        margin: 4em 0;
      }
      .area {
        margin: 2em auto;
        padding: 0;
        width: 90%;
        text-align: center;
        object {
          width: auto;
          height: 12em;
        }
        h3 {
          width: auto;
          margin: 0;
          display: inline-block;
          white-space: nowrap;
          font-family: $alt-font;
          font-size: 1.25em;
          font-weight: 400;
          word-spacing: -.5em;
          color: transparentize($black, .5);
          padding: .5em 1em;
          opacity: 0;
          animation-fill-mode: forwards;
          span {
            text-transform: lowercase;
          }
          &#softwareTitle {
            background: $green;
          }
          &#uxTitle {
            background: $red;
          }
          &#designTitle {
            background: $blue;
          }
          &#marketingTitle {
            background: $purple;
          }
        }
        @media (min-width: 800px) {
          width: 40%;
        }
        @media (min-width: 1280px) {
          width: 20%;
          h3 {
            font-size: 1em;
          }
        }
      }
    }
  }
</style>
