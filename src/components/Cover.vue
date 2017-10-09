<template>
  <section id="cover">
    <blockquote id="cover_quote"><span>I bring togheter</span> <span class="highlight">awesome teams</span> <span>to create great</span> <span class="highlight">digital products</span></blockquote>
    <canvas id="cover_canvas"></canvas>
  </section>
</template>

<script>
  import {TweenLite, Circ} from 'gsap'
  export default {
    name: 'cover',
    mounted () {
      var width
      var height
      var canvas
      var ctx
      var points
      var target
      var animateHeader = true

      initHeader()
      initAnimation()
      addListeners()

      function initHeader () {
        width = window.innerWidth
        height = window.innerHeight
        target = { x: width / 2, y: height / 2 }

        canvas = document.getElementById('cover_canvas')
        canvas.width = width
        canvas.height = height
        ctx = canvas.getContext('2d')

        points = []
        for (var x = 0; x < width; x = x + width / 20) {
          for (var y = 0; y < height; y = y + height / 20) {
            var px = x + Math.random() * width / 20
            var py = y + Math.random() * height / 20
            var p = { x: px, originX: px, y: py, originY: py }
            points.push(p)
          }
        }

        // for each point find the 5 closest points
        for (var i = 0; i < points.length; i++) {
          var closest = []
          var p1 = points[i]
          for (var j = 0; j < points.length; j++) {
            var p2 = points[j]
            if (!(p1 === p2)) {
              var placed = false
              for (var k = 0; k < 5; k++) {
                if (!placed) {
                  if (closest[k] === undefined) {
                    closest[k] = p2
                    placed = true
                  }
                }
              }

              for (var l = 0; l < 5; l++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[l])) {
                    closest[l] = p2
                    placed = true
                  }
                }
              }
            }
          }
          p1.closest = closest
        }

        // assign a circle to each point
        for (var m in points) {
          var c = new Circle(points[m], 2 + Math.random() * 2, 'rgba(238,255,255,0.3)')
          points[m].circle = c
        }
      }

      // Event handling
      function addListeners () {
        if (!('ontouchstart' in window)) {
          window.addEventListener('mousemove', mouseMove)
        }
        window.addEventListener('scroll', scrollCheck)
        window.addEventListener('resize', resize)
      }

      function mouseMove (e) {
        var posx = 0
        var posy = 0
        if (e.pageX || e.pageY) {
          posx = e.pageX
          posy = e.pageY
        } else if (e.clientX || e.clientY) {
          posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
          posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        target.x = posx
        target.y = posy
      }

      function scrollCheck () {
        if (document.body.scrollTop > height) animateHeader = false
        else animateHeader = true
      }

      function resize () {
        width = window.innerWidth
        height = window.innerHeight
        canvas.width = width
        canvas.height = height
      }

      // animation
      function initAnimation () {
        animate()
        for (var i in points) {
          shiftPoint(points[i])
        }
      }

      function animate () {
        if (animateHeader) {
          ctx.clearRect(0, 0, width, height)
          for (var i in points) {
            // detect points in range
            if (Math.abs(getDistance(target, points[i])) < 4000) {
              points[i].active = 0.3
              points[i].circle.active = 0.6
            } else if (Math.abs(getDistance(target, points[i])) < 20000) {
              points[i].active = 0.1
              points[i].circle.active = 0.3
            } else if (Math.abs(getDistance(target, points[i])) < 40000) {
              points[i].active = 0.02
              points[i].circle.active = 0.1
            } else {
              points[i].active = 0
              points[i].circle.active = 0
            }

            drawLines(points[i])
            points[i].circle.draw()
          }
        }
        requestAnimationFrame(animate)
      }

      function shiftPoint (p) {
        TweenLite.to(
          p, 1 + 1 * Math.random(),
          { x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: function () {
              shiftPoint(p)
            }
          }
        )
      }

      // Canvas manipulation
      function drawLines (p) {
        if (!p.active) return
        for (var i in p.closest) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.closest[i].x, p.closest[i].y)
          ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')'
          ctx.stroke()
        }
      }

      function Circle (pos, rad, color) {
        var _this = this

        this.pos = pos || null
        this.radius = rad || null
        this.color = color || null

        this.draw = function () {
          if (!_this.active) return
          ctx.beginPath()
          ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false)
          ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')'
          ctx.fill()
        }
      }

      // Util
      function getDistance (p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #cover {
    position: relative;
    blockquote {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate3d(-50%, -50%, 0);
      margin: 0; padding: 0;
      -webkit-margin-before: 0;
      -webkit-margin-after: 0;
      -webkit-margin-start: 0;
      -webkit-margin-end: 0;
      width: 95%;
      max-width: 768px;
      text-align: center;
      font-weight: 700;
      font-size: 2.5em;
      line-height: 1.05em;
      text-shadow: 0 0 .75em transparentize(darken($black, 25%), 0.15);
      @media (min-width: 768px) {
        font-size: 3em;
      }
      span {
        display: inline-block;
        &.highlight {
          color: $highlight;
        }
      }
    }
  }
</style>
