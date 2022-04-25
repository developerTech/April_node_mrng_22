let express = require('express');
let productRouter = express.Router();
let mongo = require('mongodb')
let mongodb = mongo.MongoClient;
let url = process.env.mongoUrl

function routing(routes){
    productRouter.route('/')
        .get(function(req,res){
            mongodb.connect(url, function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('april8');
                    dbObj.collection('products').find().toArray(function(err,data){
                        if(err){
                            res.status(500).send('Error While Fetching')
                        }else{
                            res.render('products',{title:'Products Page',products:data,routes})
                        }
                    })
                }
            })
        })

    productRouter.route('/category/:id')  
        .get(function(req,res){
            console.log(">>>",req.params.id)
            let id = Number(req.params.id)
            mongodb.connect(url, function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('april8');
                    dbObj.collection('products').find({category_id:id}).toArray(function(err,data){
                        if(err){
                            res.status(500).send('Error While Fetching')
                        }else{
                            res.render('products',{title:'Products Page',products:data,routes})
                        }
                    })
                }
            })
        })

    productRouter.route('/details/:id')
        .get(function(req,res){
            let id = mongo.ObjectId(req.params.id)
            mongodb.connect(url, function(err,dc){
                if(err){
                    res.status(500).send('Error While Connecting')
                }else{
                    let dbObj = dc.db('april8');
                    dbObj.collection('products').find({_id:id}).toArray(function(err,data){
                        if(err){
                            res.status(500).send('Error While Fetching')
                        }else{
                            res.render('productDetails',{title:data.product_name,products:data,routes})
                        }
                    })
                }
            })
    })

    return productRouter
}


module.exports = routing