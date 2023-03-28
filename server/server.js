const express = require('express');
const server = express();
const joi = require('joi');
server.use(express.json());

const schema = joi.object({
    username: joi.string().min(3).required(),
    password: joi.string().min(3).required(),
});

server.post('/register', (req, res) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        const { username, password } = value;
        res.status(201).send('Hello World!');
    }


});

server.post('/login', (req, res) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    } else {
        const { username, password } = value;
        res.status(200).send('Hello World!');
    }


});

/*     server.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
 */
module.exports.server = server;