import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import SearchIcon from "@material-ui/icons/Search";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { AssignmentOutlined, YouTube, Language } from "@material-ui/icons";

export default {
  news: [
    {
      image: "/images/news/news1.jpg",
      date: "2/4/2021",
      title: "New trend look",
      text:
        "we post legit and current news. you can follow us instagram, Facebook, twitter for more news and updates in real time",
    },
    {
      image: "/images/news/news1.jpg",
      date: "2/4/2021",
      title: "New trend look",
      text:
        "we post legit and current news. you can follow us instagram, Facebook, twitter for more news and updates in real time",
    },
    {
      image: "/images/news/news1.jpg",
      date: "2/4/2021",
      title: "New trend look",
      text:
        "we post legit and current news. you can follow us instagram, Facebook, twitter for more news and updates in real time",
    },
    {
      image: "/images/news/news1.jpg",
      date: "2/4/2021",
      title: "New trend look",
      text:
        "we post legit and current news. you can follow us instagram, Facebook, twitter for more news and updates in real time",
    },
  ],
  payment: [
    { image: "/images/pay/paypal.png" },
    { image: "/images/pay/mastercard.png" },
  ],

  payment: {
    Facebook: {
      link: "https://www.facebook.com",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://twitter.com/ememblow",
      icon: <FacebookIcon />,
    },
  },
  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "Tunde Murtala",
      icon: <FacebookIcon />,
    },

    Twitter: {
      link: "https://twitter.com/ememblow",
      text: "@ememblow",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/in/aliyu-muritala-67b4b015b/",
      text: "Tunde Murtala",
      icon: <LinkedInIcon />,
    },
    Instagram: {
      link: "https://github.com/sizzle01",
      text: "Sizzle01",
      icon: <InstagramIcon />,
    },
  },

  projects: [
    {
      tag: "MASSAGE",
      image: "/images/makeup/makeup1.jpg",

      title: "project 1",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://exomasltd.com", icon: <Language /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "MAKEUP",
      image: "/images/exomas.png",
      title: "Digital Agency",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://exomasltd.com", icon: <Language /> },
        { link: "https://github.com/sizzle01/Exomasltd", icon: <GitHubIcon /> },
      ],
    },

    {
      tag: "SPA",
      image: "/images/speis.png",
      title: "Architectural website",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://speispro.netlify.app", icon: <Language /> },
        { link: "https://github.com/sizzle01/speispro", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "HAIR STLYES",
      image: "/images/makeover.png",
      title: "Makeup Artist website",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://quickglitz.netlify.app", icon: <Language /> },
        { link: "https://github.com/sizzle01/quinbee", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "FACIALS",
      image: "/images/photothumb.png",
      title: "project 3",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://photographywebb.netlify.app", icon: <Language /> },
        {
          link: "https://github.com/sizzle01/int-photography",
          icon: <GitHubIcon />,
        },
      ],
    },
    {
      tag: "MASSAGE",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 3",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
    {
      tag: "MAKEUP",
      image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
      title: "project 4",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
      links: [
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.github.com", icon: <Language /> },
      ],
    },
  ],
};
