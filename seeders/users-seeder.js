'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
        name: 'Brock',
        lastName: 'Hamann',
        email: 'brock@brock.com',
        password: 'L)u`uc35?+',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        name: 'Matt',
        lastName: 'Teague',
        password: 'GW--d987UX',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Claire',
        lastName: 'Vandenberg',
        password: '{gy8WwHm2U',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Angelo',
        lastName: 'Ungos',
        password: 'cZN@:&d8y',
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Damian',
        lastName: 'Tapp',
        password: '!4R&-du2gQ',
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
