//Fleet
import car1 from "../../public/Assets/Arkona White-Z9Z9-248,249,247-640-en_US 1.png";
import car2 from "../../public/Assets/camry 1.png";
import car3 from "../../public/Assets/MercedesBenz-CCoupe-Right-Front-Three-Quarter-152578 1.png";
import car4 from "../../public/Assets/Meet-Your-Tesla-Model-3 1.png";
import car5 from "../../public/Assets/mineralwhite 1.png";
import car6 from "../../public/Assets/USD20FOC052B021001 1.png";
//Headshots
import guy1 from "../../public/headshot-guy1.jpg";
import guy2 from "../../public/headshot-guy2.jpg";
import girl1 from "../../public/headshot-girl1.jpg";
import girl2 from "../../public/headshot-girl2.jpg";
import girl3 from "../../public/headshot-girl3.jpg";
//How it works
import select from "../../public/Assets/Select.png";
import returnImage from "../../public/Assets/Return.png";
import drive from "../../public/Assets/Drive.png";
import book from "../../public/Assets/Book.png";

export const carFleet = [
  { name: "Audi A4 Sedan", price: 49, image: car1, popular: false },
  { name: "BMW X5 SUV", price: 79, image: car5, popular: true },
  { name: "Toyota Camry Hybrid", price: 39, image: car2, popular: false },
  {
    name: "Mercedes-Benz C-Class Coupe",
    price: 69,
    image: car3,
    popular: false,
  },
  { name: "Tesla Model 3", price: 99, image: car4, popular: false },
  { name: "Ford Mustang Convertible", price: 59, image: car6, popular: false },
];

export const reviews = [
  {
    customer: "Emily Johnson",
    review:
      "Drivoxt exceeded all my expectations! From renting a car for a weekend getaway to selling my old vehicle hassle-free, their service is impeccable. Their staff is friendly, the process is smooth, and the options they offer are diverse. Highly recommend!",
    image: girl1,
  },
  {
    customer: "Michael Patel",
    review:
      "I've been a loyal customer of Drivoxt for years now, and I'm continually impressed by their commitment to customer satisfaction. Whether I'm renting for a business trip or buying a new car, Drivoxt always provides top-notch service and quality vehicles. Thanks for making car transactions so easy!",
    image: guy1,
  },
  {
    customer: "Sarah Thompson",
    review:
      "Drivoxt is hands down the best in the business! I recently sold my car through their platform, and the whole process was seamless. Their website is user-friendly, their team is professional and helpful, and they got me a great price for my vehicle. I wouldn't trust anyone else with my car needs!",
    image: girl2,
  },
  {
    customer: "David Garcia",
    review:
      "I can't thank Drivoxt enough for their fantastic service. Renting a car for my family vacation was a breeze, thanks to their wide selection of vehicles and convenient booking process. Plus, their prices are competitive, making it an excellent value for the quality of service they provide. Will definitely be using Drivoxt again!",
    image: guy2,
  },
  {
    customer: "Lisa Anderson",
    review:
      "Drivoxt truly stands out in the automotive industry for their exceptional customer service and reliability. Whether you're renting, selling, or buying, they go above and beyond to ensure a positive experience. I've used their services multiple times and have never been disappointed. Keep up the great work, Drivoxt!",
    image: girl3,
  },
];

export const howItWorks = [
  {
    title: "Select",
    text: "Choose your desired car from our fleet.",
    icon: select,
    direction: true,
  },
  {
    title: "Book",
    text: "Reserve your car online",
    icon: book,
    direction: false,
  },
  {
    title: "Drive",
    text: "Pick up your car and hit the road.",
    icon: drive,
    direction: true,
  },
  {
    title: "Return",
    text: "Bring the car back at the end of your rental period.",
    icon: returnImage,
    direction: false,
  },
];

export const groups = [
  {
    group: "USA",
    locations: [
      { location: "Miami, Fl", value: "MIA" },
      { location: "Orlando, Fl", value: "MCO" },
      { location: "Jacksonville, Fl", value: "JAX" },
      { location: "Tallahassee, Fl", value: "TAL" },
      { location: "Tampa, Fl", value: "TPA" },
    ],
  },
  {
    group: "Puerto Rico",
    locations: [
      { location: "Carolina, PR", value: "CARO" },
      { location: "San Juan, PR", value: "SANJ" },
      { location: "Bayamon, PR", value: "BAYA" },
      { location: "Caguas, PR", value: "CAGU" },
      { location: "Mayagüez, PR", value: "MAYA" },
    ],
  },
];
