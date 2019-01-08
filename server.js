const request = require('request')
const express = require('express')

const port = process.env.PORT || 3000
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  let urlToQuery = 'https://pokeapi.co/api/v2/pokemon/totodile'
  request(urlToQuery, function(error, response, body) {
    console.log('error:', error) // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode) // Print the response status code if a response was received
    data = JSON.parse(body)
    console.log(data.name)
    res.render('index', { data: data })
  })
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
})
