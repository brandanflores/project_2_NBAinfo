const router = require('express').Router(); 
const userRoutes = require('./userRoutes'); 
const projectRoutes = require('./projectRoutes'); 

router.use('/users', userRoutes); 
router.use('/projects', projectRoutes); 

module.exports = router;  

const express = require('express'); 
const exphbs = require('express-handlebars'); 

const app = express(); 

app.engine('handlebars', exphbs()); 
app.set('view engine', 'handlebars'); 

app.get('/', (req, res) => {  
    // Data to pass to the view
    const data = { 
        title: 'My App' 
    };

    // Render the 'home' view and pass the data 
    res.render('home', data); 
});

// Register a Handlebars helper 
const handlebars = require('handlebars'); 
handlebars.registerHelper('uppercase', function (str) { 
    return str.toUpperCase(); 
}); 

// Register a Handlebars partial
