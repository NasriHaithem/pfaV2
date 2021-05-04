var express = require('express');
var router = express.Router();
var multer  = require('multer');
var Announcement = require('../models/announcement.model');

// Save file to server storage
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});

// get announcement by id
router.get('/:id', function(req, res, next) {
    Announcement.findById(req.params.id, function (err, announcement) {
        if (err) return next(err);
        res.json(announcement);
    });
});
// get all announcements
router.get('/', function(req, res, next) {
    Announcement.find({}, function (err, announcement) {
        if (err) return next(err);
        res.json(announcement);
    });
});  
// post announcement
router.post('/', upload.single('image'), function(req, res, next) {
    if(!req.file) {
        return res.status(500).send({ message: 'Upload fail'});
    } else {
        req.body.imageUrl = 'http://localhost:3000/images/' + req.file.filename;
        Announcement.create(req.body, function (err, announcement) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json(announcement);
        });
    }
});

//update announcement
router.put('/:id', function(req, res, next) {
    Announcement.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, announcement) {
        if (err) return res.status(500).send({ message: 'update fail'});
        res.json({
            msg: "successfully updated"
        });
    });
});

//delete announcement
router.delete('/:id', function(req, res, next) {
    Announcement.findByIdAndDelete(req.params.id, function (err, announcement) {
        if (err) return res.status(500).send({ message: 'delete fail'});
        res.json({
            announcement : announcement,
            msg: "successfully deleted"
        });
    });
});
module.exports = router;