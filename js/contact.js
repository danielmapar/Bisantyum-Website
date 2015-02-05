function sendMail() {
// PHP call
	  $.ajax({
	    url: "mail.php",
	    type: 'POST',
	    data: {
	        name: $('#name').val(),
	        email: $('#email').val(),
	        message: $('#message').val(),
	    },
	    dataType: 'json'
	  });

	  $( "#footer .container form" ).css('overflow', 'hidden');
	  $( "#footer .container form" ).animate({
	      opacity: 0,
	      height: "toggle"
	  }, 1000, function() {
	      $('#footer .container').html("<p style=\"color: black;margin: 0px;display: none\">Thanks for the message. We'll get back to you as soon as possible.</p>");
	      $('#footer .container p').animate({height: "toggle"}, function () {});
	  });
}

function validateName() {

  var name = document.getElementById('name').value;

  if(name.length == 0) {
    $('#name').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateEmail () {

  var email = document.getElementById('email').value;

  if(email.length == 0) {
    $('#email').parent().addClass('has-error');
    return false;
  }

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(!re.test(email)) {
    $('#email').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateMessage() {
  var message = document.getElementById('message').value;
  var required = 1;
  var left = required - message.length;

  if (left > 0) {
    console.log("teste");
    $('#message').parent().addClass('has-error');
    return false;
  }

  return true;
}

function validateForm() {
  $('.has-error').removeClass('has-error');
  var val_name = validateName();
  var val_email = validateEmail();
  var val_message = validateMessage();
  if (val_name && val_email && val_message) {
    sendMail();
  }
}

