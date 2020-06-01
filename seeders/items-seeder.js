'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('items', [{
        orderId: 2,
        saleItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 2,
        saleItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 3,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 1,
        saleItemId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 5,
        saleItemId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 5,
        saleItemId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 5,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 8,
        saleItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 7,
        saleItemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 12,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 11,
        saleItemId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 4,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 6,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 7,
        saleItemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 8,
        saleItemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 10,
        saleItemId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 9,
        saleItemId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 11,
        saleItemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 11,
        saleItemId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        orderId: 11,
        saleItemId: 5,
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