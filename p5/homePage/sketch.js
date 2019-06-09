 let item = '  ';
 let subscriberInfo = {};
 let shippingPrice = 0;
 let totalPrice = 0;
 let jumperPrice = 0;

 let firstName = ' ';
 let lastName = ' ';
 let email = ' ';
 let streetAddress = ' ';
 let city = ' ';
 let state = ' ';
 let zipCode = ' ';
 let phoneNumber = ' ';

 let firstname = ' ';
 let lastname = ' ';
 let Email = ' ';
 let streetaddress = ' ';
 let City = ' ';
 let State = ' ';
 let zipcode = ' ';
 let phonenumber = ' ';

  function newProduct(){
        let item = select('#item');
              item.html("Jump Starter");
         let itemPrice = select('#itemPrice');
              itemPrice.html("$ 90.00");
        let itemShipping = select('#shippingPrice');
              itemShipping.html("$ 9.99");
        let totalPrice = select('#totalPrice');
            totalPrice.html("$ 99.99");
                   };             

  function hideForm(){
      let intro = select('#intro');
          intro.show();
     let serviceContainer = select('#serviceContainer');
         serviceContainer.hide();
     let productContainer = select('#productContainer');
         productContainer.show();
     let para = select('#para'); 
         para.show(); 
     let miniVac = select('#minivacContainer');
        miniVac.show(); 
     let vacent = select('#vacent');
         vacent.show();
      let subscribe = select('.subscribe');
          subscribe.show();          
    let thanks = select('#thanks');
       thanks.hide();   
   let showSubscriber = select('#showSubscriber');
       showSubscriber.hide();         
     let prices = select('#prices');
         prices.hide();
     let checkOut = select('.checkOut');
         checkOut.show();           
    let productForm = select('#productForm');
        productForm.hide();
   let fieldSet = select('#subForm');
       fieldSet.hide();
   let disclaimer = select('#disclaimer');
       disclaimer.hide(); 
    let showBuyer = select('#showBuyer');
        showBuyer.hide();       
   let buyButton = select('#buyButton');
       buyButton.hide();
    let description = select('#description'); 
        description.hide();   
    let vacDescription = select('#vacDescription');
        vacDescription.hide();    
    let probuyButton = select('#probuyButton');
        probuyButton.hide(); 
     return newProduct();             
            };

    function showSubscriber(){
             let customerStatus = select('.status');
                 customerStatus.html('subscriber: '+'Mini-Vac Shipping Address');
             let customerFirst = select('.firstName');
                 customerFirst.html('First Name: '+firstName);
             let customerLast = select('.lastName');
                 customerLast.html('Last Name: '+lastName);
             let customerEmail = select('.email');
                 customerEmail.html('Email: '+email);
             let customerstreetAddress = select('.streetAddress');
                 customerstreetAddress.html('Street: '+streetAddress);
             let customerCity = select('.city');
                 customerCity.html('City: '+city);
             let customerState = select('.state');
                 customerState.html('State: '+state);
             let customerzipCode = select('.zipCode');
                 customerzipCode.html('Zip Code: '+zipCode); 
             let customerphoneNunber = select('.phoneNumber');
                 customerphoneNunber.html('Phone Number: '+phoneNumber);                        
            };  

  function vacbuyButton(){   
           let buyButton = select('#buyButton');
               buyButton.show();
           let fieldSet = select('#subForm');
               fieldSet.hide();
           let thanks= select('#thanks');
               thanks.show(); 
           let showSubscriber = select('#showSubscriber');
                showSubscriber.show();    
               return false;    
                    };

 function newSubscriber(){ 
              firstName = select('#firstName').value();
              lastName = select('#lastName').value();
              email = select('#email').value();
              streetAddress = select('#streetAddress').value();
              city = select('#city').value();
              state = select('#state').value();
              zipCode =select('#zipCode').value();
              phoneNumber = select('#phoneNumber').value();
         loadJSON('/subscriber/'+firstName+'/'+lastName+'/'+email+'/'+streetAddress+'/'+city+'/'+state+'/'+zipCode+'/'+phoneNumber, finished);

        function finished(data){
                   console.log(data);
                  };  
               showSubscriber();          
        return vacbuyButton();
         };//end newSubscriber

      function procusInfo(){ 
                 firstname = select('#firstname').value();
                 lastname = select('#lastname').value();
                 Email = select('#Email').value();
                 streetaddress = select('#streetaddress').value();
                 City = select('#City').value();
                 State = select('#State').value();
                 zipcode =select('#zipcode').value();
                 phonenumber = select('#phonenumber').value();
         loadJSON('/productClient/'+firstname+'/'+lastname+'/'+Email+'/'+streetaddress+'/'+City+'/'+State+'/'+zipcode+'/'+phonenumber, finished);
    function finished(data){
         console.log(data);
                  };
               showBuyer();    
        return productBuyer();
               };//end procusInfo 

       function showBuyer(){
             let customerStatus = select('.Status');
                 customerStatus.html('Customer: Item Shipping Address');
             let customerFirst = select('.firstname');
                 customerFirst.html('First Name: '+firstname);
             let customerLast = select('.lastname');
                 customerLast.html('Last Name: '+lastname);
             let customerEmail = select('.Email');
                 customerEmail.html('Email: '+Email);
             let customerstreetAddress = select('.streetaddress');
                 customerstreetAddress.html('Street: '+streetaddress);
             let customerCity = select('.City');
                 customerCity.html('City: '+City);
             let customerState = select('.State');
                 customerState.html('State: '+State);
             let customerzipCode = select('.zipcode');
                 customerzipCode.html('Zip Code: '+zipcode); 
             let customerphoneNunber = select('.phonenumber');
                 customerphoneNunber.html('Phone Number: '+phonenumber);                        
            };                     

    function jumperformButton(){
           let productContainer = select('#productContainer');
               productContainer.show(); 
           let para = select('#para');
               para.hide(); 
           let productForm = select('#productForm');
               productForm.show(); 
           let probuyButton = select('#probuyButton');
               probuyButton.hide(); 
           let disclaimer = select('#disclaimer');
               disclaimer.hide(); 
           let showBuyer = select('#showBuyer');
               showBuyer.hide();        
           let prices = select('#prices');
               prices.hide(); 
           let checkOut = select('.checkOut');
               checkOut.hide();        
                  };
        function productBuyer(){
           let productContainer = select('#productContainer')
               productContainer.show(); 
           let productForm = select('#productForm');
               productForm.hide();
           let prices = select('#prices');
               prices.hide(); 
           let checkOut = select('.checkOut');
               checkOut.hide();    
           let para = select('#para');
               para.hide(); 
           let showBuyer = select('#showBuyer');
               showBuyer.show();    
           let disclaimer = select('#disclaimer');
               disclaimer.show();       
           let probuyButton = select('#probuyButton');
               probuyButton.show();
               return false;      
           };//end productBuyer              

 function subscribe(){ 
           let miniVac = select('#minivacContainer');
               miniVac.show(); 
           let buyButton = select('#buyButton');
               buyButton.hide();
           let vacent = select('#vacent');
               vacent.hide();           
           let subForm = select('#subForm');
               subForm.show(); 
           let subscribe = select('.subscribe');
               subscribe.hide(); 
          let showSubscriber = select('#showSubscriber');
              showSubscriber.hide();         
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
               }
              else if(jumpToggle === 'price'){
                      jumpPicture.hide();
                      jumpFeatures.hide();
                      prices.show();
                      checkOut.show();
               };
               return false;
         };//end togglejumpPicture

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
