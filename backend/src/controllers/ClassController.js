const Class = require('../models/Class');
const School = require('../models/School');

module.exports = {
    async store(req, res) {
        const { school_id } = req.params;
        const { year, letter } = req.body;
        
        const school = await School.findByPk(school_id);

        if (!school) {
            return res.status(404).json({ error: 'School not found' });
        }

        const _class = await Class.create({
            year,
            letter,
            school_id,
        });

        return res.json(_class);
    },

    async index(req, res) {
        const { school_id } = req.params;

        const school = await School.findByPk(school_id, {
            include: { association: 'classes' }
        });

        if (!school) {
            return res.status(404).json({ error: 'School not found' });
        }

        return res.json(school.classes);
    }
}
