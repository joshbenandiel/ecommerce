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
  ////FOR IPHONE
  {
    id: 1,
    alt: "mobile",
    name: "Mobile",
    series: "Iphone 11",
    searchTag: 'Iphone',
    quantity: 10,
    tag: 'iphone-11',
    searchUrl: '6.1-inch-display-64gb-purple',
    descriptionHeader: 'Buy Iphone 11',
    variant: [
      {
        key: 'iphone-11-purple',
        type: 'purple',
        price: 31990,
        url: '6.1-inch-display-64gb-purple',
        img: iphone11Purple,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]   
      },
      {
        key: 'iphone-11-green',
        type: 'green',
        price: 31990,
        url: '6.1-inch-display-64gb-green',
        img: iphone11Green,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]      
      },
      {
        key: 'iphone-11-yellow',
        type: 'yellow',
        price: 31990,
        url: '6.1-inch-display-64gb-yellow',
        img: iphone11Yellow,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]      
      },
      {
        key: 'iphone-11-white',
        type: 'white',
        price: 31990,
        url: '6.1-inch-display-64gb-white',
        img: iphone11White,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]      
      },
      {
        key: 'iphone-11-black',
        type: 'black',
        price: 31990,
        url: '6.1-inch-display-64gb-black',
        img: iphone11Black,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]     
      },
      {
        key: 'iphone-11-red',
        type: 'red',
        price: 31990,
        url: '6.1-inch-display-64gb-red',
        img: iphone11Red,
        name: 'Iphone 11',
        header: 'Buy Iphone 11',
        size: [
          {
            storage: '64gb',
            price: 31990,
          },
          {
            storage: '128gb',
            price: 34990,
          }
        ]      
      },
      
      
    ],

  },

  
 

  
    

]

export default recomendations;