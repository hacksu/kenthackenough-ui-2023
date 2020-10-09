
class Sponsor {
  constructor(cfg) {
    Object.assign(this, {
      logo: false,
      name: false,
      link: false,
      style: {},
    });
    Object.assign(this, cfg);
    this.style = Object.assign(this.style || {}, {
      'background': 'center / contain no-repeat url(' + this.logo + ')',
      'display': 'inline-block',
    })
  }
}

import HacksuLogo from '@/assets/sponsors/Hacksu.svg'
let Hacksu = new Sponsor({
  //logo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/816158/hacksu-logo.svg',
  logo: HacksuLogo,
  name: 'Hacksu',
  link: 'https://hacksu.com',
});

import StickerMuleLogo from '@/assets/sponsors/StickerMule-Wide.svg'
let StickerMule = new Sponsor({
  logo: StickerMuleLogo,
  name: 'Sticker Mule',
  link: 'http://hackp.ac/mlh-stickermule-hackathons', //'https://www.stickermule.com/',
  style: {
    'border-radius': '2vh',
    'background-color': '#FFFFFF',
  },
});

import GoogleCloudLogo from '@/assets/sponsors/GoogleCloud-Wide.png'
let GoogleCloud = new Sponsor({
  logo: GoogleCloudLogo,
  name: 'Google Cloud',
  link: 'https://cloud.google.com/',
});

import CSLogo from '@/assets/sponsors/CSDepartment.svg'
let CSDepartment= new Sponsor({
  logo: CSLogo,
  name: 'Kent State Computer Science',
  link: 'https://www.kent.edu/cs',
});


export default [
  //Hacksu,
  [
    StickerMule,
    GoogleCloud,
  ],
  CSDepartment,

]
