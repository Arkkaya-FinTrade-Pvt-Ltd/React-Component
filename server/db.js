const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dharan246:zxcvbnm.2468@cluster0.gtljh.mongodb.net/UserInfo?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })