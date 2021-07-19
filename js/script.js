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
    console.log(studentDisplay);
}

// display in html
studentInfoDisplay.innerHTML = studentDisplay;



//! ES 2 

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

//ciclo normale in array di oggetti

for (i = 0; i < students.length; i++) {
    console.log(students[i]);

    //ciclo for in in oggetto
    for (var key in students[i]) {
        console.log(key + ': ' + students[i][key]);

    }
}

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

// push to students array
students.push(newStudent);


console.log(students);






