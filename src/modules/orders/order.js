const { addOrder,getOrders,deleteOrder } = require('./model')

module.exports = {
    addNewOrder: async(req, res) => {
        try {
            let {order_res_id,owner_name,owner_tel,owner_location,order_time,order_cost,order_discription} = req.body
            await addOrder(order_res_id,owner_name,owner_tel,owner_location,order_time,order_cost,order_discription)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    getOrders: async(req, res) => {
        try {
            const AllOrders = await getOrders()
            res.json(AllOrders)
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    deleteOrders: async(req, res) => {
        try {
            let {order_id} = req.body
            await deleteOrder(order_id)
            res.json('ok')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    }
}