const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const brandsRouter = require('./routes/brands');
const piecesRouter = require('./routes/pieces');
const stylesRouter = require('./routes/styles');
const materialsRouter = require('./routes/materials');
const categoriesRouter = require('./routes/categories');

require('dotenv').config();


/* Mongoose*/

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/brands', brandsRouter);
app.use('/pieces', piecesRouter);
app.use('/styles', stylesRouter);
app.use('/materials', materialsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
