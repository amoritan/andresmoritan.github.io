<template>
  <section id="philosophy">

    <h2>Work <strong>Philosophy</strong></h2>
    
    <ul class="foundations">
      <li class="foundation"><strong>Individuals and Interactions</strong> <small>&gt;</small> <span>Processes and Tools</span></li>
      <li class="foundation"><strong>Working Software</strong> <small>&gt;</small> <span>Comprehensive Documentation</span></li>
      <li class="foundation"><strong>Customer Collaboration</strong> <small>&gt;</small> <span>Contract Negotiation</span></li>
      <li class="foundation"><strong>Responding to Change</strong> <small>&gt;</small> <span>Following a Plan</span></li>
      <li class="foundation"><small class="animated flash">&#95;</small></li>
    </ul>

    <p>These are the foundations of the <strong>agile method for software development</strong> wich I follow along with my teams to create digital products that fit like a glove to our customers needs.</p>

    <div class="principlesWrapper">
      <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
        <ol v-if="principlesActive" class="principles" :class="[ activePrinciple !== null ? 'active' : '' ]">
          <li v-for="(principle, index) in principles" class="principle" :class="[ activePrinciple === index ? 'active' : '' ]" @click="toggleActivePrinciple(index)">
            <div class="principleContent">
              <svg xmlns="http://www.w3.org/2000/svg" :viewBox="'0 0 ' + principle.path.w + ' '+ principle.path.h"><path :d="principle.path.d" /></svg>
              <p>{{ principle.content }}</p>
            </div>
          </li>
        </ol>
        <button v-else @click="principlesActive = true">Learn the principles behind</button>
      </transition>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'philosophy',
    data () {
      return {
        principles: [
          {
            content: 'The highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
            path: {
              w: 512,
              h: 512,
              d: 'M505.1 19.1C503.8 13 499 8.2 492.9 6.9 460.7 0 435.5 0 410.4 0 307.2 0 245.3 55.2 199.1 128H94.9c-18.2 0-34.8 10.3-42.9 26.5L2.6 253.3c-8 16 3.6 34.7 21.5 34.7h95.1c-5.9 12.8-11.9 25.5-18 37.7-3.1 6.2-1.9 13.6 3 18.5l63.6 63.6c4.9 4.9 12.3 6.1 18.5 3 12.2-6.1 24.9-12 37.7-17.9V488c0 17.8 18.8 29.4 34.7 21.5l98.7-49.4c16.3-8.1 26.5-24.8 26.5-42.9V312.8c72.6-46.3 128-108.4 128-211.1.1-25.2.1-50.4-6.8-82.6zM400 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z'
            }
          },
          {
            content: 'Welcome changing requirements, even late in development. Agile processes harness change for the customer´s competitive advantage.',
            path: {
              w: 384,
              h: 512,
              d: 'M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z'
            }
          },
          {
            content: 'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.',
            path: {
              w: 512,
              h: 512,
              d: 'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z'

            }
          },
          {
            content: 'Business people and developers must work together daily throughout the project.',
            path: {
              w: 512,
              h: 512,
              d: 'M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248zM404 384h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm-128 0h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z'

            }
          },
          {
            content: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.',
            path: {
              w: 384,
              h: 512,
              d: 'M120 72c0-39.765 32.235-72 72-72s72 32.235 72 72c0 39.764-32.235 72-72 72s-72-32.236-72-72zm254.627 1.373c-12.496-12.497-32.758-12.497-45.254 0L242.745 160H141.254L54.627 73.373c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255L104 213.254V480c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V368h16v112c0 17.673 14.327 32 32 32h16c17.673 0 32-14.327 32-32V213.254l94.627-94.627c12.497-12.497 12.497-32.757 0-45.254z'

            }
          },
          {
            content: 'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.',
            path: {
              w: 576,
              h: 512,
              d: 'M224 358.857c-37.599 0-73.027-6.763-104.143-18.7-31.375 24.549-69.869 39.508-110.764 43.796a8.632 8.632 0 0 1-.89.047c-3.736 0-7.111-2.498-8.017-6.061-.98-3.961 2.088-6.399 5.126-9.305 15.017-14.439 33.222-25.79 40.342-74.297C17.015 266.886 0 232.622 0 195.429 0 105.16 100.297 32 224 32s224 73.159 224 163.429c-.001 90.332-100.297 163.428-224 163.428zm347.067 107.174c-13.944-13.127-30.849-23.446-37.46-67.543 68.808-64.568 52.171-156.935-37.674-207.065.031 1.334.066 2.667.066 4.006 0 122.493-129.583 216.394-284.252 211.222 38.121 30.961 93.989 50.492 156.252 50.492 34.914 0 67.811-6.148 96.704-17 29.134 22.317 64.878 35.916 102.853 39.814 3.786.395 7.363-1.973 8.27-5.467.911-3.601-1.938-5.817-4.759-8.459z'

            }
          },
          {
            content: 'Working software is the primary measure of progress.',
            path: {
              w: 512,
              h: 512,
              d: 'M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z'

            }
          },
          {
            content: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
            path: {
              w: 512,
              h: 512,
              d: 'M128 116V76c0-8.837 7.163-16 16-16h352c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H144c-8.837 0-16-7.163-16-16zm16 176h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zM16 144h64c8.837 0 16-7.163 16-16V64c0-8.837-7.163-16-16-16H16C7.163 48 0 55.163 0 64v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16zm0 160h64c8.837 0 16-7.163 16-16v-64c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v64c0 8.837 7.163 16 16 16z'

            }
          },
          {
            content: 'Continuous attention to technical excellence and good design enhances agility.',
            path: {
              w: 512,
              h: 512,
              d: 'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'

            }
          },
          {
            content: 'Simplicity -the art of maximizing the amount of work not done- is essential.',
            path: {
              w: 576,
              h: 512,
              d: 'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'

            }
          },
          {
            content: 'The best architectures, requirements, and designs emerge from self-organizing teams.',
            path: {
              w: 640,
              h: 512,
              d: 'M220 164c0-55.229 44.772-100 100-100s100 44.771 100 100-44.772 100-100 100-100-44.771-100-100zM48 208c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm384 0c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm-22 76c38.66 0 70 31.34 70 70v70c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24v-70c0-38.66 31.34-70 70-70h17.848c44.364 26.687 99.93 26.693 144.305 0H410m-282 70c0-11.975 2.081-23.472 5.889-34.156-21.93 1.152-44.122-4.121-63.611-15.844H56c-30.928 0-56 25.072-56 56v32c0 13.255 10.745 24 24 24h104v-62zm456-50h-14.278c-19.495 11.727-41.686 16.996-63.611 15.844A101.542 101.542 0 0 1 512 354v62h104c13.255 0 24-10.745 24-24v-32c0-30.928-25.072-56-56-56z'

            }
          },
          {
            content: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
            path: {
              w: 512,
              h: 512,
              d: 'M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z'

            }
          }
        ],
        principlesActive: false,
        activePrinciple: null
      }
    },
    methods: {
      toggleActivePrinciple: function (el) {
        if (this.activePrinciple === null) {
          this.activePrinciple = el
        } else {
          this.activePrinciple = null
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #philosophy {
    background: $highlight;
    padding: 3em 1em;
    color: $black;
    .foundations {
      list-style: none;
      background: transparentize($black, .5);
      margin: 0 0 2em 0;
      position: relative;
      color: $white;
      .foundation {
        max-width: 320px;
        font-family: $alt-font;
        text-transform: lowercase;
        font-weight: 300;
        padding: .5em .25em;
        background: transparentize($black, .5);
        strong {
          font-weight: 700;
        }
        small {
          font-size: 1em;
          font-weight: 400;
          &.flash {
            animation-iteration-count: infinite;
            animation-duration: 1.5s;
          }
        }
        span {
          font-weight: 400;
        }
        &::before {
          position: absolute;
          content: '$';
          color: $highlight;
          left: 1em;
        }
      }
    }
    p {
      margin-bottom: 0;
    }
    .principlesWrapper {
      margin: 2em auto;
      .principles {
        display: flex;
        width: 100%;
        height: 100vw;
        margin: 0;
        padding: 0;
        list-style: none;
        flex-wrap: wrap;
        align-items: stretch;
        align-content: stretch;
        overflow: hidden;
        counter-reset: principle;
        .principle {
          position: relative;
          display: block;
          width: calc(100% / 3);
          height: calc(100% / 4);
          margin: 0;
          padding: 0;
          cursor: pointer;
          transition: all ease 1s;
          counter-increment: principle;
          .principleContent {
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            width: 100%;
            height: 100%;
            background: transparentize($white, .5);
            box-shadow: inset 0 0 0 .125em $highlight;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            transition: all ease 1s;
          }
          svg {
            display: block;
            width: auto;
            height: 1.5em;
            margin: 0 auto;
            fill: $black;
          }
          p {
            display: none;
            position: absolute;
            opacity: 0;
            margin: 0 1em;
            font-weight: 300;
            font-size: 1.5em;
            &::before {
              content: counter(principle) '. ';
              font-weight: 400;
            }
          }
        }
        &.active {
          .principle {
            filter: blur(10px);
            opacity: .25;
            &.active {
              filter: blur(0);
              opacity: 1;
              .principleContent {
                box-shadow: none;
                width: 300%;
                height: 400%;
              }
              svg {
                animation: fadeOutUp 1s;
                animation-delay: 1s;
                animation-fill-mode: both;
              }
              p {
                display: block;
                animation: fadeInUp 1s;
                animation-delay: 1s;
                animation-fill-mode: both;
              }
              &:nth-child(2) {
                .principleContent {
                  left: -100%;
                }
              }
              &:nth-child(3) {
                .principleContent {
                  left: -200%;
                }
              }
              &:nth-child(4) {
                .principleContent {
                  top: -100%;
                }
              }
              &:nth-child(5) {
                .principleContent {
                  top: -100%;
                  left: -100%;
                }
              }
              &:nth-child(6) {
                .principleContent {
                  top: -100%;
                  left: -200%;
                }
              }
              &:nth-child(7) {
                .principleContent {
                  top: -200%;
                }
              }
              &:nth-child(8) {
                .principleContent {
                  top: -200%;
                  left: -100%;
                }
              }
              &:nth-child(9) {
                .principleContent {
                  top: -200%;
                  left: -200%;
                }
              }
              &:nth-child(10) {
                .principleContent {
                  top: -300%;
                }
              }
              &:nth-child(11) {
                .principleContent {
                  top: -300%;
                  left: -100%;
                }
              }
              &:nth-child(12) {
                .principleContent {
                  top: -300%;
                  left: -200%;
                }
              }
            }
          }
        }
      }
      button {
        appearance: none;
        display: block;
        border: none;
        width: 100%;
        box-shadow: 0 0 0 .125em transparentize($black, .125);
        background: none;
        color: transparentize($black, .125);
        padding: 1em 1.25em;
        text-transform: uppercase;
        font-size: .85em;
        cursor: pointer;
        transition: all ease .25s;
        &:hover {
          box-shadow: none;
          background: transparentize($white, .5);
        }
      }
    }
  }
</style>
