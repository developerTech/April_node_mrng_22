let express = require('express');
let categoryRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let url = process.env.mongoUrl

function routing(routes){

    categoryRouter.route('/')
    .get(function(req,res){
        res.render('category',{title:'Category Page', data:category,routes})
    })

    categoryRouter.route('/details')
    .get(function(req,res){
        res.send('Category Details')
    })  

    return categoryRouter
}


module.exports = routing