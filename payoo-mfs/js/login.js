// console.log('button clicked add button');

// search: form submit reloading the page
//  step-1 set event handler
document.getElementById('button-login').addEventListener('click', function (event){
  // step-2 prevent default behaver (prevent reloading browser)
  event.preventDefault();  // <------------Vejal to beginners
  console.log('login button clicked');

  // step-3 get the phone number
  const phoneNumber = document.getElementById('phone-number').value;
  console.log(phoneNumber);
})