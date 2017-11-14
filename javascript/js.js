var users;
var userIndex;
var newUser = true;

if (localStorage.getItem('users') === null) {
  console.log('empty: ' + JSON.stringify(localStorage));
  users = [];
} else {
  users = JSON.parse(localStorage.getItem('users'));
  console.log('hi, not empty:' + JSON.stringify(localStorage));
}

// alert('users: ' + JSON.stringify(users));

function getName() {

  var first = document.getElementById('userFirstName').value;
  var last = document.getElementById('userLastName').value;
  var fullName = first + " " + last;
  var person = {
    "name": fullName,
    "email": "",
    "password": "",
    "gender": "",
    "birthday": "",
    "profilePic": "",
    "conditions": []
  };

  console.log(JSON.stringify(person));
  // alert('pushing: ' + JSON.stringify(person));
  // alert('users: ' + JSON.stringify(users));
  users.push(person);
  localStorage.setItem('users', JSON.stringify(users));
  console.log('localStorage: ' + localStorage);

  // If new user
  userIndex = users.length - 1;
  alert(userIndex);
  window.location.href = './join_email.html';
}

function getEmail() {
  var email = document.getElementById('userEmail').value;
  // alert(email);
  console.log('the user', users[users.length - 1]);
  users[users.length - 1].email = email;
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = './join_password.html';
}

function getPassword() {
  var password = document.getElementById('userPass').value;
  var confirm = document.getElementById('userPass2').value;
  // alert('password: ' + password);
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
  // alert(gender);
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
  // alert(birthdate);

  console.log('the user', users[users.length - 1]);
  users[users.length - 1].birthday = birthdate;
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = './join_profilepic.html';
}

function renderConditions() {
  var conditions = users[users.length - 1].conditions;

  if (conditions) {
    for (var i = 0; i < conditions.length; i++) {
      console.log(conditions[i]);
      var $div = $('<div/>', {
        class: 'card text-center',
        id: (conditions[i] + '').replace(/ /g, '-'),
        rel: 'external',

      }).html('<div class="card text-center"><div class="card-body"><h4 class="card-title">' + conditions[i] + '</h4></div></div>');
      $($div).insertBefore($('#add'));
    }
  }

  $('#overview').click(function(){
    window.location.href = './overview.html';
  });
  
  $('#add').click(function(){
    window.location.href = './conditions.html';
  });

  $('#Anemia').click(function(){
    window.location.href = './anemia.html';
  });
  $('#Arthritis').click(function(){
    window.location.href = './arthritis.html';
  });
  $('#Back-Pain').click(function(){
    window.location.href = './backpain.html';
  });
  $('#Cholesterol').click(function(){
    window.location.href = './cholesterol.html';
  });

  $('#Dementia').click(function(){
    window.location.href = './dementia.html';
  });

  $('#Diabetes').click(function(){
    window.location.href = './diabetes.html';
  });

  $('#Fatigue').click(function(){
    window.location.href = './fatigue.html';
  });

  $('#High-Blood-Pressure').click(function(){
    window.location.href = './highbp.html';
  });

  $('#Ulcers').click(function(){
    window.location.href = './ulcers.html';
  });

   
}

// TODO: change this to use only userIndex
function getConditions() {
  var selectedCondition = $('#select2-conditions').val() + '';

  if (selectedCondition && (selectedCondition.length !== 0)) {
    var conditions = users[users.length - 1].conditions;
    alert("conditions: " + conditions);

    if (conditions === null || conditions.length === 0) {
      // localStorage.setItem('conditions', selectedCondition);
      // localStorage.setItem('users', conditions);
      alert(selectedCondition);
      alert(selectedCondition.split(","));

      users[users.length - 1].conditions = selectedCondition.split(",");
      localStorage.setItem('users', JSON.stringify(users));
    }
    else {
      // var conditions = localStorage.getItem('conditions') + ','+ selectedCondition;
      alert("not null");
      alert(selectedCondition);
      alert(selectedCondition.split(","));

      selectedCondition.split(",").forEach(function(condition) {
        conditions.push(condition);
      });
      // conditions.push(selectedCondition.split(","));

      alert("Conditionssss: " + conditions);

      users[users.length - 1].conditions = conditions;

      alert(JSON.stringify(users));
      // localStorage.setItem('conditions', conditions);
      // users[users.length - 1].conditions = conditions.split(",");
      localStorage.setItem('users', JSON.stringify(users));
    }
    window.location.href = './dashboard.html';
  } else {
    alert('No condition selected!');
  }
}

$('#overview').click(function(){
  window.location.href = './overview.html';
});
$('#add').click(function(){
  window.location.href = './conditions.html';
});
$('#High-Blood-Pressure').click(function(){
  window.location.href = './highbp.html';
});
$('#Diabetes').click(function(){
  window.location.href = './diabetes.html';
});
$('#Anemia').click(function(){
  window.location.href = './anemia.html';
});
$('#Back-Pain').click(function(){
  window.location.href = './backpain.html';
});
$('#Cholesterol').click(function(){
  window.location.href = './cholesterol.html';
});
$('#Dementia').click(function(){
  window.location.href = './dementia.html';
});
$('#Fatigue').click(function(){
  window.location.href = './faigue.html';
});
$('#Ulcers').click(function(){
  window.location.href = './ulcers.html';
});

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
  localStorage.clear();
});

$('.fa-sign-out').click(function() {
  window.location.href = './index.html';
  // console.log('clear local storage');
  // localStorage.clear();
});
