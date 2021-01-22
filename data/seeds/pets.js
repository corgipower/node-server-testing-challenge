exports.seed = async function(knex) {
	await knex("pets").truncate()
	await knex("pets").insert([
		{ name: "ares" },
		{ name: "kiwi" },
		{ name: "maple" },
		{ name: "henry" },
		{ name: "bear" },
	])
}
