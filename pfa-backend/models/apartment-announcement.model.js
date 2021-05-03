const mongoose = require('mongoose');
const announcement = require('../models/announcement.model').schema;
// ApartmentAnnouncement Schema
const ApartmentAnnouncementSchema = mongoose.Schema ({
    equippedKitchen: {
        type: Boolean,
        required: true
    },
    announcement: {
        type: announcement,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    elevator: {
        type: Boolean,
        required: true  
    },
    

});

const ApartmentAnnouncement = mongoose.model('ApartmentAnnouncement', ApartmentAnnouncementSchema);
module.exports = ApartmentAnnouncement;