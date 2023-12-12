const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) =>{
    res.send(`<h1>Welcome to login page!</h1>
    <form action="/login" method="POST">
        <input type="text" placeholder="Username" id="username" name="username">
        <button type="submit">Add user!</button>
    </form>
    `);
});

router.get('/', (req, res, next) =>{
    res.send(`<h1>Welcome to Home page!</h1>
    <form action="/login" method="GET">
        <button type="submit">Add user!</button>
    </form>
    `);
});

router.post('/login', (req, res, next) =>{
    // localStorage.setItem(req.body.username, 'Manish Mandal') 
    // console.log(req.body);
    res.redirect(`/message?name=${req.body.username}`);
})

module.exports = router;