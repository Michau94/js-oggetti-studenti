/*ES 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo(in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.


ES 2
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

*/

//! Es 1 

//DISPLAY
var studentInfoDisplay = document.getElementById('student-info');

// creazione oggetto studente contente 3 proprietà (nome cognome ed età)

var studente = {
    name: 'Michau',
    lastname: 'Wadowski',
    age: '26'
}


//stampa di tutte proprietà di oggetto studente in console
var studentDisplay = "";
for (var key in studente) {
    studentDisplay += '<li>' + key + ' : ' + studente[key] + '</li>';
    //console.log(studentDisplay);
}

// display in html
studentInfoDisplay.innerHTML = studentDisplay;



//! ES 2 

// display

var displayNameLastname = document.getElementById('student-list');
var displayNewStudent = document.getElementById('newStudent');

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

    console.log('Nome:' + students[i].name);
    console.log('Cognome:' + students[i].lastname);
}

// stampa lista studenti
displayNameLastname.innerHTML = studentList;


// New student info
//TODO validazione campi 
var newName = prompt('Inserisci Nome');
var newLastname = prompt('Inserisci Cognome');
var newAge = prompt('Inserisci Età');

// new student obj
var newStudent = {
    name: newName,
    lastname: newLastname,
    age: newAge
}


var newStudentFullName = newStudent.name + ' ' + newStudent.lastname;
console.log('Nuovo studente: ' + newStudentFullName);

// display nuovo studente
displayNewStudent.innerText = newStudentFullName;

// push to students array
students.push(newStudent);











