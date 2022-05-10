const router = require("express").Router();
let Customer = require("../models/Customer");



//Add Customer
router.route("/add").post((req,res) => {
    const username = req.body.username;
    const email    = req.body.email;
    const phoneno  = Number(req.body.phoneno);
    const password   = req.body.password;
    
    if(!username || !email || !phoneno || !password){
        return res.status(422).json({error:"please add all the feilds"})

    }
     

    Customer.findOne({email: email})
    .then((savedCustomer) => {
        if(savedCustomer) {
            return res.status(422).json({error:"user already exists with that email"})
        }

    const newCustomer = new Customer({
        username,
        email,
        phoneno,
        password,
       
    })

    newCustomer.save().then(() => {
         res.json("Customer Added")

    }).catch((err) => {
        console.log(err);
    })
  
}).catch((err) =>{
    console.log(err);
})
})



router.route("/").get((req,res) => {
     
    Customer.find().then((customers) => {
        res.json(customers)

    }).catch((err) => {
        console.log(err)
    })


})


//update Customer using an ID
router.route("/update/:id").put(async (req, res) => {
      let userId = req.params.id;
      const {username,email, phoneno,password} = req.body;

      const updateCustomer = {
          username,
          email,
          phoneno,
          password
      }


      const update = await Customer.findByIdAndUpdate(userId, updateCustomer).then(() => {
        res.status(200).send({status: "Customer updated"})
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with updating data", error: err.message});
      })   
})



//Delete Customer Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Customer.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "Customer deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete Customer", error: err.message});
      })
    })


router.route("/get/:id").get(async(req, res) => {

    let userId = req.params.id;
    const user = await Customer.findById(userId).then((customer) => {
        res.status(200).send({status: " Customer fetched", customer})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get Customer" , error: err.message})
    })
})


router.route("/get/:email").get((req, res) => {

    Customer.findOne({email:email})
     .then((customer) => {
        res.status(200).send({status: " Customer fetched", customer})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get user" , error: err.message})
    })
})




router.route("/signin").post((req,res) => {
{/*const email = req.body.email;
const password     = req.body.password; */}
const username = req.body.username;
    const email    = req.body.email;
    const phoneno  = Number(req.body.phoneno);
    const password   = req.body.password;
    
    const newCustomer = new Customer ({
        username,
        email, 
        phoneno,
        password,

    })

 if(!email || !password){
     res.status(422).json({error:"Please add email or password"})
 }
 Customer.findOne({email:email})
  .then(savedCustomer =>{
      if(!savedCustomer){
         return  res.status(422).json({error:"Invalid Email or Password"})

      }

      Customer.findOne({password:password})
      .then(savedCustomer =>{
        if(savedCustomer){
             {/* res.json({message:"successfully signed in"}) */}

             res.json(Customer);
            
            
          }
          else{
              return res.status(422).json({error:"Invalid Email or Password"})
          }
      })
    .catch(err=>{
        console.log(err)
    })

  })
})



module.exports = router;

