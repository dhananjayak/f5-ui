(function (global) {
    'use strict';

     var selectedSlot = null;

     function getSelectedSlot(){
       return selectedSlot;
     }

     function slotsView(container$){
          function selected(selectedSlotItem){
            console.log(selectedSlotItem);
            selectedSlot = selectedSlotItem;
            container$.prop('selectedSlot', selectedSlot);
         //raiseOnChange(changeHandlers, packageItem);
          }

          function refresh(selectedPackage){
            console.log(selectedPackage);
            var slots = selectedPackage.slots;
            var markup =
              slots.
              map(function (slot){
                var templateHtml = '<li class="funkyradio-success" data-slot-value="{value}">';
                    templateHtml += '<input type="radio" name="radio" id="slot-{value}" value="{value}">';
                    templateHtml += '<label for="slot-{value}" class="radio">{value} {unit}</label>'
                    templateHtml += '</li>';

                return F5.core.template(templateHtml, slot)  ;
             });

            container$.empty();
            container$.html(markup.join(''));

            window.setTimeout(function() {selected(slots[0])}, 0);

            $(container$.find('input')[0]).attr('checked', 'checked');

            container$.find('li').on('click', function(){
              var selectedValue = $(this).attr('data-slot-value');
              var selectedSlots =
                slots.filter(function(slot){
                  return slot.value.toString() === selectedValue;
                });

              selected(selectedSlots[0]);
           });
          }

          return {refresh:refresh};
      }

      global.F5 = global.F5 || {};

      global.F5.UIViews.slotsView = slotsView;
      global.F5.UIViews.getSelectedSlot = getSelectedSlot;

})(window);
