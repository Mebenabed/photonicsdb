//import mongoose module
const mongoose = require('mongoose');
//defining ObjectId as a data type
var ObjectId = mongoose.Schema.Types.ObjectId;

//components collection schema
const componentSchema = mongoose.Schema({
	name: String,
	type: {
		type: String,
		enum: ['parameter', 'function','reference'],
		default: 'parameter'
	},
	foundry: String,
	blocks: [String]
});

//definitions collection schema
const definitionSchema = mongoose.Schema({
	name: String,
	function: String,
	specifications: [String]
});

//blocks collection schema
const blockSchema = mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	notes: {
		type: String,
		default: ''
	},
	status:{
		type: String,
		enum: ['up-to-date', '!', 'obsolete'],
		default: '!'
	},
	reference: {
		type: String,
		enum: ['PDK', 'Literature', 'Local'],
		default: 'PDK'
	},
	foundry: String,
	source: String,
	function: String,
	class: String,
	parameters: {
		type: Array,
		default: []
	},
	valuec: {
		type: Array,
		default: []
	},
	valueo: {
		type: Array,
		default: []
  },
});

//foundries collection schema
const foundrySchema = mongoose.Schema({
	name: String,
	notes: String,
	contact:String,
	phone: String,
	mail: String,
	url: String
});

// creating module for schema by passing document as argument
const Foundry = module.exports = mongoose.model('Foundry', foundrySchema);
const Block = module.exports = mongoose.model('Block', blockSchema);
const Definition = module.exports = mongoose.model('Definition', definitionSchema);
const Component = module.exports = mongoose.model('Component', componentSchema);


//create a module assigining find function to GET method by passing callback argument
module.exports.getFoundries = (callback, limit) => {
	Foundry.find(callback).limit(limit);
}

//create a module assigining findById function to GET method by passing id
module.exports.getFoundryById = (id, callback) => {
	Foundry.findById(id, callback);
}

//create a module assigining create function to ADD method
module.exports.addFoundry = (foundry, callback) => {
	Foundry.create(foundry, callback);
}

//create a module assigning findOneAndUpdate function as an object and passing (document attributes: attributes paths) arguments
module.exports.updateFoundry = (id, foundry, options, callback) => {
	var query = {_id: id};
	var update = {
		name: foundry.name,
		notes: foundry.notes,
		contact: foundry.contact,
		phone: foundry.phone,
		mail: foundry.mail,
		url: foundry.url
	}
	Foundry.findOneAndUpdate(query, update, options, callback);
}

//create a module assigining remove function by passing id argument
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
		notes: block.notes,
		foundry: block.foundry,
		source: block.source,
		function: block.function,
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
		name: component.name,
		foundry: component.foundry,
		blocks: component.blocks
	}
	Component.findOneAndUpdate(query, update, options, callback);
}

// Delete Component
module.exports.removeComponent = (id, callback) => {
	var query = {_id: id};
	Component.remove(query, callback);
}
