'use strict'

require('dotenv').config()
//console.log(process.env)

var mongoose = require('mongoose');
var app = require('./app');
var user = require('./controllers/user.controller')
var port = 3000;


mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://Grupono4:grupo8@dbhestorhoteles.dxw7rlz.mongodb.net/?retryWrites=true&w=majority' , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        user.initAdmin();
        console.log('connect to DB');
        app.listen( 8080 || port, ()=>{
            console.log('server express running')
        })
    }).catch((err)=>console.log('connection error to DB', err))

    