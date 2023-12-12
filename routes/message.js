const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/message', (req, res, next) =>{
    res.send(`
    <h1>Welcome to Chat page!</h1>
    <form action="/message?name=${req.query.name}" method="POST">
        <input type="text" placeholder="Message" id="message" name="message">
        <button type="submit">Send Message!</button>
    </form>
    
    <script>
      // Retrieve data from local storage and fill the form
      const storedMessage = localStorage.getItem('message');

      if (storedMessage) {
        document.getElementById('message').value = storedMessage;
      }

      // Store data in local storage when the form is submitted
      document.querySelector('form').addEventListener('submit', function(event) {
        const message = document.getElementById('message').value;
    
        // Store data in local storage
        localStorage.setItem("${req.query.name}", message);
    });
    </script>
    `);
})

router.post('/message', (req, res, next) =>{
    console.log(req.query.name);
    console.log(req.body.message);
    res.redirect('/message');
})

module.exports = router;