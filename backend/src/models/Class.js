const { Model, DataTypes } = require('sequelize');

class Class extends Model {
    static init(sequelize) {
        super.init({
            year: DataTypes.INTEGER,
            letter: DataTypes.STRING,
        }, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.School, { foreignKey: 'school_id', as: 'school' });
        this.hasMany(models.Student, { foreignKey: 'class_id', as: 'students' });
    }
}

module.exports = Class;