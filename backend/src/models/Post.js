const { Model, DataTypes } = require('sequelize');
const categories = require('../config/categories');

class Post extends Model {
    static init(sequelize) {
        super.init({
            content: DataTypes.STRING,
            category: DataTypes.ENUM(categories),
        }, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Student, { foreignKey: 'student_id', as: 'student' });
    }
}

module.exports = Post;