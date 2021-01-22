const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");

beforeEach(async () => {
	await db.seed.run();
})

afterAll(async () => {
	await db.destroy();
})

describe('pets db testing', () => {
	it('returns pet names', async () => {
		const res = await supertest(server).get('/pets');
		expect(res.statusCode).toBe(200);
		expect(res.type).toBe('application/json');
        expect(res.body.length).toBe(5);
    })

    it('creates a pet', async () => {
        const res = await supertest(server).post('/pets').send({name: 'tyr'});
        expect(res.statusCode).toBe(201);
        expect(res.body[0]).toBe(6);
    })

    it('deletes a pet', async () => {
        const res = await supertest(server).delete('/pets/4');
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('gone now');
    })
})