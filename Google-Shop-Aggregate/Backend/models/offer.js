const mongoose = require('mongoose');

const OfferSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, maxLength: 50 },
    body: { type: String, required: true, maxLength: 750 },
    link: { type: String, required: true },
    price: { type: Number, required: true},
    review: { type: mongoose.ObjectId }
    },
);

module.exports = mongoose.model('Offer', OfferSchema);