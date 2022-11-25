const db = require('../db');

module.exports = {
    getUserAll: () =>{
        return new Promise((acept, reject)=>{
             db.query('SELECT * FROM tbl_user', (error, results)=>{
                if(error){ reject(error); return;}
                acept(results);
             });   
        });
    }

};