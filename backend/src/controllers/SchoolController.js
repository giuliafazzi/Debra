const School = require('../models/School');

module.exports = {
    async store(req, res) {
        const { name, city, state } = req.body;

        const school = await School.create({ name, city, state });

        return res.json(school);
    },

    async index(req, res) {
        const schools = await School.findAll();

        return res.json(schools);
    }
}