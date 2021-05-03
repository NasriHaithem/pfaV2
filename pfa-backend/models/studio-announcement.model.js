const mongoose = require('mongoose');

// StudioAnnouncement Schema
const StudioAnnouncementSchema = mongoose.Schema ({

    floor: {
        type: Number,
        required: true
    },
    elevator: {
        type: Boolean,
        required: true  
    },
    availability: {
        type: Boolean,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    uploaded: { type: Date, default: Date.now },

});

const StudioAnnouncement = mongoose.model('StudioAnnouncement', StudioAnnouncementSchema);
module.exports = StudioAnnouncement;