(function (global) {
   'use strict';

    function confirmBooking(bookingForm){
      var name = $(bookingForm.name).val();
      var email = $(bookingForm.email).val();
      var phone = $(bookingForm.phone).val();

      var bookingDetailRequest = bookingDetails();

      console.log(name);
      console.log(email);
      console.log(phone)
      console.log(bookingDetailRequest);
    }

    function initialize(){
      console.log('book now initialization');
      
      $('#confirm-booking-form').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
          console.log('default prevented...');
          // handle the invalid form...
        } else {
          // everything looks good!
          confirmBooking({name:'#inputName', email:'#inputEmail', phone:'#inputPhone'});
        }
      });
    }

    global.F5 = global.F5 || {};

    //global.F5.UIViews.bookNow.confirmBooking = confirmBooking;
    global.F5.UIViews.initializeBookNow = initialize;
})(window);
