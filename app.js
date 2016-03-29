angular.module('waitStaff', [])

  .controller('MainCtrl', function($scope){
    var main = this;
    
    /*****************
     * INITIAL VALUES
     *****************/
    main.inputs = {
      baseMealPrice: 0,
      taxRate: 0,
      tipPercentage: 0
    };
    
    main.earnings = {
      tipTotal: 0,
      mealCount: 0,
      avgTipPerMeal: 0
    };
    
    /****************************
     * LISTENERS ON VALUE CHANGES
     ****************************/
    $scope.$watchCollection('main.inputs', function(newVal,oldVal){
      console.log(newVal, oldVal);
      calcChargesFromInputs();
    });
    
    /*****************
     * BUTTONS
     *****************/
    main.calculate = triggerCalculateButton;
    main.cancel = triggerCancelButton;
    
    /*****************
     * FUNCTIONS
     *****************/
    function calcChargesFromInputs(){
      // calculate subtotal
      main.customerSubtotal = main.inputs.baseMealPrice * ( (main.inputs.taxRate / 100) + 1 );

      // calculate tip
      main.customerTip = main.customerSubtotal * ( (main.inputs.tipPercentage / 100) );

      // calculate total
      main.customerTotal = main.customerSubtotal + main.customerTip;
    }
    
    function triggerCalculateButton(){
      if (main.inputs.baseMealPrice > 0){
        main.earnings.tipTotal += main.customerTip;
        main.earnings.mealCount += 1;
        main.earnings.avgTipPerMeal = main.earnings.tipTotal / main.earnings.mealCount;
      }

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
