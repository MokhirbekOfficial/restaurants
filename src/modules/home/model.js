const { fetch, fetchAll } = require('../../lib/postgress')

const AllRes = `
    SELECT
        res_id,
        res_name
    FROM
        restaurants
`
const FastFood = `
    SELECT
        *
    FROM
        restaurants
    where 
        res_category = '52005c4c-8412-4882-8b93-695751ebf3f4'
`
const Milliy = `
    SELECT
        *
    FROM
        restaurants
    where 
        res_category = '6c4fc00f-4b41-451b-a96e-2cbb66bf5088'
`
const AddRes= `
    INSERT INTO 
        restaurants
        (res_name,res_img,res_category)
    VALUES
        ($1,$2,$3)
`
const DeleteRes = `
    DELETE 
    FROM
        restaurants
    WHERE
        res_id = $1
`

const allRes = () => fetchAll(AllRes)
const fastFood = () => fetchAll(FastFood)
const milliy = () => fetchAll(Milliy)
const addRestaurant = (res_name,res_img,res_category) => fetch(AddRes,res_name,res_img,res_category)
const deleteRes = (res_id) => fetch(DeleteRes,res_id)

module.exports = {
    allRes,
    fastFood,
    milliy,
    addRestaurant,
    deleteRes
}