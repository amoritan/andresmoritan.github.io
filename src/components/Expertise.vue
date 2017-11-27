<template>
  <section id="expertise">

    <h2>Areas of <strong>Expertise</strong></h2>

    <figure v-observe-visibility="visibilityChanged" :class="{ active: isVisible }">
      <img src="/static/img/areas/dev.svg" width="375" height="667" alt="Software Development" @mouseenter="mouseChanged(true, 'dev')" @mouseleave="mouseChanged(false, 'dev')" />
      <img src="/static/img/areas/ui.svg" width="375" height="667" alt="User Interface / Experience" @mouseenter="mouseChanged(true, 'ui')" @mouseleave="mouseChanged(false, 'ui')" />
      <img src="/static/img/areas/design.svg" width="375" height="667" alt="Graphic Design" @mouseenter="mouseChanged(true, 'dsn')" @mouseleave="mouseChanged(false, 'dsn')" />
      <img src="/static/img/areas/share.svg" width="375" height="667" alt="Online Marketing" @mouseenter="mouseChanged(true, 'mkt')" @mouseleave="mouseChanged(false, 'mkt')" />
    </figure>
    <ul>
      <transition mode="out-in" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
        <li v-if="hoverOn === 'dev'" key="dev" class="green">Software Development</li>
        <li v-else-if="hoverOn === 'ui'" key="ui" class="red">User Experience</li>
        <li v-else-if="hoverOn === 'dsn'" key="dsn" class="blue">Graphic Design</li>
        <li v-else-if="hoverOn === 'mkt'" key="mkt" class="purple">Online Marketing</li>
      </transition>
    </ul>

  </section>
</template>

<script>
  export default {
    name: 'expertise',
    data () {
      return {
        isVisible: false,
        hoverOn: ''
      }
    },
    methods: {
      visibilityChanged (isVisible) {
        this.isVisible = isVisible
      },
      mouseChanged (isHover, el) {
        if (isHover) {
          this.hoverOn = el
        } else {
          this.hoverOn = ''
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #expertise {
    padding: 3em 1em;
    h2 {
      color: $highlight;
    }
    figure {
      position: relative;
      perspective: 1000px;
      width: 80%;
      margin: 3em auto 2em auto;
      img {
        display: block;
        width: 75%;
        height: auto;
        position: absolute;
        margin: auto;
        top: 0; right: 0; bottom: 0; left: 0;
        transition: all ease 1.5s;
        cursor: pointer;
        &:nth-child(1) {
          position: relative;
        }
      }
      &.active {
        img:nth-child(1) {
          transform: rotateX(5deg) rotateY(60deg) translateZ(-40px);
        }
        img:nth-child(2) {
          transform: rotateX(5deg) rotateY(60deg) translateZ(0);
        }
        img:nth-child(3) {
          transform: rotateX(5deg) rotateY(60deg) translateZ(40px);
        }
        img:nth-child(4) {
          transform: rotateX(5deg) rotateY(60deg) translateZ(80px);
        }
      }
      &:hover, &.hover {
        img {
          opacity: .5;
          &:hover, &.hover {
            opacity: 1;
          }
        }
      }
    }
    ul {
      list-style: none;
      margin: 1em 0;
      padding: 0;
      font-size: 1.5em;
      height: 2.5em;
      position: relative;
      li {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        display: block;
        padding: .5em 1em;
        text-align: center;
        text-transform: uppercase;
        font-weight: 300;
        &.green {
          color: $green;
        }
        &.red {
          color: $red;
        }
        &.blue {
          color: $blue;
        }
        &.purple {
          color: $purple;
        }
      }
    }
  }
</style>
