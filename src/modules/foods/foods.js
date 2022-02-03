const { foods,addFood,deletefood } = require('./model')

module.exports = {
    restaurantFoods: async(req, res) => {
        try {
            let {res_id} = req.body
            const resFoods = await foods(res_id)
            res.json(resFoods)
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    addFood: async(req, res) => {
        try {
            let {food_name,food_cost,food_img,food_res} = req.body
            await addFood(food_name,food_cost,food_img,food_res)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    deleteFood: async(req, res) => {
        try {
            let {food_id} = req.body
            await deletefood(food_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    }
}