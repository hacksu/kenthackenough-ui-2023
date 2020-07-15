<template>
  <!--<div id="mapframe" hidden>
    <div id="map" class="widget">
      <div class="info-container">
        <div class="split" style="">
          <span style="max-width: calc(100% - 20px); display: inline-block;">
            <h1 style="font-size: 6.5vh!important;">Where to Go</h1>
            <p>Due to COVID-19, Kent Hack Enough is going <span class="goes-retro">VIRTUAL</span></p>
            <p>1125 Risman Dr, Kent, OH 44242</p>
            <h3>Parking</h3>
            <p>KSU will not be ticketing over the weekend. The two parking lots closest to the library are the Visitor Lot right by the bus stop, and the R lot by Eastway.</p>
          </span>
        </div>


      </div>
    </div>-->

    <div id="powered-by" style="padding-top: 10px; padding-bottom: 10px;">
      <p id="powered-by-text" style="color: black; font-family: abel; font-weight: 900; opacity: 0.5;">POWERED BY</p>

      <a id="small-hacksu-logo" href="http://hacksu.com">
        <img style="opacity: 0.5;" id="powered-by-hacksu" src="@/assets/2019-hacksu-color.svg">
      </a>

      <!--<a id="small-mlh-logo" href="https://mlh.io">
        <img style="opacity: 0.5;" id="powered-by-mlh" src="@/assets/mlh-logo.svg">
      </a>-->
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '@/globalVars.scss';

  .goes-retro {
    color: $gold;
    display: inline-block;
    font-family: Lazer84;
    font-size: 6.5vmin;
    letter-spacing: 0.7vmin;
    text-align: center;
    filter: drop-shadow(2px 2px $blue) drop-shadow(-1.5px -1.5px $blue)
  }

  #powered-by-text {
    color: $black-overwrite;
    font-weight: bold;
    font-family: Commando;
    text-align: center;
    font-size: 20px;
    margin-top: 0px;
    margin-bottom: 10px;
  }

  #powered-by-hacksu {
    float: left;
    width: 50%;
    height: 90px;
  }

  #powered-by-mlh {
    float: right;
    width: 50%;
    height: 50px;
    margin-top: 17px;
  }

  #directions {
    text-align: left;
    flex: 1 1 500px;
    padding-right: 2rem;
  }

  #map {
    color: white;
  }

  #mapframe {
    background: rgb(215,93,222);
    background: linear-gradient(90deg, rgba(215,93,222,1) 0%, rgba(245,119,49,1) 100%);
  }

  .info-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  #mapIframe {
    flex: 1 1 500px;
    border-radius: 2%;
  }

  .widget {
    padding: 1rem;
  }

  p {
    font-size: 20px;
  }

  h3 {
    font-size: 22px;
  }

  .widget {
    padding: 20px;
  }

  .info-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .split {
    width: 100%;
    z-index: 1;
    text-align: left
  }

  @media screen and (min-width: 768px) {
    .widget {
      padding: 100px 100px 100px 100px;
    }

    .split {
      width: 50%;
    }

    #powered-by {
      display: flex;
      flex-direction: row;
      min-height: 50px;
      padding-left: 50px;
      background-color: $sand2;
      filter: brightness(90%);
    }

    #powered-by-text {
      font-size: 18px;
      margin: auto 0;
    }

    #powered-by-hacksu {
      width: 100%;
      height: 65px;
    }

    #powered-by-mlh {
      width: 100%;
      height: 65px;
      margin-top: 0;
    }

    #small-hacksu-logo {
      width: 150px;
    }

    #small-mlh-logo {
      width: 90px;
    }
  }

  @media screen and (max-width: 1199px) {
    .split {
      width: 100%;
    }
  }
</style>

<script>
export default {
  name: "Map",
  data() {
    return {};
  }
};
</script>
