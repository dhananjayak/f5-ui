

function wowInit(){
  new WOW().init();
}

function showBookNow(){
  F5.UIViews.templateView($('#book-now-container'), function(){
    $('#book-now-popup').modal('show');
  });
}

function uiViewsInit(){
  var hoursView = F5.UIViews.hoursView($('#hours-view')),
      datesView = F5.UIViews.datesView($('#dates-view'));

   datesView.addOnChange(hoursView.refresh);
}

function uiTemplateViewsInit(){
  F5.UIViews.templateView($('#services-container'));
}

function init() {
  wowInit();

  defaultPackageSel();

  uiViewsInit();

  uiTemplateViewsInit();
}

function defaultPackageSel() {
    var $radios = $('input:radio[name=package]');
    if($radios.is(':checked') === false) {
        $("input[name=package][value=" + 1+ "]").prop('checked', true);

        //Display the proper slots
        bedslots(1);

    }
}


function loadDate(){

	//alert ('break');
		//Get the current date
		var now     = new Date();
		var today = dateToSring(now);

		 var fiveDays = F5.UI.dates(5);


		for(var i = 0;i < 5; i++){

		$('#checkInDate').append( new Option(fiveDays.display,fiveDays.value) );

		}

		// $('#checkInDate').append( new Option(today,1) );
//
// 		var tomorrow = dateToSring(addDays(now,1));
//
// 		$("#checkInDate").append( new Option(tomorrow,2) );
//
// 		var thirdDay  = dateToSring(addDays(now,2));
//
// 		$("#checkInDate").append( new Option(thirdDay,3) );
//
// 		var fourthDay  = dateToSring(addDays(now,3));
// 		$("#checkInDate").append( new Option(fourthDay,4) );
//
// 		var fiveDay = dateToSring(addDays(now,4));
// 		$("#checkInDate").append( new Option(fiveDay,5) );

		$("#checkInDate").selectedIndex = 0;

	}

function loadTime() {



	//alert ('break');
    var now     = new Date();



    var  checkin = $("#checkInDate option:selected").val();

   // alert(checkin);

    //Old code
    //var selDate = stringToDate(checkin,"dd-mm-yyyy","-");

   //alert(selDate);
    //Compare the both date if the selected date current date then show the time slot from the current time.

    //Get the time slot

    //var timeSlot = getCheckInTimeList();


   // alert(timeSlot);

   //Empty the previous data
   $('#checkInTime').empty();

    //Check the current day with the user selected date
    if(now.getDate() === checkin.getDate()){

    	//alert("date are same");
    	//Get the current time slot of the same day
    	//var curTimeList = getCurrentTimeSlot(timeSlot);

    	//for(var i = 0; i < curTimeList.length; i++){
		//var option = options[i];
  		 //$('#checkInTime').append( new Option(curTimeList[i],i) );
		//}

		var selDate = F5.UI.hours(now.getDate());

   		// alert("date are not same");
    	for(var i = 0, l = selDate.length; i < l; i++){
			//var option = options[i];
  		 		$('#checkInTime').append( new Option(selDate.display,selDate.value) );
			}

	//alert(i);
	$('#checkInTime').selectedIndex = 0;

    }else{

    //set the time from the beginning of the day

    	var selDate = F5.UI.hours(checkin);

   		// alert("date are not same");
    	for(var i = 0, l = selDate.length; i < l; i++){
			//var option = options[i];
  		 		$('#checkInTime').append( new Option(selDate.display,selDate.value) );
			}

			 var pos = timeslot.indexOf("09:00");
			 if(typeof pos != undefiend){
				$('#checkInTime').selectedIndex = pos;
				}else{
				$('#checkInTime').selectedIndex = 0;
				}
	}





  //   return dateTime;
}


$("#confirmForm").submit(function(e) {
    e.preventDefault();
});

function dismissConfrim(){

		$("#checkAvailability").show();
	$("#confirm").hide();

}

function displayConfirmForm(){
	$("#checkAvailability").hide();
	$("#confirm").show();

}


$(document).on('click',"#package1",function()
{
//alert(1);

 if ($(this).is(':checked')) {
      // put your code here and your alert
      bedslots(1);
   }


});

$(document).on('click',"#package2",function()
{
//alert(1);
	 if ($(this).is(':checked')) {

      bedslots(2);
   }

});


$(document).on('click',"#package3",function()
{
if ($(this).is(':checked')) {
	loungeslots(0);
	}

});


$(document).on('click',"#package4",function()
{
//alert(1);
	if ($(this).is(':checked')) {
		loungeslots(1);
	}

});


function bedslots(isBed){

	$('#slothours').empty();

	//alert(1);
	dataval = ['4 Hrs'];
	dataid =[4];
	dataPrice=[800];

	if(isBed === 2){
	dataval = ['4 Hrs','6 Hrs'];
	dataid =[4,6];
	dataPrice=[700,950];
	}
 for(i=0; i < dataval.length ; i++ )
            {

                //var destDropDownMenu = "<li class =\"funkyradio-success\"><input type=\"radio\" name=\"radio\" id="+ dataid[i]+" value="+ dataid[i] +"><label for="+dataid[i] +" class=\"radio\">"+ dataval[i]+"- INR "+dataPrice[i]+"</label></input></li>"
                var destDropDownMenu = "<li class =\"funkyradio-success\"><input type=\"radio\" name=\"radio\" id="+ dataid[i]+" value="+ dataid[i] +"><label for="+dataid[i] +" class=\"radio\">"+ dataval[i]+"</label></input></li>"
                $(destDropDownMenu).appendTo('#slothours');
            }

           // $('input[name=foo]').prop('checked', true);

   // $("input[name=foo]").prop('checked', 0);

   var $radios = $('input:radio[name=slothours]');

        //var valId = dataid[0];
        ///alert(valId);
        //$("#0").checked = true;
   		//$radios.filter(dataid[0]).prop('checked', true);

   		$("input[name=radio][value=" + dataid[0] + "]").prop('checked', true);

}

function loungeslots(isSofa){

	$('#slothours').empty();
	dataval = ['2 Hrs','4 Hrs','6 Hrs'];
	dataid =[2,4,6];
	dataPrice=[400,700,900];
	if(isSofa === 1){
		dataPrice=[250,500,750];
	}


 	for(i=0; i < dataval.length ; i++ )
            {
                //var destDropDownMenu = "<li class =\"funkyradio-success\"><input type=\"radio\" name=\"radio\" id="+ dataid[i]+" value="+ dataid[i] +"><label for="+dataid[i] +" class=\"radio\">"+ dataval[i]+ "- INR "+dataPrice[i]+"</label></input></li>"
                var destDropDownMenu = "<li class =\"funkyradio-success\"><input type=\"radio\" name=\"radio\" id="+ dataid[i]+" value="+ dataid[i] +"><label for="+dataid[i] +" class=\"radio\">"+ dataval[i]+"</label></input></li>"
                $(destDropDownMenu).appendTo('#slothours');
            }

           // $("#0").checked = true;
        //    $("#slothours").prop('selectedIndex', 0);

        //$('#slothours').selectedIndex = 0;;
       // var valId = "value="+dataid[0];
         //$('input:radio[name="radio"]').selectedIndex = 0;
         $("input[name=radio][value=" + dataid[0] + "]").prop('checked', true);

   		//$radios.filter(valId).prop('checked', true);
}

function bookNowClicked(){

	if (!bookformValidation()) return;

	var request = {
		bookingDate : toJSONLocal($("#dates-view").prop('selectedDate').value),
		bookingTime : $("#hours-view").prop('selectedHour').display,
    serviceCenterIds : "8001",
		packageId : "5001",
		packageCenterId : "7004",
		extendedHours : "0",
		serviceIds : ""
	};

	checkAvailability(request);
}


function bookConfirmClicked(){


//Check user has provided all the value
	if(formValidation()){

		//Now prepare the request parameters
		//alert("break 1");

		var reqObj = new Object();

		reqObj.name = $("#confirmname").val();
		reqObj.emailId = $("#confirmemail").val();
		reqObj.mobileNumber = $("#confirmphone").val();
		reqObj.dateOfBirth = "09102016";
		reqObj.password = $("#confirmphone").val();

		//Call the http request.
		registerCustomer(reqObj,callbackAddNewCustomer);
	}

}



function formValidation()
{

 //alert($("#bookingform").name.text());

// var filledData = JSON.stringify($('#bookingform').serializeArray())

 ///alert($('#bookingform').serializeArray());

	var name = $("#confirmname").val();
	var email = $("#confirmemail").val();
	var phone = $("#confirmphone").val();
	var street = $("#confirmstreet").val();

//alert(name);
	if(allLetter(name))
	{
		if(ValidateEmail(email))
		{
			if(allnumeric(phone))
			{

			}
		}
	}
	//alert(1);
	return true;
}





function bookformValidation()
{


	var name = $('#dLabel');
	//var email = $('#dLabel');

	var chkDate = $("#checkInDate option:selected").text();
	var chkTime = $("#checkInTime option:selected").text();


	var pkgVal = $('input[name="package"]:checked').val();
	var slotHr = $('input:radio[name="radio"]:checked').val();




	if(typeof pkgVal != 'undefined'){

		if(pkgVal < 1){

		alert('Please select any one of the package!');
		$("#package").focus();

		return false;
		}
	}else {

		alert('Please select any one of the package!');
		$("#package").focus();

		return false;
	}

	if(typeof slotHr != 'undefined'){

 		if(slotHr < 1){

			alert('Please select any one of the slot to stay!');
			$("#slothours").focus();

			return false;

		}
	}else {

		alert('Please select any one of the slot to stay!');
		$("#slothours").focus();

		return false;
	}

	return true;



}



function createBookingJson(custId){

	//Create a booking JSON


	var reqObj = new Object();
	//var dateItems=$("#checkInDate option:selected").text().split('-');
		 //alert(dateItems);
 	//reqObj.bookingDate = dateItems[2]+'-'+dateItems[1]+'-'+dateItems[0];

 	 var selectedDate=$("#dates-view option:selected").val();

		var selDate = new Date(selectedDate);
 	var jsonDate = toJSONLocal(selDate);



 	//reqObj.bookingDate = dateItems[2]+'-'+dateItems[1]+'-'+dateItems[0];
 	reqObj.bookingDate = jsonDate;

  	reqObj.bookingTime = $("#hours-view option:selected").text();
  	reqObj.serviceCenterIds = "8001";
  	reqObj.packageId = "5001";
  	reqObj.packageCenterId = "7004";
  	reqObj.extendedHours = "0";
  	reqObj.customerId = custId;


	var reqJson = JSON.stringify(reqObj);

	//alert(reqJson);


	return reqObj;

}


function callbackAddNewCustomer(custId){


	//alert(custId);

	callBookService(createBookingJson(custId));
}




function allLetter(name)
{
var letters = /^[A-Za-z]+$/;

if( typeof name == 'undefined'){

alert('Please provide your Name!');
name.focus();
return false;

}
if(name.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
name.focus();
return false;
}
}
function ValidateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if( typeof email == 'undefined'){

alert('Please provide your email to reach you!');
name.focus();
return false;

}


if(email.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}
function allnumeric(phone)
{
var letters = /^[0-9]+$/;

if( typeof phone == 'undefined'){

alert('Please enter the Contact No!');
name.focus();
return false;

}

if(phone.match(letters))
{
return true;
}
else
{
alert('Phone number must have numeric characters only');
phone.focus();
return false;
}
}
function alphanumeric(street)
{

//alert(street);
var letters = /^[0-9a-zA-Z]+$/;

if( typeof street == 'undefined'){

alert('Please enter the Address !');
street.focus();
return false;

}

if(street.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
street.focus();
return false;
}
}


function validatedate(date)
  {
  var dateformat = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
  // Match the date format through regular expression
  if(date.match(dateformat))
  {
  document.bookingform.date.focus();
  //Test which seperator is used '/' or '-'
  var opera1 = date.value.split('/');
  var opera2 = date.value.split('-');
  lopera1 = opera1.length;
  lopera2 = opera2.length;
  // Extract the string into month, date and year
  if (lopera1>1)
  {
  var pdate = date.value.split('/');
  }
  else if (lopera2>1)
  {
  var pdate = date.value.split('-');
  }
  var mm  = parseInt(pdate[0]);
  var dd = parseInt(pdate[1]);
  var yy = parseInt(pdate[2]);
  // Create list of days of a month [assume there is no leap year by default]
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
  if (dd>ListofDays[mm-1])
  {
  alert('Invalid date format!');
  return false;
  }
  }
  if (mm==2)
  {
  var lyear = false;
  if ( (!(yy % 4) && yy % 100) || !(yy % 400))
  {
  lyear = true;
  }
  if ((lyear==false) && (dd>=29))
  {
  alert('Invalid date format!');
  return false;
  }
  if ((lyear==true) && (dd>29))
  {
  alert('Invalid date format!');
  return false;
  }
  }
  }
  else
  {
  alert("Invalid date format!");
  document.bookingform.date.focus();
  return false;
  }
  }
