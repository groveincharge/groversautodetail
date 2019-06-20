 let item = '  ';
 let subscriberInfo = {};
 let shippingPrice = 0;
 let totalPrice = 0;
 let jumperPrice = 0;

 let firstName = ' ';
 let lastName = ' ';
 let email = ' ';
 let address = ' ';
 let city = ' ';
 let state = ' ';
 let zipCode = ' ';
 let phoneNumber = ' ';

 let firstname = ' ';
 let lastname = ' ';
 let Email = ' ';
 let Address = ' ';
 let City = ' ';
 let State = ' ';
 let zipcode = ' ';
 let phonenumber = ' ';
            

  function hideForm(){
       let miniVac = select('#minivacContainer');
           miniVac.show();
       let vacIntro = select('#vacIntro');
           vacIntro.show(); 
       let vacImage = select('#vacImage');
           vacImage.show(); 
       let voggle = select('.voggle');    
           voggle.show();
       let vacDescription = select('#vacDescription');
           vacDescription.hide(); 
       let vacuumId = select('#vacuumId');
           vacuumId.hide();
       let subForm = select('#subForm');
           subForm.hide(); 
       let showSubscriber = select('#showSubscriber');
           showSubscriber.hide();
       let thanks = select('#thanks');
            thanks.hide(); 
       let subscribe = select('.subscribe');
           subscribe.show();                                     

      let intro = select('#intro');
          intro.show();
     let serviceContainer = select('#serviceContainer');
         serviceContainer.hide();

     let productContainer = select('#productContainer');
         productContainer.show();           
          
   let buyButton = select('#buyButton');
       buyButton.hide();   
    let jumperIntro = select('#jumperIntro');
        jumperIntro.show(); 
    let jumpStarter = select('#jumpStarter');
         jumpStarter.show();
     let description = select('#description'); 
        description.hide();  
     let joggle = select('#joggle');
         joggle.show();  
     let disclaimer = select('#disclaimer');
         disclaimer.hide(); 
      let productForm = select('#productForm');
          productForm.hide();                         
    let probuyButton = select('#probuyButton');
        probuyButton.hide(); 
    let productId = select('#productId');
        productId.hide();
    let checkOut = select('.checkOut');
        checkOut.show();    
     let showBuyer = select('#showBuyer');
                showBuyer.hide();                      
            };  

 function newSubscriber(){ 
              firstName = select('.firstName').value();
              lastName = select('.lastName').value();
              email = select('.email').value();
              address = select('.address').value();
              city = select('.city').value();
              state = select('.state').value();
              zipCode =select('.zipCode').value();
              phoneNumber = select('.phoneNumber').value();
         loadJSON('/subscriber/'+firstName+'/'+lastName+'/'+email+'/'+address+'/'+city+'/'+state+'/'+zipCode+'/'+phoneNumber, finished);

        function finished(data){ 
                              
                    
            };//end finished 
            displaySubscriber();                    
        return vacbuyButton();
         };//end newSubscriber
         function displaySubscriber() {
                          let displayStatus = select('#displayStatus');
                              displayStatus.html('Thanks for the Subscription');
                          let displayfirstName = select('#displayfirstName');              
                               displayfirstName.html('First Name: '+firstName);
                          let displaylastName = select('#displaylastName');              
                               displaylastName.html('Last Name: '+lastName); 
                           let displayemail = select('#displayemail');              
                               displayemail.html('Email: '+email);
                            let displayaddress = select('#displayaddress');              
                               displayaddress.html('Address: '+address);
                            let displaycity = select('#displaycity');              
                               displaycity.html('City: '+city); 
                             let displaystate = select('#displaystate');              
                               displaystate.html('State: '+state);
                             let displayzipCode = select('#displayzipCode');              
                               displayzipCode.html('Zip Code: '+zipCode);
                           let displayphoneNumber = select('#displayphoneNumber');              
                               displayphoneNumber.html('Phone Number: '+phoneNumber);                      
                               };

           function vacbuyButton(){ 
            let miniVac = select('#minivacContainer');
                miniVac.show(); 
            let vacIntro = select('#vacIntro');
                vacIntro.hide();
            let vacImage = select('#vacImage');
                vacImage.hide();  
            let vacDescription = select('#vacDescription');
                vacDescription.hide();       
           let vacuumId = select('#vacuumId');
               vacuumId.hide(); 
           let buyButton = select('#buyButton');
               buyButton.show();
           let subForm = select('#subForm');
               subForm.hide();
           let thanks= select('#thanks');
               thanks.show(); 
           let showSubscriber = select('#showSubscriber');
                showSubscriber.show();    
               return false;   
                    };


 function subscribe(){ 
           let miniVac = select('#minivacContainer');
               miniVac.show();
            let vacIntro = select('#vacIntro');
               vacIntro.hide();    
           let buyButton = select('#buyButton');
               buyButton.hide();    
           let vacImage = select('#vacImage');
               vacImage.hide(); 
            let vacDescription = select('#vacDescription');
                vacDescription.hide(); 
            let showSubscriber = select('#showSubscriber');
                 showSubscriber.hide();               
           let subForm = select('#subForm');
               subForm.show(); 
            let thanks = select('#thanks');
                thanks.hide();    
           let subscribe = select('.subscribe');
               subscribe.hide(); 
            let vacuumId = select('#vacuumId');
                vacuumId.show(); 
            let voggle = select('.voggle');    
                voggle.hide();                
                   };
               

          function togglevacPicture(){
            let miniVac = select('#minivacContainer');
                miniVac.show();
            let picture = select('#vacImage');
            let features = select('#vacDescription');
            let toggle = select('.voggle').value();
             console.log(toggle);
               if(toggle === 'mini-Vac'){
                    picture.show();
                    features.hide();
               }
               else if(toggle === 'description'){
                     picture.hide();
                     features.show();       
               };
               return false;
         };//end togglePicture  

      function procusInfo(){ 
                 firstname = select('.firstname').value();
                 lastname = select('.lastname').value();
                 Email = select('.Email').value();
                 Address = select('.Address').value();
                 City = select('.City').value();
                 State = select('.State').value();
                 zipcode =select('.zipcode').value();
                 phonenumber = select('.phonenumber').value();
         loadJSON('/productClient/'+firstname+'/'+lastname+'/'+Email+'/'+Address+'/'+City+'/'+State+'/'+zipcode+'/'+phonenumber, finished);
         function finished(data){                           
    

                          };//end finished 

               displayCustomer();
              return productBuyer();
               };//end procusInfo 

                  function displayCustomer() {
                          let displaystatus = select('#displaystatus');
                              displaystatus.html('We appreciate your business.');
                          let displayfirstname = select('#displayfirstname');              
                               displayfirstname.html('First Name: '+firstname);
                          let displaylastname = select('#displaylastname');              
                               displaylastname.html('Last Name: '+lastname); 
                           let displayEmail = select('#displayEmail');              
                               displayEmail.html('Email: '+Email);
                            let displayAddress = select('#displayAddress');              
                               displayAddress.html('Address: '+Address);
                            let displayCity = select('#displayCity');              
                               displayCity.html('City: '+City); 
                             let displayState = select('#displayState');              
                               displayState.html('State: '+State);
                             let displayzipcode = select('#displayzipcode');              
                               displayzipcode.html('Zip Code: '+zipcode);
                           let displayphonenumber = select('#displayphonenumber');              
                               displayphonenumber.html('Phone Number: '+phonenumber);                      
                               };     

       function productBuyer(){
           let productContainer = select('#productContainer')
               productContainer.show(); 
            let jumpStarter = select('#jumpStarter');
                jumpStarter.hide();
             let jumperIntro = select('#jumperIntro');
                 jumperIntro.hide();
             let description = select('#description');
                 description.hide();
              let joggle = select('#joggle');
                  joggle.hide();                 
           let productForm = select('#productForm');
               productForm.hide();   
           let productId = select('#productId');
               productId.hide();             
           let disclaimer = select('#disclaimer');
               disclaimer.show(); 
           let showBuyer = select('#showBuyer');
               showBuyer.show();           
           let probuyButton = select('#probuyButton');
               probuyButton.show();
               return false;     
           };//end productBuyer                               

    function jumperformButton(){
           let productContainer = select('#productContainer');
               productContainer.show();
           let productForm = select('#productForm');
               productForm.show();     
           let jumperIntro = select('#jumperIntro');
               jumperIntro.hide();
            let jumpStarter = select('#jumpStarter');
                jumpStarter.hide();         
           let probuyButton = select('#probuyButton');
               probuyButton.hide(); 
            let description = select('#description');
                description.hide();    
           let disclaimer = select('#disclaimer');
               disclaimer.hide();       
            let showBuyer = select('#showBuyer');
                showBuyer.hide(); 
             let checkOut = select('.checkOut');
                 checkOut.hide();     
            let productId = select('#productId');
                productId.show();
             let joggle = select('#joggle');
                 joggle.hide();                     
                  };            

 function togglejumperPicture(){
             let productContainer = select('#productContainer')
                 productContainer.show(); 
            let jumpPicture = select('#jumpStarter');
            let jumpFeatures = select('#description');
            let prices = select('#prices');
            let checkOut = select('.checkOut');
            let jumpToggle = select('#joggle').value();
      
               if(jumpToggle === 'jumpStarter'){
                    jumpPicture.show();
                    jumpFeatures.hide();
                    prices.hide();
                    checkOut.show();
               }
               else if(jumpToggle === 'description'){
                     jumpPicture.hide();
                     jumpFeatures.show();
                     prices.hide();
                     checkOut.show();      
               };
               return false;
         };//end togglejumpPicture

   function services(){
       let intro = select('#intro');
           intro.hide();
       let serviceContainer = select('#serviceContainer');
           serviceContainer.show();
       let serviceChart = select('#serviceChart');
           serviceChart.show();     
    let priceChart = select('#priceChart');
        priceChart.hide();   
        return false;
              };
    
 function showpriceChart(){
       let intro = select('#intro');
           intro.hide();
       let serviceContainer = select('#serviceContainer');
           serviceContainer.show();
       let serviceChart = select('#serviceChart');
           serviceChart.hide();       
    let priceChart = select('#priceChart');
        priceChart.show();
     return false;
                };//end showpriceChart

function draw() {
 
    };
