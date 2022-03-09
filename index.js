require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Mongoose
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, function (err) {
        if (err) {
            console.log("connect fail : " + err);
        } else {
            console.log("DB connected!!!");
        }
    });

/*
Default Page
*/
const defaultRouter = require('./routes/default.route');
app.get('/', defaultRouter);

app.get('/error', function (req, res) {
    res.render('./pages/404');
});

/*
FOR ADMIN
*/
const adminRouter = require('./routes/admin.route');
app.use('/admin', adminRouter);

// Config Server Port
app.listen(PORT, function () {
    console.log(`Server started on ${PORT}!!!`);
});