const express = require('express');
const router = express.Router();
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.get('/', (req, res)=>{
    User.findAll({raw: true}).then(data=>{
        res.render('users/index',{rows:data, title:"Users"});
    }).catch(err=>console.log(err));
})


router.post('/', (req, res, next)=>{
    const name = req.body.username
    const password = bcrypt.hashSync(req.body.password,10)
    User.create({uname:name, password:password}).then(()=>{
        res.redirect('users')
    }).catch(err=>console.log(err))
    console.log(`-name ${name}, password ${password}`)
    
})


router.get('/new', (req, res)=>{
    res.render('users/new',{title:"Registration"});
})
module.exports = router;