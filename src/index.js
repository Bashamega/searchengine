const diacritics = require('diacritics');
function removediactritics(text) {
    return diacritics.remove(text); // Normalize and remove diacritics
    
}


function search(list, term, language) {
    if (list === null || term === null || language === null || list.length === 0) {
        return [];
    } else {
        const textreturn = [];
        const listterm = removediactritics(term)
        list.forEach(searchelement => {
            if(removediactritics(searchelement).includes(listterm)){
                textreturn.push(searchelement)
            }
        });
        return textreturn;
    }
}
module.exports = {
    removediactritics: removediactritics,
    search: search
};
