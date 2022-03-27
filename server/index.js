const path = require('path')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({
    path: path.join(__dirname, '../.env'),
  })
}

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', router)

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENDID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
})

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body
  // console.log(name, email, message)
  const mailOptions = {
    from: name,
    to: process.env.EMAIL,
    subject: 'Nodemailer API Contact Form Submission from ' + name,
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  }

  contactEmail.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err)
      res.json({ status: 'ERROR' })
    } else {
      console.log(data)
      res.json({ status: 'Message Sent' })
    }
  })
})


//Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    )
  })
} else if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => res.send('Please set to production'))
}

// contactEmail.verify((error, success) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(success)
//   }
// })

app.listen(5000, console.log(`Server lisining to port ${PORT}`))
