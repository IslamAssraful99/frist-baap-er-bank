document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;
    if(email === 'sontan@baap' && password === 'secret')(
        window.location.href = 'bank.html'
    )
    else(
        alert('nooooooo.')
    )   
})
