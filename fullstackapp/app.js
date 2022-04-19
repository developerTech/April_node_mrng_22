let express = require('express');
let app = express()
let port = 9700;



//default Route
app.get('/',function(req,res){
    res.send('Home Page')
})

//category Route
app.get('/category', function(req,res){
    res.send('Category Route')
})

//products Route
app.get('/products', function(req,res){
    res.send('Products Route')
})


app.listen(port, function(err){
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`)
    }
})