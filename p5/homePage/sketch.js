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
 let phone = createP('(757) 581-9156');
     phone.style('text-align', 'center');
     phone.style('font-size', '24px');
		 phone.style('font-weight','bold');
		 phone.style('background-color', '#009900');
     phone.style('color', '#ffffff');
     phone.style('width', '25%');
     phone.style('line-height', '2.5em');
     phone.style('margin-left', '35%');
     phone.style('font-size', '30px');

		 let canvas = createCanvas(620, 400); 
        canvas.style('margin-left','3%');


 let bottomTitle = createP('We deliver better Results!');
     bottomTitle.style('margin-left', '5%');
     bottomTitle.style('background-color', '#006600');
     bottomTitle.style('color', '#ffffff');
     bottomTitle.style('font-size', '24px');
     bottomTitle.style('width', '35%');
     bottomTitle.style('padding', '2%');
     bottomTitle.style('text-align', 'center');

   let customer = select('#subscribe');
       customer.mousePressed(subscribe);
 let prod = select('#product');
     prod.mousePressed(newProduct); 
 let serviceOptions = select('#services');
      serviceOptions.mousePressed(services); 
     image(carArray[num], 0, 0, carArray[num].width/8, carArray[num].height/8);
     setInterval(changeVehicle, 5000);
      num++;
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
         
          let subscribeContainer = select('#subscribeContainer');
              subscribeContainer.hide();
          let serviceContainer = select('#serviceContainer');
              serviceContainer.hide();     
         let productContainer = select('#productContainer');
             productContainer.show();
        let para = select('#para');
              para.show();
        let itemDescription = select('#description');
              itemDescription.hide();
         let priceContainer = select('#prices');
             priceContainer.show();
          let buyContainer = select('#jumperbuyButton');
              buyContainer.hide();
          

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
     let serviceContainer = select('#serviceContainer');
         serviceContainer.hide(); 
    let productContainer = select('#productContainer')
        productContainer.hide(); 
    let subscribeContainer = select('#subscribeContainer');
        subscribeContainer.show(); 

   let fieldSet = select('#subForm');
       fieldSet.hide();
   let buyButton = select('#buyButton');
       buyButton.hide();
    let miniVac = select('#minivacContainer');
        miniVac.show(); 
    let vacDescription = select('#vacDescription');
        vacDescription.hide(); 
 };



  function vacbuyButton(){
            let serviceContainer = select('#serviceContainer');
                serviceContainer.hide(); 
           let productContainer = select('#productContainer')
               productContainer.hide(); 
           let subscribeContainer = select('#subscribeContainer');
               subscribeContainer.show();  
           let buyButton = select('#buyButton');
               buyButton.show();
           let fieldSet = select('#subForm');
               fieldSet.hide();
           let miniVac = select('#minivacContainer');
               miniVac.hide();     
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
           return false;
        };//end newSubscriber

    function jumperbuyButton(){
           let productContainer = select('#productContainer')
               productContainer.show(); 
           let subscribeContainer = select('#subscribeContainer');
               subscribeContainer.hide(); 
           let serviceContainer = select('#serviceContainer');
               serviceContainer.hide();      
           let buyButton = select('#jumperbuyButton');
               buyButton.show();
           let description = select('#description');
               description.hide();
          let  prices = select('#prices');
               prices.hide(); 
  };
 function subscribe(){
           let productContainer = select('#productContainer')
               productContainer.hide(); 
           let serviceContainer = select('#serviceContainer');
               serviceContainer.hide(); 
           let subscribeContainer = select('#subscribeContainer');
               subscribeContainer.show();  
           let buyButton = select('#buyButton');
               buyButton.hide();
           let miniVac = select('#minivacContainer');
               miniVac.hide(); 
           let fieldSet = select('#subForm');
               fieldSet.show(); 
           };

 function togglejumperPicture(){
            let serviceContainer = select('#serviceContainer');
                serviceContainer.hide(); 
            let subscribeContainer = select('#subscribeContainer');
               subscribeContainer.hide();  
             let productContainer = select('#productContainer')
                 productContainer.show(); 
            let jumpPicture = select('#jumpStarter');
            let jumpFeatures = select('#description');
            let jumpToggle = select('#joggle').value();
      
               if(jumpToggle === 'jumpStarter'){
                    jumpPicture.show();
                    jumpFeatures.hide();
               }
               else if(jumpToggle === 'description'){
                      jumpPicture.hide();
                     jumpFeatures.show();       
               };
               return false;
         };//end togglejumpPicture

   function togglevacPicture(){
            let serviceContainer = select('#serviceContainer');
                serviceContainer.hide(); 
           let productContainer = select('#productContainer')
                 productContainer.hide(); 
          let subscribeContainer = select('#subscribeContainer');
               subscribeContainer.show(); 
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
        let productContainer = select('#productContainer')
            productContainer.hide(); 
        let subscribeContainer = select('#subscribeContainer');
            subscribeContainer.hide(); 
        let serviceContainer = select('#serviceContainer');
            serviceContainer.show(); 
    showInterior();
  };
 function showInterior(){
    let interior = select('#interior');
        interior.show();
    let exterior = select('#exterior');
        exterior.hide();
    let engineClean = select('#engineClean');        
        engineClean.hide();
    let priceChart = select('#priceChart');
        priceChart.hide();
     return false;
    };//end showInterior

function showExterior(){
      let interior = select('#interior');
        interior.hide();
    let exterior = select('#exterior');
        exterior.show();
    let engineClean = select('#engineClean');        
        engineClean.hide();
    let priceChart = select('#priceChart');
        priceChart.hide();
     return false;
    };//end showExterior

function showengineClean(){
      let interior = select('#interior');
        interior.hide();
    let exterior = select('#exterior');
        exterior.hide();
    let engineClean = select('#engineClean');        
        engineClean.show();
    let priceChart = select('#priceChart');
        priceChart.hide();
     return false;
    };//end showengineClean
    
 function showpriceChart(){
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
