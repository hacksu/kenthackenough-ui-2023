<template>
  <div id="landing-container" class="landing" style="margin-top: -53px">
    <div class="back" style="margin-top: 53px">
      <div class="squiggly" style="opacity: 0.02"></div>
    </div>

    <!-- <div class="img-box cassettes" style="background-position-y: 5vh; background-position-x: -10vh; left: 0px; bottom: 0px;"></div>
    <div class="img-box headphones-orange" style="background-position-y: 5vh; background-position-x: -12vh; right: 0px; top: 0px; transform: rotate(-5deg) scaleX(-1);"></div> -->

    <a
      v-if="$parent.$parent.showMLH"
      id="mlh-trust-badge"
      href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
      target="_blank"
    >
      <img
        id="mlh-banner"
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
        alt="Major League Hacking 2020 Hackathon Season"
      />
    </a>

    <div id="logo-container">
      <!--<img src="@/assets/goldflourish.png" class="flipped desktop-only">
      <img src="@/assets/goldshortlogo.png">
      <img src="@/assets/goldflourish.png" class="desktop-only">
      <br>
      <img src="@/assets/goldlonglogo.png" id="short-logo">-->
      <img src="@/assets/KHE2021_Logo.png" id="short-logo" />
      <br />
      <h2 class="anniversary" style="">10th Anniversary</h2>
      <h2 class="kenthackenough">Kent Hack Enough</h2>
    </div>

    <div id="landing-content-container">
      <!-- <p class="date desktop-only" style="font-size: 7vh;">OCTOBER 23<sup style="font-size: 4vh">rd</sup>-24<sup style="font-size: 4vh">th</sup></p>
      <p class="date mobile-only" style="font-size: 5vh;">OCTOBER 23<sup style="font-size: 4vh">rd</sup>-24<sup style="font-size: 4vh">th</sup></p> -->
      <p class="date">December 4th-5th</p>
      <!-- <p v-if="$parent.$parent.showSchedule" class="hmm" style="font-size: 5vh; font-family: 'Dagger Square'!important;"><a class="hmm" style="display: inline-block; cursor: pointer; text-decoration: none;" href="/schedule">CHECK OUT THE SCHEDULE</a></p> -->
      <p
        hidden
        title="The Event has already occured"
        style="
          font-size: 5vh;
          max-width: 800px;
          width: 80vw;
          margin-left: auto;
          margin-right: auto;
        "
      >
        REGISTRATION FOR KENT HACK ENOUGH 2020 IS CLOSED
      </p>
      <!--<p class="hmm" style="font-size: 5vh; font-family: 'Dagger Square'!important;"><span style="display: inline-block; cursor: pointer;" onclick="document.getElementById('faq-scrollto').click(); setTimeout(function() { let a = document.getElementsByClassName('faqModule')[2]; if (a.lastChild.nodeType != 1) { a.click(); } }, 250)">HOSTED VIRTUALLY</span></p>-->
      <span v-if="$parent.$parent.showRegister">
        <router-link
          tag="button"
          :to="{ name: 'register' }"
          id="apply-btn"
          class="register-now"
          v-if="$parent.$parent.user._id == ''"
        >
          Register Now!
        </router-link>
        <router-link
          tag="button"
          :to="{ name: 'apply' }"
          id="apply-btn"
          class="apply-now"
          v-else-if="$parent.$parent.user._id == ''"
        >
          Apply now!
        </router-link>
        <div style="font-size: initial !important; margin-top: 20px">
          <a
            href="https://mlh.io/code-of-conduct/"
            target="_blank"
            style="
              font-weight: bold;
              opacity: 0.75;
              color: black;
              font-size: 2vh;
              text-decoration: none;
            "
            >MLH Code of Conduct</a
          >
        </div>
      </span>
      <!-- <a class="desktop-only gold-link" v-bind:style="{ 'font-size': ((!$parent.$parent.showRegister) ? '3vh!important' : '2.5vmin') + '', 'margin-top': ((!$parent.$parent.showRegister) ? '0px' : '0px') }" href="/sponsor" target="_blank">
        <span style="font-family: 'Dagger Square'!important; color: white;">Interested in Sponsoring?</span>
      </a>
      <a class="mobile-only gold-link" v-bind:style="{ 'font-size': ((!$parent.$parent.showRegister) ? '6vmin!important' : '5.5vmin') + '', 'margin-top': ((!$parent.$parent.showRegister) ? '0px' : '0px') }" href="/sponsor" target="_blank">
        <span style="font-family: 'Dagger Square'!important; color: white;">Interested in Sponsoring?</span>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "landing",
  data() {
    return {
      scrollPos: 0,
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
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
    logout: function () {
      this.$parent.$parent.wrapper.userManager.logout();
      //        .then(() => {
      //        console.log("Logged out!");
      //      }).catch((err) => {
      //        console.error("Error logging out: ", err);
      //      })
      this.$parent.$parent.user = this.$parent.$parent.userInitialState();
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';


// .landing {
//   text-align: center;
//   margin-left: auto;
//   margin-right: auto;
//   height: 100vh;
//   width: 100vw;
// }

.landing .back {
  // background: linear-gradient(45deg, #ffecb8, #ffe499 95%);
  @include bg-primary;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  overflow: hidden;
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

#apply-btn {
  width: 400px;
  max-width: 80vw;
  // font-family: "Buba-Shadow";
  // color: #8ae87b;
  font-size: 3vmax;
  border: none;
  background: none;
  cursor: pointer;
  &.apply-now:after {
    content: "Apply now!";
  }
  &.register-now:after {
    content: "Register Now!";
  }
  &:after {
    left: 0px;
    width: 100%;
    position: absolute;
    font-family: "Buba-Outline";
    color: #36355e;
  }
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

// #landing-container .back {
//   /*background: $sand2;*/
//   display: inline-block;
//   top: 0px;
//   left: 0px;
//   height: 100%;
//   width: 100%;
//   z-index: -1;
//   position: absolute;
//   /*background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);*/
//   //background: linear-gradient(0deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 100%); /* blue */
//   /*background: linear-gradient(180deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 74%, rgba(65,23,67,0) 100%);*/
//   //background-color: $sand2!important;
//   //background: rgb(215,93,222);
//   //background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);

//   background: linear-gradient(0deg, rgba(0,84,224,1) 0%, rgba(65,23,67,1) 95%); /* blue */

// }

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
  z-index: 11;
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
  width: 100%;
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

</style>
