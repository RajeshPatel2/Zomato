const { default: mongoose } = require('mongoose');

const restaurentSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name: { type: String, required: true },
        address: { type: String },
        time: { type: String, default: '9.00AM - 10.00PM' },
        menu: [{
            category: { type: String },
            categoryitems: [
                {
                    item: { type: String },
                    price: { type: Number },
                    veg: { type: Boolean, default: true },
                }
            ]
        }
        ]
    },
);
module.exports = mongoose.model("Resataurents", restaurentSchema);