const pass = document.querySelector('#pass');
const newPass = document.querySelector('#newPass');

function gerarPass(){

    if(pass.value === ''){
        alert('Digite o tamanho da sua senha!');
        return;
    };

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for(var i = 0, n = charset.length; i < pass.value; ++i){
        password += charset.charAt(Math.floor(Math.random() * n));
    };

    alert(password);

};