let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let fs = require('fs');
let mysql = require('mysql');
let cors = require('cors');

 let app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.listen(3000,function(){
     console.log('Server started on port 3000...');
});

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iam50yearsold',
  database : 'emailbase'
});
db.connect((err) => {
    if(err){
        throw err;
        }
    console.log('Connected to mysql data base.');
});

app.use(express.static('p5/homePage'));

 //Insert object into Data Base
app.get('/subscriber/:firstName/:lastName/:email/:streetAddress/:suite/:city/:state/:zipCode/:phoneNumber', newClient);
 function newClient(request, response){
    let data = request.params;
    let post = {firstName: data.firstName, lastName: data.lastName, email: data.email, streetAddress: data.streetAddress, suite: data.suite, city: data.city, state: data.state, zipCode: data.zipCode, phoneNumber: data.phoneNumber};
 let sql = 'INSERT INTO clients SET ?';
 let query = db.query(sql, post,(err, result,) =>{
  if(err) throw err;
    console.log(result);
    response.send('Item inserted into table Successfully');
 });
    let clientObject ={
    	Status:'Your Subscription is now Active.',
    	firstName: data.firstName,
    	lastName: data.lastName,
    	Email: data.email,
    	streetAddress: data.streetAddress,
    	suite: data.suite,
    	city: data.city,
    	state: data.state,
    	zipCode: data.zipCode,
    	phoneNumber: data.phoneNumber
    };
    console.log(clientObject);
    response.send(clientObject);
};