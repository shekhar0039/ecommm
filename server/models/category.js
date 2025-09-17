const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    images: [{ type: String }],
    color: { type: String }
});

categorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

categorySchema.set('toJSON',{
    virtuals:true,
})

const Category = mongoose.model("Category", categorySchema);

module.exports = { Category };

