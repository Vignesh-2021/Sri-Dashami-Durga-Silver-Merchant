const {Schema,model, default: mongoose} = require('mongoose');

const ProductSchema = new mongoose.Schema ({
    name: {
        type: String, required: true
    },
    category: String,
    description: String,
    price: {
        type: Number, required: true
    },
    OldPrice: Number,
    image: String,
    rating: {
        type: Number, default: 0
    },
    author: {type: mongoose.Types.ObjectId, ref: "user", required: true }
})

const Products = mongoose.model("Product", ProductSchema);

module.exports = Products