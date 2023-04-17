document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('Withdraw-filed');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElement = document.getElementById('witdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const curentwithdawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = curentwithdawTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawField.value = '';
})