let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let http = require('http');
let fs = require('fs');
//let mysql = require('mysql');

 let app = express();


// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
//app.use(bodyParser.json());

app.listen(3050,function(){
     console.log('Server started on port 3050...');
});

//create connection
//const db = mysql.createConnection({
 // host: 'localhost',
  //user: 'groveman',
  //password: 'WYN@$#+22see',
 // database : 'autodetailbase'
//});
/*db.connect((err) => {
    if(err){
        throw err;
        console.log('Not Connected to database.')
        } 
      else
       {
    console.log('Connected to mysql data base.');
  };
});*/

/*app.use(express.static('p5/homePage'));
 Insert object into Data Base
 app.get('/productClient/:firstname/:lastname/:Email/:Address/:City/:State/:zipcode/:phonenumber', productClient);
 function productClient(request, response){
    let data = request.params;
    let post = {firstName: data.firstname, lastName: data.lastname, email: data.Email, address: data.Address, City: data.City, State: data.State, zipCode: data.zipcode, phoneNumber: data.phonenumber};
    let sql = 'INSERT INTO productclients SET ?';
    let query = db.query(sql, post,(err, result) =>{
  if(err) 
    {throw err}
   else
    {
    console.log('Customer successfully inserted into database.');
    let clientObject ={
      Status:'Your Subscription is now Active.',
      firstName: data.firstname,
      lastName: data.lastname,
      Email: data.Email,
      streetAddress: data.Address,
      city: data.City,
      state: data.State,
      zipCode: data.zipcode,
      phoneNumber: data.phonenumber
    };
    console.log(clientObject);     
    };
  
 });
 };//end productClient

app.get('/subscriber/:firstName/:lastName/:email/:address/:city/:state/:zipCode/:phoneNumber', newClient);
 function newClient(request, response){
    let data = request.params;
    let post = {firstName: data.firstName, lastName: data.lastName, email: data.email, address: data.address, city: data.city, state: data.state, zipCode: data.zipCode, phoneNumber: data.phoneNumber};
 let sql = 'INSERT INTO clients SET ?';
 let query = db.query(sql, post,(err, result) =>{
  if(err)
   {throw err}
   else
    {  
    console.log('Subscriber successfully inserted into database.');
    let clientObject ={
      Status:'Your Subscription is now Active.',
      firstName: data.firstName,
      lastName: data.lastName,
      Email: data.email,
      Address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      phoneNumber: data.phoneNumber
    };
    console.log(clientObject);
    };
   
 });
}; //end newClient

//Display clients in database.
       app.get('/allSubscribers/', clientel);
       function clientel(request, response){
                        let firstName = ' ';
                        let lastName = ' ';
                        let email = ' ';
                        let address = ' ';
                        let city = ' ';
                        let state = ' ';
                        let zipCode = ' ';
                        let phoneNumber = ' ';
                        let customers = [];

       let sql = 'SELECT * FROM clients';
       let query = db.query(sql, (err, results) =>{

                         if(err) 
                            {throw err}
                          else 
                          {
                            customers = results;
                         for (var i = 0; i < customers.length; i++) {
                              firstName = customers[i].firstName;
                              lastName  = customers[i].lastName;
                              email = customers[i].email;
                              address= customers[i].address;
                              city = customers[i].city;
                              state = customers[i].state;
                              zipCode = customers[i].zipCode;
                              phoneNumber = customers[i].phoneNumber;

                                 let Customers ={
                                          firstName : firstName,
                                          lastName : lastName,
                                          email : email,
                                          address : address,
                                          city : city,
                                          state : state,
                                          zipCode : zipCode,
                                          phoneNumber : phoneNumber
                                            };
                              console.log(Customers);
                              customerList.push(Customers);
                                };};// end else
                         }); //end query

                        return false;
                     }; //end clientel

           app.get('/allCustomers/', customer);
           function customer(request, response){
                        let firstName = ' ';
                        let lastName = ' ';
                        let email = ' ';
                        let address = ' ';
                        let city = ' ';
                        let state = ' ';
                        let zipCode = ' ';
                        let phoneNumber = ' ';
                        let customers = [];

        let sql = 'SELECT * FROM productclients';
        let query = db.query(sql, (err, results) =>{

                         if(err) 
                          {throw err}
                          else 
                          {
                            customers = results;
                         for (var i = 0; i < customers.length; i++) {
                              firstName = customers[i].firstName;
                              lastName  = customers[i].lastName;
                              email = customers[i].email;
                              address = customers[i].address;
                              city = customers[i].city;
                              state = customers[i].state;
                              zipCode = customers[i].zipCode;
                              phoneNumber = customers[i].phoneNumber;

                                 let Customers ={
                                          FirstName : firstName,
                                          LastName : lastName,
                                          Email : email,
                                          StreetAddress : address,
                                          City : city,
                                          State : state,
                                          ZipCode : zipCode,
                                          PhoneNumber : phoneNumber
                                            };
                                 console.log(Customers);
                                 customerList.push(Customers);
                                };};//end else

                         }); //end query
                        
                           return false;               
                }; //end customer*/

app.use(express.static(path.join( __dirname,'p5/homePage')));

 app.get('/subscriber/:firstname/:lastname/:Email/:Address/:City/:State/:zipcode/:phonenumber', productClient);
 function productClient(request, response){
    let data = request.params;
    let clientObject ={
      Status:'Your Subscription is now Active.',
      firstName: data.firstname,
      lastName: data.lastname,
      Email: data.Email,
      streetAddress: data.Address,
      city: data.City,
      state: data.State,
      zipCode: data.zipcode,
      phoneNumber: data.phonenumber
    };
    console.log(clientObject);     
  

 };//end productClient  

  app.get('/customer/:firstname/:lastname/:Email/:Address/:City/:State/:zipcode/:phonenumber', productClient);
 function productClient(request, response){
    let data = request.params;
    let clientObject ={
      Status:'Your Subscription is now Active.',
      firstName: data.firstname,
      lastName: data.lastname,
      Email: data.Email,
      streetAddress: data.Address,
      city: data.City,
      state: data.State,
      zipCode: data.zipcode,
      phoneNumber: data.phonenumber
    };
    console.log(clientObject);     
  

 };//end productClient                  
