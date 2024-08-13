import facebook from '../public/facebook.svg';
import insta from '../public/instagram.svg';
import twitter from '../public/twitter.svg';
import linkedin from '../public/linkedin.svg';

import ui from '../public/ui.png';
import web from '../public/website.png';
import app from '../public/App.png';
import graphic from '../public/Graphic.png';

export const iconData = [
  { src: facebook, alt: 'Facebook' },
  { src: insta, alt: 'Instagram' },
  { src: twitter, alt: 'Twitter' },
  { src: linkedin, alt: 'LinkedIn' }
];


export const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Testimonials", link: "/testimonials" },
    { name: "Contact", link: "/contact" },
  ];



export const servicesData = [
    {
      imageSrc: ui,
      title: "UI/UX",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      imageSrc: web,
      title: "Website Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      imageSrc: app,
      title: "App Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      imageSrc: graphic,
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ];