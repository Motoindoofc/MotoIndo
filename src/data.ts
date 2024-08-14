/** @format */

import { StaticImageData } from 'next/image';

import serviceIcon1 from '@/assets/icons/service-1-icon.svg';
import serviceIcon2 from '@/assets/icons/service-2-icon.svg';
import serviceIcon3 from '@/assets/icons/service-3-icon.svg';
import serviceIcon4 from '@/assets/icons/service-4-icon.svg';
import serviceIcon5 from '@/assets/icons/service-5-icon.svg';
import serviceImage1 from '@/assets/images/service-1-img.jpg';
import serviceImage2 from '@/assets/images/service-2-img.jpg';
import serviceImage3 from '@/assets/images/service-3-img.png';
import serviceImage4 from '@/assets/images/service-4-img.jpg';
import serviceImage5 from '@/assets/images/service-5-img.jpg';

export interface TServiceDetails {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

export const serviceLists = [
  {
    id: 1,
    image: serviceIcon1,
    title: "Penyedia Radio HT",
  },
  {
    id: 2,
    image: serviceIcon2,
    title: "Instalasi Radio HT",
  },
  {
    id: 3,
    image: serviceIcon3,
    title: "Integrasi Sistem",
  },
  {
    id: 4,
    image: serviceIcon4,
    title: "Reparasi & Perawatan",
  },
  {
    id: 5,
    image: serviceIcon5,
    title: "Radio Ponsel",
  },
];

export const serviceDetails = [
  {
    id: 1,
    image: serviceImage1,
    title: "Penawaran terbaik untuk produk original Motorola",
    description: `Memenuhi berbagai kebutuhan radio komunikasi, seperti: 
      <ul>
        <li>• Handy Talky (HT)</li>
        <li>• Rig Base</li>
        <li>• Repeater</li>
      </ul>
      dengan berbagai variasi dan lini produk yang terbaru.`,
  },
  {
    id: 2,
    image: serviceImage2,
    title:
      "13+ Proyek instalasi radio komunikasi di penjuru indonesia, Cepat dan tepat.",
    description:
      "Membangun sistem radio HT, repeater, dan perangkat komunikasi lainnya yang disesuaikan dengan kebutuhan anda.\nMulai dari perencanaan pemasangan, Proyeksi Coverage area, Pemasangan repeater, Hingga Pemrograman Handy Talky.",
  },
  {
    id: 3,
    image: serviceImage3,
    title: "Meningkatkan keamanan  dengan standar industri 4.0",
    description:
      "Membangun sistem yang terintegrasi untuk berbagai perangkat, seperti: \n<ul><li>• Radio Komunikasi</li><li>• Kamera CCTV</li><li>• Sensor keamanan</li><li>• Kamera tubuh</li></ul>\nIntegrasi ke dalam satu sistem agar efisien dan mudah dikelola.",
  },
  {
    id: 4,
    image: serviceImage4,
    title: "Merawat kelayakan sistem keamanan radio komunikasi",
    description:
      "Layanan perbaikan dan perawatan rutin untuk menjaga performa berbagai perangkat radio komunikasi Anda tetap prima.\nMemastikan keamanan komunikasi yang berkelanjutan.",
  },
  {
    id: 5,
    image: serviceImage5,
    title: "WAVE PTX™ \nPonsel dapat terhubung dengan radio komunikasi",
    description:
      "Ponsel anda dapat terhubung dengan Handy-Talky dan dapat saling berkomunikasi. \nWAVE PTX adalah teknologi berbasis jaringan komersil yang menghubungkan radio komunikasi dengan Handy-Talky.\nTingkatkan fleksibilitas dan jangkauan komunikasi dengan teknologi WAVE PTX.",
  },
];

export const ProductDummyDescription = `When I started using Figma I had this issue as well, by pages I take it you mean screens (frames), if not, then “pages” in the Figma design file are often used to organise your workspace, such as designing mockups in one page, components in another, icons in another, etc.
As for a prototype you should note that in order for you to move between screens as an app all screens that you want to include must be in the same Figma page.
First problem - prototyping, to solve this, there’s not solution by Figma, but there are plugins to ease the prototyping process such as Autoflow. Also the issue seems to be not naming screens correctly, I personally name screens like this “Home/user/settings” if a screen is a singular flow, which means this path is the only path to this screen. You can still use it for identifying it, since for me names were too long to fit the dropdown selection box I used the frame highlight when hovering over the names, so it’s a very effective method to categorize screens (use sections as well).
You can’t do this connection to the best of my knowledge, you’ll need to place all screens in the same Figma page, the only possible way to do it is by creating an interactive component and placing it in the page you want to link to.
I don’t really understand what you mean by that, by “pages” you mean Figma pages or screens?
I’d suggest report a bug, although I think it might be a prototyping settings issue.
For future projects make sure you name your screens properly and keep all components in a different page, keep things organized it will solve lots of problems, I’d suggest using the section tool to differentiate between flows.
Hope this helps, have a great day and good luck!`;
