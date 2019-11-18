const { Model, DataTypes } = require('sequelize');

class Student extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            disability: DataTypes.STRING,
            age: DataTypes.INTEGER,
            comments: DataTypes.STRING,
            medical_report: {
                type: DataTypes.STRING,
                defaultValue: 'Não possui',
            }
        }, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Class, { foreignKey: 'class_id', as: 'class' });
        this.belongsTo(models.School, { foreignKey: 'school_id', as: 'school' });
        this.hasMany(models.Post, { foreignKey: 'student_id', as: 'posts' });
    }
}

module.exports = Student;