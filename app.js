const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Helbert, lets go projeto TEIA 2024! \n A Grazi é foda')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})