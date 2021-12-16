import React from "react"
import macbookSpaceGray from '../../images/Macbook/macbook-air-space-gray-select-201810.jpg'
import macbookGold from '../../images/Macbook/macbook-air-gold-select-201810.jpg'
import macbookSilver from '../../images/Macbook/macbook-air-silver-select-201810.jpg'
import laptop2 from "../../images/Recomendations/applemac13.jpg"
import laptop3 from "../../images/Recomendations/macbookgold.jpg"
import mobile1 from "../../images/Recomendations/Iphone11Promax.jpg"
import mobile2 from "../../images/Recomendations/Iphone12Pro.jpg"
import mobile3 from "../../images/Recomendations/Iphone13.jpg"
import tablet1 from "../../images/Recomendations/ipadpro.jpg"
import tablet2 from "../../images/Recomendations/ipadmini.jpg"
import tablet3 from "../../images/Recomendations/ipadpro11.jpg"
import watch1 from "../../images/Recomendations/watchse.jpg"
import watch2 from "../../images/Recomendations/watchseries3.jpg"
import watch3 from "../../images/Recomendations/watchseries6.jpg"


const recomendations = [
  {
     id: 1,
     alt: "laptop1",
     name: "Laptop",
     series: "Macbook Air",
     price: '₱54,990.00',
     quantity: 10,
     tag: 'macbook-air',
     descriptionHeader: 'Apple M1 Chip with 8-Core CPU and 7-Core GPU 256 GB Storage',
     description: [
       'Apple M1 chip with 8‑core CPU, 7‑core GPU, and 16‑core Neural Engine',
       '8GB unified memory',
       '256GB SSD storage¹',
       'Retina display with True Tone',
       'Magic Keyboard',
       'Touch ID',
       'Force Touch trackpad',
       'Two Thunderbolt / USB 4 ports'
     ],
     selectUrl: 'apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb',
     color: [
       {
         id: 1,
         color: 'spacegray',
         colorName: 'Space Gray',
         img: macbookSpaceGray,
         selectUrl: 'space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
       },
       {
        id: 2,
        color: 'gold',
        colorName: 'Gold',
        img: macbookGold,
        selectUrl: 'gold-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
      },
      {
        id: 3,
        color: 'silver',
        colorName: 'Silver',
        img: macbookSilver,
        selectUrl: 'silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
      },
     ],
     
  },
  {
    id: 2,
    img: macbookSpaceGray,
    imgGold: macbookGold,
    imgSilver: macbookSilver,
    alt: "laptop2",
    name: "Laptop",
    series: "Macbook Air",
    price: '₱68,990.00',
    quantity: 10,
    tag: 'macbook-air',
    descriptionHeader: 'Apple M1 Chip with 8-Core CPU and 8-Core GPU 512 GB Storage',
    description: [
      'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
      '8GB unified memory',
      '512GB SSD storage¹',
      'Retina display with True Tone',
      'Magic Keyboard',
      'Touch ID',
      'Force Touch trackpad',
      'Two Thunderbolt / USB 4 ports'
    ],
    
    color: [
      {
        id: 1,
        color: 'spacegray',
        colorName: 'Space Gray',
        img: macbookSpaceGray,
        selectUrl: 'space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
      },
      {
       id: 2,
       color: 'gold',
       colorName: 'Gold',
       img: macbookGold,
       selectUrl: 'gold-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
     },
     {
       id: 3,
       color: 'silver',
       colorName: 'Silver',
       img: macbookSilver,
       selectUrl: 'silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-256gb',
     },
    ],
 },
  {
    id: 99,
    img: laptop2,
    alt: "laptop2",
    name: "Laptop",
    series: "Macbook Pro",
    price: 2000,
    quantity: 10

  },
 {
   id: 3,
   img: mobile1,
   alt: "mobile1",
   name: "Mobile",
   series: "Iphone 11 Pro Max",
   price: 4000,
   quantity: 0
   
 },
 {
   id: 4,
   img: mobile2,
   alt: "mobile2",
   name: "Mobile",
   series: "Iphone 12 Pro",
   price: 5000,
   quantity: 10
 },
 {
   id: 5,
   img: mobile3,
   alt: "mobile3",
   name: "Mobile",
   series: "Iphone 13",
   price: 6000,
   quantity: 10
 },
 {
   id: 6,
   img: tablet1,
   alt: "tablet1",
   name: "Tablets",
   series: "Ipad Pro",
   price: 7000,
   quantity: 10
 },
 {
   id: 7,
   img: tablet2,
   alt: "tablet2",
   name: "Tablets",
   series: "Ipad Mini",
   price: 8000,
   quantity: 10
 },
 {
   id: 8,
   img: tablet3,
   alt: "tablet3",
   name: "Tablets",
   series: "Ipad Pro 11",
   price: 9000,
   quantity: 10
 },
 {
   id: 9,
   img: watch1,
   alt: "watch1",
   name: "Watch",
   series: "Watch SE",
   price: 10000,
   quantity: 0
 },
 {
   id: 10,
   img: watch2,
   alt: "watch2",
   name: "Watch",
   series: "Watch Series 3",
   price: 11000,
   quantity: 10

 },
 {
   id: 11,
   img: watch3,
   alt: "watch3",
   name: "Watch",
   series: "Watch Series 6",
   price: 12000,
   quantity: 10
 },

]

export default recomendations;