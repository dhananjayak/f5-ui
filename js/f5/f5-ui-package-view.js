(function (global) {
    'use strict';

     var packages = [{name:'Single Bed', value:1, imgUrl:'1.png', slots:[{value:4, unit:'Hrs'}]},
                     {name:'Bunker Bed', value:2, imgUrl:'2.png', slots:[{value:4, unit:'Hrs'}, {value:6, unit:'Hrs'}]},
                     {name:'Recliner', value:3, imgUrl:'3.png', slots:[{value:2, unit:'Hrs'}, {value:4, unit:'Hrs'}, {value:6, unit:'Hrs'}]},
                     {name:'Sofa', value:4, imgUrl:'4.png', slots:[{value:2, unit:'Hrs'}, {value:4, unit:'Hrs'}, {value:6, unit:'Hrs'}]}];

     var selectedPackage = packages[0];

     var changeHandlers = [];

     function raiseOnChange(changeHandlers, changeValue){
       changeHandlers.forEach(function(handler){
         console.log(changeValue);
         handler.call(null, changeValue);
       });
     }

     function packageView(container$, changeHandler){

          var markup =
            getPackages(null).
            map(function (packageItem){
              var templateHtml = '<input type="radio" name="package" class="input-hidden" id="package-{value}" value="{value}"   />';
                  templateHtml += '<label for="package-{value}"><img src="images/{imgUrl}" data-package-value="{value}" /></label>';

              return F5.core.template(templateHtml, packageItem)  ;
           });

          container$.empty();
          container$.html(markup.join(''));

          $(container$.find('input')[0]).attr('checked', 'checked');

          window.setTimeout(function() {selected(packages[0])}, 0);

          container$.find('img').on('click', function(){
            var selectedValue = $(this).attr('data-package-value');
            var selectedPackages =
              packages.filter(function(packageItem){
                return packageItem.value.toString() === selectedValue;
              });

            selected(selectedPackages[0]);
         });

         function selected(packageItem){
           console.log(packageItem);
           selectedPackage = packageItem;
           container$.prop('selectedPackage', packageItem);
           raiseOnChange(changeHandlers, packageItem);
         }

         return {addOnChange:addChangeHandler};
      }

      function addChangeHandler(changeHandler){
        if (changeHandler !== null)
          changeHandlers.push(changeHandler);
      }

      function getPackages(locationID){
        return packages;
      }

      global.F5 = global.F5 || {};

      global.F5.UIViews.packageView = packageView;
      global.F5.UIViews.selectedPackage = selectedPackage;
})(window);
