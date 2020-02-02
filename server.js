var express = require('express');
var nodemailer = require('nodemailer');
const next = require('next')
var  bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const mailer = require('./mailer')
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rakeshtagadghar@gmail.com', 
        pass: 'T@gadrak12'
    }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


app.prepare().then(() => {
    const server = express();

    server.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.all('*', (req, res) => {
        return handle(req, res)
      })

      server.post('/api/contact', (req, res) => {
        const { email = '', name = '', message = '' } = req.body
    
        mailer({ email, name, text: message }).then(() => {
          console.log('success')
          res.send('success')
        }).catch((error) => {
          console.log('failed', error)
          res.send('badddd')
        })
      })
    
      server.get('*', (req, res) => {
        return handle(req, res)
      })
      server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
      })
})
