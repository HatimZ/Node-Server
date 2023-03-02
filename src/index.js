
const express = require('express');
const path = require('path')

app = express();
const port = process.env.PORT || 8080;

//Logging details of a request
app.use((req,res,next)=>{

  const { method , path} = req;
  console.log(`New request to: ${method} ${path} at ${new Date().toISOString()}` );
  next();


})


//Serving static files in public folder 
const publicPath = path.join(__dirname, './public');
app.use(express.static(publicPath));


app.get('/:name' , (req,res)=> { console.log(`Hello noob ${req.params}`)});

app.get('/respond', (req,res)=> { res.send("Responded")});


app.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
  });