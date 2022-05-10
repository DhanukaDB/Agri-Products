const router = require("express").Router();
let Product = require("../models/Product");

/*http://localhost:5000/product/add */ 

router.route("/create").post((req,res)=>{

    const productName = req.body.productName;
    const category = req.body.category;
    const price = req.body.price;
    const description = req.body.description;
    const manufacDate = req.body.manufacDate;
    const image = req.body.image;
    

const newProduct = new Product({

    productName,
    category,
    price,
    description,
    manufacDate,
    image,

})

newProduct.save().then(()=>{
    res.json("Product added")

}).catch((err)=>{
    console.log(err);
})


})

/*http://localhost:5000/product */

router.route("/").get((req,res)=>{

    Product.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })

})


/*http://localhost:5000/product/update/ */

router.route("/update/:id").put(async (req, res) =>{
    let productID = req.params.id;
    const { productName,category,price,description,manufacDate,image} = req.body;

    const updateProduct = {
        productName,
        category,
        price,
        description,
        manufacDate,
        image,
    
       

    }

    const update = await Product.findByIdAndUpdate(productID,updateProduct)
    .then(()=>{
        res.status(200).send({status: "Product Updated"})
        
    }).catch((err) =>{
        console.log(err)
        res.status(500).send({status:"Updating data Err",error: err.message});
    })
})


/*http://localhost:5000/product/delete/ */

router.route("/delete/:id").delete(async (req, res) =>{
    let productID = req.params.id;

    await Product.findByIdAndDelete(productID)
    .then(()=>{
        res.status(200).send({status: "Product Deleted"});
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Deleting Err",error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) =>{
    let productID = req.params.id;

    const product = await Product.findById(productID)
    .then((product)=>{
        // res.status(200).send({status: "Product fetched", Product: Product});
        res.json(product);
        
    }).catch((err) =>{
        console.log(err.message)
        res.status(500).send({status:"Fetching Err",error: err.message});
    })
})

module.exports = router;