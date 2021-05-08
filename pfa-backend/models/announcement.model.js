const mongoose = require('mongoose');

// Announcement Schema
const AnnouncementSchema = mongoose.Schema ({
    ownerId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        //required: true
    },
    title: {
        type: String,
        //required: true
    },
    sqm: {
        type: Number,
        //required: true
        //surface
    },
    type: {
        type: String,
        //required: true
        //house or appartment or studio
    },
    availability: {
        type: Boolean,
        //required: true
    },
    state: {
        type: String,
        //required: true
    },
    city: {
        type: String,
        //required: true
    },
    street: {
        type: String,
        //required: true
    },
    price: {
        type: Number,
        //required: true
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
        //required: true
        //kifeh tkoun fil conception
    },
    secondaryImagesUrl: {
        type: [String],
        //required: true
        //kifeh tkoun fil conception
    },
    uploaded: { type: Date, default: Date.now },
    
    //children attributes
    rooms: {
        type: Number,
        //home
    },
    baths: {
        type: Number,
        //home
    },
    garden: {
        type: Boolean,
        //home
    },
    equippedKitchen: {
        type: Boolean,
        //home apartment
    },

    floor: {
        type: Number,
        //studio apartment
    },
    elevator: {
        type: Boolean,
        //stdio apartment
    },
    
    /*TODO: nzidou attibuts hethom
                    surface, description, momkin nzidou barcha tsawir
    */
});

const Announcement = mongoose.model('Announcement', AnnouncementSchema);
module.exports = Announcement;