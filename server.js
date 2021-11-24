const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! 12')
})

app.get('/vinhcuto', (req, res) => {
    res.send('vinh cac bu')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})