const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user')
const session = require('express-session');

router.use(session({
    saveUninitialized: true,
    resave: false,
    secret: "Shh, its a secret!"}))

router.get('/', (req, res)=>{
    res.render('login',{title:"Login"})
}
);

router.post('/', async (req, res)=>{
    let username = req.body.login;
    let password = req.body.password;
    
    if(username && password) {
        const user = await User.findOne({where:{uname:username}},(err, result)=>{
            console.log("--result " + result)
        });
        
        if(user === null){
            res.redirect('login')
        }else {
            const uhash = user.password;
            const hashedPassword = await bcrypt.compare(password, uhash)
            if(hashedPassword == true) {
                req.session.username = username
                console.log("--req.session " + req.session.username)
                res.redirect('/')
            } else {
                res.redirect('login')
                console.log('Wrong password')
            }
        }            // if(dat)
       }   // res.end()
        });

module.exports = router;