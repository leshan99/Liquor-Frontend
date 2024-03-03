import productImg01 from "../Images/Arrack01.png";
import productImg02 from "../Images/Arrack02.png";
import productImg03 from "../Images/Arrack03.png";
import productImg04 from "../Images/Gin1.png";
import productImg05 from "../Images/Gin2.png";
import productImg06 from "../Images/Gin3.png";
import productImg07 from "../Images/Whisky1.png";
import productImg08 from "../Images/Whisky2.png";
import productImg09 from "../Images/Whisky3.png";
import productImg10 from "../Images/Wine1.png";
import productImg11 from "../Images/Wine2.png";
import productImg12 from "../Images/Wine3.png";
import productImg13 from "../Images/Vodka1.png";
import productImg14 from "../Images/Vodka2.png";


import arrackSlide from "../Images/Arrack03.png";
import ginSlide from "../Images/Gin1.png";
import whiskySlide from "../Images/Whisky3.png";

export const SliderData = [
  {
      id: 2,
      title: "50% Off For Your First Order",
      desc: " ",
      cover: arrackSlide,
  },
  {
      id: 203,
      title: "10% Off For Your Second Order",
      desc: " ",
      cover: whiskySlide,
  },
  {
      id: 101,
      title: "30% Off For Your First Order",
      desc: "",
      cover: ginSlide,
  },
  
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Online Payment",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment",
    bg: "#e2f2b2",
  },
 
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Black Label",
    imgUrl: productImg01,
    category: "Arrack",
    price: 1930,
    discount:30,
    shortDesc:
      " ",
    description:
      "",
    reviews: [
      {
        rating: 4.7,
        text: "good product",
      },
    ],
    avgRating: 4.5,
  },
  
  {
    id: "02",
    productName: "Old Arrack ",
    imgUrl: productImg02,
    category: "Arrack",
    price: 2530,
    shortDesc:
      " ",
    description:
      " ",
    reviews: [
      {
        rating: 4.8,
        text: " ",
      },
      {
        rating: 4.8,
        text: " ",
      },
    ],
    avgRating: 4.7,
  },

  
]

export const products = [
  {
    id: "01",
    productName: "Black label ",
    imgUrl: productImg01,
    category: "Arrack",
    price: 1930,
    shortDesc:
      "",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text: " ",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Old Arrack ",
    imgUrl: productImg02,
    category: "Arrack",
    price: 2530,
    shortDesc:
      " ",
    description:
      "",
    reviews: [
      {
        rating: 4.8,
        text: " ",
      },
      {
        rating: 4.8,
        text: " ",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Extra Special",
    imgUrl: productImg03,
    category: "Arrack",
    price: 1730,
    shortDesc:
      " ",
    description:
      " ",
    reviews: [
      {
        rating: 4.6,
        text: " ",
      },
      {
        rating: 4.9,
        text: " ",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "101",
    productName: "Rockland Dry Gin ",
    imgUrl: productImg04,
    category: "Gin",
    price: 1900,
    shortDesc:
      "",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text:  " "
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "102",
    productName: "Ascot Pink Gin ",
    imgUrl: productImg05,
    category: "Gin",
    price: 1600,
    shortDesc:
      "",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "103",
    productName: "London Dry Gin ",
    imgUrl: productImg06,
    category: "Gin",
    price: 2560,
    shortDesc:
      " ",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "201",
    productName: "Old Keg",
    imgUrl: productImg07,
    category: "Whisky",
    price: 2000,
    shortDesc:
      " ",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "202",
    productName: "Ballantine's",
    imgUrl: productImg08,
    category: "Whisky",
    price: 3460,
    shortDesc:
      " ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "203",
    productName: "Jack Deniel's",
    imgUrl: productImg09,
    category: "Whisky",
    price: 8000,
    shortDesc:
      " ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  
  {
    id: "303",
    productName: "Riunite",
    imgUrl: productImg10,
    category: "Wine",
    price: 1500,
    shortDesc:
      " ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "304",
    productName: "Meiomi",
    imgUrl: productImg11,
    category: "Wine",
    price: 1930,
    shortDesc:
      " ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },


  {
    id: "305",
    productName: "Olepasu",
    imgUrl: productImg12,
    category: "Wine",
    price: 1800,
    shortDesc:
      " ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },


  {
    id: "401",
    productName: "Absolut Vodka",
    imgUrl: productImg13,
    category: "Vodka",
    price: 1980,
    shortDesc:
      "  ",
    description:
      "  ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },


  {
    id: "402",
    productName: "Skyy Vodka",
    imgUrl: productImg14,
    category: "Vodka",
    price: 1550,
    shortDesc:
      " ",
    description:
      " ",
    reviews: [
      {
        rating: 4.7,
        text: "",
      },
    ],
    avgRating: 4.5,
  },




];
