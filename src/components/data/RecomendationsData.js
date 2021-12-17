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
     price: 54990,
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
     variant: [
        {
          key: 'space-gray-macbook',
          type: 'spacegray',
          price: 54990,
          img: macbookSpaceGray,
          name: 'Space Gray',
          url: 'space-gray-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb',
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
          size: [
            {
              memory: '8GB unified storage',
              fee: 0
            },
            {
              memory: '16GB unified storage',
              fee: 12000,
            }
          ],  
          storage: [
            {
              storage: '256GB SSD Storage',
              fee: 0
            },
            {
              storage: '512GB SSD Storage',
              fee: 12000
            },
            {
              storage: '1TB SSD Storage',
              fee: 24000
            },
            {
              storage: '2TB SSD Storage',
              fee: 48000
            },

          ]   
        },
        {
          key: 'gold-macbook',
          type: 'gold',
          price: 54990,
          img: macbookGold,
          name: 'Gold',
          url: 'gold-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb',
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
          size: [
            {
              memory: '8GB unified storage'
            },
            {
              memory: '16GB unified storage',
              fee: 12000,
            }
          ],
          storage: [
            {
              storage: '256GB SSD Storage'
            },
            {
              storage: '512GB SSD Storage',
              fee: 12000
            },
            {
              storage: '1TB SSD Storage',
              fee: 24000
            },
            {
              storage: '2TB SSD Storage',
              fee: 48000
            },

          ]   
        },
        {
          key: 'silver-macbook',
          type: 'silver',
          img: macbookSilver,
          name: 'Silver',
          price: 54990,
          url: 'silver-apple-m1-chip-with-8-core-cpu-and-7-core-gpu-256gb',
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
          size: [
            {
              memory: '8GB unified storage',
              fee: 0
            },
            {
              memory: '16GB unified storage',
              fee: 12000
            }
          ],
          storage: [
            {
              storage: '256GB SSD Storage',
              fee: 0
            },
            {
              storage: '512GB SSD Storage',
              fee: 12000
            },
            {
              storage: '1TB SSD Storage',
              fee: 24000
            },
            {
              storage: '2TB SSD Storage',
              fee: 48000
            },

          ]      
        }
     ],

  },
  {
    id: 2,
    alt: "laptop1",
    name: "Laptop",
    series: "Macbook Air",
    price: 68000,
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
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookSpaceGray,
         name: 'Space Gray',
         price: 54990,
         url: 'space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
          size: [
            {
              memory: '8GB unified storage',
              fee: 0
            },
            {
              memory: '16GB unified storage',
              fee: 12000,
            }
          ],
          storage: [
            {
              storage: '256GB SSD Storage',
              fee: 0
            },
            {
              storage: '512GB SSD Storage',
              fee: 12000
            },
            {
              storage: '1TB SSD Storage',
              fee: 24000
            },
            {
              storage: '2TB SSD Storage',
              fee: 48000
            },

          ]   

       },
       {
         key: 'gold-macbook',
         type: 'gold',
         img: macbookGold,
         name: 'Gold',
         price: 54990,
         url: 'gold-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
          size: [
            {
              memory: '8GB unified storage',
              fee: 0
            },
            {
              memory: '16GB unified storage',
              fee: 12000,
            }
          ],
          storage: [
            {
              storage: '256GB SSD Storage',
              fee: 0
            },
            {
              storage: '512GB SSD Storage',
              fee: 12000
            },
            {
              storage: '1TB SSD Storage',
              fee: 24000
            },
            {
              storage: '2TB SSD Storage',
              fee: 48000
            },

          ]  
       },
       {
         key: 'silver-macbook',
         type: 'silver',
         price: 54990,
         img: macbookSilver,
         name: 'Silver',
         url: 'silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
        size: [
          {
            memory: '8GB unified storage',
            fee: 0
          },
          {
            memory: '16GB unified storage',
            fee: 12000,
          }
        ],
        storage: [
          {
            storage: '256GB SSD Storage',
            fee: 0
          },
          {
            storage: '512GB SSD Storage',
            fee: 12000
          },
          {
            storage: '1TB SSD Storage',
            fee: 24000
          },
          {
            storage: '2TB SSD Storage',
            fee: 48000
          },

        ]    
       }
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
   id: 90,
   img: mobile1,
   alt: "mobile1",
   name: "Mobile",
   series: "Iphone 11 Pro Max",
   price: 4000,
   quantity: 0
   
 },
 {
   id: 97,
   img: mobile2,
   alt: "mobile2",
   name: "Mobile",
   series: "Iphone 12 Pro",
   price: 5000,
   quantity: 10
 },
 {
   id: 95,
   img: mobile3,
   alt: "mobile3",
   name: "Mobile",
   series: "Iphone 13",
   price: 6000,
   quantity: 10
 },
 {
   id: 96,
   img: tablet1,
   alt: "tablet1",
   name: "Tablets",
   series: "Ipad Pro",
   price: 7000,
   quantity: 10
 },
 {
   id: 97,
   img: tablet2,
   alt: "tablet2",
   name: "Tablets",
   series: "Ipad Mini",
   price: 8000,
   quantity: 10
 },
 {
   id: 98,
   img: tablet3,
   alt: "tablet3",
   name: "Tablets",
   series: "Ipad Pro 11",
   price: 9000,
   quantity: 10
 },
 {
   id: 999,
   img: watch1,
   alt: "watch1",
   name: "Watch",
   series: "Watch SE",
   price: 10000,
   quantity: 0
 },
 {
   id: 910,
   img: watch2,
   alt: "watch2",
   name: "Watch",
   series: "Watch Series 3",
   price: 11000,
   quantity: 10

 },
 {
   id: 911,
   img: watch3,
   alt: "watch3",
   name: "Watch",
   series: "Watch Series 6",
   price: 12000,
   quantity: 10
 },

]

export default recomendations;