<template>
<transition name="slide-top">
  <div class="ecosystem">
    <minimenu></minimenu>
    <div class="ui middle aligned two column centered grid">
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row"></div>
    <div class="row">
      <p><mark class="blue">UN ÉCOSYSTÈME </mark><mark class="black"> COMPLET</mark></p>
    </div>
    <div class="row"></div>
    <div class="row">
      <div class="column">
        <div class="content">
          <div id="video-presentation" class="ui embed" data-source="youtube" data-id="VNj9XIpgeh8" data-icon="play icon" placeholder="../assets/screenshot-video.jpg"></div>
        </div>
          </div>
        </div>
    </div>
    <div class="ui grid">
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
  </div>
</transition>
</template>

<script>
import Minimenu from './Minimenu'
import Contactfooter from './Footer'

export default {
  name: 'ecosystem',
  components: {
    Minimenu,
    Contactfooter
  },
  data () {
    return {
      transitionName: ''
    }
  },
  mounted: function () {
    $('.ui.embed').embed({
      autoplay: true
    })
  },
  watch: {
    '$route': function () {
      if (this.transitionName === 'slide-top') {
        this.transitionName = 'slide-bottom'
      } else {
        this.transitionName = 'slide-top'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ecosystem {
  background-color: #F2F1F1;
  background-size: cover;
  height: 100vh;
}

#video-presentation {
  text-align: center;
  display: block;
}

.ui.header {
  font-size: 5vh;
}

mark.blue {
  color: #66CCFF;
  background: none;
  font-size: 5vh;
  font-weight: bold;
}

mark.black {
  color: #000000;
  background: none;
  font-size: 5vh;
}

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
