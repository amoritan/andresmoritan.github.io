<template>
  <section id="philosophy">

    <h2>Work <strong>Philosophy</strong></h2>
    
    <ul class="foundations">
      <li class="foundation">
        <div class="pacmanPlayer">
          <img src="/static/img/8bit/pacman.svg" width="256" height="256" alt="PacMan Player" />
          <strong>Individuals and Interactions</strong>
        </div>
        <small>over</small>
        <div class="pacmanPhantom">
          <img src="/static/img/8bit/phantom.svg" width="256" height="256" alt="PacMan Phantom" />
          <span>Processes and Tools</span>
        </div>
      </li>
      <li class="foundation">
        <div class="pacmanPlayer">
          <img src="/static/img/8bit/pacman.svg" width="256" height="256" alt="PacMan Player" />
          <strong>Working Software</strong>
        </div>
        <small>over</small>
        <div class="pacmanPhantom">
          <img src="/static/img/8bit/phantom.svg" width="256" height="256" alt="PacMan Phantom" />
          <span>Comprehensive Documentation</span>
        </div>
      </li>
      <li class="foundation">
        <div class="pacmanPlayer">
          <img src="/static/img/8bit/pacman.svg" width="256" height="256" alt="PacMan Player" />
          <strong>Customer Collaboration</strong>
        </div>
        <small>over</small>
        <div class="pacmanPhantom">
          <img src="/static/img/8bit/phantom.svg" width="256" height="256" alt="PacMan Phantom" />
          <span>Contract Negotiation</span>
        </div>
      </li>
      <li class="foundation">
        <div class="pacmanPlayer">
          <img src="/static/img/8bit/pacman.svg" width="256" height="256" alt="PacMan Player" />
          <strong>Responding to Change</strong>
        </div>
        <small>over</small>
        <div class="pacmanPhantom">
          <img src="/static/img/8bit/phantom.svg" width="256" height="256" alt="PacMan Phantom" />
          <span>Following a Plan</span>
        </div>
      </li>
    </ul>

    <p>These are the foundations of the <strong>agile method for software development</strong> wich I follow along with my teams to create digital products that fit like a glove to our customers needs.</p>

    <transition mode="out-in" leave-active-class="animated fadeOutDown">
      <ol v-if="principlesVisible" class="principles">
        <li class="principle animated fadeInUp"><span>The highest priority is to satisfy the customer through early and continuous delivery of valuable software.</span></li>
        <li class="principle animated fadeInUp"><span>Welcome changing requirements, even late in development. Agile processes harness change for the customer´s competitive advantage.</span></li>
        <li class="principle animated fadeInUp"><span>Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</span></li>
        <li class="principle animated fadeInUp"><span>Business people and developers must work together daily throughout the project.</span></li>
        <li class="principle animated fadeInUp"><span>Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</span></li>
        <li class="principle animated fadeInUp"><span>The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</span></li>
        <li class="principle animated fadeInUp"><span>Working software is the primary measure of progress.</span></li>
        <li class="principle animated fadeInUp"><span>Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</span></li>
        <li class="principle animated fadeInUp"><span>Continuous attention to technical excellence and good design enhances agility.</span></li>
        <li class="principle animated fadeInUp"><span>Simplicity -the art of maximizing the amount of work not done- is essential.</span></li>
        <li class="principle animated fadeInUp"><span>The best architectures, requirements, and designs emerge from self-organizing teams.</span></li>
        <li class="principle animated fadeInUp"><span>At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</span></li>
      </ol>
      <button v-else @click="principlesVisible = !principlesVisible" class="principlesButton">Learn the principles behind</button>
    </transition>

  </section>
</template>

<script>
  export default {
    name: 'philosophy',
    data () {
      return {
        principlesVisible: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  #philosophy {
    h2 {
      color: $highlight;
    }
    .foundations {
      font-family: $alt-font;
      font-size: .65em;
      list-style: none;
      margin: 0 0 4em auto;
      padding: 0;
      max-width: 62em;
      @media (min-width: 375px) {
        font-size: .75em;
      }
      @media (min-width: 1024px) {
        font-size: 1em;
      }
      .foundation {
        position: relative;
        margin: 2em 0;
        padding: 0;
        div {
          width: 10em;
          text-align: center;
          img {
            display: block;
            width: auto;
            height: 3em;
            margin: 0 auto;
          }
          &.pacmanPlayer {
            float: left;
            color: #f8e71c;
          }
          &.pacmanPhantom {
            float: right;
            color: #4a90e2;
            margin-right: 10%;
          }
        }
        small {
          position: absolute;
          width: 0;
          text-indent: -9000px;
        }
        &::before {
          content: '';
          display: block;
          height: 3em;
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: url('/static/img/8bit/dot.svg') repeat-x center right;
          background-size: 2em;
          z-index: -1;
        }
        &::after {
          content: '';
          display: block;
          clear: both;
        }
        &:nth-child(1) {
          &::before {
            left: 15%;
            @media (min-width: 1024px) {
              left: 10%;
            }
          }
        }
        &:nth-child(2) {
          .pacmanPlayer {
            margin-left: 5%;
            @media (min-width: 1024px) {
              margin-left: 10%;
            }
          }
          &::before {
            left: 20%;
          }
        }
        &:nth-child(3) {
          .pacmanPlayer {
            margin-left: 10%;
            @media (min-width: 1024px) {
              margin-left: 20%;
            }
          }
          &::before {
            left: 25%;
            @media (min-width: 1024px) {
              left: 30%;
            }
          }
        }
        &:nth-child(4) {
          .pacmanPlayer {
            margin-left: 15%;
            @media (min-width: 1024px) {
              margin-left: 30%;
            }
          }
          &::before {
            left: 30%;
            @media (min-width: 1024px) {
              left: 40%;
            }
          }
        }
      }
    }
    p {
      margin-bottom: 2em;
    }
    .principles {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      font-family: $alt-font;
      list-style: none;
      counter-reset: principle;
      margin: 0;
      padding: 0;
      .principle {
        width: 100%;
        margin: 1em auto;
        padding: 1em;
        box-shadow: 0 0 0 .125em $white;
        color: $white;
        span {
          font-size: .85em;
        }
        &::before {
          counter-increment: principle;
          content: counter(principle) '. ';
          font-size: .85em;
          color: transparentize($white, .75);
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
        &:nth-child(5) {
          animation-delay: .20s;
        }
        &:nth-child(6) {
          animation-delay: .25s;
        }
        &:nth-child(7) {
          animation-delay: .30s;
        }
        &:nth-child(8) {
          animation-delay: .35s;
        }
        &:nth-child(9) {
          animation-delay: .40s;
        }
        &:nth-child(10) {
          animation-delay: .45s;
        }
        &:nth-child(11) {
          animation-delay: .50s;
        }
        &:nth-child(12) {
          animation-delay: .55s;
        }
        @media (min-width: 768px) {
          margin: 1em;
          width: 35%;
        }
        @media (min-width: 1366px) {
          width: 25%;
        }
      }
    }
    .principlesButton {
      display: block;
      width: auto;
      font-family: $main-font;
      background: none;
      box-shadow: 0 0 0 .125em $white;
      border: none;
      color: $white;
      padding: 1em;
      margin: 0 auto;
      cursor: pointer;
      transition: all .25s;
      &:hover {
        color: $black;
        background: $white;
      }
    }
  }
</style>
