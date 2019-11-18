'use strict';

const categories = require('../../config/categories');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('posts', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        content: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        category: {
          type: Sequelize.ENUM(categories),
          allowNull: false,
        },
        student_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'students', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('posts');
  }
};
