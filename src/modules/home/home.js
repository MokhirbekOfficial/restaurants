const { allRes, fastFood, milliy, addRestaurant, deleteRes} = require('./model')

module.exports = {
    getAllRes: async(req, res) => {
        try {
            const allRestaurants = await allRes()
            res.json(allRestaurants)
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    fastFoodRestaurants: async(req, res) => {
        try {
            const fastFoodRes = await fastFood()
            res.json(fastFoodRes)
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    milliyRestaurants: async(req, res) => {
        try {
            const milliyRes = await milliy()
            res.json(milliyRes)
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    addRes: async(req, res) => {
        try {
            let {res_name,res_img,res_category} = req.body
            await addRestaurant(res_name,res_img,res_category)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    deleteRestaurants: async(req, res) => {
        try {
            let {res_id} = req.body
            await deleteRes(res_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    }
}