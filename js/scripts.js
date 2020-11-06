//elementlarni tanlab  olamiz :))
var primeNumbersForm = document.querySelector('.primeNumbersForm');
var primeNumberInput = primeNumbersForm.querySelector('.primeNumberInput');
var result = document.querySelector('.result');
//sayt yuklanda inputga focus qilib qo'yamiz
primeNumberInput.focus();
// formani eshitamiz
primeNumbersForm.addEventListener('submit'  , function(evt){
  //formani yuborilishi to'xtatib qo'yamiz
  evt.preventDefault();
  //result.innerhtmllini "";
  result.innerHTML = "";
  //varlarni yaratib qo'yamiz
  var store  = [], i, j, primes = [];
  //forma yuborilganida inputdan valueni olib olamiz va bu jarayonda sonni yaxlitlaymiz 
  var primeNumberInputValue = parseFloat(Math.round(primeNumberInput.value.trim()) , 10);
  //agar inputga son kiritilmasa raqam kiriting deb alert chiqadi inputga yozilgan so'zlar o'chirilib focus inputga qaratiladi return;
  if (isNaN(primeNumberInputValue)){
    alert('raqam kiriting');
    primeNumberInput.value = "";
    primeNumberInput.focus();
    return;
  }
  // input valuesi 1 dan kichik yoki unga teng bo'lgandagi sozlamalar
  if (primeNumberInputValue<=1){
    alert('2 va undan katta raqam kiriting :))');
    primeNumberInput.value = "";
    primeNumberInput.focus();
    return;
  }
  
  //qanday ish bajarilishi : ) ) 
  //schetchik beramiz
  for (i = 2; i <= primeNumberInputValue; ++i) 
  {
    if (!store[i])//tub sonlar ro'yhatida bormi yo'qmi topamiz 
    {
      //create element p
      var newElResult = document.createElement("p");
      // p.textContent to i
      newElResult.textContent = i;
      // p.append  to result
      result.appendChild(newElResult);
      //primes push p
      primes.push(i);
      for (j = i << 1; j <= primeNumberInputValue; j += i) 
      {
        // store ni ichida undan yani ndan keyin kelgan barcha unga karrali sonlarni true qilib chiqamiz natijada tepada false degan qiymat oladi
        store[j] = true;
      }
    }
  }
  
})