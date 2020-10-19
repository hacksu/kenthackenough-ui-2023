<template>
  <div id="schedule"  style="margin-top: -53px; min-height: calc(100vh - 80px - 50px);">
    <br><br><br><br>
   <h1 style="font-size: 7.5vmin!important; margin-top: -6vh; font-family: 'Dagger Square'!important; color: white">SCHEDULE</h1>
   <div class="flex-schedule">
     <div class="day" v-for="day in days" v-bind:id="day.name" v-bind:key="day.name">
       <h2>{{ day.relative }}</h2>
       <h3>{{ day.humanDate }}</h3>
       <div class="event" v-for="event in day.events" v-bind:key="event.id">
         <div v-if="event.nextEvent" class="next holder">

           <span class="name">{{ event.title }}</span><br>
           <span class="time">{{ event.start }}</span>
           <span v-if="event.location != ''"> | </span>
           <span class="location">{{ event.location }}</span>
           <span class="description">{{ event.description }}</span>
         </div>
         <div v-else class="holder">
           <span class="time">{{ event.start.toLocaleTimeString('en-US', { timeStyle: 'short' }) }} - {{ event.end.toLocaleTimeString('en-US', { timeStyle: 'short' }) }}</span>
           <!--<span class="name">{{ event.title }}</span><br>
           <span class="time">{{ event.start }}</span>
           <span v-if="event.location != ''"> | </span>
           <span class="location">{{ event.location }}</span>
           <span class="description">{{ event.description }}</span>-->
         </div>

       </div>
     </div>

     <!--
     <div class="day" id="friday">
       <h2>Friday, September 27th</h2>
         <div class="event" v-for="event in schedule.fridayEvents" v-bind:key="event.id">
           <span class="name">{{ event.title }}</span><br>
           <span class="time">{{ event.start }}</span>
           <span v-if="event.location != ''"> | </span>
           <span class="location">{{ event.location }}</span>
           <span class="description">{{ event.description }}</span>
         </div>
     </div>

     <div class="day" id="saturday">
       <h2>Saturday, September 28th</h2>
         <div class="event" v-for="event in schedule.saturdayEvents" v-bind:key="event.id">
           <span class="name">{{ event.title }}</span><br>
           <span class="time">{{ event.startTime }}</span>
           <span v-if="event.location != ''"> | </span>
           <span class="location">{{ event.location }}</span>
           <span class="description">{{ event.description }}</span>
         </div>
     </div>

     <div class="day" id="sunday">
       <h2>Sunday, September 29th</h2>
         <div class="event" v-for="event in schedule.sundayEvents" v-bind:key="event.id">
           <span class="name">{{ event.title }}</span><br>
           <span class="time">{{ event.startTime }}</span>
           <span v-if="event.location != ''"> | </span>
           <span class="location">{{ event.location }}</span>
           <span class="description">{{ event.description }}</span>
         </div>
     </div>
   -->


   </div>
  </div>
</template>

<script>
//import schedule from '../schedule.json';

var weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

let relativeDays = [
  'Today',
  'Tomorrow',
];

function getOrdinalNum(n) {
  return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '');
}

function getDayOfYear(dateObject=false) {
  var now = dateObject || new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  return day;
}

let dayTemplate = function(day) {
  let name = weekday[day.getDay()];
  let humanDate = `${month[day.getMonth()]} ${getOrdinalNum(day.getDate())}`;
  return {
    name: name,
    date: day,
    readable: `${name}, ${humanDate}`,
    humanDate: humanDate,
    events: [],
  }
}

export default {
  main: 'Main',
  data() {
    return {
      //schedule
      daysold: [],
      showPast: true,
      data: {},
    }
  },
  computed: {
    days() {
      return this.getDays();
    },
  },
  methods: {
    getDays(changed=false) {
      if (changed) {
        //this.data = changed;
      }
      if (!this.data.events) {
        return;
      }
      let now = new Date();
      let dayOfYear = getDayOfYear();
      let showPast = this.showPast || false;
      let days = this._days || {};
      let first = true;
      let resets = {};
      for (let x of this.data.events.filter(o => showPast || o.end >= now)) {
        if (!days[x.dayIndex]) {
          let day = x.start;
          let indx = x.dayIndex
          let day2 = dayTemplate(x.dayDate);
          day2.ofYear = getDayOfYear(day2.date);
          let diff = day2.ofYear - dayOfYear;
          if (diff > relativeDays.length) {
            day2.relative = day2.name;
          } else {
            day2.relative = relativeDays[diff];
          }
          days[x.dayIndex] = day2;
        }
        let day = days[x.dayIndex];
        if (changed) {
          if (!resets[x.dayIndex]) {
            resets[x.dayIndex] = true;
            day.events = [];
          }
          day.events.push(x);
        }
      }
      for (let i in days) {
        days[i].events = days[i].events.filter(o => showPast || o.end >= now);
        for (let x of days[i].events) {
          if (first) {
            first = false;
            this.nextEvent = x;
            x.nextEvent = true;
          }
        }
      }
      this._days = days;
      console.log(this._days);
      return this._days;
    },
    async fetchEvents() {
      if (this.loadingData) {
        //this.parseEvents();
        return;
      }
      this.loadingData = true;
      let data = await (await fetch('https://api.khe.io/v1.0/events')).json();
      for (let x of data.events) {
        x.start = new Date(x.start);
        x.end = new Date(x.end);
        let day = x.start;
        let indx = ([day.getMonth()+1, day.getDate(), day.getFullYear()]).join('-');
        x.dayDate = day;
        x.dayIndex = indx;
      }
      this.data = data;
      //this._computedWatchers.days.getter(true);
      this.getDays(true);
      //this.$forceUpdate();
      //this.$computed.days(true);
      //this.parseEvents();
      let _this = this;
      setTimeout(function() {
        _this.loadingData = false;
      }, 2000)
    },
    parseEvents(past=true) {
      if (true) {
        return this.$forceUpdate();
      }
      let days = {};
      let data = this._data;
      console.log(data);
      let dayTemplate = function(day) {
        let name = weekday[day.getDay()];
        let humanDate = `${month[day.getMonth()]} ${getOrdinalNum(day.getDate())}`;
        return {
          name: name,
          date: day,
          readable: `${name}, ${humanDate}`,
          humanDate: humanDate,
          events: [],
        }
      }
      let now = new Date().getTime();
      let dayOfYear = getDayOfYear();
      let first = true;
      for (let x of data.events.filter(o =>
        past || new Date(o.end).getTime() >= now
      )) {
        x.start = new Date(x.start);
        x.end = new Date(x.end);
        if (first) {
          first = false;
          this.nextEvent = x;
          x.nextEvent = true;
        }
        let day = x.start;
        let indx = ([day.getMonth()+1, day.getDate(), day.getFullYear()]).join('-');
        if (!days[indx]) {
          let day2 = dayTemplate(day);
          day2.ofYear = getDayOfYear(day2.date);
          let diff = day2.ofYear - dayOfYear;
          if (diff > relativeDays.length) {
            day2.relative = day2.name;
          } else {
            day2.relative = relativeDays[diff];
          }
          days[indx] = day2;
        }
        days[indx].events.push(x);
        //if (!days[day.get])
      }
      console.log(days);
      //this.days = Object.values(days);
      //this.loop();
      console.log(this);
      console.log(this.days);
      this.$forceUpdate();
    },
    getNextMessage() {
      if (this.nextEvent) {
        let evt = this.nextEvent;
        let now = new Date();
        let remainingStart = now - evt.start;
        let remainingEnd = now - evt.end;
        //console.log(evt);
        //console.log(remainingStart);
        //evt.nextMessage = String(remainingStart);
      } else {
        //evt.nextMessage = '';
      }

    },
    loop() {
      //this.getNextMessage();
      let now = new Date();
      if (now - (this.lastFetch || 0) >= 60000) {
        this.lastFetch = now;
        this.fetchEvents();
      }
    },
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchEvents'
  },
  created() {
    this.fetchEvents();

  },
  mounted() {
    let _this = this;
    this.autoUpdate = setInterval(_this.loop, 1000);
  },
  beforeUnmount() {
    if (this.autoUpdate) {
      clearInterval(this.autoUpdate);
      delete this.autoUpdate;
    }
  }
};
</script>

<style scoped lang="scss">
  @import '@/globalVars.scss';

  #schedule {
    padding: 100px 5vw 80px 5vw;
    padding-top: 50px;
    margin: 0px;
    text-align: left;
    background-image: linear-gradient(to right,#D75DDE , #F47732);
    text-align: center;
    justify-items: center;
  }

  p{
      margin: 0;
  }

  h1, h2, h3 {
      text-align: center;
  }

  h2 {
    font-size: 5vmin;
  }

  h3 {
    font-size: 3vmin;
    font-weight: normal;
  }

  .day {
    max-width: 80vw;
    text-align: center;
    margin-left: auto;
    margin-right: auto;

    padding: 2vh;
    margin-bottom: 4vh;
    h2 {
      margin-bottom: 0px;
      color: white;
    }
    h3 {
      margin-top: 0px;
      color: white;
    }
    .event {
      .holder {
        background-color: white;
        border-radius: 2vh;
        padding: 2vh;
        margin-bottom: 1vh;
      }
      .next {
        display: inline-block;
        background-color: red;
        border-radius: 2vh;
        padding: 2vh;
        margin-bottom: 2vh;
      }
    }
  }

  /*
  #schedule {
    padding: 10px 15vw;
    background-color: $sand;
    text-align: left;
  }

  .event {
    margin-bottom: 1.5em;
  }

  div.day {
    width: 100%;
    padding-bottom: 1em;
  }

  div span {
    font-size: 1.2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  body {
    padding: 0;
    margin: 0;
    margin-bottom: 200px;
  }

  @media only screen and (min-width: 900px) {
    schedule {
      padding: 2rem 6rem;
      background-color: $sand;
    }

    .flex-schedule {
      display: flex;
      flex-wrap: wrap;
    }

    .day + .day {
      padding-left: 2%;
    }

    div.day {
      text-align: left;
      width: 32%;
      font-size: 1.2em;
    }

    h2 {
      font-size: 1.8em;
      font-weight: bold;
    }
  }*/
</style>
