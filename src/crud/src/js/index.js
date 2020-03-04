const list = document.querySelector('.list');
const buttonCreate = document.querySelector('.create');
const buttonRead = document.querySelector('.read');
const buttonUpdate = document.querySelector('.update');
const buttonDelete = document.querySelector('.delete');
const field = document.getElementsByClassName('field');

let checker = false;
let arrayElements = [];

function updateStorage() {
  localStorage.setItem('person_state', JSON.stringify(arrayElements));
}

function clearFields() {
  for (let i = 0; i < field.length; i++) {
    field[i].value = '';
  }
}

function checkDelete() {
  return !(field[1].value !== '' || field[2].value !== '' || field[3].value !== '');
}

function checkerField(fieldValue) {
  return fieldValue.trim() !== '';
}

function checkFields() {
  if (!Number.isFinite(parseInt(field[0].value, 10)) || field[0].value < 0) {
    return false;
  }
  if (field[1].value === '') {
    return false;
  }
  if (field[2].value === '') {
    return false;
  }
  if (!Number.isFinite(parseInt(field[3].value, 10)) || field[3].value < 0) {
    return false;
  }
  return true;
}

function refreshTable() {
  list.innerHTML = '';
  for (let i = 0; i < arrayElements.length; i++) {
    const div1 = document.createElement('div');
    div1.innerHTML = arrayElements[i].id;
    const div2 = document.createElement('div');
    div2.innerHTML = arrayElements[i].firstName;
    const div3 = document.createElement('div');
    div3.innerHTML = arrayElements[i].secondName;
    const div4 = document.createElement('div');
    div4.innerHTML = arrayElements[i].age;

    list.appendChild(div1);
    list.appendChild(div2);
    list.appendChild(div3);
    list.appendChild(div4);
  }
}

const createButton = function() {
  for (let i = 0; i < arrayElements.length; i++) {
    if (arrayElements[i].id === field[0].value) {
      checker = true;
    }
  }
  if (!checker && checkFields()) {
    const divElement = {
      id: field[0].value,
      firstName: field[1].value,
      secondName: field[2].value,
      age: field[3].value,
    };
    arrayElements.push(divElement);
    updateStorage();
    refreshTable();
    clearFields();
  } else {
    alert('Check inputs');
    checker = false;
  }
};

const updateButton = function() {
  for (let i = 0; i < arrayElements.length; i++) {
    if (arrayElements[i].id === field[0].value) {
      if (checkerField(field[1].value)) {
        arrayElements[i].firstName = field[1].value;
      }
      if (checkerField(field[2].value)) {
        arrayElements[i].secondName = field[2].value;
      }
      if (checkerField(field[3].value) && Number.isFinite(field[3].value) && field[3].value > 0) {
        arrayElements[i].age = field[3].value;
      }

      updateStorage();
      refreshTable();
      break;
    }
  }
};

const deleteButton = function() {
  if (checkDelete()) {
    for (let i = 0; i < arrayElements.length; i++) {
      if (arrayElements[i].id === field[0].value) {
        arrayElements.splice(i, 1);
        updateStorage();
        refreshTable();
        break;
      }
    }
  } else {
    alert('only id');
  }
  clearFields();
};

const readButton = function() {
  const localStor = localStorage.getItem('person_state');
  if (localStor) {
    arrayElements = JSON.parse(localStor);
    refreshTable();
  }
};

buttonCreate.addEventListener('click', createButton);
buttonUpdate.addEventListener('click', updateButton);
buttonDelete.addEventListener('click', deleteButton);
buttonRead.addEventListener('click', readButton);
