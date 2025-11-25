# Exercise 2





```js
const express = require('express')
const booksRoutes = require('./routes/books')
const cors = require('cors');
require('dotenv').config()
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;
const MONGODB_URL = process.env.MONGODB_URL

const app = express()
app.use(express.json())
app.use(morgan('dev'));



app.use('/books', booksRoutes)

mongoose.connect(MONGODB_URL).then(() => console.log('connected ✔ to mongodb')).catch((err) => console.log('failed to connect ❌ to mongodb', err))



app.listen(PORT, () => {
    console.log('listening port ' + PORT)
})

```


and here's the photo of my **exercise**


![exercis photo](/exercise_2/image.png)


