var Product=require('../models/book');
var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/library',{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
var db = mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection Successful!")});

var products=[
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0a/Monopoly_ps3.jpg',
    title:'Shopping',
    description:'Awesome game',
    price:10
}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0a/Monopoly_ps3.jpg',
    title:'funBusiness',
    description:'Awesome game',
    price:10
}),

new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0a/Monopoly_ps3.jpg',
    title:'Gaming',
    description:'Awesome game',
    price:10
}),

new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/0/0a/Monopoly_ps3.jpg',
    title:'Amazing',
    description:'Awesome game',
    price:10
})
];
var done=0;

for(var i=0;i<products.length;i++)
{
   products[i].save(function(err,result)
   {
        done++;
        
        if(done===products.length)
          exit();
        
        console.log(products.length,"successful");
   });
}
function exit()
{
    mongoose.disconnect();
}

