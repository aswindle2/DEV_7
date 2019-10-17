
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
//Concatenate the three variables above to create the welcome message
var message = greeting + name + message;

//Sign concatenation
var sign = '[not initialized]';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;


function setTextContentById( getId, setText)
  {
   // Get the element that has an id of      greeting
    var el =      document.getElementById('getId');
   // Replace the content of that element    with the personalized welcome message
   el.textContent = setText;
  }


function setTextContentByUserId(userSign, sign){
// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;
}


function setTextContentById(tiles, tiles){
// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;
}

function setTextContentById(subTotal, $){
// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$' + subTotal;
}


function setTextContentById(shipping, $){
// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;
}

function setTextContentById(grandTotal, $){
// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;
}

// Note: textContent does not work in IE8 or earlier - see explanation on website

function initiateVars(){
  greeting = 'Hello';
  name = 'User';  
  message = "How are you?";
}


(function(){
  setTextContentById('greeting', welcome);
  setTextContentByUserId(userSign, sign);
  setTextContentById(tiles,tiles);
  setTextContentById(subTotal,$);
  setTextContentById(shipping, $);
  initiateVars();
}
 
 if (getId.preventDefault){
  getId.preventDefault();
}else{
  getId.returnValue=false;
}

function resetPage(){
var greeting = '[not initialized]';
var name = '[not initialized]';
var message = '[not initialized]';
//Concatenate the three variables above to create the welcome message
var message = greeting + name + message;

//Sign concatenation
var sign = '[not initialized]';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;
}
resetPage();