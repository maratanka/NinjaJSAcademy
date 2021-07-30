const logBtn = document.getElementById("login");
const regBtn = document.getElementById("register");
const btn = document.getElementById("btn");

function showRegisterView() {
    logBtn.style.left = "-400px";
    regBtn.style.left = "50px";
    btn.style.left = "110px";
}

function showLoginView() {
    logBtn.style.left = "50px";
    regBtn.style.left = "450px";
    btn.style.left = "0";
}


function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var rePw = document.getElementById('rePw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(rePw.value.length == 0){
        alert('Please repeat password');
    
    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else if(pw.value != rePw.value){
        alert('Repassword does not match');
    }else{
        localStorage.setItem('name', JSON.stringify(name.value));
        localStorage.setItem('pw', JSON.stringify(pw.value));
        alert('Your account has been created');
    }
}


function login(){
    localStorage.setItem('name', JSON.stringify("Ania"));
    localStorage.setItem('pw', JSON.stringify("Ania123!"));


    var storedNameJSON = localStorage.getItem('name');
    var storedPwJSON = localStorage.getItem('pw');

    var storedName = JSON.parse(storedNameJSON);
    var storedPw = JSON.parse(storedPwJSON);

    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    if(userName == storedName && userPw == storedPw){
        var el = document.getElementsByClassName("form-box");
        
        alert('You are logged in.');
        sessionStorage.setItem("currentloggedin",userName);
        el.remove();
        createTable();
    }else{
        alert('Error on login');
    }

    var arrHead = new Array();	// array for header.
    arrHead = ['', 'Employee Name', 'Designation', 'Age'];

    // first create TABLE structure with the headers. 
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable'); // table id.

        var tr = empTable.insertRow(-1);
        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); // create table headers
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);  // add the TABLE to the container.
    }

    //add a new to the TABLE.
    function addRow() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;   // table row count.
        var tr = empTab.insertRow(rowCnt); // the table row.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td'); // table definition.
            td = tr.insertCell(c);

            if (c == 0) {      // the first column.
                // add a button in every new row in the first column.
                var button = document.createElement('input');

                // set input attributes.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');

                // add button's 'onclick' event.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else {
                // 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }
        }
    }

    // delete TABLE row function.
    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // button -> td -> tr.
    }
}

function checkIfNotLogin(){
   var loginUser = sessionStorage.getItem("currentloggedin");

   if (loginUser != null){
    document.getElementsByClassName('form-box').remove();
   }
}

