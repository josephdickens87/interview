const faker = require('faker')

const sneakers = [
    { id: 1, name: 'yeezy', color: 'red', price: '600.00' },
    { id: 2, name: 'jordan', color: 'white', price: '300.00' }
  ];

const sneaker =
  {
    "id": faker.random.number(),
    "name": faker.commerce.productName(),
    "color": faker.commerce.color(),
    "price": 99.99
  };

module.exports = {
    sneakers,
    sneaker
}