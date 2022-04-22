let express = require('express');
let productRouter = express.Router();

function routing(routes){
    productRouter.route('/')
        .get(function(req,res){
        res.render('products',{title:'Products Page',products,routes:routes})
    })

    productRouter.route('/details')
        .get(function(req,res){
        res.send('Products Details')
    })

    return productRouter
}


module.exports = routing