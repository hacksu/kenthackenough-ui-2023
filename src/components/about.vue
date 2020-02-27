<template>
<div id="about-container">
  <div id="header-container">
    <span style="font-size: 9vmin; margin-bottom: 0px;">KENT HACK ENOUGH</span><br>
    <span class="goes-retro" style="transform: rotate(-5deg) translate(90%, -0%)">GOES RETRO</span>
  </div>
  <div class="image-box2 desktop-only">

  </div>
  <div id="about-content-container">
    <img style="max-height: 40vh;" src="@/assets/keyboard.png">
    <div id="about-text-container" style="font-size: 5vmin; transform: scale(1);">
       Kent Hack Enough is ready to blast to the past! Come join us at this totally tubular event as we work together to make outstanding projects!<br><br>
    </div>
  </div>
  <div id="colored-text-container">
    This is our 9th KHE! Whether you're <b>totally new</b> to tech & design or a <b>seasoned pro</b>, come spend a weekend making something great with us!
  </div>
</div>

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/globalVars.scss';

.goes-retro {
  color: $gold;
  display: inline-block;
  font-family: Lazer84;
  font-size: 5vmin;
  transform: rotate(-5deg) translate(0%, -20%);
  letter-spacing: 1vmin;
  filter: drop-shadow(4px 4px $blue) drop-shadow(-1.5px -1.5px $blue)
}

.image-box2 {
  background-position: 0vw 0vh;
  right: 5vw;
  position: absolute;
  background-image: url("../assets/SunglassesPink.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 25vh;
  max-width: 35vmax;
  height: 40vh;
  max-height: 50vw;
  z-index: 0;
  margin-top: -15vh;
  transform: rotate(-5deg);
  @media only screen and (max-width: $lg-bp3) {
    display: none;
  }
}

#header-container {
  width: 70%;
  margin-top: 100px;
  margin-left: 5vw;
  padding-left: 5vw;
  text-align: left;
  img {
    height: 8vw;
    margin-right: 1vw;
  }
}
#about-container {
  min-height: 100vh;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  padding-bottom: 20px;
  background: rgb(215,93,222);
  background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);
  position: relative;
  color: $black-overwrite;
  font-family: Commando;
}
#about-content-container {
  margin: 60px 10vw;
  margin-top: 15px;
  display: flex;
  @media only screen and (max-width: $lg-bp2) {
    flex-flow: column;
  }
  // height: 100%;
  img {
    width: 60vw;
    align-self: center;
  }
  justify-content: space-between;
}

#about-text-container {
  min-height: 200px;
  font-size: 30px;
  text-align: justify;
  padding: 2.5vw;
  line-height: 50px;
  margin-left: 5vw;
  color: $light-blue;
  @media only screen and (max-width: $lg-bp) {
    margin-left: 0vw;
    font-size: 20px;
    line-height: 30px;
  }
}
#colored-text-container {
  background: $gold;
  box-shadow: 10px 10px 0px $blue;
  font-size: 24px;
  text-align: left;
  color: $dark-blue;
  padding:  20px 5vw;
  margin: 0px 15vw 100px;
  @media only screen and (max-width: $lg-bp) {
    font-size: 18px;
  }
}
</style>
