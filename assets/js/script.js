// SWITCH STRING VARIABLE TO NUMBER, WILL BE USED TO DETERMINE PAST, PRESENT, FUTURE
var m = moment().format("1." + "HHmm")
m = parseFloat(m)

$(document).ready(function(){
  // SHOW CURRENT DATE
  $('#currentDay').text(moment().format("ddd MM DD YYYY"));
  // SETTING PAST, PRESENT, & FUTURE BACKGROUND COLORS
  if (m < 1.09) {
    $('#9am').addClass('future');
    } else if (m > 1.096) {
      $('#9am').addClass('past');
    } else {
      $('#9am').addClass('present');
    };
  
  if (m < 1.1) {
    $('#10am').addClass('future');
    } else if (m > 1.106) {
      $('#10am').addClass('past');
    } else {
      $('#10am').addClass('present');
    };

  if (m < 1.11) {
    $('#11am').addClass('future');
    } else if (m > 1.116) {
      $('#11am').addClass('past');
    } else {
      $('#11am').addClass('present');
    }; 

  if (m < 1.12) {
    $('#12pm').addClass('future');
    } else if (m > 1.126) {
      $('#12pm').addClass('past');
    } else {
      $('#12pm').addClass('present');
    };
  
  if (m < 1.13) {
    $('#1pm').addClass('future');
    } else if (m > 1.136) {
      $('#1pm').addClass('past');
    } else {
      $('#1pm').addClass('present');
    };

  if (m < 1.14) {
    $('#2pm').addClass('future');
    } else if (m > 1.146) {
      $('#2pm').addClass('past');
    } else {
      $('#2pm').addClass('present');
    }; 

  if (m < 1.15) {
    $('#3pm').addClass('future');
    } else if (m > 1.156) {
      $('#3pm').addClass('past');
    } else {
      $('#3pm').addClass('present');
    };
  
  if (m < 1.16) {
    $('#4pm').addClass('future');
    } else if (m > 1.166) {
      $('#4pm').addClass('past');
    } else {
      $('#4pm').addClass('present');
    };

  if (m < 1.17) {
    $('#5pm').addClass('future');
    } else if (m > 1.176) {
      $('#5pm').addClass('past');
    } else {
      $('#5pm').addClass('present');
    }; 
})