const mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

const componentSchema = mongoose.Schema({
name: {type: String, required: true}, type: {
	type: String,
	enum: ['parameter', 'function']}
});

const definitionSchema = mongoose.Schema({
name: {type: String, unique:true, required: true}, function: String, specifications: [String]
});

const blockSchema = mongoose.Schema({
name: {type: String, required: true}, status:{type: String, enum: ['active', 'obsolete']}, reference: {type: String, enum: ['process', 'paper']}, foundry: String, class: String, parameters: [String], valuec: [String], valueo: [String]
});

const foundrySchema = mongoose.Schema({
name: {type: String, unique:true, required: true}, contact:String, phone: String, mail: String, url:String
});

const Foundry = module.exports = mongoose.model('Foundry', foundrySchema);
const Block = module.exports = mongoose.model('Block', blockSchema);
const Definition = module.exports = mongoose.model('Definition', definitionSchema);
const Component = module.exports = mongoose.model('Component', componentSchema);


// Get Foundries
module.exports.getFoundries = (callback, limit) => {
	Foundry.find(callback).limit(limit);
}

// Get Foundry
module.exports.getFoundryById = (id, callback) => {
	Foundry.findById(id, callback);
}

// Add Foundry
module.exports.addFoundry = (foundry, callback) => {
	Foundry.create(foundry, callback);
}

// Update Foundry
module.exports.updateFoundry = (id, foundry, options, callback) => {
	var query = {_id: id};
	var update = {
		name: foundry.name,
		contact: foundry.contact,
		phone: foundry.phone,
		mail: foundry.mail,
		url: foundry.url
	}
	Foundry.findOneAndUpdate(query, update, options, callback);
}

// Delete Foundry
module.exports.removeFoundry = (id, callback) => {
	var query = {_id: id};
	Foundry.remove(query, callback);
}

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

// Update Block
module.exports.updateBlock = (id, block, options, callback) => {
	var query = {_id: id};
	var update = {
		name: block.name,
		foundry: block.foundry,
		class: block.class,
		status: block.status,
		reference: block.reference,
		parameters: block.parameters,
		valuec: block.valuec,
		valueo: block.valueo
	}
	Block.findOneAndUpdate(query, update, options, callback);
}

// Delete Block
module.exports.removeBlock = (id, callback) => {
	var query = {_id: id};
	Block.remove(query, callback);
}

// Get Definitions
module.exports.getDefinitions = (callback, limit) => {
	Definition.find(callback).limit(limit);
}

// Get Definition
module.exports.getDefinitionById = (id, callback) => {
	Definition.findById(id, callback);
}

// Add Definition
module.exports.addDefinition = (definition, callback) => {
	Definition.create(definition, callback);
}

// Update definition
module.exports.updateDefinition = (id, definition, options, callback) => {
	var query = {_id: id};
	var update = {
		name: definition.name,
		function: definition.function,
		specifications: definition.specifications
	}
	Definition.findOneAndUpdate(query, update, options, callback);
}

// Delete Definition
module.exports.removeDefinition = (id, callback) => {
	var query = {_id: id};
	Definition.remove(query, callback);
}

// Get Components
module.exports.getComponents = (callback, limit) => {
	Component.find(callback).limit(limit);
}

// Get Component
module.exports.getComponentById = (id, callback) => {
	Component.findById(id, callback);
}

// Add Component
module.exports.addComponent = (component, callback) => {
	Component.create(component, callback);
}

// Update Component
module.exports.updateComponent = (id, component, options, callback) => {
	var query = {_id: id};
	var update = {
		name: component.name
	}
	Component.findOneAndUpdate(query, update, options, callback);
}

// Delete Component
module.exports.removeComponent = (id, callback) => {
	var query = {_id: id};
	Component.remove(query, callback);
}
