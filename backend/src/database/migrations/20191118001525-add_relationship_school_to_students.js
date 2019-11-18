'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('students', 'school_id', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'schools', key:'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('students', 'school_id');

  }
};
