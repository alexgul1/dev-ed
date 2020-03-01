const list = document.querySelector('.list');
const buttonCreate = document.querySelector('.create');
const buttonRead = document.querySelector('.read');
const buttonUpdate = document.querySelector('.update');
const buttonDelete = document.querySelector('.delete');
const field = document.getElementsByClassName('field');

let checker = false;
let arrayElements = [];

let createButton = function () {
    for(let i = 0; i < arrayElements.length; i++) {
        if(arrayElements[i].id === field[0].value ) {
            checker = true;
        }
    }
    if(!checker && checkFields()) {
        let divElement = {
            id: field[0].value,
            firstName: field[1].value,
            secondName: field[2].value,
            age: field[3].value
        };
        arrayElements.push(divElement);
        updateStorage();
        refreshTable();
        clearFields();
    } else {
        alert("Check inputs");
        checker = false;
    }
};

let updateButton = function () {
    for(let i = 0; i < arrayElements.length; i++) {
        if(arrayElements[i].id === field[0].value) {
            if(checkerField(field[1].value)) {
                arrayElements[i].firstName = field[1].value;
            }
            if(checkerField(field[2].value)) {
                arrayElements[i].secondName = field[2].value;
            }
            if(checkerField(field[3].value) && isFinite(field[3].value) && field[3].value > 0) {
                arrayElements[i].age = field[3].value;
            }

            updateStorage();
            refreshTable();
            break;
        }
    }
};

let deleteButton = function () {
    if(checkDelete()) {
        for (let i = 0; i < arrayElements.length; i++) {
            if (arrayElements[i].id === field[0].value) {
                arrayElements.splice(i, 1);
                updateStorage();
                refreshTable();
                break;
            }
        }
    }
    else {
        alert("only id")
    }
    clearFields();
};

let readButton = function () {
    let localStor = localStorage.getItem("person_state");
    if(localStor) {
        arrayElements = JSON.parse(localStor);
        refreshTable()
    }
};

let refreshTable = function () {
    list.innerHTML = '';
    for(let i = 0; i < arrayElements.length; i++) {
        let div1 = document.createElement('div');
        div1.innerHTML = arrayElements[i].id;
        let div2 = document.createElement('div');
        div2.innerHTML = arrayElements[i].firstName;
        let div3 = document.createElement('div');
        div3.innerHTML = arrayElements[i].secondName;
        let div4 = document.createElement('div');
        div4.innerHTML = arrayElements[i].age;

        list.appendChild(div1);
        list.appendChild(div2);
        list.appendChild(div3);
        list.appendChild(div4);
    }
};

let updateStorage = function () {
    localStorage.setItem("person_state", JSON.stringify(arrayElements))
};

let clearFields = function () {
    for(let i = 0; i < field.length; i++) {
        field[i].value = '';
    }
};

let checkFields = function () {
    if(!isFinite(field[0].value) || field[3].value < 0) {
        return false;
    } if(field[1].value === '') {
        return false;
    } if(field[2].value === '') {
        return false;
    } if(!isFinite(field[3].value) || field[3].value < 0) {
        return false;
    }
    return true;
};

let checkDelete = function () {
    return !(field[1].value !== '' || field[2].value !== '' || field[3].value !== '');
};

let checkerField = function(fieldValue) {
    return fieldValue.trim() !== '';
};

buttonCreate.addEventListener('click', createButton);
buttonUpdate.addEventListener('click',updateButton);
buttonDelete.addEventListener('click', deleteButton);
buttonRead.addEventListener('click',readButton);