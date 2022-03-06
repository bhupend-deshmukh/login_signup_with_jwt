const jwt = require("jsonwebtoken");

const genratetoken = (data) =>{
    return jwt.sign(data , "bhupend")
}

const veryfytoken = (req,res,next) =>{
    if(req.headers.cookie){
        const token = req .headers.cookie.split("=")[1]
        jwt.verify(token,'bhupend',(err,id)=>{
            if(err){
                console.log('token expired');
                next()
            }
            else{
                req.id = id
                next()
            }
        })
    }
    else{
        next()
    }
}

module.exports = {genratetoken,veryfytoken}
