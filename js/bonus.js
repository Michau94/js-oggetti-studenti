//! ES 2 

// display

var displayNameLastname = document.getElementById('student-list');
var displayNewStudent = document.getElementById('newStudent');
var buttonAdd = document.getElementById('add');
var nameField = document.getElementById('name');
var lastNameField = document.getElementById('lastname');
var ageField = document.getElementById('age');
var addBonus = document.getElementById('add-bonus');


// dati da pagina

var nameValue = nameField.value;
var lastNameValue = lastNameField.value;
var ageValue = ageField.value;

// creazione array contenente 3 oggetti (studenti)

var students = [
    {
        name: 'Michau',
        lastname: 'Wadowski',
        age: '26'
    },
    {
        name: 'Marco',
        lastname: 'Lanci',

    },
    {
        name: 'Riccardo',
        lastname: 'Petricca',

    }
]

//console.log(students);

//ciclo

var studentList = "";
for (i = 0; i < students.length; i++) {

    studentList += '<li>' + students[i].name + ' ' + students[i].lastname + '</li>';
    console.log('-----------');
    console.log('Nome:' + students[i].name);
    console.log('Cognome:' + students[i].lastname);

}

// lista studenti originale
console.table(students);

// stampa lista studenti
displayNameLastname.innerHTML = studentList;

// buttonAdd.addEventListener('click', function () {






//     // New student info


//     var newName = prompt('Inserisci nome');

//     while (!isNameValid(newName)) {
//         alert('nome Non valido');
//         newName = prompt('Inserisci nome');
//     }

//     var newLastname = prompt('Inserisci Cognome');

//     while (!isNameValid(newLastname)) {
//         alert('Cognome Non valido');
//         newLastname = prompt('Inserisci Cognome');
//     }

//     var newAge = prompt('Inserisci Età');

//     while (!isAgeValid(newAge)) {
//         alert('Età non valida!');
//         newAge = prompt('Inserisci Età');

//     }




//     // new student obj
//     var newStudent = {
//         name: capitalize(newName.toLowerCase()),
//         lastname: capitalize(newLastname.toLowerCase()),
//         age: newAge,
//     }


//     var newStudentFullName = newStudent.name + ' ' + newStudent.lastname;
//     console.log('Nuovo studente: ' + newStudentFullName);


//     // push to students array
//     students.push(newStudent);
//     alert('Studente Aggiunto con Successo')

//     // display nuovo studente
//     displayNewStudent.innerText = 'Benvenuto, ' + newStudentFullName;

//     // lista studenti aggiornata
//     listUpdate();
//     console.table(students);
// })


addBonus.addEventListener('click', function () {
    var nameValue = nameField.value;

    if (!isNameValid(nameValue)) {
        alert('nome Non valido');
    }


    var lastNameValue = lastNameField.value;
    if (!isNameValid(lastNameValue)) {
        alert('Cognome Non valido');
    }


    var ageValue = ageField.value;
    if (!isAgeValid(ageValue)) {
        alert('Età non valida!');

    }




    // new student obj
    var newStudent = {
        name: capitalize(nameValue.toLowerCase()),
        lastname: capitalize(lastNameValue.toLowerCase()),
        age: ageValue,
    }


    var newStudentFullName = newStudent.name + ' ' + newStudent.lastname;
    console.log('Nuovo studente: ' + newStudentFullName);


    // push to students array
    if (isNameValid(nameValue) && isNameValid(lastNameValue) && isAgeValid(ageValue)) {

        students.push(newStudent);
        alert('Studente Aggiunto con Successo');

    } else {

        alert('errore, riprovare');
    }


    // reset campi inserimento
    nameField.innerText = '';
    lastNameField.innerText = '';
    ageField.innerText = '';


    // display nuovo studente
    displayNewStudent.innerText = 'Benvenuto, ' + newStudentFullName;

    // lista studenti aggiornata
    listUpdate();
    console.table(students);




})