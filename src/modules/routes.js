const { Router } = require('express')
const router = new Router()

const home = require('./home/home')
const foods = require('./foods/foods')
const order = require('./orders/order')
const admin = require('./admin/admin')
router
    .get('/', home.fastFoodRestaurants)
    .get('/milliy', home.milliyRestaurants)
    .get('/orders', order.getOrders)
    .get('/allres', home.getAllRes)

    .post('/foods',foods.restaurantFoods)
    .post('/neworder',order.addNewOrder)
    .post('/login', admin.adminChecker)
    .post('/token', admin.tokenChecker)
    .post('/addres', home.addRes)
    .post('/addfood', foods.addFood)

    .delete('/foods', foods.deleteFood)
    .delete('/', home.deleteRestaurants)
    .delete('/orders', order.deleteOrders)

module.exports = router