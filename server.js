const express = require('express');
const app = express();
const mongoose = require('./config/db');
const db = mongoose.connection;
const cors=require('cors');
app.use(cors)
db.once('open', function() {
  console.log("Database Connected Successfully");
});

app.listen(3000, () => {
    console.log("Server connected to localhost!")
})
app.use(express.json());

app.use('/', require('./router/index'));