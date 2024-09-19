// show the  cash out section
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

  // show the cash out button
  console.log('show show cash out clicked');
  document.getElementById('cash-out-form').classList.remove('hidden');
  // hide the add money form
  document.getElementById('add-money-form').classList.add('hidden');
});

//show add money form and hide the cash form

document.getElementById('btn-show-add-money').addEventListener('click', function(){

  document.getElementById('add-money-form').classList.remove('hidden');

  document.getElementById('cash-out-form').classList.add('hidden');
})