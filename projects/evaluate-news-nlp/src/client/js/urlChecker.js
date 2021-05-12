function validURL(URL) {
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);

    if (URL.match(regex)) {
        return true;
    } 
    else {
        return false;
    }
}

export { validURL }
