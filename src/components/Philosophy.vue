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

    <transition mode="out-in" v-on:enter="showPrinciples" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <button v-if="!principles" @click="principles = !principles">Learn the principles behind</button>
      <div v-else class="swiper-container">
        <ol class="principles swiper-wrapper">
          <li class="principle swiper-slide">The highest priority is to satisfy the customer through early and continuous delivery of valuable software.</li>
          <li class="principle swiper-slide">Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.</li>
          <li class="principle swiper-slide">Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.</li>
          <li class="principle swiper-slide">Business people and developers must work together daily throughout the project.</li>
          <li class="principle swiper-slide">Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.</li>
          <li class="principle swiper-slide">The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.</li>
          <li class="principle swiper-slide">Working software is the primary measure of progress.</li>
          <li class="principle swiper-slide">Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.</li>
          <li class="principle swiper-slide">Continuous attention to technical excellence and good design enhances agility.</li>
          <li class="principle swiper-slide">Simplicity -the art of maximizing the amount of work not done- is essential.</li>
          <li class="principle swiper-slide">The best architectures, requirements, and designs emerge from self-organizing teams.</li>
          <li class="principle swiper-slide">At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.</li>
        </ol>
      </div>
    </transition>

  </section>
</template>

<script>
  // import Swiper from 'swiper'
  export default {
    name: 'philosophy',
    data () {
      return {
        principles: false
      }
    },
    methods: {
      showPrinciples: function (el) {
        /* this.swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          effect: 'coverflow',
          slidesPerView: 3,
          centeredSlides: true,
          coverflowEffect: {
            rotate: 50,
            slideShadows: false
          },
          mousewheel: true
        }) */
      }
    }
  }
</script>

<style lang="scss" scoped>
  // @import '~swiper/dist/css/swiper.css';

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
    button {
      appearance: none;
      display: block;
      border: none;
      box-shadow: 0 0 0 .125em transparentize($black, .125);
      background: none;
      color: transparentize($black, .125);
      padding: 1em 1.25em;
      margin: 2em auto;
      text-transform: uppercase;
      font-size: .85em;
      cursor: pointer;
      transition: all ease .25s;
      &:hover {
        box-shadow: 0 0 0 .125em transparentize($white, .25);
        background: transparentize($white, .25);
        color: $highlight;
      }
    }
    .swiper-container {
      width: 100%;
      height: 24em;
      .swiper-slide {
        opacity: .25;
        transition-property: all;
        &.swiper-slide-active {
          opacity: 1;
        }
      }
    }
    .principles {
      list-style: none;
      padding: 0;
      margin: 0;
      counter-reset: principle;
      .principle {
        counter-increment: principle; 
        border: solid .125em transparentize($black, .125);
        color: $gray;
        width: 90%;
        padding: 0 4.5%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-family: $alt-font;
        font-size: .85em;
        &::before {
          background: transparentize($black, .125);
          content: counter(principle);
          position: absolute;
          right: 0; bottom: 0;
          width: 2em;
          height: 2em;
          line-height: 2em;
          text-align: center;
          color: $highlight;
        }
      }
    }
  }
</style>
