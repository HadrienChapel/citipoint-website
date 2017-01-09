<template>
  <div class="contactfooter">
    <img class="ui image" id="contacter-citipoint" src="../assets/btn-nous-contacter.png" v-on:click="openModal()">
    <div id="footer-modal" class="ui modal">
    	<div class="ui center aligned header">
        <mark class="black">POUR NOUS </mark><mark class="yellow">CONTACTER</mark> 
      </div>
  	  <div class="content">
        <div class="ui three column grid">
          <div class="three wide column"></div>
          <div id="mail-div" class="bottom aligned column">
            <img id="mail-image" src="../assets/icon-mail.png">
            <p><mark class="mail">contact@citipoint.fr</mark></p>
          </div>
          <div id="phone-div" class="column">
            <img id="phone-image" src="../assets/icon-telephone.png">
            <p><mark class="mail">06 95 83 58 40</mark></p>
          </div>
        </div>
      </div>
  	  <div class="actions">
  	    <div class="ui cancel red button" v-on:click="closeModal()">Close</div>
  	  </div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'contactfooter',
  data: function () {
    return {
      message: ''
    }
  },
  methods: {
    openModal: function () {
      $('#footer-modal').modal('show')
    },
    closeModal: function () {
      $('#footer-modal').modal('hide')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contactfooter {
	bottom: 0;
	position: fixed;
}

#logo-citipoint {
  height: 5vh;
}

.ui.dropdown:hover {
  cursor: pointer;
}

#contacter-citipoint:hover {
	cursor: pointer;
}

#mail-div, #phone-div {
  text-align: center;
  line-height: 300%;
}

#mail-image {
  height: 10vh;
  width: 7.5vw;
}

#phone-image {
  height: 20vh;
  width: 6.5vw;
}

#picto-logo {
  height: 4vh;
  width: 2.2vw;
}

mark.black {
  color: #000000;
  background: none;
  font-size: 3vh;
  font-weight: normal;
}

mark.yellow {
  color: #FFCC33;
  background: none;
  font-size: 3vh;
  font-weight: bold;
}

mark.mail {
  background: none;
  font-size: 3vh;

}


</style>
