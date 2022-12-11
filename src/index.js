const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/routes');
const multer = require('multer');
const app = express()

app.use(express.json())
app.use(multer().any())

mongoose.connect('mongodb+srv://hiFunctionup:dpD2Y2FP5bnyaJD3@cluster0.zclrt.mongodb.net/sunil-47',
    { useNewUrlParser: true })

    .then(() => console.log("MongoDb is connected..."))
    .catch(err => console.log(err))



app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});