const userController = require('../services/userService');

module.exports = {
    getUserAll: async(req, res) => {
        let json = {error:'', result:[]};
        let tbl_user = await userService.getUserAll();
        
        for(let i in tbl_user){
            json.result.push({
                id: tbl_user[i].id,
                name: tbl_user[i].name
            });
        }
        res.json(json);
    }
}