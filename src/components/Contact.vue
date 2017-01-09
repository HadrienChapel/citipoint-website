<template>
  <div class="contact">
    <minimenu></minimenu>
    <div class="ui grid">
      <div class="row"></div>
      <div class="row"></div>
      <div class="one column row">
        <div class="center aligned column">
          <p><mark class="blue">CONTACTEZ-NOUS </mark><mark class="black">DÈS MAINTENANT !</mark><br></br>
          <mark class="subtitle">Pour faire partie des 3 dernières associations à profiter de conditions exceptionnelles</mark></p>
        </div>
      </div>
      <div class="row"></div>
      <div class="eight column row">
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column"></div>
        <div class="column">
          <contactfooter></contactfooter>
        </div>
      </div>
    </div>
    <img v-on:click="actionHeart()" id="center-heart" src="../assets/btn-coeur.png">
  </div>
</template>

<script>
import Minimenu from './Minimenu'
import Contactfooter from './Footer'

export default {
  name: 'contact',
  components: {
    Minimenu,
    Contactfooter
  },
  data () {
    return {
      heart: 0
    }
  },
  methods: {
    actionHeart: function () {
      $('#center-heart').transition('pulse')
      this.heart++
    },
    runPulse: function () {
      var self = this
      $('#center-heart').transition('pulse')
      setTimeout(function (){ self.runPulse() }, 750)
    }
  },
  mounted: function () {
    this.runPulse()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact {
  height: 100vh;
  background-image: url('../assets/illus-ville-sans.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#center-heart {
  height: 10vh;
  width: 6.5vw;
  position: absolute;
  top: 46%;
  left: 46%;
}

mark.blue {
  color: #66CCFF;
  background: none;
  font-size: 6vh;
  line-height: 70%;
  font-weight: bold;
}

mark.black {
  color: #000000;
  background: none;
  font-size: 6vh;
  line-height: 70%
}

mark.subtitle {
  color: #000000;
  background: none;
  font-size: 2.7vh;
  line-height: 90%
}

mark.heart-text {
  color: #66CCFF;
  background: none;
  font-size: 2vh;
  line-height: 70%;
  font-weight: bold;
}
</style>
