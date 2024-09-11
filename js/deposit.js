document.getElementById('btn-deposit').addEventListener('click',function(){

    /* 
    1. get element by id 
    2. get the value frome the element 
    3. convert the value to a number 
    
    */
   const newDepositeAmount = getInputFieldValueById('deposit-field');
   
   
   const previousDepositeTotal = getTextElementValueById('deposit-total');
   
   const newDepositeTotalAmount = previousDepositeTotal + newDepositeAmount;

   setTextElementValueById('deposit-total',newDepositeTotalAmount);

   // get previous balance by using the function 

   const previousBalancceTotal = getTextElementValueById('Balance-total');

   const currentBalanceTotal = previousBalancceTotal + newDepositeAmount;

  setTextElementValueById('Balance-total',currentBalanceTotal);

   
})