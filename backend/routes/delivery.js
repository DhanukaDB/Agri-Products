const router = require("express").Router();
let Delivery = require("../models/Delivery");



//Add Delivery
router.route("/add").post((req,res) => {
    const fullname = req.body.fullname;
    const phoneno  = Number(req.body.phoneno);
    const buildingNo   = req.body.buildingNo;
    const street   = req.body.street;
    const city   = req.body.city;
    const province   = req.body.province;
    
    const newDelivery = new Delivery({
        fullname,
        phoneno,
        buildingNo,
        street,
        city,
        province,
       
    })

    newDelivery.save().then(() => {
         res.json("Delivery Added")

    }).catch((err) => {
        console.log(err);
    })
  
})



//get all delivery addresses
router.route("/").get((req,res) => {
     
    Delivery.find().then((delivery) => {
        res.json(delivery)

    }).catch((err) => {
        console.log(err)
    })


})


//update Delivery address using an ID
router.route("/update/:id").put(async (req, res) => {
      let userId = req.params.id;
      const {fullname,phoneno,buildingNo,street,city,province} = req.body;

      const updateDelivery = {
          fullname,
          phoneno,
          buildingNo,
          street,
          city,
          province
      }


      const update = await Delivery.findByIdAndUpdate(userId, updateDelivery).then(() => {
        res.status(200).send({status: "Delivery address updated"})
      }).catch((err) => {
          console.log(err);
          res.status(500).send({status: "Error with updating data", error: err.message});
      })   
})



//Delete Delivery Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let userId = req.params.id;
      
      await Delivery.findByIdAndDelete(userId).then(() => {
          res.status(200).send({status: "Delivery address deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete Delivery", error: err.message});
      })
    })


router.route("/get/:id").get(async(req, res) => {

    let userId = req.params.id;
    const user = await Delivery.findById(userId).then((delivery) => {
        res.status(200).send({status: " Delivery Address fetched", delivery})
    }).catch(() => {
         console.log(err.message);
         res.status(500).send({status:"Error with get Delivery address" , error: err.message})
    })
})



module.exports = router;

