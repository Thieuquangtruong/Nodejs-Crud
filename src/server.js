// const express = require('express')
import express from "express";
import conFigviewEngine from "./configs/viewEngine";
import initWedRouter from './route/wed';
import initApiRoute from './route/api';
// import connection from './configs/connectDB'
require('dotenv').config()
var morgan = require('morgan')


const app = express()
const port = process.env.PORT || 3000

app.use(morgan('combined'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
conFigviewEngine(app)//goi ham
// init wed route
initWedRouter(app)
// init api route
initApiRoute(app)

// handle 404 not found
app.use((req, res) => {
  return res.render('404.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
