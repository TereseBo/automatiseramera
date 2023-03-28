//npm const { describe } = require('node:test');
const request = require('supertest');
const { server } = require('./server');

describe('server routes testing suite', () => {
    test('/register should return 201 OK if body ok', async () => {
        const res = await request(server).post('/register').send({ username: 'admin', password: '1234' });
        expect(res.status).toBe(201)
    });

    test('/register should return 400 if body bad', async () => {
        const res = await request(server).post('/register').send({})
        expect(res.status).toBe(400)
    });

    test('/login should return 200if  body is ok', async () => {
        const res = await request(server).post('/login').send({ username: "admin", password: "1234" })
        expect(res.status).toBe(200)
    });

    test('/login should return 400 if body is missing', async () => {
        const res = await request(server).post('/login').send( {})
        expect(res.status).toBe(400)
    });
});