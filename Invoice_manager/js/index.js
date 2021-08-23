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


function store() { //todo change name to "register"

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

    } else if (pw.value.length < 8) {
        alert('Min of 8');

    } else if (!pw.value.match(numbers)) {
        alert('please add 1 number');

    } else if (!pw.value.match(upperCaseLetters)) {
        alert('please add 1 uppercase letter');

    } else if (!pw.value.match(lowerCaseLetters)) {
        alert('please add 1 lovercase letter');

    } else if (pw.value != rePw.value) {
        alert('Repassword does not match');
    } else {

        let newRegisteredUser = {
            userName: name.value,
            password: pw.value
        };

        let registeredUsers = [];

        if (!localStorage.getItem('Users')) {
            registeredUsers.push(newRegisteredUser);
            localStorage.setItem('Users', JSON.stringify(registeredUsers));
        } else {
            var localStoredUsersJson = localStorage.getItem('Users');
            registeredUsers = JSON.parse(localStoredUsersJson);

            var isUserExist = false;
            for (let i = 0; i < registeredUsers.length; i++) {
                if (registeredUsers[i].userName == newRegisteredUser.userName) {
                    isUserExist = true;
                }
            }

            if (isUserExist) {
                alert("User already exists!");
            }
            else {
                registeredUsers.push(newRegisteredUser);
                localStorage.setItem('Users', JSON.stringify(registeredUsers));
                alert('Your account has been created');
            }
        }
    }
}


function login() {

    var retrievedUsers = JSON.parse(localStorage.getItem('Users'));

    var providedUsername = document.getElementById('userName').value;
    var providedUserPassword = document.getElementById('userPw').value;

    var isUserRegistered = false;
    for (let i = 0; i < retrievedUsers.length; i++) {
        if (retrievedUsers[i].userName == providedUsername && retrievedUsers[i].password == providedUserPassword) {
            isUserRegistered = true;
        }
    }


    if (isUserRegistered) {
        var el = document.getElementsByClassName("form-box")[0];

        alert('You are logged in.');
        sessionStorage.setItem("currentloggedin", providedUsername);
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



function creatingInvoicingPanel() {

    //Creating form for invoices
    const formInvoices = document.createElement('form');
    formInvoices.id = "details";
    document.body.appendChild(formInvoices);

    const tableDivInvoices = document.createElement('div');
    tableDivInvoices.setAttribute("id", "invoices");
    formInvoices.appendChild(tableDivInvoices);

    const tableInvoices = document.createElement("table");
    tableInvoices.setAttribute("id", "myTable");
    tableDivInvoices.appendChild(tableInvoices);

        //Creating input fields
        const inputInvoiceNumber = document.createElement('input');
        inputInvoiceNumber.placeholder = "Invoice Number";
        inputInvoiceNumber.setAttribute("id", "invoice-number");
        formInvoices.appendChild(inputInvoiceNumber);
    
        const inputInvoiceName = document.createElement('input');
        inputInvoiceName.placeholder = "Invoice Name";
        inputInvoiceName.setAttribute("id", "invoice-name");
        formInvoices.appendChild(inputInvoiceName);
    
        const inputInvoicePrice = document.createElement('input');
        inputInvoicePrice.placeholder = "Price";
        inputInvoicePrice.type = "number";
        inputInvoicePrice.setAttribute("id", "invoice-price");
        formInvoices.appendChild(inputInvoicePrice);
    
        const inputInvoiceDate = document.createElement('input');
        inputInvoiceDate.placeholder = "Invoice Date";
        inputInvoiceDate.type = "date";
        inputInvoiceDate.setAttribute("id", "invoice-date");
        formInvoices.appendChild(inputInvoiceDate);
    
        const buttonAddInvoice = document.createElement("button");
        buttonAddInvoice.innerText = "Add Invoice";
        buttonAddInvoice.setAttribute("id", "add-btn");
        formInvoices.appendChild(buttonAddInvoice);
        buttonAddInvoice.onclick = addInvoice;


    //Add logoutButton to formInvoices
    const logoutBtn = document.createElement('button');
    logoutBtn.innerHTML = "Logout";
    logoutBtn.setAttribute("class", "submit-btn");
    logoutBtn.onclick = logout;
    formInvoices.appendChild(logoutBtn);

    //Creating headres
    const headers = ["Invoice Number", "Invoice Name", "Price", "Invoice Date", "Action"];
    const tableRowWithHeaders = document.createElement("tr");
    tableRowWithHeaders.setAttribute("id", "tableHeader")

    for (i = 0; i < headers.length; i++) {
        var cell = document.createElement("th");
        cell.setAttribute("class", "tableCells")
        tableRowWithHeaders.appendChild(cell);
        cell.innerHTML = headers[i];
    }

    tableInvoices.appendChild(tableRowWithHeaders);
    //End of creating headres

    const invoicesTableToGenerateDiv = document.createElement("div");
    invoicesTableToGenerateDiv.setAttribute("id", "invoices-table-div");
    tableInvoices.appendChild(invoicesTableToGenerateDiv);

    if(!localStorage.getItem('invoices')){
        var invoices = [];
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }

    var invoicesStorageJSON = localStorage.getItem('invoices');
    var invoices = JSON.parse(invoicesStorageJSON);
    renderInvoices(invoices, tableInvoices);
}

class Invoice {
    constructor(invoiceNumber, invoiceName, invoicePrice, invoiceDate){
        this.invoiceNumber = invoiceNumber;
        this.invoiceName = invoiceName;
        this.invoicePrice = invoicePrice;
        this.invoiceDate = invoiceDate;
        this.index = Date.now();
    }
}


//Send values from Invoice Number, Name, Price and Invoice Date

function addInvoice() {
    const invoiceNumber = document.getElementById("invoice-number").value;
    const invoiceName = document.getElementById("invoice-name").value;
    const invoicePrice = document.getElementById("invoice-price").value;
    const invoiceDate = document.getElementById("invoice-date").value;
    const invoice = new Invoice(invoiceNumber, invoiceName, invoicePrice, invoiceDate);
    console.log("Invooices added invoice={}", invoice);
    // read from local storage
    if(!localStorage.getItem('invoices')){
        var invoices = [];
        localStorage.setItem('invoices', JSON.stringify(invoices));
    }
    

    var invoicesStorageJSON = localStorage.getItem('invoices');
    // parse this format (JSON to object
    var invoices = JSON.parse(invoicesStorageJSON);
    //push new invoice
    invoices.push(invoice);
    //set update on local storage
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

function renderInvoices(invoices, tableInvoices) {

    console.log("renderInvoices invoices={}", invoices);

    for (let i = 0; i < invoices.length; i++) {
        const invoice = invoices[i];

        //create next invoice (tr)
        const tableRowWithHeadersI = document.createElement("tr");
        tableRowWithHeadersI.setAttribute("id", "tableHeader"+i)

        //fill invoice data inside tr(td)
        const tableDetailsNumber = document.createElement('td');
        tableDetailsNumber.setAttribute("class", "tableCells")
        const tableDetailsNumberText = document.createTextNode(invoice.invoiceNumber);
        tableDetailsNumber.appendChild(tableDetailsNumberText);
        tableRowWithHeadersI.appendChild(tableDetailsNumber);

        const tableDetailsName = document.createElement('td');
        tableDetailsName.setAttribute("class", "tableCells")
        const tableDetailsNameText = document.createTextNode(invoice.invoiceName);
        tableDetailsName.appendChild(tableDetailsNameText);
        tableRowWithHeadersI.appendChild(tableDetailsName);

        const tableDetailsPrice = document.createElement('td');
        tableDetailsPrice.setAttribute("class", "tableCells")
        const tableDetailsPriceText = document.createTextNode(invoice.invoicePrice);
        tableDetailsPrice.appendChild(tableDetailsPriceText);
        tableRowWithHeadersI.appendChild(tableDetailsPrice);

        const tableDetailsDate = document.createElement('td');
        tableDetailsDate.setAttribute("class", "tableCells");
        const tableDetailsDateText = document.createTextNode(invoice.invoiceDate);
        tableDetailsDate.appendChild(tableDetailsDateText);
        tableRowWithHeadersI.appendChild(tableDetailsDate);


        const tableDetailsAction = document.createElement('td');
        tableDetailsAction.setAttribute("class", "tableCells");

        // Delete and edit are not working for now 

        // var buttonDelete = document.createElement('button');
        // buttonDelete.innerText = "DELETE";
        // buttonDelete.addEventListener('click', function(){
        //     deleteInvoice(invoice.invoiceNumber);
        // });

        // const buttonDelete = document.createElement('button');
        // buttonDelete.innerText = "DELETE";
        // var magicString = "deleteInvoice(\'"+invoice.invoiceNumber+"\')"
        // buttonDelete.onclick =magicString;
        // buttonDelete.onclick = function deleteInvoice(invoiceNumber) {
        //     console.log("deleteInvoice={}", invoice);
        //     var invoices = localStorage.getItem('invoices');
        //     for (let i = 0; i < invoices.length; i++) {
        //         if (invoices[i].invoiceNumber == invoice) { // ===
        //             invoices.splice(i, 1);
        //             i = i - 1;
        //         }
        //     }
        //     localStorage.setItem('invoices', JSON.stringify(invoices));
        // };
        
        // tableDetailsAction.appendChild(buttonDelete);
        // tableRowWithHeadersI.appendChild(tableDetailsAction);


        // const editButton = document.createElement('button');
        // editButton.innerText = "EDIT";
        // tableRow.id = invoice.index;


        // editButton.onclick = function editInvoices(){
        //     var invoices = localStorage.getItem('invoices');
        //     for (let i = 0; i < invoices.length; i++) {
        //         if (invoices[i].index == _this.index) {

        //             //To do edit invoices
        //             console.log("Edited invoice: " + invoices[i].index);
        //         }
        //     }
        // }

        console.log("Table row added tableRowWithHeadersI={}", tableRowWithHeadersI);

        tableInvoices.appendChild(tableRowWithHeadersI);
    }

    console.log("The end");
}

function deleteInvoice(invoiceNumber) {
    console.log("deleteInvoice={}", invoiceNumber);
    var invoices = localStorage.getItem('invoices');
    for (let i = 0; i < invoices.length; i++) {
        if (invoices[i].invoiceNumber == invoiceNumber) { // ===
            invoices.splice(i, 1);
            i = i - 1;
        }
    }
    localStorage.setItem('invoices', JSON.stringify(invoices));
};

function mapInvoiceToHtml(invoice) {
    const tableInvoice = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    const tableRow = document.createElement('tr');
    const tableDetailsNumber = document.createElement('td');
    const tableDetailsName = document.createElement('td');
    const tableDetailsPrice = document.createElement('td');
    const tableDetailsDate = document.createElement('td');
    console.log("Clean Table row added tableInvoice={}", tableInvoice);

    const buttonDelete = document.createElement('button');
    const editButton = document.createElement('button');


    const tableDetailsNumberText = document.createTextNode(invoice.invoiceNumber);
    const tableDetailsNameText = document.createTextNode(invoice.invoiceName);
    const tableDetailsPriceText = document.createTextNode(invoice.invoicePrice);
    const tableDetailsDateText = document.createTextNode(invoice.invoiceDate);

    buttonDelete.innerText = "DELETE";
    editButton.innerText = "EDIT";
    tableRow.id = invoice.index;

    tableDetailsNumber.appendChild(tableDetailsNumberText);
    tableDetailsName.appendChild(tableDetailsNameText);
    tableDetailsPrice.appendChild(tableDetailsPriceText);
    tableDetailsDate.appendChild(tableDetailsDateText);

    tableInvoice.appendChild(tableHead);
    tableInvoice.appendChild(tableBody);
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableDetailsNumber);
    tableRow.appendChild(tableDetailsName);
    tableRow.appendChild(tableDetailsPrice);
    tableRow.appendChild(tableDetailsDate);
    console.log("Table row added tableInvoice={}", tableInvoice);

    return tableInvoice;
};