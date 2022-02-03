const { fetch, fetchAll } = require('../../lib/postgress')

const GetAdmin = `
    SELECT
        *
    FROM
        superadmin
`
const getAdmin = () => fetch(GetAdmin)

module.exports = {
    getAdmin
}