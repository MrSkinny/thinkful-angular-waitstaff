angular.module('waitStaff', [])

  .controller('MainCtrl', function($scope){
    var main = this;
    
    main.inputs = {};
    main.inputs.baseMealPrice = 0;
    main.inputs.taxRate = 0;
    main.inputs.tipPercentage = 0;
    
    $scope.$watchCollection('main.inputs', function(newVal,oldVal){
      console.log(newVal, oldVal);
      calcChargesFromInputs();
    });
    
    function calcChargesFromInputs(){
      // calculate subtotal
      main.customerSubtotal = main.inputs.baseMealPrice * ( (main.inputs.taxRate / 100) + 1 );

      // calculate tip
      main.customerTip = main.customerSubtotal * ( (main.inputs.tipPercentage / 100) );

      // calculate total
      main.customerTotal = main.customerSubtotal + main.customerTip;
    }
    
    main.calculate = function(){
      
      console.log(main.inputs.baseMealPrice, main.inputs.taxRate, main.inputs.tipPercentage);

      // reset input values
      main.inputs.baseMealPrice = 0;
      main.inputs.taxRate = 0;
      main.inputs.tipPercentage = 0;
      
    };
  });
