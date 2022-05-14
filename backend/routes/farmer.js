const router = require("express").Router();
let Farmer = require("../models/Farmer");

/*http://localhost:5000/farmer/add */ 

router.route("/create").post((req,res)=>{

    const username = req.body.username;
    const email = req.body.email;
    const phoneno = req.body.phoneno;
    const password = req.body.password;
    const state = req.body.state;
    

const newFarmer = new Farmer({

    username,
    email,
    phoneno,
    password,
    state,

})

newFarmer.save().then(()=>{
    res.json("Farmer added")

}).catch((err)=>{
    console.log(err);
})


})

/*http://localhost:5000/Farmer */

router.route("/").get((req,res)=>{

    Farmer.find().then((Farmers)=>{
        res.json(Farmers)
    }).catch((err)=>{
        console.log(err)
    })

})


/*http://localhost:5000/Farmer/update/ */

router.route("/update/:id").put(async (req, res) =>{
    let FarmerID = req.params.id;
    const { username,email,phoneno,password,state} = req.body;

    const updateFarmer = {
        username,
        email,
        phoneno,
        password,
        state,
    
       

    }

    const update = await Farmer.findByIdAndUpdate(FarmerID,updateFarmer)
    .then(()=>{
        res.status(200).send({status: "Farmer Updated"})
        
    }).catch((err) =>{
        console.log(err)
        res.status(500).send({status:"Updating data Err",error: err.message});
    })
})


/*http://localhost:5000/Farmer/delete/ */

router.route("/delete/:id").delete(async (req, res) =>{
    let FarmerID = req.params.id;

    await Farmer.findByIdAndDelete(FarmerID)
    .then(()=>{
        res.status(200).send({status: "Farmer Deleted"});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Deleting Err",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let FarmerID = req.params.id;

    const Farmer = await Farmer.findById(FarmerID)
    .then((Farmer)=>{
        // res.status(200).send({status: "Farmer fetched", Farmer: Farmer});
        res.json(Farmer);
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Fetching Err",error: err.message});
    })
})

module.exports = router;