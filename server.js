const express = require('express')
const app = express()
const path = __dirname + '/src/'
const router = express.Router()

app.use('/', router)
app.use('/css', express.static(path.join(root)))

router.get('/', function(req, res) {
  res.sendFile(path+'index.html')
})

app.listen(process.env.PORT || 3000)