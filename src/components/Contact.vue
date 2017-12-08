<template>
  <footer id="contact">

    <h2>Get In <strong>Touch</strong></h2>

    <p>If you have any questions or if you have an idea for a digital product that you'd like it to come true, please feel free to <strong>write me down a message</strong>!</p>

    <form>
      <fieldset>
        <div class="legend"><legend>Name</legend></div>
        <div><input v-model="name" :class="{ warning: warnings.includes('name') }" type="text" required="required" placeholder="How should I call you?" tabindex="1" /></div>
      </fieldset>
      <fieldset>
        <div class="legend"><legend>Email</legend></div>
        <div><input v-model="email" :class="{ warning: warnings.includes('email') }" type="email" required="required" placeholder="Where should I write you back?" tabindex="2" /></div>
      </fieldset>
      <fieldset>
        <div><textarea v-model="message" :class="{ warning: warnings.includes('message') }" required="required" placeholder="Type your message..." tabindex="3"></textarea></div>
      </fieldset>
      <fieldset>
        <div><input @click="submit($event)" :class="[status]" :disabled="status !== 'awaiting'" type="submit" :value="statusDesc" tabindex="4" /></div>
      </fieldset>
    </form>

    <p>You can also <strong>send me an invitation to connect</strong> on LinkedIn or get in touch with me over Twitter.</p>

    <div class="references">
      <a href="https://www.linkedin.com/in/andresmoritan/" target="_blank" rel="external" @click="$ga.social('LinkedIn', 'visit', 'https://www.linkedin.com/in/andresmoritan/')"><icon name="fab_linkedin"></icon></a>
      <a href="https://twitter.com/andresmoritan" target="_blank" rel="external" @click="$ga.social('Twitter', 'visit', 'https://twitter.com/andresmoritan')"><icon name="fab_twitter"></icon></a>
    </div>

    <div class="footNote">
      <p>This website is Progresive Web Application build with awesome open-source frameworks and libraries such as <a href="https://vuejs.org" target="_blank" rel="nofollow">Vue.js</a>, <a href="http://www.mattboldt.com/typed.js/" target="_blank" rel="nofollow">Typed.js</a> and <a href="https://fontawesome.com" target="_blank" rel="nofollow">Font Awesome</a>. Following that spirit, feel free to grab any snippet of code and design that your found useful. <strong>Andres Moritan &lt;amoritan@me.com&gt;</strong>.</p>
    </div>

  </footer>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'contact',
    data () {
      return {
        name: '',
        email: '',
        message: '',
        status: 'awaiting',
        statusDesc: 'Send'
      }
    },
    computed: {
      warnings: function () {
        var warnings = []
        if (this.status !== 'awaiting') {
          if (this.name.length < 4) {
            warnings.push('name')
          }
          var reg = /\S+@\S+\.\S+/
          if (this.email.length < 4 || !reg.test(this.email)) {
            warnings.push('email')
          }
          if (this.message.length < 6) {
            warnings.push('message')
          }
        }
        return warnings
      }
    },
    methods: {
      submit: function (event) {
        this.status = 'loading'
        this.statusDesc = 'Sending your message...'
        var _this = this
        if (this.warnings.length === 0) {
          axios.post('//mandrillapp.com/api/1.0/messages/send.json', {
            'key': 'PpYgWVZ1pBaq798wz822hg',
            'message': {
              'text': _this.message,
              'subject': 'Nuevo mensaje de ' + _this.name,
              'from_email': 'no-reply@andresmoritan.com',
              'from_name': 'Andres Moritan',
              'to': [{
                'email': 'amoritan@me.com',
                'name': 'Andres Moritan',
                'type': 'to'
              }],
              'headers': {
                'Reply-To': _this.email
              }
            }
          })
          .then(function (response) {
            _this.status = 'succeeded'
            _this.statusDesc = 'Message delivered! I´ll get back to you ASAP!'
            _this.resetStatus()
            _this.$ga.event('Contact Form', 'Submitted Successfully')
          })
          .catch(function (error) {
            console.log(error)
            _this.status = 'failed'
            _this.statusDesc = 'Ups! Your message couldn´t be delivered...'
            _this.resetStatus()
            _this.$ga.event('Contact Form', 'Submit Failed')
          })
        } else {
          this.status = 'failed'
          this.statusDesc = 'Looks like something´s missing...'
        }
        this.resetStatus()
        event.preventDefault()
      },
      resetStatus: function () {
        var _this = this
        window.setTimeout(function () {
          _this.status = 'awaiting'
          _this.statusDesc = 'Send'
        }, 2000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #contact {
    background: $gray;
    padding: 3em 1em 1em 1em;
    form {
      display: block;
      font-size: .85em;
      margin: 1.5em auto 4em auto;
      max-width: 42em;
      fieldset {
        display: flex;
        padding: 0;
        margin: 0;
        border: none;
        align-items: stretch;
        align-content: stretch;
        border-bottom: solid .0125em transparentize($white, .75);;
        div {
          flex-grow: 1;
          legend {
            display: block;
            width: 100%;
            height: 100%;
            font-family: $alt-font;
            font-size: .85em;
            color: $highlight;
            padding: 1em 0;
            background: transparentize($white, .75);
            text-indent: .75em;
          }
          input, textarea {
            display: block;
            width: 90%;
            height: auto;
            border: none;
            padding: .75em 5%;
            margin: 0;
            background: none;
            font-family: $main-font;
            font-size: 1em;
            color: $black;
            background: transparentize($white, .05);
            transition: all linear .25s;
            border-radius: 0;
            &:focus {
              outline: none;
              background: $white;
            }
            &::placeholder {
              color: transparentize($black, .5);
            }
            &.warning {
              box-shadow: inset 0 0 0 100em transparentize($red, .5);
            }
            &[readonly] {
              color: $gray;
              font-style: italic;
              cursor: not-allowed;
            }
            &[type=submit] {
              background: $highlight;
              color: $white;
              width: 100%;
              cursor: pointer;
              &:focus {
                outline: none;
                background: $highlight;
              }
              &:disabled {
                opacity: 1;
              }
              &.loading {
                background: $blue;
                cursor: wait;
              }
              &.succeeded {
                background: $green;
                cursor: default;
              }
              &.failed {
                background: $red;
                cursor: not-allowed;
              }
            }
          }
          textarea {
            height: 6em;
            resize: vertical;
          }
          &.legend {
            flex-grow: 0;
            width: 4em;
          }
        }
      }
    }
    .references {
      text-align: center;
      margin: 1em 0 4em 0;
      a {
        display: inline-block;
        color: $highlight;
        margin: 0 .5em;
        .fa-icon {
          width: auto;
          height: 2em;
        }
      }
    }
    .footNote {
      font-size: .75em;
      color: transparentize($white, .75);
      p {
        max-width: none;
        margin: 0;
        a {
          color: transparentize($white, .75);
        }
      }
    }
  }
</style>
