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

    global.F5 = global.F5 || {};

    global.F5.UIViews.confirmBooking = confirmBooking;
})(window);
