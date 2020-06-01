'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('saleItems', [{
        name: 'Blues Shoes',
        price: 23.65,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Rampin Red',
        price: 43.67,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Grumpy Green',
        price: 34.78,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Yum Yellow',
        price: 83.45,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Broken Brown',
        price: 12.12,
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
