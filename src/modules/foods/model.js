const { fetch, fetchAll } = require('../../lib/postgress')

const Foods = `
    SELECT
        *
    FROM
        foods
    where 
        food_res = $1
`

const AddFood= `
    INSERT INTO 
        foods
            (food_name,food_cost,food_img,food_res)
    VALUES
        ($1,$2,$3,$4)
`
const DeleteFood = `
    DELETE 
    FROM
        foods
    WHERE
        food_id = $1
`
const foods = (food_res) => fetchAll(Foods,food_res)
const addFood = (food_name,food_cost,food_img,food_res) => fetch(AddFood,food_name,food_cost,food_img,food_res)
const deletefood = (food_id) => fetch(DeleteFood,food_id)

module.exports = {
    foods,
    addFood,
    deletefood
}