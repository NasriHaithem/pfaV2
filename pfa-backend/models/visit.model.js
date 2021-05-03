const mongoose = require('mongoose');

// Visit Schema
const VisitSchema = mongoose.Schema ({
    visitor: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users',
        required: true
    },
    announcement: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Announcements',
        required: true
    },
    visitDate: {
        type: Date
    },
});

const Visit = mongoose.model('Visit', VisitSchema);
module.exports = Visit;