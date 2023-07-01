const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = 3000

// pakai ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

// built-in middleware

app.use(express.static('public'))

app.get('/', (req, res) => {
  // res.sendFile('./src/index.html', { root: __dirname })
  res.render('index', {
    layout: 'layouts/main-layout',
    title: 'Qurbanz'
  })
})
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'About'
  })
})
app.use('/', (req, res) => {
  res.render('404', {
    layout: 'layouts/main-layout',
    title: 'Not Found'
  })
})
app.listen(port, () => {
  console.log('Running server....')
})
