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
 let query = db.query(sql, post,(err, result) =>{
  if(err) throw err;
   console.log(result); 
 });
 
  if(query){console.log('Customer successfully inserted into database.')};
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
}; //end newClient

//Display clients in database.
app.get('/allClients/', clientel);

 function clientel(request, response){
      let customers = [];
      let customerInfo = [];
     let sql = 'SELECT * FROM clients';
     let query = db.query(sql, (err, results) =>{
     
  if(err) throw err;
   customers = results;
  console.log(customers);

for (var i = 0; i < customers.length; i++) {
    customerInfo[i] = {
               'Status': 'Active Customer',
               'First Name': customers[i].firstName,
               'Last Name':  customers[i].lastName,
               'Email': customers[i].email,
               'Street Address': customers[i].streetAddress,
               'Suite': customers[i].suite,
               'City': customers[i].city,
               'State': customers[i].state,
               'Zip Code': customers[i].zipCode,
               'Phone Number': customers[i].phoneNumber
  };
};
  response.send(customerInfo);
 }); //end query

  return false;
}; //end clientel