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
import ipadColorPink from '../../images/Tablets/ipad-mini-select-wifi-pink-202109.png'
import ipadColorPurple from '../../images/Tablets/ipad-mini-select-wifi-purple-202109.png'
import ipadColorSpaceGray from '../../images/Tablets/ipad-mini-select-wifi-space-gray-202109.png'
import ipadColorStarlight from '../../images/Tablets/ipad-mini-select-wifi-starlight-202109.png'
import buttonColorIpadPink from '../../images/Tablets/finish-pink-202109.png'
import buttonColorIpadPurple from '../../images/Tablets/finish-purple-202109.png'
import buttonColorIpadSpaceGray from '../../images/Tablets/finish-spacegray-201903.png'
import buttonColorIpadStarlight from '../../images/Tablets/finish-starlight-202109.png'
import ipadSpaceGray from '../../images/Tablets/ipad-2021-hero-space-wifi-select.png'
import ipadSilver from '../../images/Tablets/ipad-2021-hero-silver-wifi-select.png'
import ipadButtonSilver from '../../images/Tablets/finish-silver-201903.png'
import ipadAirBlue from '../../images/Tablets/IpadAir/ipad-air-select-wifi-blue-202009.png'
import ipadAirGold from '../../images/Tablets/IpadAir/ipad-air-select-wifi-gold-202009.png'
import ipadAirGreen from '../../images/Tablets/IpadAir/ipad-air-select-wifi-green-202009.png'
import ipadAirSilver from '../../images/Tablets/IpadAir/ipad-air-select-wifi-silver-202009.png'
import ipadAirSpaceGray from '../../images/Tablets/IpadAir/ipad-air-select-wifi-spacegray-202009.png'
import ipadProSpaceGray from '../../images/Tablets/IpadAir/ipad-pro-11-select-wifi-spacegray-202104.jpg'
import ipadProSilver from '../../images/Tablets/IpadAir/ipad-pro-11-select-wifi-silver-202104.jpg'
import newIcon from '../../images/MacbookPro/mbp14-m1-pro-icon-202110.png'


export const macbookPhotos = [
  { inch: '13-inch', image: macbookProSpace13, color: 'Space Gray' },
  { inch: '13-inch', image: macbookProSilver13, color: 'Silver' },
  { inch: '14-inch', image: macbookProSpace14, color: 'Space Gray' },
  { inch: '14-inch', image: macbookProSilver14, color: 'Silver' },
  { inch: '16-inch', image: macbookProSpace16, color: 'Space Gray' },
  { inch: '16-inch', image: macbookProSilver16, color: 'Silver' },
]

export const macbookMemory = [
  {memory: '8GB unified memory', price: 0},
  {memory: '16GB unified memory', price: 12000}
]

export const macbookStorage = [
  {storage: '256GB SSD storage', price: 0},
  {storage: '512GB SSD storage', price: 12000},
  {storage: '1TB SSD storage', price: 24000},
  {storage: '2TB SSD storage',price: 48000}
]

export const buttonColor = [
  {color: 'Space Gray', colorImg: buttonColorIpadSpaceGray ,itemImage: macbookSpaceGray},
  {color: 'Gold', colorImg: buttonColorIphoneGold, itemImage: macbookGold},
  {color: 'Silver', colorImg: ipadButtonSilver, itemImage: macbookSilver},
]





const recomendations = [
  ///FOR MACBOOK AIR/////
  {
    id: 1,
    alt: "laptop",
    name: "Laptop",
    searchTag: "Macbook",
    series: "Macbook Air",
    quantity: 10,
    isRecommended: 'recommendation',
    img: macbookSpaceGray,
    price: 54990,
    tag: 'macbook-air',
    color: 'Space Gray',
    header: 'Apple M1 Chip with 8‑Core CPU and 7‑Core GPU 256GB SSD Storage¹',
    description: [
      'Apple M1 chip with 8-core CPU, 7-core',
      'GPU, and 16-core Neural Engine',
      '8GB unified memory',
      '256GB SSD storage',
      'Retina display with True Tone',
      'Magic Keyboard',
      'Touch ID',
      'Force Touch trackpad',
      'Two Thunderbolt / USB 4 ports'
    ]
  },
   {
    id: 2,
    alt: "laptop",
    name: "Laptop",
    series: "Macbook Air",
    isRecommended: true,
    quantity: 10,
    price: 54990,
    isRecommended: 'laptop',
    img: macbookSilver,
    tag: 'macbook-air',
    color: 'Space Gray',
    header: 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512GB SSD Storage¹',
    description: [
      'Apple M1 chip with 8-core CPU, 7-core',
      'GPU, and 16-core Neural Engine',
      '8GB unified memory',
      '512GB SSD storage',
      'Retina display with True Tone',
      'Magic Keyboard',
      'Touch ID',
      'Force Touch trackpad',
      'Two Thunderbolt / USB 4 ports'
    ]
  },
  //////FOR MACBOOK PRO////////
  {
    id: 3,
    alt: "laptop",
    name: "Laptop",
    inch: '13-inch',
    img: macbookProSpace13,
    searchTag: "Macbook",
    series: "Macbook Pro",
    quantity: 10,
    price: 71990,
    tag: 'macbook-pro',
    color: 'Space Gray',
    isRecommended: 'laptop',
    colorTag: buttonColorIpadSpaceGray,
    header: 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 256GB SSD Storage¹',
    description: [
      'Apple M1 chip with 8-core CPU, 8-core',
      'GPU, and 16-core Neural Engine',
      '8GB unified memory',
      '256GB SSD storage',
      '13-inch Retina display with True Tone',
      'Magic Keyboard',
      'Touch Bar and Touch ID',
      'Force Touch trackpad',
      'Two Thunderbolt / USB 4 ports'
    ]
  },
  {
    id: 4,
    alt: "laptop",
    name: "Laptop",
    inch: '13-inch',
    img: macbookProSilver13,
    series: "Macbook Pro",
    quantity: 10,
    price: 71990,
    tag: 'macbook-pro',
    color: 'Silver',
    colorTag: buttonColorIphoneSilver,
    header: 'Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512GB SSD Storage¹',
    description: [
      'Apple M1 chip with 8-core CPU, 8-core',
      'GPU, and 16-core Neural Engine',
      '8GB unified memory',
      '512GB SSD storage',
      '13-inch Retina display with True Tone',
      'Magic Keyboard',
      'Touch Bar and Touch ID',
      'Force Touch trackpad',
      'Two Thunderbolt / USB 4 ports'
    ]
  },
  {
    id: 5,
    alt: "laptop",
    name: "Laptop",
    inch: '14-inch',
    icon: 'New',
    iconImg: newIcon,
    img: macbookProSpace14,
    series: "Macbook Pro",
    quantity: 10,
    price: 116990,
    tag: 'macbook-pro',
    color: 'Space Gray',
    colorTag: buttonColorIpadSpaceGray,
    header: '8-Core CPU 14-Core GPU 16GB Unified Memory 512GB SSD Storage¹',
    description: [
      '16-core Neural Engine',
      '14-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port',
      'SDXC card slot, MagSafe 3 port',
      'Magic Keyboard with Touch ID',
      'Force Touch trackpad',
      '67W USB-C Power Adapter',
    ]
  },
  {
    id: 6,
    alt: "laptop",
    name: "Laptop",
    inch: '14-inch',
    icon: 'New',
    iconImg: newIcon,
    img: macbookProSilver14,
    series: "Macbook Pro",
    quantity: 10,
    price: 146990,
    tag: 'macbook-pro',
    color: 'Silver',
    colorTag: buttonColorIphoneSilver,
    header: '10-Core CPU 16-Core GPU 16GB Unified Memory 1TB SSD Storage',
    description: [
      '16-core Neural Engine',
      '14-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port',
      'SDXC card slot, MagSafe 3 port',
      'Magic Keyboard with Touch ID',
      'Force Touch trackpad',
      '96W USB-C Power Adapter',
    ]
  },
  {
    id: 7,
    alt: "laptop",
    name: "Laptop",
    inch: '16-inch',
    icon: 'New',
    iconImg: newIcon,
    series: "Macbook Pro",
    quantity: 10,
    price: 146990,
    tag: 'macbook-pro',
    color: 'Space Gray',
    colorTag: buttonColorIpadSpaceGray,
    header: '10-Core CPU 16-Core GPU 16GB Unified Memory 512GB SSD Storage',
    description: [
      '16-core Neural Engine',
      '16-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port',
      'SDXC card slot, MagSafe 3 port',
      'Magic Keyboard with Touch ID',
      'Force Touch trackpad',
      '140W USB-C Power Adapter',
    ]
  },
  {
    id: 8,
    alt: "laptop",
    name: "Laptop",
    inch: '16-inch',
    icon: 'New',
    iconImg: newIcon,
    series: "Macbook Pro",
    quantity: 10,
    price: 158990,
    tag: 'macbook-pro',
    color: 'Silver',
    colorTag: buttonColorIphoneSilver,
    header: '10-Core CPU 16-Core GPU 16GB Unified Memory 1TB SSD Storage',
    description: [
      '16-core Neural Engine',
      '16-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port',
      'SDXC card slot, MagSafe 3 port',
      'Magic Keyboard with Touch ID',
      'Force Touch trackpad',
      '140W USB-C Power Adapter',
    ]
  }, 
  {
    id: 9,
    alt: "laptop",
    name: "Laptop",
    inch: '16-inch',
    icon: 'New',
    iconImg: newIcon,
    series: "Macbook Pro",
    quantity: 10,
    price: 206990,
    tag: 'macbook-pro',
    header: '10-Core CPU 32-Core GPU 32GB Unified Memory 1TB SSD Storage',
    description: [
      '16-core Neural Engine',
      '16-inch Liquid Retina XDR display',
      'Three Thunderbolt 4 ports, HDMI port',
      'SDXC card slot, MagSafe 3 port',
      'Magic Keyboard with Touch ID',
      'Force Touch trackpad',
      '140W USB-C Power Adapter',
    ]
  }, 
  
  ////FOR IPHONE
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
    isRecommended: 'recommendation',
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
    isRecommended: 'mobile',
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
    quantity: 10,
    price: 38990,
    isRecommended: 'mobile',
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    series: "Iphone 12",
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
    isRecommended: 'mobile',
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
  {
    id: 44,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    searchTag: 'Ipad',
    img: ipadColorPink,
    series: "iPad Mini",
    quantity: 10,
    tag: 'ipad-mini',
    descriptionHeader: 'Buy iPad Mini',
    color: 'Pink',
    size: '64gb',
    colorTag: buttonColorIpadPink
  },
  {
    id: 45,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadColorPurple,
    series: "iPad Mini",
    isRecommended: 'tablet',
    quantity: 10,
    tag: 'ipad-mini',
    descriptionHeader: 'Buy iPad Mini',
    color: 'Purple',
    size: '64gb',
    colorTag: buttonColorIpadPurple
  },
  {
    id: 46,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadColorSpaceGray,
    series: "iPad Mini",
    quantity: 10,
    tag: 'ipad-mini',
    descriptionHeader: 'Buy iPad Mini',
    color: 'Space Gray',
    size: '64gb',
    colorTag: buttonColorIpadSpaceGray
  },
  {
    id: 47,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadColorStarlight,
    series: "iPad Mini",
    isRecommended: 'recommendation',
    quantity: 10,
    tag: 'ipad-mini',
    descriptionHeader: 'Buy iPad Mini',
    color: 'Starlight',
    size: '64gb',
    colorTag: buttonColorIpadStarlight
  },
  {
    id: 48,
    alt: "tablet",
    name: "Tablet",
    price: 19900,
    img: ipadSpaceGray,
    searchTag: 'Ipad',
    series: "iPad",
    quantity: 10,
    tag: 'ipad',
    descriptionHeader: 'Buy iPad',
    color: 'Space Gray',
    size: '64gb',
    colorTag: buttonColorIpadSpaceGray
  },
  {
    id: 49,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadSilver,
    series: "iPad",
    quantity: 10,
    tag: 'ipad',
    descriptionHeader: 'Buy iPad',
    color: 'Silver',
    size: '64gb',
    colorTag: ipadButtonSilver
  },
  {
    id: 50,
    alt: "tablet",
    name: "Tablet",
    price: 38990,
    img: ipadAirBlue,
    series: "iPad Air",
    isRecommended: 'tablet',
    quantity: 10,
    tag: 'ipad-air',
    searchTag: 'ipad',
    descriptionHeader: 'Buy iPad Air',
    color: 'Blue',
    size: '64gb',
    colorTag: buttonColorBlueMini
  },
  {
    id: 51,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadAirGold,
    series: "iPad Air",
    quantity: 10,
    tag: 'ipad-air',
    descriptionHeader: 'Buy iPad Air',
    color: 'Gold',
    size: '64gb',
    colorTag: buttonColorIphoneGold
  },
  {
    id: 52,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadAirGreen,
    series: "iPad Air",
    quantity: 10,
    tag: 'ipad-air',
    descriptionHeader: 'Buy iPad Air',
    color: 'Silver',
    size: '64gb',
    colorTag: buttonColorGreen
  },
  {
    id: 53,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadAirSilver,
    series: "iPad Air",
    quantity: 10,
    tag: 'ipad-air',
    descriptionHeader: 'Buy iPad Air',
    color: 'Silver',
    size: '64gb',
    colorTag: ipadButtonSilver
  },
  {
    id: 54,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadAirSpaceGray,
    series: "iPad Air",
    quantity: 10,
    tag: 'ipad-air',
    descriptionHeader: 'Buy iPad Air',
    color: 'Space Gray',
    size: '64gb',
    colorTag: buttonColorIpadSpaceGray
  },
  {
    id: 55,
    alt: "tablet",
    name: "Tablet",
    price: 45899,
    searchTag: 'ipad',
    img: ipadProSpaceGray,
    series: "iPad Pro",
    quantity: 10,
    tag: 'ipad-pro',
    isRecommended: 'tablet',
    descriptionHeader: 'Buy iPad Pro',
    color: 'Space Gray',
    size: '64gb',
    colorTag: buttonColorIpadSpaceGray
  },
  {
    id: 56,
    alt: "tablet",
    name: "Tablet",
    price: 29990,
    img: ipadProSilver,
    series: "iPad Pro",
    quantity: 10,
    tag: 'ipad-pro',
    descriptionHeader: 'Buy iPad Pro',
    color: 'Silver',
    size: '64gb',
    colorTag: buttonColorIphoneSilver
  },


  
 

  
    

]


export const getData = {
  recommendData: () => {
    const list = [];
    recomendations.forEach((item) => {
      if (item.isRecommended == 'recommendation') {
        list.push({
          id: item.id,
          image: item.img,
          name: item.series,
          price: item.price,
          tag: item.tag
        })
      }
    });

    return list;
  },

  laptopData: () => {
    const list = [];
    recomendations.forEach((item) => {
      if (item.isRecommended == 'laptop') {
        list.push({
          id: item.id,
          image: item.img,
          name: item.series,
          price: item.price,
          tag: item.tag
        })
      }
    });

    
    return list;
  },

  mobileData: () => {
    const list = []
    recomendations.forEach(item => {
      if(item.isRecommended === 'mobile'){
        list.push({
          id: item.id,
          image: item.img,
          name: item.series,
          price: item.price,
          tag: item.tag
        })
      }
    })
    return list;
  },

  tabletData: () => {
    const list = []
    recomendations.forEach(item => {
      if(item.isRecommended === 'tablet'){
        list.push({
          id: item.id,
          image: item.img,
          name: item.series,
          price: item.price,
          tag: item.tag
        })
      }
    })
    return list;
  }
}


export default recomendations;