let express = require('express');
let categoryRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = process.env.mongoUrl

function routing(routes){

    categoryRouter.route('/')
    .get(function(req,res){
        mongodb.connect(url, function(err,dc){
            if(err){
                res.status(500).send('Error While Connecting')
            }else{
                let dbObj = dc.db('april8');
                dbObj.collection('category').find().toArray(function(err,data){
                    if(err){
                        res.status(500).send('Error While Fetching')
                    }else{
                        res.render('category',{title:'Category Page', data:data,routes})
                    }
                })
            }
        })
    })

    categoryRouter.route('/details')
    .get(function(req,res){
        res.send('Category Details')
    })  

    return categoryRouter
}


module.exports = routing