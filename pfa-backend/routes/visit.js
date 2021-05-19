const express = require('express');
const router = express.Router();
const Visit = require('../models/visit.model');

// get Visit by id
router.get('/:id', function(req, res, next) {
    Visit.findById(req.params.id, function (err, Visit) {
        if (err) return next(err);
        res.json(Visit);
    });
});
// get all Visits
router.get('/', function(req, res, next) {
    Visit.find({}, function (err, Visit) {
        if (err) return next(err);
        res.json(Visit);
    });
});  
// post Visit
router.post('/', function(req, res, next) {
    

        Visit.create(req.body, function (err, Visit) {
            if (err) {
                return next(err);
            }
            res.json(Visit);
        });
    
});

//update Visit
router.put('/:id', function(req, res, next) {
    Visit.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, Visit) {
        if (err) return res.status(500).send({ message: 'update fail'});
        res.json({
            msg: "successfully updated"
        });
    });
});

//delete Visit
router.delete('/:id', function(req, res, next) {
    Visit.findByIdAndDelete(req.params.id, function (err, Visit) {
        if (err) return res.status(500).send({ message: 'delete fail'});
        res.json({
            Visit : Visit,
            msg: "successfully deleted"
        });
    });
});

module.exports = router;