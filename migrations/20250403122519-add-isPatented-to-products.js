'use strict';


module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "isPatented", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    });
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "isPatented");
  },
};
