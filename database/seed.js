const mongoose = require('mongoose');
const Review = require('./index');

const ratings = [1, 2, 3, 4, 5]
const fits = ['Runs Small', 'True to Size', 'Runs Large']
const familiarities = [`I've put it through the wringer`, `I've used it several times`, `I've used it once or twice and have initial impressions`, `I returned this product before using it`, `I gave it as a gift, but have feedback to share`]

const seedData = {
  itemId: 0,
  itemName: 'Toe Socks',
  itemReviews: [
    {
      rating: 5,
      date: 'May 28, 2019',
      username: 'Ut commodo',
      userAvatar: 'https://avatars0.githubusercontent.com/u/52470968?s=200&v=4',
      reviewTitle: 'In lectus odio, porttitor nec.',
      reviewBody: `Sed condimentum varius sem quis cursus. Pellentesque sollicitudin pulvinar metus, pellentesque accumsan augue feugiat vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac accumsan nulla. Mauris posuere, mi sed dictum scelerisque, mi leo iaculis sapien, vel convallis elit justo eu augue. In malesuada.`,
      media: 'https://www.kbellsocks.com/data/default/images/catalog/900/Turnkey/2/xKBWS17Z035-01_Flag_R3Q.jpg.pagespeed.ic.67Z4ht8l0Z.jpg',
      familiarity: `I've put it through the wringer`,
      fit: 'True to Size',
      size: 'Large',
      userHeight: 66,
      userWeight: 155
    },
    {
      rating: 3,
      date: 'June 13, 2008',
      username: 'Morbi vitae',
      userAvatar: 'https://avatars0.githubusercontent.com/u/52470968?s=200&v=4',
      reviewTitle: 'Quisque in ligula pharetra, bibendum.',
      reviewBody: `Nullam nec efficitur erat. Aliquam ac aliquam tortor. Donec semper neque sit amet lacus tristique aliquet. Aenean placerat turpis vel ante pulvinar, sed malesuada lectus mattis. Cras scelerisque leo ut ipsum ullamcorper sodales. In urna metus, rutrum at turpis eu, lobortis elementum elit. Quisque ornare.`,
      media: 'https://www.kbellsocks.com/data/default/images/catalog/900/Turnkey/2/xKBWS17Z035-01_Flag_R3Q.jpg.pagespeed.ic.67Z4ht8l0Z.jpg',
      familiarity: `I've used it once or twice and have initial impressions`,
      fit: 'True to Size',
    },
  ]
}

const seedFunction = () => {
  Review.create(seedData)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
}

seedFunction();