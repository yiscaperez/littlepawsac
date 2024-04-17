const port = process.env.PORT || 6135;
const fs = require('fs');
const path = require('path');
const session = require('express-session');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs'); 
app.use(
    express.json(), 
    express.urlencoded({ extended: false }), 
    express.static(path.join(__dirname, 'public')), 
    session({
        secret: 'TbDwE2JH5jWsN6uPzFhYp',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/index'));
});

app.get('/index', (req, res) => {
            res.render('index');
        });

        app.get('/browsePets', (req, res) => {
            res.render('browsePets');
        });

        app.get('/catCare', (req, res) => {
            res.render('catCare');
        });

        app.get('/dogCare', (req, res) => {
            res.render('dogCare');
        });

        app.get('/findDogCat', (req, res) => {
            res.render('findDogCat');
        });

        app.get('/giveaway', (req, res) => {
            res.render('giveaway');
        });

        app.get('/privacyDisclaimer', (req, res) => {
            res.render('privacyDisclaimer');
        });

        app.get('/contact', (req, res) => {
            res.render('contact'); 
        });

        app.post('/createAccount', (req, res) => {
            const { username, password } = req.body;
        });

app.listen(port, () => console.log(`Server running on http://localhost:${port}/index`));


