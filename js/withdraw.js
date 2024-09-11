/* 
1. add withdraw button event handelar 
2. get withdraw amount by using getInputFieldValueById function 
3. get previous withdraw amount by using getTextElementValueById function 
4. calculate new withdraw total and set the value 

*/

document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawInputFieledElement = getInputFieldValueById('withdraw-field');

     const previousWithdrawAmount = getTextElementValueById('withdraw-total');

     const newWithdrawTotalAmount = previousWithdrawAmount + withdrawInputFieledElement;

     setTextElementValueById('withdraw-total',newWithdrawTotalAmount);

   const   balanceWithdrawAmount = getTextElementValueById('Balance-total');

   const currentWithdrawBalanceTotal = balanceWithdrawAmount - withdrawInputFieledElement;
   setTextElementValueById('Balance-total',currentWithdrawBalanceTotal);

})