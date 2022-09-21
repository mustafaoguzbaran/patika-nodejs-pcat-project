const path = require('path')
const express = require('express');
const app = express();
app.use(express.static('public'))
const port = 3000;
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "temp/index.html"))
})
app.listen(port, () => console.log(`Server listening on port ${port}`));

