import express from 'express';
import configViewEngine from './config/ViewEngine.js'
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8080
console.log('>>>check PORT: ' + port)

configViewEngine(app)

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})