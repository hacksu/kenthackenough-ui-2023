
let ids = 0;
let styling = '';
class Sponsor {
  constructor(cfg) {
    Object.assign(this, {
      logo: false,
      name: false,
      link: false,
      style: {},
      scale: 1,
      id: ids++,
    });
    Object.assign(this, cfg);
    this.style = Object.assign(this.style || {}, {
      'background': 'center / contain no-repeat url(' + this.logo + ')',
      'display': 'inline-block',
      'transform': 'scale(' + this.scale + ')',
    })
    styling += `
#sponsorlogo-${this.id}:hover {
  transform: scale(${this.scale * 1.1})!important;
}
`
  }
}

import HacksuLogo from '@/assets/sponsors/Hacksu.svg'
let Hacksu = new Sponsor({
  //logo: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/816158/hacksu-logo.svg',
  logo: HacksuLogo,
  name: 'Hacksu',
  link: 'https://hacksu.com',
  scale: 0.65,
});

// import StickerMuleLogo from '@/assets/sponsors/StickerMule-Wide.svg'
// let StickerMule = new Sponsor({
//   logo: StickerMuleLogo,
//   name: 'Sticker Mule',
//   link: 'http://hackp.ac/mlh-stickermule-hackathons', //'https://www.stickermule.com/',
//   style: {
//     'border-radius': '2vh',
//     'background-color': '#FFFFFF',
//   },
// });

import GreenworksLabLogo from '@/assets/sponsors/greenworks_lab_logo.png'
let GreenworksLab = new Sponsor({
  logo: GreenworksLabLogo,
  name: 'GreenWorks Lab',
  link: 'https://ascic.aurora-schools.org/',
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

// import EchoArLogo from '@/assets/sponsors/echoAR.png'
// let EchoAr = new Sponsor({
//   logo: EchoArLogo,
//   name: 'EchoAr',
//   link: 'https://www.echoar.xyz/',
//   scale: 0.7,
// })

import CSLogo from '@/assets/sponsors/CSDepartment.svg'
let CSDepartment= new Sponsor({
  logo: CSLogo,
  name: 'Kent State Computer Science',
  link: 'https://www.kent.edu/cs',
});

import RSMLogo from '@/assets/sponsors/RSMLogo_transparent.png'
let RSM = new Sponsor({
  logo: RSMLogo,
  name: 'RSM Consulting',
  link: 'https://rsmus.com/',
  scale: 0.85,
});

import MLHLogo from '@/assets/sponsors/MLHLogo.svg'
let MLH = new Sponsor({
  logo: MLHLogo,
  name: 'Major Leaugue Hacking',
  link: 'https://mlh.io/',
  scale: 0.5,
});


export default [
  //Hacksu,
  [
    RSM,
    GoogleCloud,
    GreenworksLab,
  ],
  [
    Hacksu,
    MLH,
    // CSDepartment,
  ],
  // MLH,

]

document.head.insertAdjacentHTML("beforeend", `<style>${styling}</style>`);
