const express = require('express');
const router = express.Router();


// Routes

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Home Page'});
});
router.get('/register', (req, res) => {
    res.render('register.html', {title: 'Register Page'});
});
router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contact Page'});
});


module.exports = router;