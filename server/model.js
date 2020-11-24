const mongoose = require('mongoose')

var Formdata = mongoose.model('PostMessage',
{
    Name_of_the_Applicant : {type:String},
    Place_of_incorporation : {type:String},
    Date_of_incorporation : {type: Date},
    Date_of_commencement_of_business : {type: Date},
    PAN : {type:String},
    Status : {type:String}



},'Formdata')

module.exports = { Formdata}