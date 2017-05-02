var apiKey = require('./../.env').apiKey;

function Doctor() {
}

Doctor.prototype.getDoctor = function(medicalIssue, displayDoctors){
$.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=37.773%2C-122.413%2C100&=0&limit=10&user_key=' + apiKey)
  .then(function(response) {
    displayDoctors(response.data);
    console.log(medicalIssue);
  }).fail(function(error) {
    $('#findDoctor').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
