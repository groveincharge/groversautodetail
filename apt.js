let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let http = require('http');
let fs = require('fs');
let mysql = require('mysql');

 let app = express();


// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
//app.use(bodyParser.json());

app.listen(3050,function(){
     console.log('Server started on port 3050...');
});
let customerList =[];
let subNal = false;
let cusNal =false;
let router = ' ';

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
        console.log('Not Connected to database.')
        }
    console.log('Connected to mysql data base.');
});

app.use(express.static('p5/homePage'));
 //Insert object into Data Base
 app.get('/productClient/:firstname/:lastname/:Email/:streetaddress/:Suite/:City/:State/:zipcode/:phonenumber', productClient);
 function productClient(request, response){
    let data = request.params;
    let post = {firstname: data.firstname, lastname: data.lastname, Email: data.Email, streetaddress: data.streetaddress, Suite: data.Suite, City: data.City, State: data.State, zipcode: data.zipcode, phonenumber: data.phonenumber};
    let sql = 'INSERT INTO productclients SET ?';
    let query = db.query(sql, post,(err, result) =>{
  if(err) throw err;
   console.log(result); 
 });
 };//end productClient

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
       app.get('/allSubscribers/', clientel);
       function clientel(request, response){
                        let firstName = ' ';
                        let lastName = ' ';
                        let email = ' ';
                        let streetAddress = ' ';
                        let suite = ' ';
                        let city = ' ';
                        let state = ' ';
                        let zipCode = ' ';
                        let phoneNumber = ' ';
                        let customers = [];

       let sql = 'SELECT * FROM clients';
       let query = db.query(sql, (err, results) =>{

                         if(err) throw err
                          else customers = results;
                         for (var i = 0; i < customers.length; i++) {
                              firstName = customers[i].firstName;
                              lastName  = customers[i].lastName;
                              email = customers[i].email;
                              streetAddress= customers[i].streetAddress;
                              suite = customers[i].suite;
                              city = customers[i].city;
                              state = customers[i].state;
                              zipCode = customers[i].zipCode;
                              phoneNumber = customers[i].phoneNumber;

                                 let Customers ={
                                          FirstName : firstName,
                                          LastName : lastName,
                                          Email : email,
                                          StreetAddress : streetAddress,
                                          Suite : suite,
                                          City : city,
                                          State : state,
                                          ZipCode : zipCode,
                                          PhoneNumber : phoneNumber
                                            };
                              console.log(Customers);
                              customerList.push(Customers);
                                };// end for loop
                         }); //end query

                        return false;
                     }; //end clientel

           app.get('/allCustomers/', customer);
           function customer(request, response){
                        let firstname = ' ';
                        let lastname = ' ';
                        let Email = ' ';
                        let streetaddress = ' ';
                        let Suite = ' ';
                        let City = ' ';
                        let State = ' ';
                        let zipcode = ' ';
                        let phonenumber = ' ';
                        let customers = [];

        let sql = 'SELECT * FROM productclients';
        let query = db.query(sql, (err, results) =>{

                         if(err) throw err
                          else customers = results;
                         for (var i = 0; i < customers.length; i++) {
                              firstname = customers[i].firstname;
                              lastname  = customers[i].lastname;
                              Email = customers[i].Email;
                              streetaddress = customers[i].streetaddress;
                              Suite = customers[i].Suite;
                              City = customers[i].City;
                              State = customers[i].State;
                              zipcode = customers[i].zipcode;
                              phonenumber = customers[i].phonenumber;

                                 let Customers ={
                                          FirstName : firstname,
                                          LastName : lastname,
                                          Email : Email,
                                          StreetAddress : streetaddress,
                                          Suite : Suite,
                                          City : City,
                                          State : State,
                                          ZipCode : zipcode,
                                          PhoneNumber : phonenumber
                                            };
                                 console.log(Customers);
                                 customerList.push(Customers);
                                };//end for loop

                         }); //end query
                        
                           return false;               
                }; //end customer
