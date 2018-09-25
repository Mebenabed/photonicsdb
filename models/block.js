const mongoose = require('mongoose');

// Block Schema
const blockSchema = mongoose.Schema({

name: {type: String, required: true},
class: {name :String, function:String, specifications:{parameter:[String],value:[Number]}},
process:String,
foundry:String,
reference:{source:String,	form:{DM:String,Paper:String,VLC:String}}
});

const Block = module.exports = mongoose.model('Block', blockSchema);

// Get Blocks
module.exports.getBlocks = (callback, limit) => {
	Block.find(callback).limit(limit);
}

// Get Block
module.exports.getBlockById = (id, callback) => {
	Block.findById(id, callback);
}

// Add Block
module.exports.addBlock = (block, callback) => {
	Block.create(block, callback);
}

// Delete Block
module.exports.removeBlock = (id, callback) => {
	var query = {_id: id};
	Block.remove(query, callback);
}
