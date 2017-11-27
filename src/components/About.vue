<template>
  <section id="about">

    <h2>About <strong>Me</strong></h2>

    <p class="bio">I am a Developer, Team Leader, Teacher and Entrepreneur in the field of <strong>Information and Communication Technology (ICT)</strong>.</p>

    <h3>Skills</h3>
    <div class="avatarWrapper">
      <div class="avatarImage">
        <img src="/static/img/8bit/character.svg" width="144" height="448" alt="8-Bit Avatar" />
      </div>
      <div class="avatarChart">
        <canvas id="radarChart"></canvas>
      </div>
    </div>

    <h3>Tools</h3>
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
          <span><b>Lots of Paper</b>, is there any faster way to start working on a UI?</span>
          <span>Bohemian <b>Sketch</b> for upgrade those paper ideas to  beautiful design <i>#advanceLvl</i></span>
          <span><b>InVision</b> to get quick and inmersive feedback from mock-ups and designs <i>#standardLvl</i></span>
          <span><b>HTML5 and SASS</b> to bring those beautiful design to life <i>#expertLvl</i></span>
        </div>
        <div id="dsnText" class="terminalInput">
          <span>The <b>Graphic Design</b> pocket has...</span>
          <span>Adobe <b>Photoshop</b> <i>#standardLvl</i></span>
          <span>Adobe <b>Illustrator</b> <i>#advanceLvl</i></span>
          <span><b>Rhinoceros 3D</b> <i>#standardLvl</i></span>
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

    <h3>Facts</h3>
    <div class="boardWrapper">
      <div class="boardImage">
        <svg @click="nextFact" xmlns="http://www.w3.org/2000/svg" width="164" height="154" viewBox="0 0 164 154">
          <g fill="none" fill-rule="evenodd">
            <polygon fill="#417505" points="124 28 124 24 140 24 140 96 120 96 120 100 100 100 100 104 80 104 80 108 60 108 60 112 40 112 40 116 24 116 24 44 44 44 44 40 64 40 64 36 84 36 84 32 104 32 104 28"/>
            <polygon fill="#000" fill-opacity=".15" points="142 98 142 102 122 102 122 106 102 106 102 110 82 110 82 114 62 114 62 118 42 118 42 122 18 122 18 114 38 114 38 110 58 110 58 106 78 106 78 102 98 102 98 98 118 98 118 94 138 94 138 18 146 18 146 98"/>
            <path fill="#8B572A" d="M140,96 L140,24 L124,24 L124,28 L104,28 L104,32 L84,32 L84,36 L64,36 L64,40 L44,40 L44,44 L24,44 L24,116 L40,116 L40,112 L60,112 L60,108 L80,108 L80,104 L100,104 L100,100 L120,100 L120,96 L140,96 L140,96 Z M144,100 L144,104 L124,104 L124,108 L104,108 L104,112 L84,112 L84,116 L64,116 L64,120 L44,120 L44,124 L20,124 L20,120 L16,120 L16,40 L20,40 L20,36 L40,36 L40,32 L60,32 L60,28 L80,28 L80,24 L100,24 L100,20 L120,20 L120,16 L144,16 L144,20 L148,20 L148,100 L144,100 Z"/>
            <path fill="#EFF" d="M50,64 L54,64 L54,58 L58,58 L58,74 L54,74 L54,68 L50,68 L50,74 L46,74 L46,58 L50,58 L50,64 Z M66,66 L72,66 L72,70 L62,70 L62,54 L72,54 L72,58 L66,58 L66,60 L68,60 L68,64 L66,64 L66,66 Z M80,62 L86,62 L86,66 L76,66 L76,50 L80,50 L80,62 Z M94,58 L100,58 L100,62 L90,62 L90,46 L94,46 L94,58 Z M116,58 L104,58 L104,42 L116,42 L116,58 Z M108,54 L112,54 L112,46 L108,46 L108,54 Z M51,87 L51,84 L53,84 L53,78 L57,78 L57,86 L55,86 L55,94 L51,94 L51,91 L47,91 L47,94 L43,94 L43,86 L41,86 L41,78 L45,78 L45,84 L47,84 L47,87 L51,87 Z M98,78 L104,78 L104,82 L94,82 L94,66 L98,66 L98,78 Z M73,90 L61,90 L61,74 L73,74 L73,90 Z M65,86 L69,86 L69,78 L65,78 L65,86 Z M120,64 L120,76 L118,76 L118,78 L108,78 L108,62 L118,62 L118,64 L120,64 Z M112,74 L116,74 L116,66 L112,66 L112,74 Z M81,80 L81,86 L77,86 L77,70 L89,70 L89,80 L87,80 L87,82 L89,82 L89,86 L85,86 L85,84 L83,84 L83,80 L81,80 Z M81,76 L85,76 L85,74 L81,74 L81,76 Z"/>
            <g transform="translate(122 110)">
              <path fill="#F27076" d="M4,4 L20,4 L20,8 L24,8 L24,20 L20,20 L20,28 L22,28 L2,28 L4,28 L4,20 L-2.22044605e-16,20 L0,8 L4,8 L4,4 Z"/>
              <rect width="4" height="4" x="12" fill="#C2E988"/>
            </g>
            <path id="boardExclamation" fill="#EFF" d="M124,58 L128,58 L128,68 L124,68 L124,58 Z M124,70 L128,70 L128,74 L124,74 L124,70 Z"/>
          </g>
        </svg>
      </div>
      <div class="boardTerminal">
        <ul id="factsText">
          <li>&lt;==== Would you like to learn some facts about me? <b>Tap the board</b> and get to know me a litle better!</li>
          <li>I started programming <i>(and burning down computers)</i> at the age of 14.</li>
          <li>My first -completed- devopment was a spacecraft racing game made in Macromedia Flash / ActionScript.^500 <i>Yup, those were valid options back then...</i>^500 <br /><b>&lt;==== next fact</b></li>
          <li>As <b>school projects</b>, I developed an smart car dashboard for a Citroen 3CV, a Nintendo Wii game <i>(which came out that year)</i> and an Apple iPhone app <i>(which also came out that year)</i>.^500 <br /><b>&lt;==== next fact</b></li>
          <li>As soon as I graduated as a Bachelor in Information and Communications Technology from ORT Technical Schools <b>I founded my own digital agency</b> called CREDIA.^500 <br /><b>&lt;==== next fact</b></li>
          <li>I've traveled over 100,000 km and trained more than 1,500 professionals hoteliers and restaurateurs all over Argentina...</li>
          <li>My mission was to share the knowledge, the tools, and the experiences needed to take advantage of the possibilities offered by the digital world.^500 <br /><b>&lt;==== next fact</b></li>
          <li>In adition to my job as a digital product developer I am also a proud member of the teaching staff at the ORT Technical School's Information and Communications Technology specialization</li>
          <li>In there I get to fulfill my great passion for sharing knowledge and experience within the context of an innovative educational method.</li>
          <li><b>That's all for today!</b> If you would like to know me better don't hesitate to send me a message!</li>
        </ul>
        <div id="terminalB"></div>
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
        terminalStatus: '',
        latestFact: -1
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
      var _this = this
      this.typedB = new Typed('#terminalB', {
        stringsElement: '#factsText',
        typeSpeed: 30,
        backSpeed: 10,
        showCursor: false,
        backDelay: 1000,
        loop: true,
        onStringTyped: function (pos, self) {
          if (pos !== _this.latestFact) {
            if (pos === 0 || pos === 2 || pos === 3 || pos === 4 || pos === 6 || pos === 8 || pos === 9) {
              _this.latestFact = pos
              self.stop()
            }
          }
        }
      })
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
      },
      nextFact: function () {
        this.nextFactVisible = false
        this.typedB.start()
      }
    }
  }
</script>

<style lang="scss" scoped>
  #about {
    h2 {
      color: $highlight;
    }
    .bio {
      font-size: 1.25em;
      font-weight: 300;
    }
    h3 {
      color: $gray;
      margin-top: 2em;
      &::before {
        content: '// '
      }
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
            b { color: $purple; }
          }
        }
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
    .boardWrapper {
      margin: 2em 0;
      .boardImage {
        width: 25%;
        float: left;
        svg {
          width: 100%;
          height: auto;
          cursor: pointer;
          #boardExclamation {
            opacity: 0;
          }
          &:hover {
            #boardExclamation {
              opacity: 1;
            }
          }
        }
      }
      .boardTerminal {
        font-family: $alt-font;
        font-size: .75em;
        width: 70%;
        height: 6em;
        padding: 1em 0 1em 5%;
        float: right;
        display: flex;
        align-items: center;
        ul {
          display: none;
        }
        #terminalB {
          b { color: $highlight; }
          i {
            font-style: normal;
            font-weight: 300;
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
