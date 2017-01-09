<template>
  <div class="homenu">
      <div class="ui three column grid">
      <div class="row"></div>
        <div class="center aligned column">
            <img class="ui right spaced image" id="logo-citipoint" src="../assets/logo-citipoint.png">
            <div id="homeDropdown" class="ui icon top left pointing dropdown" v-on:click="openDropdown()">
              <img class="ui left spaced image" id="logo-citipoint" src="../assets/burger.png">
              <div class="menu">
                <a class="item" v-on:click="goToHome()">Citipoint</a>
                <div class="divider"></div>
                <a class="item" v-on:click="goToEcosystem()">Des outils simples</a>
                <a class="item" v-on:click="goToInteraction()">Fonctionnement</a>
                <a class="item" v-on:click="goToAtout()">Avantages</a>
                <a class="item" v-on:click="goToContact">Nous contacter</a>
              </div>
            </div>
            </div>
        <div class="column">
          <h1>{{ message }}</h1>
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homenu',
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    openDropdown: function () {
      $('#homeDropdown').dropdown()
      $('#homeDropdown').dropdown('toggle')
    },
    goToHome: function () {
      this.$router.push('/home')
    },
    goToEcosystem: function () {
      this.$router.push('/ecosystem')
    },
    goToInteraction: function () {
      this.$router.push('/interaction')
    },
    goToAtout: function () {
      this.$router.push('/atout')
    },
    goToContact: function () {
      this.$router.push('/contact')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo-citipoint {
  height: 5vh;
}

.ui.dropdown:hover {
  cursor: pointer;
}
</style>
