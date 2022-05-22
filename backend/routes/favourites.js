
const router = require("express").Router();
let Favourite = require("../models/Favourites");

/*http://localhost:5000/favourites/add */ 

router.route("/create").post((req,res)=>{

    const productName = req.body.productName;
    const price = req.body.price;
    const manufacDate = req.body.manufacDate;
    const description = req.body.description;
    const image = req.body.image;
    

const newFavourite = new Favourite({

    productName,
    price,
    manufacDate,
    description,
    image,

})

newFavourite.save().then(()=>{
    res.json("Favourite added")

}).catch((err)=>{
    console.log(err);
})


})

/*http://localhost:5000/favourite */

router.route("/").get((req,res)=>{

    Favourite.find().then((favourites)=>{
        res.json(favourites)
    }).catch((err)=>{
        console.log(err)
    })

})

/*http://localhost:5000/favourite/delete/ */

router.route("/delete/:id").delete(async (req, res) =>{
    let favouriteID = req.params.id;

    await Favourite.findByIdAndDelete(favouriteID)
    .then(()=>{
        res.status(200).send({status: " Deleted"});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Deleting Err",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let favouriteID = req.params.id;

    const favourite = await Favourite.findById(favouriteID)
    .then((favourite)=>{
        // res.status(200).send({status: "Product fetched", Product: Product});
        res.json(favourite);
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Fetching the Err",error: err.message});
    })
})

module.exports = router;