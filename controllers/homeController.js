const fs = require('fs')

class homeController{
    static getHome(req, res){
        res.render('./index')
    }

}

module.exports = homeController