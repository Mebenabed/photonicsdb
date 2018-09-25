const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

Block =require('./models/block');

// Connect to Mongoose
mongoose.connect('mongodb://localhost:27017/photonicsdb', { useNewUrlParser: true });
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Photonicsdb: please use /api/collection_name');
});

app.get('/api/blocks/', (req, res) => {
	Block.getBlocks((err, blocks) => {
		if(err){
			throw err;
		}
		res.json(blocks);
	});
});

app.get('/api/blocks/:_id', (req, res) => {
	Block.getBlockById(req.params._id, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

app.delete('/api/blocks/:_id', (req, res) => {
	var id = req.params._id;
	Block.removeBlock(id, (err, block) => {
		if(err){
			throw err;
		}
		res.json(block);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
