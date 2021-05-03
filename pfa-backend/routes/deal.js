const express = require('express');
const router = express.Router();
const Deal = require('../models/deal.model');

// get Deal by id
router.get('/:id', function(req, res, next) {
    Deal.findById(req.params.id, function (err, Deal) {
        if (err) return next(err);
        res.json(Deal);
    });
});
// get all Deals
router.get('/', function(req, res, next) {
    Deal.find({}, function (err, Deal) {
        if (err) return next(err);
        res.json(Deal);
    });
});  
// post Deal
router.post('/', function(req, res, next) {
    

        Deal.create(req.body, function (err, Deal) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(Deal);
        });
    
});

//update Deal
router.put('/:id', function(req, res, next) {
    Deal.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, Deal) {
        if (err) return res.status(500).send({ message: 'update fail'});
        res.json({
            msg: "successfully updated"
        });
    });
});

//delete Deal
router.delete('/:id', function(req, res, next) {
    Deal.findByIdAndDelete(req.params.id, function (err, Deal) {
        if (err) return res.status(500).send({ message: 'delete fail'});
        res.json({
            Deal : Deal,
            msg: "successfully deleted"
        });
    });
});

module.exports = router;