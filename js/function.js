// validate letter field
function isNameValid(name) {
    if (!name || !isNaN(name) || name.trim() === ' ') {
        return false;
    }
    return true;
}

//validate number 
function isAgeValid(age) {
    if (!age || isNaN(age) || age < 10 || age > 100) {
        return false;
    }
    return true;
}


// capitalize
function capitalize(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
}

// aggiornamento list aper stampa

function listUpdate() {
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
}