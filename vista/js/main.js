 





// JavaScript Document

$(document).ready(function() {

	

	/* ******   MOBILE VERSION MENU CLICK  ****************************/////  
	/* Brochure Download Form Submition *************************************************************/
	$("#brosubmit").click(function() {
			var number_val = $("#number").val();

		if ($("#name").val() == "") {

		  alert("Enter Name");

		  return false;

		}  
		var regex = /^[a-zA-Z ]*$/;

        if (regex.test($("#name").val())) {

      

        } else {

            alert("Invalid Name");

				  return false;

		}
		
		if ($("#number").val() == "") {

		  alert("Enter Contact Number");

		  return false;

		} else if (number_val.length <10) {

		  alert("Contact Number is be less than 10 digit");

		  return false;

		} 

		var intsOnly = /^\d+$/,

		phone_num = $('#number').val();

		

		if(intsOnly.test(phone_num)) {

		   //alert('its valid');  

			/*if ($("#phone").val().length != 10) {

				alert("Enter 10 digit Contact Number");

				

			}*/

		} else {

			alert("Enter valid Contact Number");

			return false;

		}

		

		if ($("#email").val() == "") {

		  alert("Enter Email Address");

		  return false;

		} 

		

		function isValidEmailAddress1(emailAddress1) {

		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

		return pattern.test(emailAddress1);

	};

	

	var emailaddress1 = $("#email").val();

	

	if( !isValidEmailAddress1( emailaddress1 ) ) { 

		

		if ($("#email").val() == "") {

		 // return true;

		} else {

			alert("Invalid Email Address");

			return false;

		}

	}
		var captcha_response = grecaptcha.getResponse();
if(captcha_response.length == 0)
{
    // Captcha is not Passed
alert("Enter Captcha Code");
    return false;
}


		});
/* End Brochure Download Form Submition *************************************************************/


/* Brochure Download Form Submition *************************************************************/
	$("#sitesubmit").click(function() {
			var number_val = $("#number").val();

		if ($("#name").val() == "") {

		  alert("Enter Name");

		  return false;

		}  
		var regex = /^[a-zA-Z ]*$/;

        if (regex.test($("#name").val())) {

      

        } else {

            alert("Invalid Name");

				  return false;

		}
		
		if ($("#number").val() == "") {

		  alert("Enter Contact Number");

		  return false;

		} else if (number_val.length <10) {

		  alert("Contact Number is be less than 10 digit");

		  return false;

		} 

		var intsOnly = /^\d+$/,

		phone_num = $('#number').val();

		

		if(intsOnly.test(phone_num)) {

		   //alert('its valid');  

			/*if ($("#phone").val().length != 10) {

				alert("Enter 10 digit Contact Number");

				

			}*/

		} else {

			alert("Enter valid Contact Number");

			return false;

		}

		

		if ($("#email").val() == "") {

		  alert("Enter Email Address");

		  return false;

		} 

		

		function isValidEmailAddress1(emailAddress1) {

		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

		return pattern.test(emailAddress1);

	};

	

	var emailaddress1 = $("#email").val();

	

	if( !isValidEmailAddress1( emailaddress1 ) ) { 

		

		if ($("#email").val() == "") {

		 // return true;

		} else {

			alert("Invalid Email Address");

			return false;

		}

	}
	if ($("#date").val() == "") {

		  alert("Enter Date");

		  return false;

		} 
		var captcha_response = grecaptcha.getResponse();
if(captcha_response.length == 0)
{
    // Captcha is not Passed
alert("Enter Captcha Code");
    return false;
}


		});
/* End Brochure Download Form Submition *************************************************************/



/* Enquiry Us Form Submition *************************************************************/

	$("#submit").click(function() {

		

		var number_val = $("#number").val();

		if ($("#name").val() == "") {

		  alert("Enter Name");

		  return false;

		}    

		var regex = /^[a-zA-Z ]*$/;

        if (regex.test($("#name").val())) {

      

        } else {

            alert("Invalid Name");

				  return false;



 



		}

 if ($("#country").val() == "") {

		  alert("Enter Country Code");

		  return false;

		} else if ($("#number").val() == "") {

		  alert("Enter Contact Number");

		  return false;

		} else if (number_val.length <10) {

		  alert("Contact Number is be less than 10 digit");

		  return false;

		} 

		var intsOnly = /^\d+$/,

		phone_num = $('#number').val();

		

		if(intsOnly.test(phone_num)) {

		   //alert('its valid');  

			/*if ($("#phone").val().length != 10) {

				alert("Enter 10 digit Contact Number");

				

			}*/

		} else {

			alert("Enter valid Contact Number");

			return false;

		}

		

		if ($("#email").val() == "") {

		  alert("Enter Email Address");

		  return false;

		} 

		

		function isValidEmailAddress1(emailAddress1) {

		var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

		return pattern.test(emailAddress1);

	};

	

	var emailaddress1 = $("#email").val();

	

	if( !isValidEmailAddress1( emailaddress1 ) ) { 

		

		if ($("#email").val() == "") {

		 // return true;

		} else {

			alert("Invalid Email Address");

			return false;

		}

	}

	

	

	/*if ($("#ans").val() == "") {



		  alert("Enter Capcha");



		  return false;



		} else



	if ($("#ans").val() != $("#capcha").val()) {



		  alert("Enter Correct Capcha");



		  return false;



		} 	*/

		



	var captcha_response = grecaptcha.getResponse();
if(captcha_response.length == 0)
{
    // Captcha is not Passed
alert("Enter Captcha Code");
    return false;
}

	

		

	});

/* Enquiry Us Form Submition  END *************************************************************/



	

	

/* Mobile Contact Us Form Submition *************************************************************/



/* Contact Us Form Submition  END *************************************************************/

	

/* Contact Us Form Submition *************************************************************/



/* Contact Us Form Submition  END *************************************************************/



	

});







$(window).load(function() {





});	





/* right-click  disabled *************************************************************/





// -->

