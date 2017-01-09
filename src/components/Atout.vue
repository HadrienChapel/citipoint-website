<template>
  <div class="atout">
    <minimenu></minimenu>
    <div class="ui grid">
      <div class="row"></div>
      <div class="one column row">
        <div class="center aligned column">
          <p><mark class="gold-title">UN ATOUT </mark><mark class="black-title">POUR VOTRE ASSOCIATION</mark></p>
        </div>
      </div>
      <div class="row"></div>
      <div class="four column row">
        <div class="center aligned column">
          <img src="../assets/picto-numerisez.png">
          <p><mark class="blue">NUMÉRISEZ</mark><br></br><mark class="black">VOTRE GESTION</mark></p>
          <img v-on:click="revealNumerisez()" class="croix" src="../assets/croix-bleu.png">
          <div id="numerisez-text">
            <p><mark class="hidden-text">Animations,<br></br>communication,<br></br>adhésions...</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <img src="../assets/picto-demultipliez.png">
          <p><mark class="yellow">DÉMULTIPLIEZ</mark><br></br><mark class="black">VOS ACTIONS</mark></p>
          <img v-on:click="revealDemultipliez()" class="croix" src="../assets/croix-jaune.png">
          <div id="demultipliez-text">
            <p><mark class="hidden-text">Un service gratuit<br></br>supplémentaire pour<br></br>vos adhérents</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <img src="../assets/picto-optimisez.png">
          <p><mark class="pink">OPTIMISEZ</mark><br></br><mark class="black">VOTRE RELATION CLIENT</mark></p>
          <img v-on:click="revealOptimisez()" class="croix" src="../assets/croix-rose.png">
          <div id="optimisez-text">
            <p><mark class="hidden-text">Gérez et analysez<br></br>les informations<br></br>collectées</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <img src="../assets/picto-boostez.png">
          <p><mark class="gold">BOOSTEZ</mark><br></br><mark class="black">VOTRE IMAGE</mark></p>
          <img v-on:click="revealBoostez()" class="croix" src="../assets/croix-ocre.png">
          <div id="boostez-text">
            <p><mark class="hidden-text">Pour recruter<br></br>de nouveaux<br></br>adhérents</mark></p>
          </div>
          <contactfooter></contactfooter>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import Minimenu from './Minimenu'
import Contactfooter from './Footer'

export default {
  name: 'atout',
  components: {
    Minimenu,
    Contactfooter
  },
  data () {
    return {
      numerisez: false,
      optimisez: false,
      boostez: false,
      demultipliez: false,
      message: ''
    }
  },
  methods: {
    revealNumerisez: function () {
      $('#numerisez-text').transition('slide down')
    },
    revealDemultipliez: function () {
      $('#demultipliez-text').transition('slide down')
    },
    revealOptimisez: function () {
      $('#optimisez-text').transition('slide down')
    },
    revealBoostez: function () {
      $('#boostez-text').transition('slide down')
    }
  },
  mounted: function () {
    $('#numerisez-text').hide()
    $('#demultipliez-text').hide()
    $('#optimisez-text').hide()
    $('#boostez-text').hide()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.atout {
  background-color: #F2F1F1;
  background-size: cover;
  height: 100vh;
}

.croix {
  height: 8vh;
  line-height: 200%;
}

.croix:hover {
  cursor: pointer;
}

mark.blue {
  color: #66CCFF;
  background: none;
  font-size: 5vh;
  line-height: 200%;
  font-weight: bold;
}

mark.black {
  color: #000000;
  background: none;
  font-size: 3vh;
  line-height: 0%;
}

mark.yellow {
  color: #FFCC33;
  background: none;
  font-size: 5vh;
  line-height: 200%;
  font-weight: bold;
}

mark.pink {
  color: #CC3399;
  background: none;
  font-size: 5vh;
  line-height: 200%;
  font-weight: bold;
}

mark.gold {
  color: #B39510;
  background: none;
  font-size: 5vh;
  line-height: 200%;
  font-weight: bold;
}

mark.gold-title {
  color: #B39510;
  background: none;
  font-size: 6vh;
  line-height: 200%;
  font-weight: bold;
}

mark.black-title {
  color: #000000;
  background: none;
  font-size: 6vh;
  line-height: 0%;
}

mark.hidden-text {
  color: #000000;
  background: none;
  font-size: 2vh;
  line-height: 0%;
}


</style>
