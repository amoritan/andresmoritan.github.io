<template>
  <section id="about">

    <h2>About <strong>Me</strong></h2>

    <div class="avatarWrapper">
      <div class="avatarImage">
        <img src="/static/img/8bit/character.svg" width="144" height="448" alt="8-Bit Avatar" />
      </div>
      <div class="avatarChart">
        <canvas id="radarChart"></canvas>
      </div>
    </div>

    <div class="backpackWrapper">
      <div class="backpackImage">
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="192" viewBox="0 0 160 192">
          <g fill="none" fill-rule="evenodd">
            <polygon fill="#7DCBC4" points="136 144 136 48 120 48 120 32 40 32 40 48 24 48 24 144"/>
            <polygon fill="#424242" points="40 176 120 176 120 160 136 160 136 144 24 144 24 160 40 160"/>
            <rect width="32" height="16" x="64" y="16" fill="#424242"/>
            <path fill="#000" fill-opacity=".15" d="M44,108 L124,108 L124,156 L44,156 L44,108 Z M52,60 L116,60 L116,92 L52,92 L52,60 Z"/>
            <rect class="backpackPocket" @click="addToTerminal('devText')" width="80" height="48" x="40" y="104" fill="#C2E988"/>
            <rect class="backpackPocket" @click="addToTerminal('uiText')" width="64" height="32" x="48" y="56" fill="#F27076"/>
            <rect class="backpackPocket" @click="addToTerminal('dsnText')" width="8" height="48" x="16" y="88" fill="#82AAFF"/>
            <rect class="backpackPocket" @click="addToTerminal('mktText')" width="8" height="48" x="136" y="88" fill="#C792EA"/>
          </g>
          <filter id="grayscale">
            <feColorMatrix type="matrix" values="0.2126 0.7152 0.0722 0 0
             0.2126 0.7152 0.0722 0 0
             0.2126 0.7152 0.0722 0 0
             0 0 0 1 0"></feColorMatrix>
            <feComponentTransfer>
              <feFuncR type="linear" slope="0.5"/>
              <feFuncG type="linear" slope="0.5"/>
              <feFuncB type="linear" slope="0.5"/>
            </feComponentTransfer>
          </filter>
        </svg>
      </div>
      <div class="backpackTerminal">
        <div id="devText" class="terminalInput">
          <span>The <b>Software Development</b> pocket has...</span>
          <span><b>JavaScript</b> from vanilla to ES6, React and Node <i>#expertLvl</i></span>
          <span><b>Ruby</b> for building robust web applications <i>#advanceLvl</i></span>
          <span><b>PHP</b> the most popular web programming language <i>#advanceLvl</i></span>
          <span><b>Java</b> applied to app development for <b>Android</b> <i>#standardLvl</i></span>
          <span><b>Swift</b> for developing apps for the <b>iOS</b> environment <i>#standardLvl</i></span>
        </div>
        <div id="uiText" class="terminalInput">
          <span>The <b>User Interface and Experience</b> pocket has...</span>
          <span><b>Lots of Paper</b>, Is there any faster way to start working on a UI?</span>
          <span><b>Sketch</b> for upgrade those paper ideas to  beautiful design <i>#advanceLvl</i></span>
          <span><b>InVision</b> to get quick and inmersive feedback from mock-ups and designs <i>#standardLvl</i></span>
          <span><b>HTML5 and SASS</b> to bring those beautiful design to life <i>#expertLvl</i></span>
        </div>
        <div id="dsnText" class="terminalInput">
          <span>The <b>Graphic Design</b> pocket has...</span>
          <span><b>Photoshop</b> <i>#standardLvl</i></span>
          <span><b>Illustrator</b> <i>#advanceLvl</i></span>
          <span><b>Rhino</b> <i>#standardLvl</i></span>
        </div>
        <div id="mktText" class="terminalInput">
          <span>The <b>Online Marketing</b> pocket has...</span>
          <span><b>Search Engine Optimization</b> <i>#advanceLvl</i></span>
          <span><b>Google Adwords</b> <i>#advanceLvl</i></span>
          <span><b>Google Analytics</b> <i>#standardLvl</i></span>
          <span><b>Social Media Marketing</b> <i>#standardLvl</i></span>
        </div>
        <div id="terminal" :class="terminalStatus"></div>
      </div>
    </div>

  </section>
</template>

<script>
  import Chart from 'chart.js'
  import Typed from 'typed.js'
  export default {
    name: 'about',
    data () {
      return {
        terminalStatus: ''
      }
    },
    created () {
      Chart.defaults.global.defaultColor = 'rgb(66, 66, 66)'
      Chart.defaults.global.angleLines = 'rgb(66, 66, 66)'
      Chart.defaults.global.defaultFontColor = 'rgb(237, 255, 255)'
      Chart.defaults.global.defaultFontFamily = '"Source Code Pro", monospace'
      Chart.defaults.global.defaultFontSize = 16
    },
    mounted () {
      this.radarChart = new Chart(document.getElementById('radarChart'), {
        type: 'radar',
        data: {
          labels: ['Team Leading', 'BackEnd Dev', 'FrontEnd Dev', 'UI/UX', 'Graphic', 'Marketing', 'Teaching'],
          datasets: [{
            label: 'Skills',
            data: [80, 70, 100, 80, 40, 75, 90],
            backgroundColor: 'rgba(125, 203, 196, 0.15)',
            borderColor: 'rgb(125, 203, 196)',
            pointBackgroundColor: 'rgb(125, 203, 196)'
          }]
        },
        options: {
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scale: {
            ticks: {
              display: false
            },
            gridLines: {
              color: 'rgb(66, 66, 66)',
              zeroLineColor: 'rgb(66, 66, 66)'
            },
            pointLabels: {
              display: true
            }
          }
        }
      })
      this.initTerminal('&lt;==== This is my backpack, <b>pick a pocket</b> to check what&acute;s inside!')
    },
    methods: {
      initTerminal: function (text) {
        this.typed = new Typed('#terminal', {
          strings: [text],
          typeSpeed: 30,
          backSpeed: 10,
          showCursor: false,
          backDelay: 1000
        })
      },
      addToTerminal: function (el) {
        var _this = this
        this.typed.destroy()
        this.terminalStatus = el
        this.typed = new Typed('#terminal', {
          stringsElement: '#' + el,
          typeSpeed: 30,
          backSpeed: 10,
          showCursor: false,
          backDelay: 1000,
          onComplete: function (self) {
            window.setTimeout(function () {
              _this.typed.destroy()
              this.terminalStatus = ''
              _this.initTerminal('&lt;==== Would you like to <b>check another pocket</b>?')
            }, 1000)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  #about {
    h2 {
      color: $highlight;
    }
    .avatarWrapper {
      display: flex;
      align-items: center;
      .avatarImage {
        width: 25%;
        height: 12em;
        float: left;
        img {
          display: block;
          width: auto;
          height: 100%;
          margin: auto;
          &:hover {
            transform: scaleX(-1);
          }
        }
      }
      .avatarChart {
        width: 75%;
        float: right;
        position: relative;
        canvas {
          width: 100%;
          height: 100%;
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
    .backpackWrapper {
      margin: 2em 0;
      .backpackImage {
        width: 25%;
        float: left;
        svg {
          width: 100%;
          height: auto;
          &:hover {
            polygon, rect, path {
              filter: url(#grayscale);
            }
            .backpackPocket {
              &:hover {
                cursor: pointer;
                filter: none;
              }
            }
          }
        }
      }
      .backpackTerminal {
        font-family: $alt-font;
        font-size: .75em;
        width: 70%;
        height: 6em;
        padding: 1em 0 1em 5%;
        float: right;
        display: flex;
        align-items: center;
        .terminalInput {
          display: none;
        }
        #terminal {
          b { color: $highlight; }
          i {
            font-style: normal;
            font-weight: 300;
          }
          &.devText {
            b { color: $green; }
          }
          &.uiText {
            b { color: $red; }
          }
          &.dsnText {
            b { color: $blue; }
          }
          &.mktText {
            b { color: $violet; }
          }
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
  }
</style>
