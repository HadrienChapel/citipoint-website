<template>
<transition name="slide-top">
  <div class="home">
    <homenu></homenu>  
    <div class="ui equal width grid">
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="one wide column"></div>
      <div class="column">
        <p><mark class="black">CITIPOINT EST UNE </mark><mark class="pink">SOLUTION </mark>
        <br></br>
        <mark class="gold">MULTIPLATEFORME </mark><mark class="black">GRATUITE</mark></p>
      </div>
      <div class="ui equal width row">
        <div class="one wide column"></div>
        <div class="column">
          <p><mark class="descri">Elle permet aux associations de commerçants d'assurer l'administration, 
          le recrutement, l'animation et la valorisation de ses adhérents grâce 
          à une application pour smartphones et son backoffice complet.</mark></p>
        </div>
        <div class="column">{{ message }}</div>
      </div>
      <div class="twelve wide column"></div>
      <div class="column">
        <contactfooter></contactfooter>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
import Homenu from './Homenu'
import Contactfooter from './Footer'

export default {
  name: 'home',
  components: {
    Homenu,
    Contactfooter
  },
  data: function () {
    return {
      transitionName: '',
      message: ''
    }
  },
  methods: {
    changeView: function (e) {
      console.log(e.keyCode)
      if (e.keyCode == 40) {
        this.$router.push('/ecosystem')
      }
    }
  },
  created: function () {
    window.addEventListener('keyup', this.changeView)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  min-width: 800px;
  min-height: 600px;
  height: 100vh;
  background-image: url('../assets/visuel-header.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#logo-citipoint {
  height: 5vh;
}

.ui.dropdown:hover {
  cursor: pointer;
}

mark.black {
  color: #000000;
  background: none;
  font-size: 6vh;
  line-height: 70%
}

mark.pink {
  color: #CC3399;
  background: none;
  font-size: 6vh;
  font-weight: bold;
  line-height: 70%
}

mark.gold {
  color: #B39510;
  background: none;
  font-size: 6vh;
  font-weight: bold;
  line-height: 70%
}

mark.descri {
  color: #000000;
  background: none;
  font-size: 2.2vh;
  text-align: justify;
  line-height: 100%
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-top-enter, .slide-top-leave-to {
  transform: translateY(100%);
}
.slide-bottom-enter, .slide-bottom-leave-to {
  transform: translateY(-100%);
}
.slide-top-enter-active, .slide-bottom-enter-active {
  transition: all 1s ease-in;
}
.slide-top-leave-active, .slide-bottom-leave-active {
 transition: all 1s ease-out;
}
</style>
