const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();


// Paths
const viewsPath = path.join(__dirname,'/templates/views');
const partialsPath = path.join(__dirname, '/templates/partials');
const publicPath = path.join(__dirname, '/public');


//Basic App Setting
app.use(express.static(publicPath));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);


// routes
app.get('/', (req, res)=>{
    res.render('home');
});

app.get('/about', (req, res)=>{
    res.render('about');
});

app.get('/weather', (req, res)=>{
    res.render('weather');
});

app.get('*', (req, res)=>{
    res.render('error');
});



app.listen(8000, ()=>{
    console.log('App is running on Port 8000');
});