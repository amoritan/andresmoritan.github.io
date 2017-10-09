<template>
  <div id="nav_bar" :class="{ active: active }">
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
        <a href="#philosophy">Work Philosophy</a>
        <a href="#projects">Featured Projects</a>
        <a href="#about">About Me</a>
        <a href="#contact">Get In Touch</a>
      </div>
      <div class="references">
        <a href="#" target="_blank"><icon name="fab_linkedin" scale="1.25"></icon></a>
        <a href="#" target="_blank"><icon name="fab_twitter" scale="1.25"></icon></a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'nav-bar',
    data () {
      return {
        active: false
      }
    },
    methods: {
      navToggle: function () {
        this.active = !this.active
      }
    }
  }
</script>

<style lang="scss" scoped>
  #nav_bar {
    position: fixed;
    top: 0; right: 0; bottom: auto; left: 0;
    z-index: 50;
    transition: all .25s;
    header {
      height: 64px;
      padding: 0 16px;
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
      padding: 32px 16px;
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
          &:last-child {
            box-shadow: none;
          }
        }
      }
      .references {
        text-align: center;
        position: absolute;
        right: 0; bottom: 1em; left: 0;
        a {
          display: inline-block;
          color: $highlight;
          margin: .5em .25em;
        }
      }
    }
    &:hover, &.attached, &.active {
      background: transparentize($white, .05);
      -webkit-backdrop-filter: blur(10px);
    }
    &.active {
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
        display: block;
        flex-grow: 1;
      }
    }
  }
</style>
