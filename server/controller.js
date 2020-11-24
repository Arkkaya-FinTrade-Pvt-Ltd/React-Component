const express = require('express')
var router = express.Router()
var ObjectID = require('mongoose').Types.ObjectId


var { Formdata } = require('./model')


router.get('/', (req, res) => {
    Formdata.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while retrieving all records : ' + JSON.stringify(err, undefined, 2))
    })
})

router.post('/', (req, res) => {
    var newRecord = new Formdata({
        Name_of_the_Applicant: req.body.Name_of_the_Applicant,
        Place_of_incorporation: req.body.Place_of_incorporation,
        Date_of_incorporation: req.body.Date_of_incorporation,
        Date_of_commencement_of_business: req.body.Date_of_commencement_of_business,
        PAN: req.body.PAN,
        Status : req.body.Status
    })

    newRecord.save((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Error while creating new record : ' + JSON.stringify(err, undefined, 2))
    })


})
