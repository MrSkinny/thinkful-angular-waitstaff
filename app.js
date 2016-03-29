angular.module('waitStaff', [])

  .controller('MainCtrl', function($scope){
    var main = this;
    
    // Set Initial Values
    main.inputs = {};
    main.inputs.baseMealPrice = 0;
    main.inputs.taxRate = 0;
    main.inputs.tipPercentage = 0;
    
    // Listener on value changes
    $scope.$watchCollection('main.inputs', function(newVal,oldVal){
      console.log(newVal, oldVal);
      calcChargesFromInputs();
    });
    
    // Buttons
    main.calculate = triggerCalculateButton;
    main.cancel = triggerCancelButton;
    
    // Functions
    function calcChargesFromInputs(){
      // calculate subtotal
      main.customerSubtotal = main.inputs.baseMealPrice * ( (main.inputs.taxRate / 100) + 1 );

      // calculate tip
      main.customerTip = main.customerSubtotal * ( (main.inputs.tipPercentage / 100) );

      // calculate total
      main.customerTotal = main.customerSubtotal + main.customerTip;
    }
    
    function triggerCalculateButton(){
      console.log(main.inputs.baseMealPrice, main.inputs.taxRate, main.inputs.tipPercentage);

      // reset input values
      main.inputs.baseMealPrice = 0;
      main.inputs.taxRate = 0;
      main.inputs.tipPercentage = 0;
    }
    
    function triggerCancelButton(){
      // reset input values
      main.inputs.baseMealPrice = 0;
      main.inputs.taxRate = 0;
      main.inputs.tipPercentage = 0;
    }
    
  });
