const express = require('express');
const router = express.Router();

// root route
router.get('/', (req, res) => {
  res.render('index', { title: 'Root', message: 'Autumn ... the years last ... loveliest smile!' });
});

// About route
router.get('/about', (req, res) => {
  res.render('about', { title: 'Autumn Leaves', message: 'Autumn ... the years last ... loveliest smile!' });
});






// Form route
router.get('/form', (req, res) => {
  res.render('form', { title: 'Form', message: 'Autumn ... when the weather just went from 90 to 55 like it saw a state trooper!' });
});


 

router.post('/form', (req, res) => {
  const { firstName, email } = req.body;
  res.render('form', {
    title: 'Form Submitted',
    message: `Thank you for your support ${firstName}!`,
    firstName,
    email,
  });
});






// Home route
const imgUrl = '/public/image/autumntrees.jpg'; 
router.get('/home', (req, res) => {
  res.render('home', { imgUrl });
});



router.get("/download", (req, res) => {
  res.download("./public/image/autumntrees.jpg"); 
});








 



module.exports = router;