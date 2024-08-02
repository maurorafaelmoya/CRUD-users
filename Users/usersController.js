const { request, response } = require("express");
const UserService = require("./userService");

const userService = new UserService;


class UserController{

    async newUserController(req= request, res= response){
        const { text } = req.body

        const { code, data, msg} = await userService.isPalindromeService(text)
        
        res.status(code).json({code: 200, msg:msg , data: data})

    }

}


module.exports = UserController

