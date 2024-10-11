const {Schema,model, default: mongoose} = require('mongoose');

const ReviewSchema = new mongoose.Schema ({
   Comment: {tppe: String, reqired: true},
   rating: {type: Number, reqired: true},
   userId: {type: mongoose.Schema.Types.ObjectId, ref: "Users", reqired: true},
   productId: {type: mongoose.Schema.Types.ObjectId, ref: "product", reqired: true}
}, {timestamps: true})

const Reviews = mongoose.model("Review", ReviewSchema);

module.exports = Reviews