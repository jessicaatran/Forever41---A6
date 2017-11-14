var users;
if (localStorage.getItem('users') === null) {
  console.log('empty: ' + JSON.stringify(localStorage));
  users = [];
} else {
  users = JSON.parse(localStorage.getItem('users'));
  console.log('hi, not empty:' + JSON.stringify(localStorage));
}

alert('users: ' + JSON.stringify(users));

function getName() {
  var first = document.getElementById('userFirstName').value;
  var last = document.getElementById('userLastName').value;
  var fullName = first + " " + last;
  var person = 
    {
      "name": fullName,
      "email": "",
      "password": "",
      "gender": "",
      "birthday": "",
      "profilePic": "",
      "conditions": []
    };
  console.log(JSON.stringify(person));
  alert('pushing: ' + JSON.stringify(person));
  alert('users: ' + JSON.stringify(users));
  users.push(person);
  localStorage.setItem('users', JSON.stringify(users));
  console.log('localStorage: ' + localStorage);
  window.location.href = './join_email.html';
}

function getEmail() {
  var email = document.getElementById('userEmail').value;
  alert(email);
  console.log('the user', users[users.length - 1]);
  users[users.length - 1].email = email;
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = './join_password.html';
}

function getPassword() {
  var password = document.getElementById('userPass').value;
  var confirm = document.getElementById('userPass2').value;
  alert('password: ' + password);
  if (password === confirm) {
    console.log('the user', users[users.length - 1]);
    users[users.length - 1].password = password;
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = './join_gender.html';
  } else {
    alert("Passwords did not match!");
  }
}

function getGender() {
  var gender = document.getElementById('gender').value;
  alert(gender);
  console.log('the user', users[users.length - 1]);
  users[users.length - 1].gender = gender;
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = './join_birth.html';
}

function getBirth() {
  var month = document.getElementById('month').value;
  var day = document.getElementById('day').value;
  var year = document.getElementById('year').value;
  var birthdate = month + "/" + day + "/" + year;
  alert(birthdate); 

  console.log('the user', users[users.length - 1]);
  users[users.length - 1].birthday = birthdate;
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = './join_profilepic.html';
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
