const knex = require("knex")({
    client : "mysql",
    connection : {
        database : "login_sign_up",
        host : "localhost",
        user : "root",
        password : "Bhupendra@123"
    }
})

knex.schema.hasTable("user_data").then(function(exists){
    if (!exists){
        knex.schema.createTable("user_data",(table)=>{
            table.increments("id")
            table.string("name").notNullable()
            table.string("user_name").notNullable();
            table.string("password").notNullable();
            table.string("email").unique().notNullable()
        }).then(data=>{
            console.log("table created")
        })
    }

})






module.exports = knex
