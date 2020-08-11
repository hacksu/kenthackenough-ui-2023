<template>
  <div id="sponsors" style="margin-top: -53px">
    <img src="@/assets/KHE_AI_Square1.svg">
    <h1 style="font-size: 7.5vmin!important; margin-top: -6vh; font-family: 'Dagger Square'!important; color: white">SPONSORSHIP</h1>

    <p style="font-family:'Dagger Square'; color:#f3ea5f; font-size: 3vmin; max-width: 1200px; margin-left: auto; margin-right: auto;"> Below are the following three tiers for Kent Hack Enough 2020! We look forward to working with you for the 9th year of KHE! Please reach out to us if you are interested in sponsoring
    with an amount that is not posted below.</p>
    <div class="center">
        <button class="contact" style="cursor: pointer; width: 250px; max-width: 60vw;"><a style="text-decoration: none" href="mailto:trentan@khe.io?subject=KHE Sponsorship Interest">Contact Us</a></button>
    </div>
    <span style="display: block; margin-top: -4%; color: white;">trentan@khe.io, kaushik@khe.io</span>


    <div id="container">
        <div id="tier1" class="tier" v-on:click="tier1()">

          <div id="colorTier1">
              <!--<img src="@/assets/images/cassetteTape.png">-->
              <div style="transform: scale(0.5); height: 160px; width: calc(100% - 40px); padding: 20px; background-size: contain; background-position: center; background-repeat: no-repeat;" id="cassette-img">

              </div>
         </div>
            <h2> Cassette Tape</h2>
            <p class="specialText2"> $250 </p>
            <div class="center">
                <button class="open">Learn more!</button>
            </div>


        </div>

        <div id="tier2" class="tier" v-on:click="tier2()">
          <div id="colorTier2">
              <!--<img src="@/assets/images/sunglasses.png">-->
              <div style="transform: scale(0.6); height: 160px; width: calc(100% - 40px); padding: 20px; background-size: contain; background-position: center; background-repeat: no-repeat;" id="sunglasses-img">

              </div>
         </div>

            <h2> Sunglasses </h2>
            <p class="specialText2"> $500 </p>
            <div class="center">
                <button class="open">Learn more!</button>
            </div>

        </div>

        <div id="tier3" class="tier" v-on:click="tier3()">
            <div id="colorTier3">
                <!--<img src="@/assets/images/keyboard.png">-->
                <div style="transform: scale(0.85); height: 160px; width: calc(100% - 40px); padding: 20px; background-size: contain; background-position: center; background-repeat: no-repeat;" id="keyboard-img">

                </div>
           </div>

            <h2> Keyboard </h2>
            <p class="specialText2"> $1000 </p>
            <div class="center">
                <button class="open">Learn more!</button>
            </div>

        </div>

        <div id="detailsTier1" style="display:none" v-on:click="buttonClose1($event)">
            <div id="contextTier1" class="contextTier">
                <div class="center">
                    <h2> Cassette Tape </h2>
                </div>
                <p class="specialText">Logo on website</p>
                <p> Plus the following perks! </p>
                <ul>
                    <li>Ability to send virtual mentors </li>
                    <li>Thanked at opening ceremonies</li>
                    <li>Judge at final hacks</li>
                    <li>Resume book after event</li>
                </ul>
                <div class="center">
                    <button class="close" v-on:click="buttonClose1()"> Close</button>
                </div>
            </div>

        </div>

        <div id="detailsTier2" style="display:none" v-on:click="buttonClose2($event)">
            <div id="contextTier2" class="contextTier">
                <div class="center">
                    <h2> Sunglasses </h2>
                </div>
                <p class="specialText">Run a workshop</p>
                <p> Plus the following perks! </p>
                <ul>
                    <li>Ability to send virtual mentors </li>
                    <li>Thanked at opening ceremonies</li>
                    <li>Judge at final hacks</li>
                    <li>Logo on website</li>
                    <li>Resume book after event</li>
                    <li>Resume book before event </li>
                    <li>Brand mention in post before the event</li>
                    <li>Company dedicated chat room</li>
                </ul>
                <div class="center">
                    <button class="close" v-on:click="buttonClose2()"> Close</button>
                </div>
            </div>

        </div>

        <div id="detailsTier3" style="display:none" v-on:click="buttonClose3($event)">
            <div id="contextTier3" class="contextTier">
                <div class="center">
                    <h2> Keyboard </h2>
                </div>
                <p class="specialText">Keynote speaker & One-on-one recruitment</p>
                <p> Plus the following perks! </p>
                <ul>
                    <li>Ability to send virtual mentors </li>
                    <li>Thanked at opening ceremonies</li>
                    <li>Judge at final hacks</li>
                    <li>Logo on website</li>
                    <li>Run a workshop</li>
                    <li>Resume book after event</li>
                    <li>Resume book before event </li>
                    <li>Brand mention in post before the event</li>
                    <li>Company dedicated chat room</li>
                    <li>Brand promo video during opening ceremonies provided by company</li>
                    <li>Brand challenge</li>
                </ul>
                <div class="center">
                    <button class="close" v-on:click="buttonClose3()"> Close</button>
                </div>

            </div>

        </div>
    </div>

  </div>
</template>

<script>
  import cassette from '../assets/cassette2020.png';
  import sunglasses from '../assets/SunglassesPink.svg';
  import keyboard from '../assets/keyboard.png';
  export default {
    name: 'Map',
    computed: {

    },
    methods: {
      tier1: function() {
          var x = document.getElementById("detailsTier1");
          if (x.style.display === "none") {
          x.style.display = "block";
          } else {
              x.style.display = "none";
          }
      },
      buttonClose1: function(evt) {
          if (evt && evt.target.id.indexOf("detailsTier") >= 0) {
          } else if (evt) {
            return false;
          }
          var x = document.getElementById("detailsTier1");
          x.style.display = "none";
      },
      tier2: function(){
          var x = document.getElementById("detailsTier2");
          if (x.style.display === "none") {
          x.style.display = "block";
          } else {
              x.style.display = "none";
          }
      },
      buttonClose2: function(evt) {
          if (evt && evt.target.id.indexOf("detailsTier") >= 0) {
          } else if (evt) {
            return false;
          }
          var x = document.getElementById("detailsTier2");
          x.style.display = "none";
      },
      tier3: function(){
          var x = document.getElementById("detailsTier3");
          if (x.style.display === "none") {
          x.style.display = "block";
          } else {
              x.style.display = "none";
          }
      },
      buttonClose3: function(evt) {
          if (evt && evt.target.id.indexOf("detailsTier") >= 0) {
          } else if (evt) {
            return false;
          }
          var x = document.getElementById("detailsTier3");
          x.style.display = "none";
      },
      nothing: function() {
        // do nothing. ignore clicks
      },
    },
    mounted() {
      document.getElementById("cassette-img").style.backgroundImage = `url(${cassette})`;
      document.getElementById("sunglasses-img").style.backgroundImage = `url(${sunglasses})`;
      document.getElementById("keyboard-img").style.backgroundImage = `url(${keyboard})`;
      this.$parent.wrapper.sponsorSource.getSponsors()
        .then((data) => {
          this.sponsors = data;
          console.log("SPONSORS", this.sponsors)
        })
        .catch(console.error);
    },
    data() {
      return {
        sponsors: []
      };
    },
  };




</script>

<style scoped lang="scss">
  @import '@/globalVars.scss';

  #sponsors {
    padding: 100px 5vw 80px 5vw;
    padding-top: 50px;
    margin: 0px;
    text-align: left;
    background-image: linear-gradient(to right,#D75DDE , #F47732);
    text-align: center;
    justify-items: center;
  }


#container{
    //display: flex;
    //flex-direction: row;
    max-width: 90vw;
    margin-left: auto;
    margin-right: auto;
    overflow: clip;
    text-align: center;
}

.tier {
    //display: flex;
    display: inline-block!important;
    //flex-direction: column;
    //flex: 1;
    margin: 20px;
    text-align: center;
    color: black;
    height: 420px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    background-color: white;
    transition: transform .25s,filter .25s,-webkit-transform .25s,-webkit-filter .25s;
    cursor: pointer;
    max-width: 300px;
    min-width: 300px;
    width: 20%;
}

#tier1{
    display: block;
    border-radius: 0.25rem;
    margin-top: 5%;
    background-color: #92D4E7;
}

#tier1:hover {
    transform: scale(1.1);
    filter: brightness(120%);
}


#tier2{
    display: block;
    border-radius: 0.25rem;
    margin-top: 5%;
    //margin-left: 5%;
    //margin-right: 5%;
    background-color: #F3EA5F;

}

#tier2:hover {
    transform: scale(1.1);
    filter: brightness(120%);
}


#tier3{
    display: block;
    border-radius: 0.25rem;
    background-color: #70C86B;
    margin-top: 5%;
}

#tier3:hover {
    transform: scale(1.1);
    filter: brightness(120%);
}

p.specialText {
    color: rgb(79, 27, 223);
    font-style: italic;
    font-family: 'Dagger Square';
}

p.specialText2 {
    color: rgb(79, 27, 223);
    font-family: 'Dagger Square';
    font-size: 45px;
}

p{
    margin: 0;
}

h1{
    text-align: center;
}

h2{
    font-family: Lazer84;
    letter-spacing: .5vmin;
}


img{
    height: 200px;
    width: 200px;
}


button{
    margin: 5%;
    background-color: rgb(207, 43, 194);
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    border: 2px solid rgb(207, 43, 194);
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    transition: .3s;
    font-family: abel;
}

a {
  text-decoration: none;
  color: white;
}

button:hover{
    opacity: 1
}

#detailsTier1, #detailsTier2, #detailsTier3{
    font-family: 'Dagger Square';
    border-radius: 0.25rem;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0px;
    top: 0px;
    width: 100vw; /* Full width */
    height: 100vh; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.contextTier {
  border: 1px solid #888;
  max-width: 80vh; /* Could be more or less, depending on screen size */
  max-width: 400px;
  width: 90vw;
  height: 60%;
  text-align: left;
  border-radius: 0.25em;
}

#contextTier1{
    background-color: #92D4E7;
    margin: 20vh auto; /* 15% from the top and centered */
    padding: 20px;

}

#contextTier2{
    background-color: #F3EA5F;
    margin: 20vh auto; /* 15% from the top and centered */
    padding: 20px;
}

#contextTier3{
    background-color: #70C86B;
    margin: 20vh auto; /* 15% from the top and centered */
    padding: 20px;
}

.close {
    color: rgb(255, 255, 255);
    float: right;
    font-size: 2vh;
    font-weight: bold;
    max-width: 60vw;
    width: 200px;
}

.close:hover,
.close:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
}

.open {
    color: rgb(255, 255, 255);
    float: right;
    font-size: 2.5vh;
    font-weight: bold;
    max-width: 60vw;
    width: 200px;
}

.open:hover,
.open:focus {
    color: white;
    text-decoration: none;
    cursor: pointer;
}

.contact {
    color: rgb(255, 255, 255);
    float: right;
    font-size: 28px;
    font-weight: bold;
    margin-top: 3vh;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

/*
@font-face {
    font-family: abel;
    src: url("./assests/fonts/abel-regular.ttf");
}

@font-face {
    font-family: Lazer84;
    src: url("./assests/fonts/Lazer84.ttf");
}

@font-face {
    font-family: 'Dagger Square';
    src: url("./assests/fonts/DAGGERSQUARE.otf");
}*/
</style>
