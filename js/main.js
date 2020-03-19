$(document).ready(function(){
    $('.sidenav').sidenav();
  });

$('.dropdown-trigger').dropdown();

$(document).ready(function(){
  $('.tooltipped').tooltip();
});

$(document).ready(function(){
  $('.modal').modal();
});

$(document).ready(function(){
  $('select').formSelect();
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.timepicker');
  var instances = M.Timepicker.init(elems, {
    twelveHour: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var curyear = new Date().getFullYear();
  var today = new Date();
  var instances = M.Datepicker.init(elems,{
    setDefaultDate: true,
    defaultDate: today,
    minDate: today,
    showDaysInNextAndPreviousMonths:true,
    format: 'dd.mm.yyyy'
  });
});

$('.chips').chips();
$('#vid_lech').chips({
  placeholder: 'Вид лечения',
  secondaryPlaceholder: '+Вид',
});
$('#mkb').chips({
  placeholder: 'МКБ-10',
  secondaryPlaceholder: '+МКБ',
  autocompleteOptions: {
    data: {
      'A15': null,
      'B10': null,
      'C12': null
    },
    limit: Infinity,
    minLength: 1
  }
});

$(document).ready(function(){
  $('.collapsible').collapsible();
});