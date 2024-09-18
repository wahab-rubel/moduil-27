// // console.log('button clicked add button');

// // search: form submit reloading the page
// //  step-1 set event handler
// document.getElementById('button-login').addEventListener('click', function (event){
//   // step-2 prevent default behaver (prevent reloading browser)
//   event.preventDefault();  // <------------Vejal to beginners
  
//   // step-3 get the phone number and pin number
//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin-number').value;

//   console.log(phoneNumber, pinNumber);

//   // step-4 validate the phone number and pin number
//   // this is temporary
//   if(phoneNumber === '5' && pinNumber === '1234'){
//     console.log('you are logged in');
//   }
//   else{
//     alert('Wrong Phone number or pin number');
//   }
// })



document.getElementById('button-login').addEventListener('click', function (event) {

  event.preventDefault();


  // get phone number and pin number

  const phoneNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;

  // console.log(phoneNumber, pinNumber);

  if( phoneNumber === '5' && pinNumber === '1234'){
    console.log('your are login');
    window.location.href = 'http://127.0.0.1:5500/home.html';
  }
  else{
    alert('wrong phone number or pin number');
  }
})