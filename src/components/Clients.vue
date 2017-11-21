<template>
  <section id="clients">

    <h2>Awesome <strong>Clients</strong></h2>

    <ul class="clients">
      <li class="client" v-for="client in clients">
        <img :src="client.src" :alt="client.name" :width="client.width" :height="client.height" />
      </li>
    </ul>

    <p>From small tasks to big projects, this are the some of the clients that I had the pleasure to worked with.</p>

  </section>
</template>

<script>
  export default {
    name: 'clients',
    data () {
      return {
        clients: [
          { name: 'FEHGRA', src: '/static/img/clients/fehgra.svg', width: 104, height: 48 },
          { name: 'Ministerio de Turismo de la Nación', src: '/static/img/clients/mintur.svg', width: 176, height: 48 },
          { name: 'AHRCC', src: '/static/img/clients/ahrcc.svg', width: 124, height: 48 },
          { name: 'Gobierno de la Ciudad de Buenos Aires', src: '/static/img/clients/gcba.svg', width: 182, height: 48 },
          { name: 'Ferias Argentinas', src: '/static/img/clients/ferias.svg', width: 84, height: 48 },
          { name: 'Cámara de Turismo Argentina', src: '/static/img/clients/cat.svg', width: 159, height: 48 },
          { name: 'INPROTUR', src: '/static/img/clients/inprotur.svg', width: 106, height: 48 },
          { name: 'Cámara de Turismo de Salta', src: '/static/img/clients/catsalta.svg', width: 75, height: 48 },
          { name: 'Secretaría de Turismo de la Ciudad de Salta', src: '/static/img/clients/salta.svg', width: 106, height: 48 },
          { name: 'SGIT', src: '/static/img/clients/sgit.svg', width: 106, height: 48 },
          { name: 'Claro', src: '/static/img/clients/claro.svg', width: 88, height: 48 }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #clients {
    h2 {
      color: $highlight;
    }
    .clients {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;
      flex-wrap: wrap;
      justify-content: space-around;
      .client {
        display: block;
        padding: 1em;
      }
    }
    p {
      color: $highlight;
      margin-top: 2em;
    }
  }
</style>
