let list = document.querySelector('.list');
const buttonCreate = document.querySelector('.create');
const buttonUpdate = document.querySelector('.update');
const buttonDelete = document.querySelector('.delete');
const field = document.getElementsByClassName('field');

let checker = false;
let divArr = [];
let divElement = {};

let createButton = function () {
    for(let i = 0; i < divArr.length; i++) {
        if(divArr[i].id.innerHTML === field[0].value )
            checker = true;
    }
    if(!checker && checkFields()) {
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        div1.innerHTML = field[0].value;
        let div2 = document.createElement('div');
        div2.innerHTML = field[1].value;
        let div3 = document.createElement('div');
        div3.innerHTML = field[2].value;
        let div4 = document.createElement('div');
        div4.innerHTML = field[3].value;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);
        div.appendChild(div4);
        divElement = {
            source: div,
            id: div1,
            firstName: div2,
            secondName: div3,
            age: div4
        };

        divArr.push(divElement);
        list.appendChild(div);
        //i++;

    }
    else {
        alert("Check inputs");
        checker = false;
    }
    clearFields();

};

let updateButton = function () {
    for(let i = 0; i < divArr.length; i++) {
        if(divArr[i].id.innerHTML === field[0].value) {
            divArr[i].firstName.innerHTML = field[1].value;
            divArr[i].secondName.innerText = field[2].value;
            divArr[i].age.innerText = field[3].value;
            break;
        }
    }
};

let deleteButton = function () {
    if(checkDelete()) {
        for (let i = 0; i < divArr.length; i++) {
            if (divArr[i].id.innerHTML === field[0].value) {
                list.removeChild(divArr[i].source);
                divArr.splice(i, 1)
            }
        }
    }
    else {
        alert("only id")
    }
    clearFields();
};

let clearFields = function () {
    field[0].value = '';
    field[1].value = '';
    field[2].value = '';
    field[3].value = '';
};

let checkFields = function () {
    if(!isFinite(field[0].value)) {
        return false;
    }
    else if(field[1].value === '') {
        return false;
    }
    else if(field[2].value === '') {
        return false;
    }
    else  if(!isFinite(field[3].value) || field[3].value < 0) {
        return false;
    }
    return true;
};

let checkDelete = function () {
    return !(field[1].value !== '' || field[2].value !== '' || field[3].value !== '');
};

buttonCreate.addEventListener('click', createButton);
buttonUpdate.addEventListener('click',updateButton);
buttonDelete.addEventListener('click', deleteButton);