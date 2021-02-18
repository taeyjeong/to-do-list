// VALUE OF LAST SAVED TIME
var lastSavedTime = moment().format("hh:mm a")
// SWITCH STRING VARIABLE TO NUMBER, WILL BE USED TO DETERMINE PAST, PRESENT, FUTURE
var m = moment().format("1." + "HHmm")
m = parseFloat(m)

$(document).ready(function(){
  // SHOW CURRENT DATE
  $('#currentDay').text(moment().format("ddd MM DD YYYY"));
  // PREVIOUSLY SAVED TEXTS ON LOCAL STORAGE WILL APPEAR
  $('#9am').val(localStorage.getItem('9am'))
  $('#10am').val(localStorage.getItem('10am'))
  $('#11am').val(localStorage.getItem('11am'))
  $('#12pm').val(localStorage.getItem('12pm'))
  $('#1pm').val(localStorage.getItem('1pm'))
  $('#2pm').val(localStorage.getItem('2pm'))
  $('#3pm').val(localStorage.getItem('3pm'))
  $('#4pm').val(localStorage.getItem('4pm'))
  $('#5pm').val(localStorage.getItem('5pm'))
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
  // SAVE TEXT ENTRIES TO LOCAL STORAGE
  $('#t9').click(function() {
    localStorage.setItem('9am', document.getElementById('9am').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t10').click(function() {
    localStorage.setItem('10am', document.getElementById('10am').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t11').click(function() {
    localStorage.setItem('11am', document.getElementById('11am').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t12').click(function() {
    localStorage.setItem('12pm', document.getElementById('12pm').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t13').click(function() {
    localStorage.setItem('1pm', document.getElementById('1pm').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t14').click(function() {
    localStorage.setItem('2pm', document.getElementById('2pm').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t15').click(function() {
    localStorage.setItem('3pm', document.getElementById('3pm').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t16').click(function() {
    localStorage.setItem('4pm', document.getElementById('1pm').value)
    localStorage.setItem('last saved at', lastSavedTime);
  })

  $('#t17').click(function() {
    localStorage.setItem('5pm', txt17.value)
    localStorage.setItem('last saved at', lastSavedTime);
  })
})