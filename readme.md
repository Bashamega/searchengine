# SearchEngine

[![npm version](https://badge.fury.io/js/searchengine.svg)](https://badge.fury.io/js/searchengine)

A simple library for performing text search and manipulation in JavaScript.

## Installation

You can install this package using npm:

```sh
npm install @basha_coder/searchengine
```

## Usage
```js
const { search, removediactritics } = require('@basha_coder/searchengine');

const list = ['example term 1', 'example term 2', 'example term 3'];
const term = 'example';
const language = 'english';

const results = search(list, term, language);
console.log('Search results:', results);

const modifiedText = removediactritics('Some text with diacritics: çåñ');
console.log('Modified text:', modifiedText);

```
## API
### search(list, term, language)
Perform a search within a list of terms. Returns an array of matching terms.

list (Array): List of terms to search within.
term (String): The search term.
language (String): The language of the terms. Use 'english' for English language and anything else for other languages.
removediactritics(text)
### Remove diacritics, special characters, and normalize text.

text (String): The input text to be processed.
## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please check out the Contributing Guidelines for more details.

## Issues
If you encounter any issues or have questions, feel free to open an issue on the GitHub repository.

## Author
Name: Basha Coder
GitHub: @Bashamega
## More Info
For more information, visit the GitHub repository.
