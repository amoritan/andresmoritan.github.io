<template>
  <section id="technology">

    <h2>Latest <strong><abbr title="Technology">Tech</abbr></strong></h2>

    <div class="memoryWrapper">
      <div class="memoryScore">
        <span class="left">techMemoryGame</span>
        <span class="right">attempts: <strong>{{ ('000' + attempts).slice(-3) }}</strong></span>
      </div>
      <ul class="memoryGame">
        <li class="memorySlot" v-for="(card, index) in cards">
          <transition mode="out-in" enter-active-class="animated flipInY" leave-active-class="animated flipOutY">
            <button key="secret" v-if="card.status === 'hidden'" @click="selectCard(card)" class="memoryCard" :class="card.status">{{ ('0000' + index.toString(2)).slice(-4) }}</button>
            <button key="answer" v-else class="memoryCard" :class="card.status">
              <img :src="'/static/img/tools/' + card.tag + '-black.svg'" :alt="card.name" width="40" height="40" class="black" />
              <img :src="'/static/img/tools/' + card.tag + '-color.svg'" :alt="card.name" width="40" height="40" class="color" />
            </button>
          </transition>
        </li>
      </ul>
    </div>

    <p>I love technology and strongly believe that as a developer and team-leader one must continue learning new techniques and tools all the time. That is why at the beginning of each project I don't go for the "always" technology but rather dedicate time and effort to find the best tools for each challenge; By doing this I make sure that each development will have great scalability and long life expectancy.</p>

  </section>
</template>

<script>
  export default {
    name: 'technology',
    data () {
      return {
        tools: [
          { tag: 'html', name: 'HTML 5' },
          { tag: 'java', name: 'Java' },
          { tag: 'node', name: 'Node JS' },
          { tag: 'php', name: 'PHP' },
          { tag: 'python', name: 'Python' },
          { tag: 'react', name: 'React Native' },
          { tag: 'ruby', name: 'Ruby' },
          { tag: 'swift', name: 'Swift' }
        ],
        cards: [],
        attempts: 0
      }
    },
    created () {
      var cards = this.cards
      this.tools.forEach(function (e) {
        cards.push({ tag: e.tag, name: e.name, status: 'hidden' })
        cards.push({ tag: e.tag, name: e.name, status: 'hidden' })
      })
      for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = cards[i]
        cards[i] = cards[j]
        cards[j] = temp
      }
    },
    methods: {
      selectCard: function (selectedCard) {
        if (this.cards.filter(card => card.status === 'visible').length < 2) {
          selectedCard.status = 'visible'
          this.attempts++
          var visibleCards = this.cards.filter(card => card.status === 'visible')
          if (visibleCards.length === 2) {
            if (visibleCards[0].tag === visibleCards[1].tag) {
              setTimeout(function () {
                visibleCards[0].status = 'matched'
                visibleCards[1].status = 'matched'
              }, 1500)
            } else {
              setTimeout(function () {
                visibleCards[0].status = 'hidden'
                visibleCards[1].status = 'hidden'
              }, 2000)
            }
          }
          this.$ga.event('Memory Game', 'Played', 'Attempts: ' + this.attempts)
        }
      }
    },
    watch: {
      cards: {
        handler: function () {
          if (this.cards.filter(card => card.status === 'matched').length === this.cards.length) {
            this.$ga.event('Memory Game', 'Finished', 'Attempts: ' + this.attempts)
          }
        },
        deep: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  #technology {
    background: $highlight;
    padding: 3em 1em;
    color: $black;
    h2 {
      abbr {
        text-decoration: none;
      }
    }
    .memoryWrapper {
      max-width: 24em;
      margin: 0 auto;
      background: transparentize($black, .5);
    }
    .memoryGame {
      width: calc(100% - 1em);
      background: transparentize($black, .5);
      display: flex;
      list-style: none;
      margin: 0 auto;
      padding: .5em;
      flex-wrap: wrap;
      .memorySlot {
        display: block;
        width: 25%;
        height: 5em;
        .memoryCard {
          display: block;
          width: 95%;
          height: 95%;
          appearance: none;
          border: none;
          margin: auto;
          color: transparentize($black, .75);
          cursor: pointer;
          img {
            display: none;
            width: 80%;
            height: auto;
            margin: auto;
          }
          &.hidden {
            background: $highlight;
            font-family: $alt-font;
            font-size: .85em;
          }
          &.visible {
            background: $white;
            img.black {
              display: block;
            }
          }
          &.matched {
            background: $white;
            img.color {
              display: block;
            }
          }
        }
      }
    }
    .memoryScore {
      font-family: $alt-font;
      font-size: .85em;
      width: calc(100% - 2em);
      margin: 0 auto;
      padding: 1em;
      color: $highlight;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
      &::after {
        content: '';
        display: block;
        clear: both;
      }
    }
    p {
      margin: 2em auto;
    }
  }
</style>
