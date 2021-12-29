import React from "react"
import macbookSpaceGray from '../../images/Macbook/macbook-air-space-gray-select-201810.jpg'
import macbookGold from '../../images/Macbook/macbook-air-gold-select-201810.jpg'
import macbookSilver from '../../images/Macbook/macbook-air-silver-select-201810.jpg'
import macbookProSpace13 from '../../images/MacbookPro/mbp-spacegray-13.jpg'
import macbookProSilver13 from '../../images/MacbookPro/mbp-silver-13.jpg'
import macbookProSpace14 from '../../images/MacbookPro/mbp14-spacegray-14.jpg'
import macbookProSilver14 from '../../images/MacbookPro/mbp14-silver-14.jpg'
import macbookProSpace16 from '../../images/MacbookPro/mbp16-spacegray-16.jpg'
import macbookProSilver16 from '../../images/MacbookPro/mbp16-silver-select-16.jpg'
import iphone11Family from '../../images/Iphone/iphone11-select-2019-family.jpg'
import iphone11Purple from '../../images/Iphone/iphone11-purple-select-2019.png'
import iphone11Green from '../../images/Iphone/iphone11-green-select-2019.png'
import iphone11Red from '../../images/Iphone/iphone11-red-select-2019.png'
import iphone11Black from '../../images/Iphone/iphone11-black-select-2019.png'
import iphone11White from '../../images/Iphone/iphone11-white-select-2019.png'
import iphone11Yellow from '../../images/Iphone/iphone11-yellow-select-2019.png'
import buttonColorBlack from '../../images/Iphone/finish-black-201909.jpg'
import buttonColorPurple from '../../images/Iphone/finish-purple-201909 (1).jpg'
import buttonColorGreen from '../../images/Iphone/finish-green-201909.jpg'
import buttonColorRed from '../../images/Iphone/finish-red-201909.jpg'
import buttonColorWhite from '../../images/Iphone/finish-white-201909.jpg'
import buttonColorYellow from '../../images/Iphone/finish-yellow-201909.jpg'
import iphone12BlackMini from '../../images/Iphone/iphone-mini/iphone-12-mini-black-select-2020.png'
import iphone12BlueMini from '../../images/Iphone/iphone-mini/iphone-12-mini-blue-select-2020.png'
import iphone12GreenMini from '../../images/Iphone/iphone-mini/iphone-12-mini-green-select-2020.png'
import iphone12PurpleMini from '../../images/Iphone/iphone-mini/iphone-12-mini-purple-select-2021.png'
import iphone12RedMini from '../../images/Iphone/iphone-mini/iphone-12-mini-red-select-2020.png'
import iphone12WhiteMini from '../../images/Iphone/iphone-mini/iphone-12-mini-white-select-2020.png'
import buttonColorBlackMini from '../../images/Iphone/iphone-mini/finish-black-202010.jpg'
import buttonColorBlueMini from '../../images/Iphone/iphone-mini/finish-blue-202010.jpg'
import buttonColorGreenMini from '../../images/Iphone/iphone-mini/finish-green-202010.jpg'
import buttonColorPurpleMini from '../../images/Iphone/iphone-mini/finish-purple-202104.jpg'
import buttonColorRedMini from '../../images/Iphone/iphone-mini/finish-red-202010.jpg'
import buttonColorWhiteMini from '../../images/Iphone/iphone-mini/finish-white-202010.jpg'
import iphone13ColorBlue from '../../images/Iphone/iphone13/iphone-13-pro-blue-select.png'
import iphone13ColorGold from '../../images/Iphone/iphone13/iphone-13-pro-gold-select.png'
import iphone13ColorGraphite from '../../images/Iphone/iphone13/iphone-13-pro-graphite-select.png'
import iphone13ColorSilver from '../../images/Iphone/iphone13/iphone-13-pro-silver-select.png'
import buttonColorIphoneBlue from '../../images/Iphone/iphone13/iphone-finish-blue-2021.jpg'
import buttonColorIphoneGold from '../../images/Iphone/iphone13/iphone-finish-gold-2021.jpg'
import buttonColorIphoneGraphite from '../../images/Iphone/iphone13/iphone-finish-graphite-2021.jpg'
import buttonColorIphoneSilver from '../../images/Iphone/iphone13/iphone-finish-silver-2021.jpg'


const recomendations = [
  ///FOR MACBOOK AIR/////
  {
     id: 1,
     alt: "laptop1",
     name: "Laptop",
     series: "Macbook Air",
     searchTag: 'Macbook',
     quantity: 10,
     tag: 'macbook-air',
     descriptionHeader: 'Apple M1 Chip with 8-Core CPU and 7-Core GPU 256 GB Storage',
     variant: [
        {
          key: 'space-gray-macbook',
          type: 'spacegray',
          price: 54990,
          img: macbookSpaceGray,
          name: 'Space Gray',
          header: 'Macbook Air',
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
          header: 'Macbook Air',
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
          header: 'Macbook Air',
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
         header: 'Macbook Air',
         img: macbookSpaceGray,
         name: 'Space Gray',
         price: 68000,
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
              storage: '512GB SSD Storage',
              fee: 0
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
         header: 'Macbook Air',
         price: 68000,
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 68000,
         img: macbookSilver,
         name: 'Silver',
         header: 'Macbook Air',
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
            storage: '512GB SSD Storage',
            fee: 0
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
  //////FOR MACBOOK PRO////////
  {
    id: 3,
    inch: '13-inch',
    alt: "laptop",
    name: "Laptop",
    searchTag: 'Macbook Pro',
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 256GB SSD Storage¹',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace13,
         name: 'Space Gray',
         header: '13-inch Macbook Pro',
         price: 71990,
         url: '13-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
          '8GB unified memory',
          '256GB SSD storage',
          '13-inch Retina display with True Tone',
          'Magic Keyboard',
          'Touch Bar and Touch ID',
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 71990,
         header: '13-inch Macbook Pro',
         img: macbookProSilver13,
         name: 'Silver',
         url: '13-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
          '8GB unified memory',
          '512GB SSD storage',
          'Retina display with True Tone',
          'Magic Keyboard',
          'TTouch Bar and Touch ID',
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 4,
    inch: '13-inch',
    alt: "laptop",
    name: "Laptop",
    header: '13-inch Macbook Pro',
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512GB SSD Storage¹',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace13,
         name: 'Space Gray',
         price: 83990,
         url: '13-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
          '8GB unified memory',
          '512GB SSD storage¹',
          '13-inch Retina display with True Tone',
          'Magic Keyboard',
          'Touch Bar and Touch ID',
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 83990,
         img: macbookProSilver13,
         name: 'Silver',
         header: '13-inch Macbook Pro',
         url: '13-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          'Apple M1 chip with 8‑core CPU, 8‑core GPU, and 16‑core Neural Engine',
          '8GB unified memory',
          '512GB SSD storage¹',
          '13-inch Retina display with True Tone',
          'Magic Keyboard',
          'Touch Bar and Touch ID',
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 5,
    inch: '14-inch',
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: 'Apple M1 Chip with 8-Core CPU and 8-Core GPU 512 GB Storage',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace14,
         name: 'Space Gray',
         header: '14-inch Macbook Pro',
         price: 68000,
         url: '14-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 68000,
         img: macbookProSilver14,
         name: 'Silver',
         header: '14-inch Macbook Pro',
         url: '14-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 6,
    inch: '14-inch',
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: 'Apple M1 Chip with 8-Core CPU and 8-Core GPU 512 GB Storage',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace14,
         name: 'Space Gray',
         header: '14-inch Macbook Pro',
         price: 68000,
         url: '14-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 68000,
         img: macbookProSilver14,
         name: 'Silver',
         header: '14-inch Macbook Pro',
         url: '14-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 7,
    inch: '16-inch',
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: '10-Core CPU 16-Core GPU 16GB Unified Memory 512GB SSD Storage¹',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace16,
         name: 'Space Gray',
         header: '16-inch Macbook Pro',
         price: 146990,
         url: '16-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 68000,
         img: macbookProSilver16,
         name: 'Silver',
         header: '16-inch Macbook Pro',
         url: '16-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 8,
    inch: '16-inch',
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: '10-Core CPU 16-Core GPU 16GB Unified Memory 1TB SSD Storage¹',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace16,
         name: 'Space Gray',
         header: '16-inch Macbook Pro',
         price: 158990,
         url: '16-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 158990,
         img: macbookProSilver16,
         name: 'Silver',
         header: '16-inch Macbook Pro',
         url: '16-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
            storage: '512GB SSD Storage',
            fee: 0
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
    id: 9,
    inch: '16-inch',
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Pro",
    quantity: 10,
    tag: 'macbook-air-pro',
    descriptionHeader: '10-Core CPU 32-Core GPU 32GB Unified Memory 1TB SSD Storage¹',
    variant: [
       {
         key: 'space-gray-macbook',
         type: 'spacegray',
         img: macbookProSpace16,
         name: 'Space Gray',
         header: '16-inch Macbook Pro',
         price: 206990,
         url: '16-inch-space-gray-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
              storage: '512GB SSD Storage',
              fee: 0
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
         price: 206990,
         img: macbookProSilver16,
         name: 'Silver',
         header: '16-inch Macbook Pro',
         url: '16-inch-silver-apple-m1-chip-with-8-core-cpu-and-8-core-gpu-512gb',
         description: [
          '16-core Neural Engine',
          '16-inch Liquid Retina XDR display',
          'Three Thunderbolt 4 ports, HDMI port, SDXC card slot, MagSafe 3 port',
          'Magic Keyboard with Touch ID',
          'Force Touch trackpad',
          '140W USB-C Power Adapter'
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
            storage: '512GB SSD Storage',
            fee: 0
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
  ////FOR IPHONE 6.1-inch-display-{storage}-{color}
  {
    id: 10,
    alt: "mobile",
    name: "Mobile",
    img: iphone11Purple,
    series: "Iphone 11",
    searchTag: 'Iphone',
    quantity: 10,
    price: 31990,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-purple',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Purple',
    size: '64gb',
    colorTag: buttonColorPurple
  },
  {
    id: 11,
    alt: "mobile",
    name: "Mobile",
    img: iphone11Purple,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-128gb-purple',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Purple',
    size: '128gb',
    price: 31990,
  },
  {
    id: 12,
    alt: "mobile",
    name: "Mobile",
    img: iphone11Green,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-green',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Green',
    size: '64gb',
    price: 31990,
    colorTag: buttonColorGreen
    
  },
  {
    id: 13,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Green,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-green',
    descriptionHeader: 'Buy Iphone 11',
    color: 'green',
    size: '128gb'
    
  },
  {
    id: 14,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Red,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-red',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Red',
    size: '64gb',
    colorTag: buttonColorRed
  },
  {
    id: 15,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Red,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    price: 31990,
    searchUrl: '6.1-inch-display-64gb-red',
    descriptionHeader: 'Buy Iphone 11',
    color: 'red',
    size: '128gb'
  },
  {
    id: 16,
    alt: "mobile",
    price: 31990,
    name: "Mobile",
    img: iphone11Black,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-Black',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Black',
    size: '64gb',
    colorTag: buttonColorBlack
  },
  {
    id: 17,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Black,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-Black',
    descriptionHeader: 'Buy Iphone 11',
    color: 'black',
    size: '128gb'
  },
  {
    id: 18,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11White,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-white',
    descriptionHeader: 'Buy Iphone 11',
    color: 'White',
    size: '64gb',
    colorTag: buttonColorWhite
    
  },
  {
    id: 19,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11White,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-white',
    descriptionHeader: 'Buy Iphone 11',
    color: 'white',
    size: '128gb'
  },
  {
    id: 20,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Yellow,
    series: "Iphone 11",
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 11',
    color: 'Yellow',
    size: '64gb',
    colorTag: buttonColorYellow
  },
  {
    id: 21,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone11Yellow,
    series: "Iphone 11",
    quantity: 10,
    price: 31990,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 11',
    color: 'yellow',
    size: '128gb'
  },
  ////IPHONE12
  {
    id: 22,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlackMini,
    searchTag: 'Iphone',
    series: "Iphone 12",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Black',
    size: '64gb',
    colorTag: buttonColorBlackMini
  },
  {
    id: 23,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlackMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Black',
    size: '128gb',
    colorTag: buttonColorBlackMini
  },
  {
    id: 24,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlackMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Black',
    size: '256gb',
    colorTag: buttonColorBlackMini
  },
  {
    id: 25,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlueMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Blue',
    size: '64gb',
    colorTag: buttonColorBlueMini
  },
  {
    id: 26,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlueMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Blue',
    size: '128gb',
    colorTag: buttonColorBlueMini
  },
  {
    id: 27,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12BlueMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Blue',
    size: '256gb',
    colorTag: buttonColorBlueMini
  },
  {
    id: 28,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12GreenMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Green',
    size: '64gb',
    colorTag: buttonColorGreenMini
  },
  {
    id: 29,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12GreenMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Green',
    size: '128gb',
    colorTag: buttonColorGreenMini
  },
  {
    id: 30,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12GreenMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Green',
    size: '256gb',
    colorTag: buttonColorGreenMini
  },
  {
    id: 31,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12PurpleMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Purple',
    size: '64gb',
    colorTag: buttonColorPurpleMini
  },
  {
    id: 32,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12PurpleMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Purple',
    size: '128gb',
    colorTag: buttonColorPurpleMini
  },
  {
    id: 33,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12PurpleMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Purple',
    size: '256gb',
    colorTag: buttonColorPurpleMini
  },
  {
    id: 34,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12WhiteMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'White',
    size: '64gb',
    colorTag: buttonColorWhiteMini
  },
  {
    id: 35,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12WhiteMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'White',
    size: '128gb',
    colorTag: buttonColorWhiteMini
  },
  {
    id: 36,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12WhiteMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'White',
    size: '256gb',
    colorTag: buttonColorWhiteMini
  },
  {
    id: 37,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12RedMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Red',
    size: '64gb',
    colorTag: buttonColorRedMini
  },
  {
    id: 38,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12RedMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Red',
    size: '128gb',
    colorTag: buttonColorRedMini
  },
  {
    id: 39,
    alt: "mobile",
    name: "Mobile",
    price: 31990,
    img: iphone12RedMini,
    series: "Iphone 12 Mini",
    quantity: 10,
    price: 38990,
    tag: 'iphone-12',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 12',
    color: 'Red',
    size: '256gb',
    colorTag: buttonColorWhiteMini
  },
////IPHONE 13
  {
    id: 40,
    alt: "mobile",
    name: "Mobile",
    img: iphone13ColorBlue,
    series: "Iphone 13",
    quantity: 10,
    price: 70990,
    searchTag: 'Iphone',
    tag: 'iphone-13',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 13',
    color: 'Seirra Blue',
    size: '64gb',
    colorTag: buttonColorIphoneBlue
  },
  {
    id: 41,
    alt: "mobile",
    name: "Mobile",
    price: 70990,
    img: iphone13ColorGold,
    series: "Iphone 13",
    quantity: 10,
    tag: 'iphone-13',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 13',
    color: 'Gold',
    size: '64gb',
    colorTag: buttonColorIphoneGold
  },
  {
    id: 42,
    alt: "mobile",
    name: "Mobile",
    price: 70990,
    img: iphone13ColorGraphite,
    series: "Iphone 13",
    quantity: 10,
    tag: 'iphone-13',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 13',
    color: 'Graphite',
    size: '64gb',
    colorTag: buttonColorIphoneGraphite
  },
  {
    id: 43,
    alt: "mobile",
    name: "Mobile",
    price: 70990,
    img: iphone13ColorSilver,
    series: "Iphone 13",
    quantity: 10,
    tag: 'iphone-13',
    searchUrl: '6.1-inch-display-64gb-yellow',
    descriptionHeader: 'Buy Iphone 13',
    color: 'Silver',
    size: '64gb',
    colorTag: buttonColorIphoneSilver
  },

  
 

  
    

]

export default recomendations;