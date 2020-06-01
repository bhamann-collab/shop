'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('orders', [{
        order_code: 'uhb4qyys',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'j3ihzdo4',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: '94f6h06e',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'pry3o4pu',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'mbusq935',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'l33r0899',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'heyc4trh',
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: '72rsoapf',
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: '64ll68iq',
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'chqq6e2j',
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 'ivtr5p0i',
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        order_code: 's2uwbb39',
        userId: 3,
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