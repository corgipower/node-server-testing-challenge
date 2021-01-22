const express = require("express");
const pets = require("./pets-model");

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		res.json(await pets.find());
	} catch(err) {
		next(err);
	}
})

router.get('/:id', async (req, res, next) => {
	try {
		const pet = await pets.findById(req.params.id);
		if (!pet) {
			return res.status(404).json({
				message: 'pet isn\'t here',
			});
		}

		res.json(pet);
	} catch (err) {
		next(err);
	}
})

router.post('/', async (req, res, next) => {
	try {
		const pet = await pets.create(req.body);
		res.status(201).json(pet);
	} catch (err) {
		next(err);
	}
})

router.delete('/:id', (req, res) => {
    try{
        pets.remove(req.params.id);
        res.json({
            message: 'gone now',
        })
    }
    catch (err) {
        next(err);
    }
})

module.exports = router