const { Model, DataTypes } = require('sequelize');

class School extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
        }, { sequelize })
    }

    static associate(models) {
        this.hasMany(models.Class, { foreignKey: 'school_id', as: 'classes' });
        this.hasMany(models.Student, { foreignKey: 'school_id', as: 'students' });
    }
}

module.exports = School;