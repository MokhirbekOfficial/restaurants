const { getAdmin } = require('./model')
const secret_key = 'RESTAURANTS'
const jwt = require('jsonwebtoken')
module.exports = {
    adminChecker: async(req, res) => {
        try {
            let {login, password} = req.body
            let adminData = await getAdmin()
            if(login == adminData.admin_name && password == adminData.admin_password){
                let id = adminData.admin_id
                const token = jwt.sign({id}, secret_key)
                return res.json(token)
            }
            res.json('false')
        } catch(e) {
            console.log(e.message)
            res.json(e.message)
        }
    },
    tokenChecker: async(req,res) => {
        try{
            let {token} = req.body
            const decoded = jwt.verify(token, secret_key)
            let adminData = await getAdmin()
            if(decoded.id == adminData.admin_id){
                return res.json('true')
            }
            res.json('false')
        }
        catch(e){
            console.log(e.message)
            res.json(e.message)
        }
    }
}