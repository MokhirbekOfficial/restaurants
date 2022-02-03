const { fetch, fetchAll } = require('../../lib/postgress')

const AddOrder = `
    INSERT INTO 
        orders
            (order_res_id,owner_name,owner_tel,owner_location,order_time,order_cost,order_discription)
    VALUES
        ($1,$2,$3,$4,$5,$6,$7)
`
const GetOrders = `
    SELECT
        order_id,
        owner_name,
        owner_tel,
        owner_location,
        order_time,
        order_cost,
        order_discription,
        res_name
    FROM
        orders
    LEFT JOIN restaurants
        ON res_id = order_res_id
    ORDER BY order_id
`
const DeleteOrder = `
    DELETE 
    FROM
        orders
    WHERE
        order_id = $1
`

const addOrder = (order_res_id,owner_name,owner_tel,owner_location,order_time,order_cost,order_discription) => fetch(AddOrder,order_res_id,owner_name,owner_tel,owner_location,order_time,order_cost,order_discription)
const getOrders = ()=> fetchAll(GetOrders)
const deleteOrder = (order_id) => fetch(DeleteOrder,order_id)

module.exports = {
    addOrder,
    getOrders,
    deleteOrder
}