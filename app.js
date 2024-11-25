const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// set Pug view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// middleware static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, "public/image"))); 

// body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 


// import routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);


// port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});