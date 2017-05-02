var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var searchedDoctors = new Doctor();
  $('#findDoctor').submit(function() {
    var illness = $('#illness').val();
    $('#illness').val("");
    $('#showDoctors').empty();
    searchedDoctors.getDoctor(illness);
  });
});
