
class Sponsor {
  constructor(cfg) {
    Object.assign(this, {
      logo: false,
      name: false,
      link: false,
      style: {},
    });
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

import StickerMuleLogo from '@/assets/sponsors/StickerMule.svg'
let StickerMule = new Sponsor({
  logo: StickerMuleLogo,
  name: 'Sticker Mule',
  link: 'https://www.stickermule.com/',
  style: {
    'border-radius': '2vh',
    'background-color': '#FFFFFF',
  },
});


export default [
  //Hacksu,
  StickerMule,

]
