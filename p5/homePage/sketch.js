let carArray = [];
let  num = 0;
let item = '  ';
let shippingPrice = 0;
let totalPrice = 0;
let jumperPrice = 0;

function preload(){
         for (var i = 0; i < 5; i++) {
           carArray[i] = loadImage("imageFolder/vehicle"+(i+1)+".JPG");

         };
};
function setup(){

		// let canvas = createCanvas(620, 400); 
     //   canvas.style('margin-left','3%');

 //let serviceOptions = select('#services');
   //  serviceOptions.mousePressed(services); 
     //image(carArray[num], 0, 0, carArray[num].width/8, carArray[num].height/8);
  //   setInterval(changeVehicle, 5000);
    //  num++;
};//end setup

   function changeVehicle(){
     if (num < carArray.length) {
        image(carArray[num], 0, 0, carArray[num].width/8, carArray[num].height/8);
      } 
      else if(num === carArray.length){
               num = 2;
               image(carArray[num], 0, 0, carArray[num].width/8, carArray[num].height/8);
                               }
               num++;
};//end changeVehicle

  function newProduct(){
          
        let item = select('#item');
              item.html("Jump Starter");
         let itemPrice = select('#itemPrice');
              itemPrice.html("$ 79.99");
        let itemShipping = select('#shippingPrice');
              itemShipping.html("$ 10.95");
        let totalPrice = select('#totalPrice');
            totalPrice.html("$ 90.94");

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
     let prices = select('#prices')
         prices.hide();
     let checkOut = select('#checkOut');
         checkOut.show();           
    let productForm = select('#productForm');
        productForm.hide();
   let fieldSet = select('#subForm');
       fieldSet.hide();
   let disclaimer = select('#disclaimer');
       disclaimer.hide();    
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



  function vacbuyButton(){   
           let buyButton = select('#buyButton');
               buyButton.show();
           let fieldSet = select('#subForm');
               fieldSet.hide();
           let thanks= select('#thanks');
               thanks.show();     
  };

 function newSubscriber(){ 
         let firstName = select('#firstName').value();
         let lastName = select('#lastName').value();
         let Email = select('#email').value();
         let streetAddress = select('#streetAddress').value();
         let suite = select('#suite').value();
         let city = select('#city').value();
         let state = select('#state').value();
         let zipCode =select('#zipCode').value();
         let phoneNumber = select('#phoneNumber').value();
         loadJSON('/subscriber/'+firstName+'/'+lastName+'/'+Email+'/'
          +streetAddress+'/'+suite+'/'+city+'/'+state+'/'+zipCode+'/'+phoneNumber, finished);
function finished(data){
         console.log(data);
           };
           return vacbuyButton();
        };//end newSubscriber

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
           let prices = select('#prices');
               prices.hide(); 
           let checkOut = select('#checkOut');
               checkOut.hide();        
                  };

     function productBuyer(){
           let productContainer = select('#productContainer')
               productContainer.show(); 
           let productForm = select('#productForm');
               productForm.hide();
           let prices = select('#prices');
               prices.hide(); 
           let checkOut = select('#checkOut');
               checkOut.hide();    
           let para = select('#para');
               para.hide(); 
           let disclaimer = select('#disclaimer');
               disclaimer.show();       
           let probuyButton = select('#probuyButton');
               probuyButton.show(); 
                  };              
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
           };

 function togglejumperPicture(){
             let productContainer = select('#productContainer')
                 productContainer.show(); 
            let jumpPicture = select('#jumpStarter');
            let jumpFeatures = select('#description');
            let prices = select('#prices');
            let checkOut = select('#checkOut');
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
      let interior = select('#interior');
        interior.show();
    let exterior = select('#exterior');
        exterior.show();
    let engineClean = select('#engineClean');        
        engineClean.show();   
    let priceChart = select('#priceChart');
        priceChart.hide();   
        return false;
 };
    
 function showpriceChart(){
       let intro = select('#intro');
           intro.hide();
       let serviceContainer = select('#serviceContainer');
           serviceContainer.show();
      let interior = select('#interior');
        interior.hide();
    let exterior = select('#exterior');
        exterior.hide();
    let engineClean = select('#engineClean');        
        engineClean.hide();    
    let priceChart = select('#priceChart');
        priceChart.show();
     return false;
    };//end showpriceChart

function draw() {
 
    };
