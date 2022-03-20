import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: 1111,
    title: "PlayStation 5 - DVD + Online",
    company: "Sony",
    rating: 5,
    price: 39999,
    discountPercent: 33,
    unitsLeft: 110,
    categoryName: "Gaming",
    inWishlist: false,
    inStock: false,
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647442070/nothing-store-project/ps5_bo64cw.jpg",
    description:
      " The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later.",
  },
  {
    _id: 1112,
    title: "Sony WH 1000XM4",
    company: "Sony",
    rating: 2,
    unitsLeft: 110,
    price: 26990,
    inStock: true,
    discountPercent: 10,
    inWishlist: false,
    categoryName: "Audio",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647522801/nothing-store-project/sony-xm4_b534or.png",
    description:
      "Sony Over-Ear Wireless Headphone with Mic which offers you with fabulous music experience by providing you with awesome sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these headphone giving you a truly awesome audio experience.",
  },
  {
    _id: 1113,
    title: "iPhone XR 64GB",
    company: "Apple",
    rating: 3,
    unitsLeft: 110,
    price: 38990,
    inStock: false,
    discountPercent: 5,
    categoryName: "Smartphone",
    inWishlist: false,
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647522898/nothing-store-project/iphone_gnnhgt.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1114,
    title: "Apple MacBook Air M1 chip",
    company: "Apple",
    rating: 4,
    price: 89990,
    discountPercent: 10,
    unitsLeft: 110,
    inWishlist: false,
    inStock: true,
    categoryName: "Laptop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647523455/nothing-store-project/c8aea820-28a0-11eb-9f89-5ddd62987703_jjt6sz.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1115,
    title: "Samsung S22 Ultra 256GB",
    company: "Samsung",
    rating: 4,
    inStock: true,
    price: 65990,
    inWishlist: true,
    discountPercent: 5,
    unitsLeft: 110,
    categoryName: "Smartphone",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647523934/nothing-store-project/samsungphone_seyiko.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1116,
    title: "Mechanical Keyboard",
    company: "Zebronics",
    rating: 4,
    inWishlist: false,
    inStock: true,
    price: 2000,
    discountPercent: 8,
    unitsLeft: 11,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524293/nothing-store-project/mech_keyboard_p1qize.webp",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1117,
    title: "Echo Dot Alexa 3rd Gen",
    company: "Amazon",
    rating: 4,
    inStock: true,
    price: 2699,
    discountPercent: 5,
    unitsLeft: 110,
    inWishlist: false,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524508/nothing-store-project/alexa_ep9pkr.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1118,
    title: "Mi-Fit Band 5",
    company: "Xiaomi",
    rating: 5,
    inStock: true,
    price: 2999,
    discountPercent: 5,
    unitsLeft: 122,
    inWishlist: false,
    categoryName: "Accessories",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524677/nothing-store-project/mi_fit_band_kpgxao.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1119,
    title: "Galaxy Watch4 Classic LTE",
    company: "Samsung",
    rating: 5,
    inStock: true,
    price: 27999,
    discountPercent: 10,
    unitsLeft: 122,
    categoryName: "Accessories",
    inWishlist: false,
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524723/nothing-store-project/samsung_watch_yhhk4n.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
  {
    _id: 1120,
    title: "Galaxy Book 2 - 360",
    company: "Samsung",
    rating: 5,
    inStock: true,
    price: 129000,
    discountPercent: 8,
    unitsLeft: 111,
    inWishlist: false,
    categoryName: "Laptop",
    imgUrl:
      "https://res.cloudinary.com/sharath-media-library/image/upload/v1647524947/nothing-store-project/galaxy_book_atq5lk.jpg",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel accusantium culpa consectetur? Iste, voluptatum. Neque dolor inventore commodi repellendus veniam?",
  },
];
