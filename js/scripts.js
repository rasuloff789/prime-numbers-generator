var primeNumbersForm = document.querySelector('.primeNumbersForm');
var primeNumberInput = primeNumbersForm.querySelector('.primeNumberInput');
primeNumberInput.focus();
var result = document.querySelector('.result');
primeNumbersForm.addEventListener('submit'  , function(evt){
  evt.preventDefault();
  
  result.innerHTML = "";
  var store  = [], i, j, primes = [];
  var primeNumberInputValue = parseFloat(Math.round(primeNumberInput.value.trim()) , 10);
  if (isNaN(primeNumberInputValue)){
    alert('raqam kiriting');
    primeNumberInput.value = "";
    primeNumberInput.focus();
    return;
  }
  
  if (primeNumberInputValue<=1){
    alert('2 va undan katta raqam kiriting :))');
    primeNumberInput.value = "";
    primeNumberInput.focus();
    return;
  }
  
  
  for (i = 2; i <= primeNumberInputValue; ++i) 
  {
    if (!store [i]) 
    {
      var newElResult = document.createElement("p");
      newElResult.textContent = i;
      result.appendChild(newElResult);
      primes.push(i);
      for (j = i << 1; j <= primeNumberInputValue; j += i) 
      {
        store[j] = true;
      }
    }
  }
  
})




// function primeFactorsTo(primeNumberInputValue)
// {

//     return primes;
// }

// for (j = 1;j <=primeNumberInputValue ; j++){

// }



// var array = new Array(100);

// for (var i=2 ; i<=array.length-1; i++) {
//     if((i%2===0) || (i%3===0))
//         continue;
//     document.writeln(i+",");
// }

// console.log(primeNumberInputValue);
// })