const mongoose = require('mongoose');

const Item = require('./index.js');

const brandArray = ['Backcountry', 'Patagonia', 'Columbia', 'KUHL', 'Norrona', 'Fjallrave'];

const itemName = ["Radikl Pant - Men's", "Renegade Pant - Men's", "Kontra Air Pant - Men's", "Silencr Rogue Pant - Men's", "Jordanelle Tech Pant - Men's", "Keb Trouser - Men's", "Vidda Pro Long Pant - Men's", "Barents Pro Trouser - Men's"]

const priceArray = [79.95, 224.95, 149.95];

const percentOffArray = [10, 25, 36, 40];

const sizeValUsArr = ['28', '30', '32', '34', '36', '38'];

const sizeValUsEuArr = ['US 29/EU 44', 'US 30-31/EU 46', 'US 32/EU 48', 'US 33-34/EU 50'];

const starRatingArr = [4, 4.5, 5];

const s3bucket = 'https://cf-simple-s3-origin-cloudfrontfors3-846267517976.s3.amazonaws.com/'

const imagesArray = [
  [
    s3bucket + 'backcountry-jordanelle-tech/grapeleaf.jpg',
    s3bucket + 'backcountry-jordanelle-tech/pavement.jpg'
  ],
  [
    s3bucket + 'backcountry-steort/black.jpg',
    s3bucket + 'backcountry-steort/bronze.jpg'
  ],
  [
    s3bucket + 'fjallraven-barents-pro/black.jpg',
    s3bucket + 'fjallraven-barents-pro/dark-grey-black.jpg',
    s3bucket + 'fjallraven-barents-pro/dark-grey.jpg',
    s3bucket + 'fjallraven-barents-pro/dark-olive.jpg',
    s3bucket + 'fjallraven-barents-pro/dark-olive-black.jpg',
    s3bucket + 'fjallraven-barents-pro/dusk.jpg'
  ],
  [
    s3bucket + 'fjallraven-keb-trouser/khaki.jpg',
    s3bucket + 'fjallraven-keb-trouser/uncle-blue.jpg'
  ],
  [
    s3bucket + 'kuhl-radikl/breen.jpg',
    s3bucket + 'kuhl-radikl/carbon.jpg',
    s3bucket + 'kuhl-radikl/darkkhaki.jpg',
    s3bucket + 'kuhl-radikl/desertkhaki.jpg',
    s3bucket + 'kuhl-radikl/kovert.jpg',
    s3bucket + 'kuhl-radikl/smoke.jpg',
    s3bucket + 'kuhl-radikl/walnut.jpg'
  ],
  [
    s3bucket + 'kuhl-renegade/birch.jpg',
    s3bucket + 'kuhl-renegade/brushednickel.jpg',
    s3bucket + 'kuhl-renegade/buckskinkhaki.jpg',
    s3bucket + 'kuhl-renegade/darkforest.jpg',
    s3bucket + 'kuhl-renegade/khaki.jpg',
    s3bucket + 'kuhl-renegade/koal.jpg',
    s3bucket + 'kuhl-renegade/pewter.jpg'
  ],
  [
    s3bucket + 'prana-stretch-zion/bronze.jpg',
    s3bucket + 'prana-stretch-zion/cargogreen.jpg',
    s3bucket + 'prana-stretch-zion/charcoal.jpg',
    s3bucket + 'prana-stretch-zion/darkkhaki.jpg',
    s3bucket + 'prana-stretch-zion/mud.jpg'
  ]
]


const seedData = [];

for (var i = 0; i < 100; i++) {
  seedData.push({
    id: i + 1,
    brand: brandArray[Math.floor(Math.random() * brandArray.length)],
    name: itemName[Math.floor(Math.random() * itemName.length)],
    price: priceArray[Math.floor(Math.random() * priceArray.length)],
    sale: {
      isOnSale: Math.floor(Math.random() * 2),
      percentOff: percentOffArray[Math.floor(Math.random() * percentOffArray.length)]
    },
    isExclusive: Math.floor(Math.random() * 2),
    sizes: {
      valueUs: sizeValUsArr[Math.floor(Math.random() * sizeValUsArr.length)],
      valueUsEu: sizeValUsEuArr[Math.floor(Math.random() * sizeValUsEuArr.length)],
      isUsEu: Math.floor(Math.random() * 2),
      isInStock: Math.floor(Math.random() * 2)
    },
    images: imagesArray[Math.floor(Math.random() * imagesArray.length)],
    starRating: starRatingArr[Math.floor(Math.random() * 3)]
  })
}

const seedFunction = () => {
  Item.create(seedData)
    .then(() => {
      mongoose.connection.close();
      console.log('Database successfully seeded')
    })
    .catch(err => console.error('Unable to seed database', err))
}

seedFunction();