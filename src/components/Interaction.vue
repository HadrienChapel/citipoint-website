<template>
  <div class="interaction">
    <minimenu></minimenu>
    <div class="ui grid">
      <div class="row"></div>
      <div class="one column row">
        <div class="center aligned column">
          <p><mark class="pink-title">L'INTERACTION </mark><mark class="black-title">POUR PERFORMER</mark></p>
        </div>
      </div>
      <div class="row"></div>
      <div class="six column row">
        <div class="column"></div>
        <div class="center aligned column">
          <div v-if="isAnimer() == false" class="title-part">
            <p v-on:click="changeState('ANIMER')"><mark class="unactive">ANIMER</mark></p>
          </div>
          <div v-else class="title-part">
            <p><mark class="active">ANIMER</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <div v-if="isCommuniquer() == false" class="title-part">
            <p v-on:click="changeState('COMMUNIQUER')"><mark class="unactive">COMMUNIQUER</mark></p>
          </div>
          <div v-else class="title-part">
            <p><mark class="active">COMMUNIQUER</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <div v-if="isOrganiser() == false" class="title-part">
            <p v-on:click="changeState('ORGANISER')"><mark class="unactive">ORGANISER</mark></p>
          </div>
          <div v-else class="title-part">
            <p><mark class="active">ORGANISER</mark></p>
          </div>
        </div>
        <div class="center aligned column">
          <div v-if="isFideliser() == false" class="title-part">
            <p v-on:click="changeState('FIDELISER')"><mark class="unactive">FIDÉLISER</mark></p>
          </div>
          <div v-else class="title-part">
            <p><mark class="active">FIDÉLISER</mark></p>
          </div>
        </div>
        <div class="column"></div>
      </div>
      <div class="row"></div>
      <div v-if="isAnimer() == true" class="five column row">
        <div class="column"></div>
        <div class="seven wide column">
          <img class="image-mp" src="../assets/p-animer.png">
        </div>
        <div class="column">
          <img class="image-mp" src="../assets/m-animer.png">
        </div>
      </div>
      <div v-if="isCommuniquer() == true" class="five column row">
        <div class="column"></div>
        <div class="seven wide column">
          <img class="image-mp" src="../assets/p-communiquer.png">
        </div>
        <div class="column">
          <img class="image-mp" src="../assets/m-communiquer.png">
        </div>
      </div>
      <div v-if="isOrganiser() == true" class="five column row">
        <div class="column"></div>
        <div class="seven wide column">
          <img class="image-mp" src="../assets/p-organiser.png">
        </div>
        <div class="column">
          <img class="image-mp" src="../assets/m-organiser.png">
        </div>
      </div>
      <div v-if="isFideliser() == true" class="five column row">
        <div class="column"></div>
        <div class="seven wide column">
          <img class="image-mp" src="../assets/p-fideliser.png">
        </div>
        <div class="column">
          <img class="image-mp" src="../assets/m-fideliser.png">
        </div>
      </div>
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
</template>

<script>
import Minimenu from './Minimenu'
import Contactfooter from './Footer'

export default {
  name: 'interaction',
  components: {
    Minimenu,
    Contactfooter
  },
  data () {
    return {
      autoTimeout: undefined,
      autoCount: 0,
      animer: true,
      communiquer: false,
      organiser: false,
      fideliser: false
    }
  },
  methods: {
    isAnimer: function () {
      return this.animer
    },
    isCommuniquer: function () {
      return this.communiquer
    },
    isOrganiser: function () {
      return this.organiser
    },
    isFideliser: function () {
      return this.fideliser
    },
    changeState: function (string) {
      switch (string) {
        case 'ANIMER':
          this.animer = true
          this.communiquer = false
          this.organiser = false
          this.fideliser = false
          break
        case 'COMMUNIQUER':
          this.animer = false
          this.communiquer = true
          this.organiser = false
          this.fideliser = false
          break
        case 'ORGANISER':
          this.animer = false
          this.communiquer = false
          this.organiser = true
          this.fideliser = false
          break
        case 'FIDELISER':
          this.animer = false
          this.communiquer = false
          this.organiser = false
          this.fideliser = true
          break
        default:
          this.animer = true
      }
      clearTimeout(this.autoTimeout);
    },
    autoState1: function () {
      switch (this.autoCount) {
        case 0:
          this.changeState('COMMUNIQUER')
          break
        case 1:
          this.changeState('ORGANISER')
          break
        case 2:
          this.changeState('FIDELISER')
          break
        case 3:
          this.changeState('ANIMER')
          break
      }
      if (this.autoCount < 3) {
        this.autoCount += 1
      } else {
        this.autoCount = 0
      }
      var self = this
      this.autoTimeout = setTimeout(function (){ self.autoState1() }, 1500)
    }
    
  },
  created: function () {
    this.autoState1()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.interaction {
  height: 100vh;
  background-color: #FFFFFF;
  background-size: cover;
}

.title-part:hover {
  cursor: pointer;
}

.image-mp {
  height: 50vh;
}

mark.pink-title {
  color: #CC3399;
  background: none;
  font-size: 6vh;
  font-weight: bold;
  line-height: 200%;
}

mark.black-title {
  color: #000000;
  background: none;
  font-size: 6vh;
  line-height: 200%;
}

mark.unactive {
  color: #000000;
  background: none;
  font-size: 2.5vh;
  line-height: 150%;
}

mark.active {
  color: #66CCFF;
  background: none;
  font-size: 2.5vh;
  line-height: 150%;
  font-weight: bold;
  border-bottom: 0.35vh solid;
  padding-bottom: 0.35vh;
}
</style>
