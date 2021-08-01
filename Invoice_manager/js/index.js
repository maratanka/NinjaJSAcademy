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
        var el = document.getElementsByClassName("form-box")[0];
        
        alert('You are logged in.');
        sessionStorage.setItem("currentloggedin",userName);
        console.log("checkIfNotLogin is done from Login");
        checkIfNotLogin();
        el.remove();
        window.location.reload(false); 

    }else{
        alert('Error on login');
    }

}


function checkIfNotLogin(){
   var loginUser = sessionStorage.getItem("currentloggedin");
    console.log("checkIfNotLogin is done from CheckLogin");

   if (loginUser != null){
    document.getElementsByClassName("form-box")[0].remove();
    document.getElementsByClassName("hero")[0].remove();
   }
   else {
        document.getElementsByClassName("invoices")[0].remove();
   }  
}

function logout(){
    sessionStorage.removeItem("currentloggedin");
    window.location.reload(false); 
}


var obj=[{Invoicenumber:"1234567",Itemname:"Books",Price:"123$",Invoicedate: "12/06/2019"},{Invoicenumber:"1234567",Itemname:"Books",Price:"123$",Invoicedate: "12/06/2019"},{Invoicenumber:"1234567",Itemname:"Books",Price:"123$",Invoicedate: "12/06/2019"}];



var form = document.createElement('form');
form.id="details";
document.body.appendChild(form);

var tableDiv  = document.createElement('div');
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
form.appendChild(addForm);

var row = document.createElement("tr");
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Select";
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Nr";
table.appendChild(row);
Object.keys(obj[0]).forEach(function(val) {
  var cell = document.createElement("th");
  row.appendChild(cell); 
  cell.innerHTML = val;
});
var cell = document.createElement("th");
row.appendChild(cell);
cell.innerHTML = "Action";


for (var i = 0; i < obj.length; i++) {
  var btnSave = document.createElement('button');
  btnSave.innerHTML = "Save";
  btnSave.onclick = saveCell;

  var btnEdit = document.createElement('input');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";

  var row = document.createElement("tr");
  table.appendChild(row);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(checkbox);
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.innerHTML = i;
  for (key in obj[i]) {
    var cell = document.createElement("td");
    row.appendChild(cell);
    cell.innerHTML = obj[i][key];
  }
  var cell = document.createElement("td");
  row.appendChild(cell);
  cell.appendChild(btnEdit);
  cell.appendChild(btnSave);
}


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


var addTable = function() { 
    var btnSave = document.createElement('button');
  btnSave.innerHTML = "Save";
  btnSave.onclick = saveCell;

  var btnEdit = document.createElement('button');
  btnEdit.type = "button";
  btnEdit.value = "Edit";
  btnEdit.onclick = editCell;
  
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id= "checkBox";
  var row = document.createElement("tr");
  if((invoiceNumber.value!="")&&(itemName.value!="")&&(price.value!="")&&(invoiceDate.value!="")){
  
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
    cell.appendChild(btnSave);
    
    document.getElementById("details").reset();
    }
  else {
    alert("Enter Input Values");
  }
};

var btnClick = document.createElement('input');
btnClick.type = "submit";
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
  for(var i=0; i<rowCount; i++) {
    var row = tabDel.rows[i];
    var chkbox = row.cells[0].childNodes[0];
    if(chkbox.checked) {
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

function saveCell() { 
  if(curr != undefined)
  {
    var inputs = curr.getElementsByTagName("td");
    for(var i = 2; i < inputs.length - 1; i++)
    {
      currInput = inputs[i].getElementsByTagName("input");
      currInput[0].parentElement.innerHTML = currInput[0].value;
    }
    curr = undefined;
  }
}

