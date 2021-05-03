const mongoose = require('mongoose');

// HomeAnnouncement Schema
const HomeAnnouncementSchema = mongoose.Schema ({
    equippedKitchen: {
        type: Boolean,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    garden: {
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

const HomeAnnouncement = mongoose.model('HomeAnnouncement', HomeAnnouncementSchema);
module.exports = HomeAnnouncement;