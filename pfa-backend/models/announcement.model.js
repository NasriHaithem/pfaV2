const mongoose = require('mongoose');

// Announcement Schema
const AnnouncementSchema = mongoose.Schema ({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        required: true
    },
    type: {
        type: String,
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
    
    //children attributes
    equippedKitchen: {
        type: Boolean,
        //home apartment
    },
    rooms: {
        type: Number,
        //home
    },
    garden: {
        type: Boolean,
        //home
    },

    floor: {
        type: Number,
        //studio apartment
    },
    elevator: {
        type: Boolean,
        //stdio apartment
    },
    

});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);
module.exports = Announcement;