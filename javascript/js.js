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