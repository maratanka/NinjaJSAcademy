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


function store() {

    const name = document.getElementById('name');
    const pw = document.getElementById('pw');
    const rePw = document.getElementById('rePw');
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    const numbers = /[0-9]/g;

    if (name.value.length == 0) {
        alert('Please fill in email');

    } else if (pw.value.length == 0) {
        alert('Please fill in password');

    } else if (rePw.value.length == 0) {
        alert('Please repeat password');

    } else if (name.value.length == 0 && pw.value.length == 0) {
        alert('Please fill in email and password');

    } else if (pw.value.length > 8) {
        alert('Max of 8');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');

    } else if (pw.value != rePw.value) {
        alert('Repassword does not match');
    } else {

        if (name.value && pw.value) {
            localStorage.setItem('name', JSON.stringify(name.value));
            localStorage.setItem('pw', JSON.stringify(pw.value));

        }

        alert('Your account has been created');
    }
}


function login() {

    //Dummy User
    // localStorage.setItem('name', JSON.stringify("Ania"));
    // localStorage.setItem('pw', JSON.stringify("Ania123!"));


    const storedNameJSON = localStorage.getItem('name');
    const storedPwJSON = localStorage.getItem('pw');

    var storedName = JSON.parse(storedNameJSON);
    var storedPw = JSON.parse(storedPwJSON);

    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    if (userName == storedName && userPw == storedPw) {
        var el = document.getElementsByClassName("form-box")[0];

        alert('You are logged in.');
        sessionStorage.setItem("currentloggedin", userName);
        console.log("checkIfNotLogin is done from Login");
        checkIfNotLogin();
        el.remove();
        window.location.reload(false);
        creatingInvoicingPanel();

    } else {
        alert('Error on login');
    }

}


function checkIfNotLogin() {
    var loginUser = sessionStorage.getItem("currentloggedin");
    console.log("checkIfNotLogin is done from CheckLogin");

    if (loginUser != null) {
        document.getElementsByClassName("form-box")[0].remove();
        document.getElementsByClassName("hero")[0].remove();
        creatingInvoicingPanel();
    }
}

function logout() {
    sessionStorage.removeItem("currentloggedin");
    window.location.reload(false);
}

function creatingInvoicingPanel(){
    
    var obj = [{ Invoicenumber: "1234567", Itemname: "Books", Price: "5566", Invoicedate: "2019-08-10" }, { Invoicenumber: "19998", Itemname: "Tables", Price: "887766", Invoicedate: "2020-06-01" }, { Invoicenumber: "667788", Itemname: "Water", Price: "877", Invoicedate: "2019-07-09" }];

    //Creating form for invoices
    var form = document.createElement('form');
    form.id = "details";
    document.body.appendChild(form);
    
    var tableDiv = document.createElement('div');
    tableDiv.setAttribute("id", "invoices");
    form.appendChild(tableDiv);
    
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    tableDiv.appendChild(table);
    
    var btnDelete = document.createElement('input');
    btnDelete.type = "button";
    btnDelete.value = "Delete";
    btnDelete.onclick = deleteRow;
    form.appendChild(btnDelete);
    
    var addForm = document.createElement('div');
    addForm.setAttribute("id", "addForm");
    form.appendChild(addForm);
    //End of creating form for invoices
    
    
    //Creating headres

    const headers = ["Select", "Nr", "Invoicenumber", "Itemname", "Price", "Invoicedate", "Action" ];
    var row = document.createElement("tr");
    row.setAttribute("id", "tableHeader")

    for (i = 0; i < headers.length; i++){
        var cell = document.createElement("th");
        cell.setAttribute("class", "tableCells")
        row.appendChild(cell);
        cell.innerHTML = headers[i];
    }

    table.appendChild(row);
    //End of creating headres
    
    
    //Adding input fields for invoices
    var invoiceNumber = document.createElement('input');
    invoiceNumber.type = "text";
    invoiceNumber.placeholder = "Invoice Number";
    invoiceNumber.required = true;
    addForm.appendChild(invoiceNumber);
    
    var itemName = document.createElement('input');
    itemName.type = "text";
    itemName.placeholder = "Item Name";
    itemName.required = true;
    addForm.appendChild(itemName);
    
    var price = document.createElement('input');
    price.type = "number";
    price.placeholder = "Price";
    price.required = true;
    addForm.appendChild(price);
    
    var invoiceDate = document.createElement('input');
    invoiceDate.type = "date";
    invoiceDate.placeholder = "Number";
    invoiceDate.required = true;
    addForm.appendChild(invoiceDate);
    
    
       //Rendering sample invoice
     
        for (var i = 0; i < obj.length; i++) {
    
            var btnEdit = document.createElement('input');
            btnEdit.type = "button";
            btnEdit.value = "Edit";
            btnEdit.onclick = editCell;
    
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.id = "checkBox";
    
            var row = document.createElement("tr");
            table.appendChild(row);
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.appendChild(checkbox);
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = i;
            for (key in obj[i]) {
                0
                var cell = document.createElement("td");
                row.appendChild(cell);
                cell.innerHTML = obj[i][key];
            }
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.appendChild(btnEdit);
        }

    var addTable = function () {
    
        var btnEdit = document.createElement('input');
        btnEdit.type = "button";
        btnEdit.value = "Edit";
        btnEdit.onclick = editCell;
    
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "checkBox";
        var row = document.createElement("tr");
        if ((invoiceNumber.value != "") && (itemName.value != "") && (price.value != "") && (invoiceDate.value != "")) {
    
            table.appendChild(row);

            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.appendChild(checkbox);
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = i++;
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = invoiceNumber.value;
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = itemName.value;
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = price.value;
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerHTML = invoiceDate.value;
    
            var cell = document.createElement("td");
            row.appendChild(cell);
            cell.appendChild(btnEdit);
    
            document.getElementById("details").reset();
        }
        else {
            alert("Enter Input Values");
        }
    };
    
    var btnClick = document.createElement('input');
    btnClick.type = "submit";
    btnClick.setAttribute("class", "add-btn");
    btnClick.value = "Add Row";
    btnClick.onclick = addTable;
    form.appendChild(btnClick);
    
    var logoutBtn = document.createElement('button');
    logoutBtn.innerHTML = "Logout";
    logoutBtn.setAttribute("class", "submit-btn");
    logoutBtn.onclick = logout;
    form.appendChild(logoutBtn);
    
    
    function deleteRow() {
        var tabDel = document.getElementById('myTable');
        var rowCount = tabDel.rows.length;
        for (var i = 0; i < rowCount; i++) {
            var row = tabDel.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (chkbox.checked) {
                tabDel.deleteRow(i);
                rowCount--;
                i--;
            }
        }
    }
    
    function editCell(e) {
    
        var t = e.target.parentElement.parentElement;
        var trs = t.getElementsByTagName("tr");
        tds = t.getElementsByTagName("td");
    
        tds[2].appendChild(invoiceNumber);
    
        tds[3].appendChild(itemName);
    
        tds[4].appendChild(price);
    
        tds[5].appendChild(invoiceDate);
        curr = t;
    }

}


