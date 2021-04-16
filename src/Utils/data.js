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
      tag: "MASSAGE",
      image: "/images/massage/massage1.jpg",
    },
    {
      tag: "MAKEUP",
      image: "/images/makeup/makeup2.jpg",
    },
    {
      tag: "PEDICURE",
      image: "/images/manicure/manicure2.jpg",
    },
    {
      tag: "MASSAGE",
      image: "/images/massage/massage2.jpg",
    },

    {
      tag: "MAKEUP",
      image: "/images/makeup/makeup1.jpg",
    },

    {
      tag: "SPA",
      image: "/images/spa/spa1.jpg",
    },
    {
      tag: "SPA",
      image: "/images/spa/spa2.jpg",
    },
    {
      tag: "PEDICURE",
      image: "/images/manicure/manicure1.jpg",
    },
    {
      tag: "FACIALS",
      image: "",
    },
    {
      tag: "MASSAGE",
      image: "",
    },
    {
      tag: "MAKEUP",
      image: "",
    },
  ],
};
