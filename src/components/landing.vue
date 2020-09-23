<template>
  <div id="landing-container" style="margin-top: -53px;">

    <div class="back"></div>

    <div class="img-box cassettes" style="background-position-y: 5vh; background-position-x: -10vh; left: 0px; bottom: 0px;"></div>
    <div class="img-box headphones-orange" style="background-position-y: 5vh; background-position-x: -12vh; right: 0px; top: 0px; transform: rotate(-5deg) scaleX(-1);"></div>

    <a v-if="$parent.$parent.showMLH" id="mlh-trust-badge" href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white" target="_blank">
      <img id="mlh-banner" src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg" alt="Major League Hacking 2020 Hackathon Season">
    </a>

    <div id="logo-container">
      <!--<img src="@/assets/goldflourish.png" class="flipped desktop-only">
      <img src="@/assets/goldshortlogo.png">
      <img src="@/assets/goldflourish.png" class="desktop-only">
      <br>
      <img src="@/assets/goldlonglogo.png" id="short-logo">-->
      <img src="@/assets/KHE_AI_Square1-gradient.svg" id="short-logo">
      <br>
      <span class="goes-retro" style="transform: rotate(-5deg) translate(20%, -20%);">GOES RETRO</span>
      <h1 style="font-size: 7.5vmin!important; margin-top: -0.5vh; font-family: 'Dagger Square'!important; background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">KENT HACK ENOUGH</h1>
    </div>

    <div id="landing-content-container">
      <p class="woah desktop-only" style="font-size: 7vh;">OCTOBER 24<sup style="font-size: 4vh">th</sup>-25<sup style="font-size: 4vh">th</sup></p>
      <p class="woah mobile-only" style="font-size: 5vh;">OCTOBER 24<sup style="font-size: 4vh">th</sup>-25<sup style="font-size: 4vh">th</sup></p>
      <p class="hmm" style="font-size: 5vh; font-family: 'Dagger Square'!important;"><span style="display: inline-block; cursor: pointer;" onclick="document.getElementById('faq-scrollto').click(); setTimeout(function() { let a = document.getElementsByClassName('faqModule')[2]; if (a.lastChild.nodeType != 1) { a.click(); } }, 250)">HOSTED VIRTUALLY</span></p>
      <span v-if="$parent.$parent.showRegister">
        <router-link tag="button" :to="{name: 'register'}" id="apply-btn" class="gold-clear-button"
          v-if="$parent.$parent.user._id == ''">
          Register Now!
        </router-link>
        <router-link tag="button" :to="{name: 'apply'}" id="apply-btn" class="gold-clear-button"
          v-else>
          Apply now!
        </router-link>
        <div style="font-size: initial!important;">
          <a href="https://mlh.io/code-of-conduct/" target="_blank" style="opacity: 0.75; color: white; font-size: 2vh; text-decoration: none;">MLH Code of Conduct</a>
        </div>

      </span>
      <a class="desktop-only gold-link" v-bind:style="{ 'font-size': ((!$parent.$parent.showRegister) ? '3vh!important' : '2.5vmin') + '', 'margin-top': ((!$parent.$parent.showRegister) ? '0px' : '0px') }" href="/sponsor" target="_blank">
        <span style="font-family: 'Dagger Square'!important; color: white;">Interested in Sponsoring?</span>
      </a>
      <a class="mobile-only gold-link" v-bind:style="{ 'font-size': ((!$parent.$parent.showRegister) ? '6vmin!important' : '5.5vmin') + '', 'margin-top': ((!$parent.$parent.showRegister) ? '0px' : '0px') }" href="/sponsor" target="_blank">
        <span style="font-family: 'Dagger Square'!important; color: white;">Interested in Sponsoring?</span>
      </a>
    </div>

    <!-- Art, absolutely positioned.
        The :style tags used on these assets make the assets shift slightly with the mouse motion
                                  & the scroll, for a nice parallax effects -->
    <!--<img src="@/assets/landing_assets/foreground_cliff.svg" id="foreground-cliff"
      :style="{
          'margin-bottom': -(scrollPos / 85) - (mouseY / 55) + 'px',
          'margin-left': (mouseX / 55) - 50 + 'px'
        }"
      class="desert-asset">
    <img src="@/assets/landing_assets/cowboy.svg" id="cowboy"
      :style="{
          'margin-bottom': -(scrollPos / 55) - (mouseY / 55) + 'px',
          'margin-left': (mouseX / 55) + 'px'
        }"
      class="desert-asset">

    <img src="@/assets/landing_assets/midground_1.svg" id="midground-1"
      :style="{
          'margin-bottom': -(scrollPos / 30) - (mouseY / 45) + 'px',
          'margin-right': -(mouseX / 65) + 'px'
        }"
      class="desert-asset">
    <img src="@/assets/landing_assets/midground_2.svg" id="midground-2"
      :style="{
          'margin-bottom': -(scrollPos / 18) - (mouseY / 75) + 'px',
          'margin-right': -(mouseX / 85) + 'px'
        }"
      class="desert-asset">
    <img src="@/assets/landing_assets/midground_3.svg" id="midground-3"
    :style="{
          'margin-bottom': -(scrollPos / 13) + 'px',
          'margin-right': (mouseX / 85) - 40 + 'px'
        }"
      class="desert-asset">

    <img src="@/assets/landing_assets/background_mesa.svg" id="mesa"
      :style="{
          'margin-bottom': -(scrollPos / 10) + (mouseY / 65) + 'px',
          'margin-right': (mouseX / 75) + 'px'
        }"
      class="desert-asset">
    <img src="@/assets/landing_assets/background_mountains.svg" id="mountains"
      :style="{
          'margin-bottom': -(scrollPos / 7) + (mouseY / 45) + 'px',
          'margin-right': (mouseX / 65) - 60 + 'px'
        }"
      class="desert-asset">-->

      <!--<img src="@/assets/SunglassesPink.svg" id="sunglasses-pink-1"
        :style="{
            'margin-bottom': -(scrollPos / 85) - (mouseY / 55) + 'px',
            'margin-left': (mouseX / 55) - 50 + 'px'
          }"
        class="desert-asset">
      <img src="@/assets/SunglassesBlue.svg" id="sunglasses-blue-1"
        :style="{
            'margin-bottom': -(scrollPos / 55) - (mouseY / 55) + 'px',
            'margin-left': (mouseX / 55) + 'px'
          }"
        class="desert-asset">

      <img src="@/assets/cassettes.svg" id="cassettes-1"
        :style="{
            'margin-bottom': -(scrollPos / 30) - (mouseY / 45) + 'px',
            'margin-right': -(mouseX / 65) + 'px'
          }"
        class="desert-asset">
      <img src="@/assets/walkman2020.png" id="walkman-1"
        :style="{
            'margin-bottom': -(scrollPos / 18) - (mouseY / 75) + 'px',
            'margin-right': -(mouseX / 85) + 'px'
          }"
        class="desert-asset">
      <img src="@/assets/cassettes.svg" id="cassettes-2"
      :style="{
            'margin-bottom': -(scrollPos / 13) + 'px',
            'margin-right': (mouseX / 85) - 40 + 'px'
          }"
        class="desert-asset">

      <img src="@/assets/cassette2020.png" id="cassette-1"
        :style="{
            'margin-bottom': -(scrollPos / 10) + (mouseY / 65) + 'px',
            'margin-right': (mouseX / 75) + 'px'
          }"
        class="desert-asset">
      <img src="@/assets/keyboard.png" id="keyboard-1"
        :style="{
            'margin-bottom': -(scrollPos / 7) + (mouseY / 45) + 'px',
            'margin-right': (mouseX / 65) - 60 + 'px'
          }"
        class="desert-asset">-->


  </div>
</template>

<script>

export default {
  name: 'landing',
  data() {
    return {
      scrollPos: 0,
      mouseX: 0,
      mouseY: 0
    }
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    document.onmousemove = this.handleMouseMove;
  },
  methods: {
    handleScroll() {
      this.scrollPos = window.scrollY;
    },
    handleMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
    logout: function() {
      this.$parent.$parent.wrapper.userManager.logout();
      //        .then(() => {
      //        console.log("Logged out!");
      //      }).catch((err) => {
      //        console.error("Error logging out: ", err);
      //      })
      this.$parent.$parent.user = this.$parent.$parent.userInitialState();
      this.$router.push({ path: "/" });
    },
  }
}
</script>

<style scoped lang="scss">
@import '@/globalVars.scss';

.goes-retro {
  color: $gold;
  display: inline-block;
  font-family: Lazer84;
  font-size: 6vmin;
  transform: rotate(-5deg) translate(0%, -20%);
  letter-spacing: 1vmin;
  filter: drop-shadow(4px 4px $blue) drop-shadow(-1.5px -1.5px $blue)
}

.hmm {
  color: $gold!important;
  filter: none!important;
}

.img-box {
	position: absolute;
	background-size: contain;
	background-repeat: no-repeat;
	width: 40vh;
	max-width: 50vw;
	height: 40vh;
	max-height: 50vw;
	z-index: -1;
}

.headphones-orange {
  background-image: url(../assets/headphones-orange.svg);
  height: 60vh;
  width: 60vh;
}

.cassettes {
  background-image: url(../assets/cassettes.svg);
  width: 60vh;
  max-width: 80vw;
  height: 60vh;
  max-height: 80vw;

}

#apply-btn {
  font-size: 3vh;
  width: 300px;
  max-width: 80vw;
  @media only screen and (min-width: 560px) {
    font-size: 4vh;
  }
}

#landing-container {
  min-height: 100vh;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  padding-bottom: 20px;
  /*background: url('../assets/weirdShapes.svg');
  background-size: cover;
  background-position: center;*/
  /*background-color: $sand2;*/ /*#411743;*/
  position: relative;
}

#landing-container .back {
  /*background: $sand2;*/
  display: inline-block;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
  /*background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);*/
  //background: linear-gradient(0deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 100%); /* blue */
  /*background: linear-gradient(180deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 74%, rgba(65,23,67,0) 100%);*/
  //background-color: $sand2!important;
  //background: rgb(215,93,222);
  //background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);

  background: linear-gradient(0deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 95%); /* blue */

}

#logo-container {
  /*height: 130px;*/
  margin-top: 100px;
  img {
    height: 70%;
    padding: 0px 10px;
    @media only screen and (max-width: $md-bp) {
      height: 80%;
    }
  }
  #short-logo {
    margin-top: 20px;
    width: 25vw;
    height: auto;
    @media only screen and (max-width: $md-bp) {
      width: 50vw;
    }
  }
}

#landing-content-container {
  margin-top: 40px;
  font-size: 4vmax;
  z-index: 11;
  /*position: relative;*/
  color: white;

  p {
    /*@extend .outline;*/
    margin: 10px;
    font-family: Commando;
    color: white;
    filter: drop-shadow(2px 2px #92D4E7); // drop-shadow(-1.5px -1.5px #92D4E7);
    /*font-size: 8vh;*/
    letter-spacing: 1.5px;
  }
}

#mlh-trust-badge {
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: absolute;
  //left: 5px;
  left: 200px;
  top: 0;
  width: 10%;
  z-index: 10000;
}

#mlh-banner {
  width: 100%
}

.desert-asset {
  position: absolute;
  z-index: -1!important;
  /*max-width: 400px;*/
}

/* Note that for all positioning, we need to use 'vw' as our unit
          -- even vertical positioning!!
This way the assets will scale with the screen width, for mobile phones. */


#sunglasses-blue-1 {
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}

#sunglasses-pink-1 {
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}

#cassettes-1 {
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}

#cassettes-2 {
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}

#walkman-1 {
  width: 53%;
  bottom: 52vw;
  left: 3%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1000px) {
    width: 20%!important;
    bottom: 260px;
    max-width: 800px;
  }
}

#keyboard-1 {
  width: 83%;
  bottom: 22vw;
  right: -13%;
  transform: rotate(-30deg);
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1000px) {
    width: 40%!important;
    bottom: 260px;
    max-width: 800px;
  }
}

#cassette-1 {
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}



#foreground-cliff {
  width: 60%;
  /* Slappin' a max-width on this bad boy bc otherwise it looks huge on a big screen */
  max-width: 700px;
  bottom: 0px;
  left: 0px;
  z-index: 10;
}

#cowboy {
  z-index: 9;
  width: 13%;
  bottom: 22vw;
  left: 23%;
  /* Using this media selector to make sure the cowboy stays on the cliff, even with it's max-width */
  @media only screen and (min-width: 1150px) {
    bottom: 260px;
    max-width: 150px;
  }
}

#midground-1 {
  right: -20px;
  bottom: -5vw;
  z-index: 9;
  width: 85%;
}

#midground-2 {
  right: -30px;
  bottom: -1vw;
  z-index: 8;
  width: 85%;
}

#midground-3 {
  right: 0px;
  bottom: -6vw;
  z-index: 7;
}

#mesa {
  width: 30%;
  bottom: 8vw;
  right: 10%;
  z-index: 6;
}

#mountains {
  width: 120%;
  right: -170px;
  bottom: -16vw;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

sup {
  font-size: 14px;
}

#logout {
  color: $gold;
  position: absolute;
  top: 20px;
  right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

@media screen and (min-width: 768px) {
  #mlh-trust-badge {
    //left: 50px;
  }
}
</style>
