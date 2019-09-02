const express = require("express");
const router = express.Router();
const Users = require('../modals/User');

router.get('/getAll/:email', (req,res)=>{
    const email = req.params.email;
    const users = Users.find({email,age:{$gt:19}});
    users.then((allU)=>{
        console.log(allU)
        res.send({result: allU})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})


router.get('/search/:name', (req,res)=>{
const name = req.params.name;
    const users = Users.find({name});
    users.then((allU)=>{
        console.log(allU)
        res.send({result: allU})
    }).catch((e)=>{
        res.send({message:e.message})
    })
})


router.post("/add", (req, res) => {
    const email=req.body.email;
    console.log('email========>',email)
    const user = new Users(req.body);
    user.save()
    .then(() => res.send({message: "User inserted successfully!"}))
    .catch(e => res.send({message: e.message}))
})
module.exports=router;