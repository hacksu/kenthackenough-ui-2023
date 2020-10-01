
class Sponsor {
  constructor(cfg) {
    Object.assign(this, cfg);
  }
}

import HacksuLogo from '@/assets/sponsors/Hacksu.svg'
let Hacksu = new Sponsor({
  //logo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/816158/hacksu-logo.svg',
  logo: HacksuLogo,
  name: 'Hacksu',
  link: 'https://hacksu.com',
});


export default [
  //Hacksu,
  

]
