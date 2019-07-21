const mongoose = require('mongoose');
const Review = require('./index');

const itemNames = [
  'Slax Pant',
  'Fjallraven Vidda Pro Trouser',
  'Steort Climbing Pant',
  'Stretch Zion Pant',
  'Paramount Trail Convertible Pant',
  'Stretch Zion Convertible Pant',
  'Vidda Pro Trouser',
  'Rydr Pant',
  'Jordanelle Tech Pant',
  'Beta AR Pant',
  'Hardwear AP Pant',
  'Gamma LT Softshell Pant',
  'Timpanogos Tech Fleece Pant',
  'Rugged Mountain Pant',
  'Bronson Pant',
  'Quandary Pant',
  'Palisade Pant',
  'Motion Pant',
  'PreCip Eco Pant',
  'Shadow Lake Pant',
  'A2B Commuter Pant',
  'Performance Twill Pant',
  'Renegade Pant',
  'Workwear Pant',
  'Tucson Pant',
  'Lefroy Pant',
  'RPS Rock Pant',
  'Go-To Stretch Twill Pant',
  'Quandary Convertible Pant',
  'Freerydr Pant',
  'Venture 2 1/2-Zip Pant',
  'Torrentshell Pant',
  'Venga Rock Pant',
  'Silencr Kargo Pants',
  'Bridger Denim Pant',
  'Renegade Kargo Convertible Pant',
  'Hendrixton Pant',
  'Horizon 2.0 Convertible Pant',
  'Performance Straight Fit Denim Pant',
  'Brion Pant',
  'Sigma FL Pant',
  'Washed-Duck Double-Front Work Dungaree Pant',
  'Packable Pant',
  'Compressor Pant',
  'Freedom Insulated Pant',
  'Terrebonne Joggers',
  'Rugged Flex Straight Tapered Jean',
  'Zeta SL Pant',
  'Vidda Pro Long Pant',
  'Guidewater II Pant',
  'Transit Jogger Pant',
  'Falketind Flex1 Softshell Pant',
  'Coach\'s Pant',
  'Sandy Cay Pant',
  'Ibex Mountain Softshell Pant',
  'Greenland Stretch Trouser',
  'Barents Pro Trouser',
  'Scree Softshell Pant',
  'Paramount Active Convertible Pant',
  'Revolvr Pant',
  'Minimalist Pant',
  'Axiom Denim Pant',
  'Venga Rock Knickers',
  'Nano Puff Pant',
  'Ripstop Climber Pant',
  'Crosstrek Fleece Bottom',
  'Guide Pant',
  'R1 Pant',
  'Keb Trouser',
  'Mahnya Fleece Pant',
  'Carbon Pant',
  'Venga Rock Pant',
  'Refresh Recovery Compression Tights',
  'Ponto Performance Pant',
  'Firm Double-Front Work Dungaree Pant',
  'Trollveggen Gore-Tex Light Pro Pant',
  'Modernist Rock Pant',
  'Hampi Rock Pant',
  'Silencr Rogue Pant',
  'Radikl Pant',
  'Rugged Flex Rigby Straight Fit Pant',
  'Rugged Flex Rigby Bib Pant',
  'Hardwear AP Trouser',
  'Shifter Pant',
  'Vorta 5 Pocket Slub Pant',
  'Weekend Elastic Pant',
  'Trail Pant',
  'Simul Alpine Softshell Pant',
  'Notion Pant',
  'x Flylow Mill D Bib Pant',
  'Deceptr Pant',
  'Abisko Trekking Tight',
  'Rebel Pant',
  'Frickin Slim Chino Pant',
  'Bitihorn Flex1 Pant',
  'Ultimate Roc Flex Pant',
  'Combin Softshell Pant',
  'Stradium Pant',
  'Pillar Softshell Pant',
  'Rugged Flex Pant',
  'Slim Sweatpant'
];

const usernames = [
  'Shaun Cuevas',
  'Brent Howard',
  'Dulce Mcmahon',
  'Cade Singleton',
  'Kailyn Watkins',
  'Lucian Whitaker',
  'Allison Mooney',
  'Cynthia Moreno',
  'Jakayla Nolan',
  'Hailie Solomon',
  'Leonel Arroyo',
  'Atticus Chaney',
  'Miguel Ortega',
  'Elliott Gordon',
  'Amare Hays',
  'Nathan Avila',
  'Malik Gates',
  'Mikaela David',
  'April Lawson',
  'Alina Bridges',
  'Lailah Richards',
  'Collin Lin',
  'Humberto Miller',
  'Theodore Reed',
  'Tony Mooney',
  'Nikolas Meyers',
  'Kyler Conley',
  'Zara Donovan',
  'Colton Greer',
  'Jasmine Vaughn',
  'Semaj Rosales',
  'Arianna Kennedy',
  'Saige Coffey',
  'Whitney Woods',
  'Zaid Kim',
  'Aleah Heath',
  'Campbell Clayton',
  'Lyla Acosta',
  'Gilberto Andersen',
  'Madelynn Stanton',
  'Kamila Crawford',
  'Hayden Flores',
  'Samir Cline',
  'Jasiah Lowery',
  'Elisha Hicks',
  'Daniela Hardin',
  'Adriel Gilbert',
  'Connor Myers',
  'Esteban Moss',
  'Cali Lynn',
  'Mark Stein',
  'Beckham Mays',
  'Jada Liu',
  'Remington Rich',
  'Eva Mcmahon',
  'Brent Rios',
  'Nathalia Reynolds',
  'Cara Brennan',
  'Jaelynn Torres',
  'Royce Bowen',
  'Nolan Grant',
  'Areli Vaughn',
  'Owen Atkins',
  'Jaron Gallegos',
  'Reyna Tate',
  'Casey Mayer',
  'Adyson Hawkins',
  'Yurem Mccoy',
  'Michael York',
  'Angel Graham',
  'Cristian Montes',
  'Gideon Hooper',
  'Andy Friedman',
  'Kolton Pierce',
  'Jadyn Pittman',
  'Mauricio Atkins',
  'Dayton Gamble',
  'Daniela Graves',
  'Tristin Dalton',
  'Micaela King',
  'Jaida Burns',
  'Jewel Cordova',
  'Dominique Mclean',
  'Hazel Hanson',
  'Jordon Petersen',
  'Jayson Burton',
  'Ella Salazar',
  'Ben Sellers',
  'Hayden Jimenez',
  'Rylee Wheeler',
  'Sage Francis',
  'Dayana Valentine',
  'Chad Harrington',
  'Wade Christensen',
  'Cindy Chang',
  'Lucia Bowman',
  'Haven Johnston',
  'Ali Bauer',
  'Aydin Levine',
  'Norah Rivers',
  'Bruno Santana',
  'Donte Campbell',
  'Braydon Levy',
  'Chaz French',
  'Malia Long',
  'Julius Martinez',
  'Layne Dorsey',
  'Jadyn Hickman',
  'Ayanna Escobar',
  'Michaela Allen',
  'Jaylee Mcpherson',
  'Savannah Phelps',
  'Kasey Smith',
  'Deven Noble',
  'Roman Valenzuela',
  'Jazmin Stone',
  'Kayleigh Dudley',
  'Camron Key',
  'Lacey Salas',
  'Gracelyn Lozano',
  'Haleigh Torres',
  'Ryder Finley',
  'Lara Morris',
  'Jayden Mccormick',
  'Kenna Wilkins',
  'Haven Malone',
  'Markus Ellison',
  'Helena Avery',
  'Mallory Reynolds',
  'Santos House',
  'Kaiya Little',
  'Deven Stout',
  'Kate Kennedy',
  'Jaydin Galvan',
  'Rayan Yu',
  'Leonard Blair',
  'Leticia Wyatt',
  'Lauren Reese',
  'Amber Valenzuela',
  'Gabriela Dominguez',
  'Maurice Joyce',
  'Miley Mullins',
  'Braiden Zuniga',
  'Yael Nunez',
  'Maximus Bruce',
  'Kinley Gould',
  'Rodney Acevedo',
  'Erica Huff',
  'Orion Mcintyre',
  'Nickolas Russo',
  'Gaven Benson',
  'Cory Landry',
  'Amira Long',
  'Elisha Ewing',
  'Mireya Mahoney',
  'Jayvon Shepard',
  'Lucia Meyers',
  'Lina Livingston',
  'Paula Goodwin',
  'Averi Moon',
  'Kelton Mason',
  'Yadiel constgas',
  'Daphne Mooney',
  'Kiara Todd',
  'Nyasia Pace',
  'Brent Walter',
  'Madalynn Clay',
  'Alyvia Harris',
  'Rebecca Mccoy',
  'Destiney Melton',
  'Gretchen Wiggins',
  'Lilly Ingram',
  'Marshall Nielsen',
  'Angel Bryant',
  'Skylar Hancock',
  'Lyric Lozano',
  'Esmeralda Brock',
  'Denise Vance',
  'Nikolai Rodgers',
  'Amelie Rojas',
  'Braden Valentine',
  'Phillip Allison',
  'Rishi Duran',
  'Alexus Aguirre',
  'Zackery Montoya',
  'Patricia Garrison',
  'Mekhi Flowers',
  'Kylan Santos',
  'Sophie Mcknight',
  'Kamden Byrd',
  'Micaela Li',
  'Clarissa Hood',
  'Seth Short',
  'Lia Henson',
  'Tristin Zimmerman',
  'Makenzie Orozco',
  'Aniya Stanton',
  'Kayla West',
  'Tony Porter',
  'Alayna Hines',
  'Rachael Cooley',
  'Paris Obrien',
  'Alfredo Pittman',
  'Lorelai Spencer',
  'India Werner',
  'Orlando Zavala',
  'Eden Serrano',
  'Isaac Marsh',
  'Royce Orr',
  'Karma Haley',
  'Saige Pratt',
  'Jayda Mcintyre',
  'Haven Dunn',
  'Yusuf Jefferson',
  'Talon Bullock',
  'Autumn Mcgrath',
  'Ryleigh Arnold',
  'Brynlee Stephenson',
  'Livia Morgan',
  'Renee Valdez',
  'Rosa Singh',
  'Johanna Hoffman',
  'Felix Berger',
  'Ashton Bond',
  'Tanner Myers',
  'Alfred Griffith',
  'Sanai Gamble',
  'Averi Bonilla',
  'Teagan Ochoa',
  'Evelin Gregory',
  'Lia Herman',
  'Sherlyn Mccoy',
  'Zoe Moore',
  'Annabel Ibarra',
  'Mason Pacheco',
  'Lillian Finley',
  'Kaleigh Sparks',
  'Clayton Arias',
  'Kristina Ramirez',
  'Christine Montes',
  'Danica Allison',
  'Alessandro French',
  'Carissa Hood',
  'Greta Lozano',
  'Ty Small',
  'Kingston Preston',
  'Yamilet Haney',
  'Darwin Horn',
  'Stacy Howell',
  'Rohan Moreno',
  'Jerry Pope',
  'Avah Valentine',
  'Lacey Holloway',
  'Landyn Vaughan',
  'Harrison Phelps',
  'Valentino Livingston',
  'Orlando Fletcher',
  'Ralph Harrington',
  'Emilie Moon',
  'Natasha Houston',
  'Gunnar Baker',
  'Kayleigh Strickland',
  'Jasiah Taylor',
  'Maxim Herring',
  'Lara Mcbride',
  'Reagan Simon',
  'Richard Deleon',
  'Jairo Mccoy',
  'Jaylan Ellison',
  'Brielle Nicholson',
  'Katherine Friedman',
  'Ireland Solomon',
  'Devin Ayala',
  'Dennis Greer',
  'Yadiel Moon',
  'Izayah Bass',
  'Alyvia Wells',
  'Finley Moon',
  'Macey Barron',
  'Ashtyn Morse',
  'Lena Landry',
  'Cayden Hatfield',
  'Lorena Mckee',
  'Aydin Vega',
  'Brennen Stark',
  'Jamiya Farmer',
  'Nevaeh Arellano',
  'Jayden Holland',
  'Kiera Horne',
  'Delaney Brennan',
  'Madyson Jenkins',
  'Trystan Rocha',
  'Elvis Tyler',
  'Keely Simon',
  'Lana Burgess',
  'Aaron Gordon',
  'Madalyn Mckee',
  'Kendra Lester',
  'Luca Gillespie',
  'Jordan Montes'
];

const userAvatars = [
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/1.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/2.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/3.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/4.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/5.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/6.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/7.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/8.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/9.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/10.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/11.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/12.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/13.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/14.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/15.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/16.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/17.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/18.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/19.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/20.jpeg',
  'https://s3-us-west-1.amazonaws.com/backendcountry.avatars/21.jpeg'
];

const ratings = [1, 2, 3, 4, 5];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const days = [];
for (let i = 1; i < 29; i++) {
  days.push(i);
}

const years = [];
for (let i = 2008; i < 2019; i++) {
  years.push(i);
}

const fits = [
  'Runs Small',
  'Runs Small',
  'Runs Small',
  'True to Size',
  'True to Size',
  'True to Size',
  'True to Size',
  'True to Size',
  'True to Size',
  'True to Size',
  'True to Size',
  'Runs Large',
  'Runs Large'
];

const familiarities = [
  'I\'ve put it through the wringer',
  'I\'ve put it through the wringer',
  'I\'ve put it through the wringer',
  'I\'ve put it through the wringer',
  'I\'ve used it several times',
  'I\'ve used it several times',
  'I\'ve used it several times',
  'I\'ve used it once or twice and have initial impressions',
  'I returned this product before using it',
  'I gave it as a gift, but have feedback to share'
];

const sizes = [
  'US 29/EU 44',
  'US 30-31/EU 46',
  'US 32/EU 48',
  'US 33-34/EU 50',
  'US 36/EU 52',
  'US 37/EU 54',
  'US 38-39/EU 56',
  'US 40/EU 58'
];

const goodReviewTitles = [
  'Best. Pants. Ever.',
  'PLEASE don\'t change a thing',
  'Durable comfort',
  'Love these pants',
  'The BEST',
  'about my 5th set of these pants',
  'Believe The Hype',
  'Amazing!',
  'Best pants I have ever had!',
  'Life changing pair of pants',
  'Great pants. Great fit.',
  'Love love love love it',
  'So durable',
  'Super Comfortable',
  'Never taking them off',
  'Can\'t go back',
  'Matches my style'
];

const neutReviewTitles = [
  'Zippers',
  'Great Service...',
  'My beard now grows twice as fast',
  'Look no further!',
  'Gotta collect them all.',
  'My new standard.',
  'Built like a tank.',
  'So durable',
  'Super Comfortable',
  'Content',
  'Not brown',
  'They fit, bit could be browner',
  'I can hike now',
  'These go well with my toe socks',
  'Seems like a good pant',
  'You call this brown?',
  'I wear these'
];

const badReviewTitles = [
  'too long',
  'Great Pants if....',
  'Poor sizing...',
  'Couldn\'t return!',
  'Mixed emotions',
  'Good pants but a bit tight in the thighs',
  'Brown isn\'t brown enough',
  'Fell apart at the seems',
  'Nope. Never again',
  'How do I keep falling for this?',
  'Nope nope nope.',
  '1000x The worst service ever',
  'Broken dreams. Broken promises.',
  'Looks can be deceiving',
  'Lost Trust',
  'A plauge on both your houses',
  'If I wanted shorts I would have purchased shorts'
];

const goodReviews = [
  'These pants are incredible! Super durable, and with a bit of wax on them, waterproof. If I had to live and die in one pair of pants, it would for sure be these.',
  'Every time I slide my legs into them, I feel the forest calling to me and an axe waiting. Chopping wood is manly, but you haven\'t lived until you\'ve tried it in these pants.',
  'These pants are tough as nails. The fit is definitely on the tighter side and as others have stated they run small in the hips and butt. Otherwise they are the perfect hill pant and I will buy again when and if these ever wear out (or if new colors come out lol)',
  'I bought these for my boyfriend and am leaving this review on his behalf. These are now his favorite pants. I had to beg to wash them, he wouldn’t take them off. Also may I comment that the rear view is pretty fantastic, these are an awesome fit and true to size.',
  'These are probably the best pant\'s I have owned. I love kuhl pants but they don\'t really fit in the same category as these pants. These are more burly - great for work or hiking in tough environments.',
  'Great. Wear them lots. Will buy more. 10/10 would recommend. Great. Wear them lots. Will buy more. 10/10 would recommend. Great. Wear them lots. Will buy more. 10/10 would recommend.',
  'I have like 4 pair of these pants. I have used them for a bunch of different outdoor activities. I just ordered these for my dad and he is going to be so pumped to try them out!',
  'These are some tough work pants. Huge fan of these trekking pants.  Super durable, good articulation, and great fit.  I use these not only for trekking and hiking, but around the house, on film shoots, and everything in between.  No complaints and worth every penny!',
  'It took a while to pull the trigger due to the high price point, but these are awesome for the outdoors.  I expect these will be my camping and backpacking pants for years to come.',
  'The cost of these pants are well worth it.The high quality and durability of the pant can take you from stylish to tactical, street to trail! The fit is great, I bought them for my husband and hot dang he looks awesome in them.'
];

const neutReviews = [
  'Seems like a good pant but I have a very short inseam and the regular length was way too long. Not able to hem these due to cinch strap at the bottom. Need Long, regular and short sizes.',
  'These are tough,  not lightweight stretchy hiking pants. They are serious outdoor gear. Wear them hiking off trail, or cutting wood for winter. Well thought out and worth every penny.',
  'Just got these and the Keb for my Boyfriend! He loves them both equally and never takes them off..',
  'I wanted to like these, and don\'t get me wrong, I truly do believe if you like many men don\'t have my particular problem that these pants will be the greatest lower body purchase you will ever make. The quality is great, but for my body type these just don\'t work, because my gluteus maximus is well, american sized. ',
  'The pockets sit perfectly along the thigh so if you have something in them they don\'t bunch up around the knee when you\'re stepping. The material holds up really well.',
  'There\'s nothing like waxing your pants for the 1st Time!!! Best pair of pants out there. So far and they are great. Well thought out and worth every penny.',
  'I have not worn these trekking but love the initial fit. Super easy to wax for additional weather protection. Well thought out and worth every penny.',
  'Great pants, classic cut/style. These are built to last and I would say that they are a little heavy for some occasions. They are more comfortable in the wild - climbing mountains or building a log cabin of some sort.',
  'Used these a few times, so far and they are great. Repels wind pretty well even without a base layer in 20° & 30° weather. stayed petty dry on snowy hikes and snowshoe outings, so far, with the G-1000 proofing. Although if you\'re out in say a blizzard, or heavy snow, may not be ideal for that, but I would like to see how they fair in that.',
  'These some rugged pants. You need at least one good pair and I highly recommend these....not to mention they are cool looking.'
];

const badReviews = [
  'These pants are great (and fit me perfect) however, if you have a non proportionate body, then you probably won’t like these.  The pants seem to be designed around athletically built proportionate non overweight individuals.',
  'I\'m a solid size 36 waist. I ordered and found that they are more of a 33-34 waist... I couldn\'t even button them. The quality looked good, and they are pretty cool, but I\'m having to return them.',
  'Will these fit over snowboarding shoes? The DUSK color is a very dark color like in the photo? Why am I asking in a review instead of a question?',
  'Worth $150? That is the question I’m sure many of you have about these pants. The answer is no, my thighs split the pants as soon as I went for a slight jaunt',
  'The worst $150 I\'ve ever spent, what kind of european crap sizing is this? If I wanted shorts I would have purchased shorts, not $150 pants',
  'I\'m a solid size 36 waist. I ordered and found that they are more of a 33-34 waist... I couldn\'t even button them. The quality looked good, and they are pretty cool, but I\'m having to return them.',
  'Wore these for 2 weeks in Iceland, held up terribly.  Do I have to purchase my own wax for what are supposed to be waterproof pants?',
  'I\'m a solid size 36 waist. I ordered and found that they are more of a 33-34 waist... I couldn\'t even button them. The quality looked good, and they are pretty cool, but I\'m having to return them.',
  'I have fairly muscular legs,  While the waist fit they are very snug down the leg and also I believe a little shorter in length they they claim compared to most companies out there.  I think they looked well made and really wish I could have tried them out. I ordered the next size up to see if that will do the trick.',
  'How much do these weigh? Beacuse I\'m headed to Africa and there is a limit to how much I can take on the tiny airplanes I\'m forced to fly in.'
];

const compare = function (a, b) {
  const yearA = +a.date.slice(-4);
  const yearB = +b.date.slice(-4);
  let comparison = 0;
  if (yearA > yearB) {
    comparison = -1;
  } else if (yearA < yearB) {
    comparison = 1;
  }
  return comparison;
};

const gen100 = function () {
  const seed = [];
  for (let i = 1; i <= 100; i++) {
    const itemId = i;
    const itemName = itemNames[i];
    const numOfComments = Math.ceil(Math.random() * 20);
    const itemReviews = [];
    for (let j = 0; j < numOfComments; j++) {
      const username = usernames[Math.floor(Math.random() * 300)];
      const userAvatar = userAvatars[Math.floor(Math.random() * 21)]; //'http://lorempixel.com/150/150/';
      const month = months[Math.floor(Math.random() * 12)];
      const day = days[Math.floor(Math.random() * 28)];
      const year = years[Math.floor(Math.random() * 11)];
      const date = `${month} ${day}, ${year}`;
      const rating = ratings[Math.floor(Math.random() * 5)];
      const reviewTitle = (rating === 5) ? goodReviewTitles[Math.floor(Math.random() * 17)]
        : (rating >= 3) ? neutReviewTitles[Math.floor(Math.random() * 17)]
          : badReviewTitles[Math.floor(Math.random() * 17)];
      const reviewBody = (rating === 5) ? goodReviews[Math.floor(Math.random() * 9)]
        : (rating >= 3) ? neutReviews[Math.floor(Math.random() * 9)]
          : badReviews[Math.floor(Math.random() * 9)];
      const hasFit = [false, true, true][Math.floor(Math.random() * 3)];
      if (hasFit) {
        const familiarity = familiarities[Math.floor(Math.random() * 10)];
        const fit = fits[Math.floor(Math.random() * 12)];
        const size = sizes[Math.floor(Math.random() * 8)];
        const totalInches = Math.floor(Math.random() * 20) + 59;
        const ft = Math.floor(totalInches / 12);
        const inch = totalInches - (ft * 12);
        const userHeight = `${ft}' ${inch}"`;
        const userWeight = Math.floor(Math.random() * 160) + 110;
        itemReviews[j] = {
          rating,
          date,
          username,
          userAvatar,
          reviewTitle,
          reviewBody,
          familiarity,
          fit,
          size,
          userHeight,
          userWeight
        };
      } else {
        itemReviews[j] = {
          rating,
          date,
          username,
          userAvatar,
          reviewTitle,
          reviewBody
        };
      }
    }
    itemReviews.sort(compare);
    seed[i] = {
      itemId,
      itemName,
      itemReviews
    };
  }
  return seed;
};

const seedData = gen100();

const seedFunction = () => {
  Review.create(seedData)
    .then(() => {
      console.log('Database seeded!');
      mongoose.connection.close();
    })
    .catch(err => console.error(err));
};

seedFunction();

//Math.floor(Math.random() * (max - min + 1)) + min;
//random range includes max and min


// find all items without reviews sorted by itemId desc
// db.reviews.find({ $where: "this.itemReviews.length < 1" }).sort({ itemId: 1 }).pretty()