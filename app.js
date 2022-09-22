const path = require('path');
const express = require('express');
const ejs = require('ejs');
const app = express();
//Template Engine
app.set('view engine', 'ejs');
//Middlewares
app.use(express.static('public'));
const port = 3000;
//Routes
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, "temp/index.html"))
  res.render('index');
});
app.get("/about", (req, res) => {
    res.render('about');
})
app.get("/add", (req, res) => {
    res.render('add')
})
app.listen(port, () => console.log(`Server listening on port ${port}`));
