<template>
  <section id="projects">

    <h2>Featured <strong>Projects</strong></h2>

    <ul class="projects">
      <li class="project"><span>I</span></li>
      <li class="project"><span>am</span></li>
      <li class="project"><span>working</span></li>
      <li class="project"><span>on</span></li>
      <li class="project"><span>this</span></li>
      <li class="project"><span>section</span></li>
    </ul>

  </section>
</template>

<script>
  export default {
    name: 'projects'
  }
</script>

<style lang="scss" scoped>
  #projects {
    h2 {
      color: $highlight;
    }
    .projects {
      list-style: none;
      margin: 0;
      padding: 0;
      .project {
        width: 45%;
        height: 8em;
        line-height: 8em;
        margin: .5em 2.5%;
        color: $highlight;
        box-shadow: 0 0 0 .125em $highlight;
        text-align: center;
        &:nth-child(odd) {
          float: left;
        }
        &:nth-child(even) {
          float: right;
        }
        span {
          font-size: 2em;
          font-weight: 300;
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
