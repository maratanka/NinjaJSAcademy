const button = document.getElementById('send');
button.addEventListener('click', (e) => {
    console.log(e);
    validation(e);

})


function validation(e) {

    const firstNameInput = document.getElementById('firstname');
    const firstName = firstNameInput.value;

    if (firstName.length == 0 || firstName.indexOf(' ') >= 0) {
        e.preventDefault();
        showErrorMessage('Wrong first name')
    }
    const lastNameInput = document.getElementById('lastname');
    const lastName = lastNameInput.value;

    if (lastName.length == 0 || lastName.indexOf(' ') >= 0) {
        e.preventDefault();
        showErrorMessage('Wrong last name');
    }

    const emailInput = document.getElementById('email');
    const email = emailInput.value;


    const atSymbol = email.indexOf("@");
    const dotSymbol = email.indexOf(".");
    const lastSign = email.length - 1;

    if ((email =='') || (atSymbol <= 0) || (dotSymbol <= 0) || (dotSymbol == lastSign) || (email.indexOf(" ") >= 0) || (email.indexOf("..") >= 0)){
        e.preventDefault();
        showErrorMessage('Wrong email');
    }


    if (((document.getElementById('password').value ==
        document.getElementById('repassword').value)) && (document.getElementById('password').value !== "")) {
        console.log(e);
    } else {
        e.preventDefault();
        showErrorMessage('Wrong confirmed password');
    }


}

function showErrorMessage(mess) {
    const errorPanel = document.getElementById('error-panel');
    const div = document.createElement('div');
    div.classList.add('error-message');
    div.innerHTML = mess;
    errorPanel.appendChild(div);

}

document.getElementsByTagName('body')