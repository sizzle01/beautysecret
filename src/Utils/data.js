import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

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
    { image: <img src="/images/payment/paypal.png" alt="payment method" /> },
    {
      image: <img src="/images/payment/mastercard1.png" alt="payment method" />,
    },
    { image: <img src="/images/payment/visa1.png" alt="payment method" /> },
  ],

  socials: {
    Instagram: {
      link: "https://www.instagram.com/beautysecretskincare/",
      text: "",
      icon: <InstagramIcon />,
    },
    Facebook: {
      link: "https://web.facebook.com/beautysecretskincarespa/",
      text: "",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://twitter.com/beautysecretabj",
      text: "",
      icon: <TwitterIcon />,
    },
    YouTube: {
      link: "https://www.youtube.com/channel/UCA8XV5ZxmRcMhMyVcyYV9jQ",
      text: "",
      icon: <YouTubeIcon />,
    },

    Shop: {
      link: "",
      text: "",
      icon: <AddShoppingCartIcon />,
    },
  },

  projects: [
    {
      tag: "MEDSPA",
      image: "/images/medspa/medspa1.png",
    },
    {
      tag: "FACIALS",
      image: "/images/face/facial1.jpg",
    },
    {
      tag: "FACIALS",
      image: "/images/face/facial1.png",
    },
    {
      tag: "CHEMICAL PEELS",
      image: "",
    },
    {
      tag: "HAMMAM",
      image: "/images/hammam/hammam.jpg",
    },
    {
      tag: "MASSAGE",
      image: "",
    },
    {
      tag: "WAXING",
      image: "",
    },

    {
      tag: "HAIR GALLERY",
      image: "/images/Hairgallery/hairgallery.jpg",
    },

    {
      tag: "COSMETICS",
      image: "/images/cosmetics/cosmetics.jpg",
    },

    {
      tag: "INTERIOR",
      image: "/images/interior/entrance.jpg",
    },
    {
      tag: "INTERIOR",
      image: "/images/interior/interior1.jpg",
    },
    {
      tag: "INTERIOR",
      image: "/images/interior/interior2.jpg",
    },
    {
      tag: "INTERIOR",
      image: "/images/interior/interior3.jpg",
    },

    {
      tag: "PEDICURE",
      image: "/images/pedicure/pedicure1.jpg",
    },

    {
      tag: "MASSAGE",
      image: "/images/massage/massage1.jpg",
    },
  ],

  services: [
    {
      tag: "React",
      image: "/images/exomas.png",

      title: "project 1",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
    },
    {
      tag: "HTML&CSS",
      image: "/images/exomas.png",
      title: "Digital Agency",
      caption: "A short description",
      description:
        "this is my project description, please check it out and let me know if it stands the chance to compete with high tech projects",
    },
  ],
};
