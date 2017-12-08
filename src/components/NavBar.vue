<template>
  <div id="navBar" :class="{ active: active, attached: attached }">
    <header>
      <a href="#" class="root"><h1>Andres Moritan</h1></a>
      <button class="toggle" @click="navToggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="448" height="512" viewBox="0 0 448 512">
          <g fill="none">
            <path id="top_bar" d="M16,132 L432,132 C440.837,132 448,124.837 448,116 L448,76 C448,67.163 440.837,60 432,60 L16,60 C7.163,60 0,67.163 0,76 L0,116 C0,124.837 7.163,132 16,132 Z" />
            <path id="middle_bar" d="M16,292 L432,292 C440.837,292 448,284.837 448,276 L448,236 C448,227.163 440.837,220 432,220 L16,220 C7.163,220 0,227.163 0,236 L0,276 C0,284.837 7.163,292 16,292 Z" />
            <path id="bottom_bar" d="M16,452 L432,452 C440.837,452 448,444.837 448,436 L448,396 C448,387.163 440.837,380 432,380 L16,380 C7.163,380 0,387.163 0,396 L0,436 C0,444.837 7.163,452 16,452 Z" />
          </g>
        </svg>
      </button>
    </header>
    <nav>
      <div class="sections">
        <a href="#philosophy" v-scroll-to="'#philosophy'" @click="navToggle">Work Philosophy</a>
        <a href="#projects" v-scroll-to="'#projects'" @click="navToggle">Featured Projects</a>
        <a href="#about" v-scroll-to="'#about'" @click="navToggle">About Me</a>
        <a href="#contact" v-scroll-to="'#contact'" @click="navToggle">Get In Touch</a>
      </div>
      <div class="references">
        <a href="https://www.linkedin.com/in/andresmoritan/" target="_blank" rel="external" @click="$ga.social('LinkedIn', 'visit', 'https://www.linkedin.com/in/andresmoritan/')"><icon name="fab_linkedin"></icon></a>
        <a href="https://twitter.com/andresmoritan" target="_blank" rel="external" @click="$ga.social('Twitter', 'visit', 'https://twitter.com/andresmoritan')"><icon name="fab_twitter"></icon></a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navBar',
    data () {
      return {
        attached: false,
        active: false
      }
    },
    methods: {
      navAttach: function () {
        this.attached = window.scrollY > 0
      },
      navToggle: function () {
        this.active = !this.active
      }
    },
    mounted () {
      window.addEventListener('scroll', this.navAttach)
    },
    destroyed () {
      window.removeEventListener('scroll', this.navAttach)
    }
  }
</script>

<style lang="scss" scoped>
  #navBar {
    position: fixed;
    top: 0; right: 0; bottom: auto; left: 0;
    z-index: 50;
    transition: all .25s;
    header {
      height: 3.5em;
      padding: 0 1em;
      color: $highlight;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a.root {
        color: $highlight;
        h1 {
          font-family: $alt-font;
          font-weight: 400;
          font-size: 1.25em;
          text-transform: uppercase;
          display: inline-block;
        }
      }
      button.toggle {
        appearance: none;
        background: none;
        border: none;
        display: inline-block;
        cursor: pointer;
        line-height: 1em;
        padding: 0;
        margin: 0;
        height: 1em;
        svg {
          height: 100%;
          width: auto;
          path {
            fill: $highlight;
            transition: all .5s ease;
            transform-origin: center center;
          }
        }
      }
    }
    nav {
      display: none;
      height: calc(100% - 3.5em);
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      max-width: 42em;
      margin: 0 auto;
      .sections {
        a {
          display: block;
          color: $black;
          font-weight: 300;
          font-size: 1.25em;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          padding: 2em 0;
          box-shadow: 0 1px 0 transparentize($black, .85);
          opacity: 0;
          animation: fadeInDown;
          animation-duration: 1s;
          animation-fill-mode: both;
          &:last-child {
            box-shadow: none;
          }
          &:nth-child(1) {
            animation-delay: 0;
          }
          &:nth-child(2) {
            animation-delay: .05s;
          }
          &:nth-child(3) {
            animation-delay: .10s;
          }
          &:nth-child(4) {
            animation-delay: .15s;
          }
        }
      }
      .references {
        text-align: center;
        a {
          display: inline-block;
          color: $highlight;
          margin: .5em .25em;
          .fa-icon {
            width: auto;
            height: 1.25em;
          }
        }
      }
    }
    &:hover, &.attached, &.active {
      background: transparentize($white, .15);
      -webkit-backdrop-filter: blur(10px);
    }
    &.active {
      background: transparentize($white, .05);
      bottom: 0;
      header button.toggle svg path {
        &#top_bar {
          transform: rotate(45deg) translate(0, 30%);
        }
        &#middle_bar {
          opacity: 0;
        }
        &#bottom_bar {
          transform: rotate(-45deg) translate(0, -30%);
        }
      }
      nav {
        display: flex;
        flex-grow: 1;
      }
    }
  }
</style>
