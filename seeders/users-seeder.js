'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        name: 'Brock',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Matt',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Claire',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Angelo',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Damien',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
