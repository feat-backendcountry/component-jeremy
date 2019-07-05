const express = require('Express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/dbHelpers.js')

// const router = require('');
const model = require('../database/index.js')

const app = express();

const port = 4242;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, '../client/dist')))

// app.use('/api', router);

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/reviews/:id', (req, res) => {
  var { id } = req.params;
  db.getReviewById(id)
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      res.status(404).send('error server get reviews')
    })
})

app.get('/reviews/', (req, res) => {
  db.getReviewsDb()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send('error server get reviews')
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
