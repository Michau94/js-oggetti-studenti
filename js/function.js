function isNameValid(name) {
    if (!name || !isNaN(name) || name.trim() === ' ') {
        return false;
    }
    return true;
}

function isAgeValid(age) {
    if (!age || isNaN(age) || age < 10 || age > 100) {
        return false;
    }
    return true;
}


function capitalize(word) {
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
}

