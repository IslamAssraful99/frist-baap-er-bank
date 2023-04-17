document.getElementById('btn-diposit').addEventListener('click', function () {
    const dipositField = document.getElementById('Ddiposit-filed');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

    const dipositTotalElement = document.getElementById('deposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    const curentDipositTotal = previousDipositTotal + newDipositAmount;

    dipositTotalElement.innerText = curentDipositTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const curentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = curentBalanceTotal;

    dipositField.value = '';
})
