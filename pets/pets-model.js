const db = require("../data/config");

function find() {
	return db.select('*').from('pets');
}

function findById(id) {
	return db.select('*').from('pets').where('id', id);
}

async function create(data) {
	return db.insert(data).into('pets');
}

function remove(id) {
	return db.select('*').from('pets').where('id', id).del();
}

module.exports = {
	find,
	findById,
	create,
	remove,
}