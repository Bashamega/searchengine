export function removediactritics(text) {
    // Remove special characters
    text = text.replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z 0-9])/g, '');
  
    // Normalize Arabic
    text = text.replace(/(آ|إ|أ)/g, 'ا');
    text = text.replace(/(ة)/g, 'ه');
    text = text.replace(/(ئ|ؤ)/g, 'ء');
    text = text.replace(/(ى)/g, 'ي');
  
    // Convert Arabic numerals to English counterparts.
    var starter = 0x660;
    for (var i = 0; i < 10; i++) {
      text = text.replace(new RegExp(String.fromCharCode(starter + i), 'g'), String.fromCharCode(48 + i));
    }
  
    return text;
}

export async function search(list, term, language) {
    if (list === null || term === null || language === null || list.length === 0) {
        return [];
    } else {
        const textreturn = [];
        if (language.toLowerCase() === "arabic") {
            const purearabic = [];
            list.forEach(element => {
                purearabic.push(removediactritics(element));
            });
            purearabic.forEach(termsearch => {
                if (termsearch.includes(removediactritics(term))) {
                    textreturn.push(termsearch);
                }
            });
        } else {
            list.forEach(termsearch => {
                if (termsearch.includes(removediactritics(term))) {
                    textreturn.push(termsearch);
                }
            });
        }
        return textreturn;
    }
}
