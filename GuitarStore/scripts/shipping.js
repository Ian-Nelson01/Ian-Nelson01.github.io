 var $ = function (id) {
    return document.getElementById(id);
};
var doMath = function (){
    
    var ogPrice = $("ogPrice").value;
    ogPrice = cleanInput(ogPrice);
    var returnInt = ogPrice;
    
    
   // shipping price logic
    if (ogPrice > 0 && ogPrice <=50){
     returnInt = returnInt *1.2;
  }
 else if (ogPrice > 50 && ogPrice <=200){
     returnInt = returnInt *1.18;
  }
  else if (ogPrice > 200 && ogPrice <=500){
     returnInt = returnInt *1.15;
  }
    else if (ogPrice > 500 && ogPrice <=1000){
     returnInt = returnInt *1.12;
  }
      else if (ogPrice > 1000){
     returnInt = returnInt *1.08;
  }

    // return num or a message
    if (ogPrice !== -1){
    returnInt = returnInt.toFixed(2);//ensures 2 decimals
    returnInt = '$'+returnInt;//add dollar sign
      $("taxPrice").focus();
    }
    else{
        returnInt = "Please input a valid price.";
          $("ogPrice").focus();
    }
    
    // return
    $("taxPrice").value = returnInt;
  
    
};

var cleanInput = function (myString){
    var firstChar = myString[0];
    
    // Check the first character for a $
    if (firstChar === '$') {
      myString = myString.slice(1);
      var firstChar = myString[0];
    } 
    
    // parseFloat needs something before decimal.
    if (firstChar === '.'){
     myString = '0'+myString;
    }
 
    // Regular expression to match only digits and decimal
    var regex = /^[0-9.]+$/;

    // test string against regex to clean.
    if (regex.test(myString)) {
        myString = parseFloat(myString);
    } else {
        myString = '-1';
    }

        return(parseFloat(myString));

};
// Execute code when the document is ready
window.onload = function() {
 $("calc").onclick = doMath;
};