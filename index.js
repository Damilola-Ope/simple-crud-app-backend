//importing mongoose and express and the Custom Model
const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')//
const app = express()

// configuring middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute)

//.send is what displays on the broswer
app.get('/', (req, res)=>{
  res.send("hello from Node API");
})


//connecting to the backend database
mongoose.connect("mongodb+srv://danielope62:ds1eKKeuskM44pRi@backenddb.yp34dqv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(()=>{
  console.log('Connected to the database!')

  //hosting the server
  app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
  })
})
.catch(()=>{
  console.log('connection Failed')
})