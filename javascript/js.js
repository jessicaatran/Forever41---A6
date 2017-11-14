var users;
if (localStorage.getItem('users') === null) {
  console.log('empty: ' + JSON.stringify(localStorage));
  users = [];
} else {
  users = JSON.parse(localStorage.getItem('users'));
  console.log('hi, not empty:' + JSON.stringify(localStorage));
}

//alert('users: ' + JSON.stringify(users));

function getName() {
  var first = document.getElementById('userFirstName').value;
  var last = document.getElementById('userLastName').value;
  var fullName = first + " " + last;
  var person = {"name": fullName};
  console.log(JSON.stringify(person));
  alert('pushing: ' + JSON.stringify(person));
  alert('users: ' + JSON.stringify(users));
  users.push(person);
  localStorage.setItem('users', JSON.stringify(users));
  console.log('localStorage: ' + localStorage);
  window.location.href = './join_email.html';
}

$('#back-join').click(function(){
  window.history.back();
});

$('#back').click(function(){
  window.history.back();
});

$('#setting').click(function(){
  window.location.href = './settings.html';
});

$('#help').click(function(){
  window.location.href = './help.html';
});

$('.fa-sign-out').click(function() {
  window.location.href = './index.html';
});
