// Kamus konversi huruf ke angka
const charToNum = {
    'A': 0, 'B': 1, 'C': 1, 'D': 1, 'E': 2, 'F': 3, 'G': 3, 'H': 3, 'I': 4, 'J': 5, 'K': 5, 'L': 5, 'M': 5, 'N': 5,
    'O': 6, 'P': 7, 'Q': 7, 'R': 7, 'S': 7, 'T': 7, 'U': 8, 'V': 9, 'W': 9, 'X': 9, 'Y': 9, 'Z': 9,
    'a': 9, 'b': 8, 'c': 8, 'd': 8, 'e': 7, 'f': 6, 'g': 6, 'h': 6, 'i': 5, 'j': 4, 'k': 4, 'l': 4, 'm': 4, 'n': 4,
    'o': 3, 'p': 2, 'q': 2, 'r': 2, 's': 2, 't': 2, 'u': 1, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0, ' ': 0
};

// Fungsi untuk mengubah kalimat menjadi bilangan
function convertTextToNumbers(text) {
    return text.split('').map(char => charToNum[char] || 0).join(' ');
}

// Fungsi untuk menghitung hasil dari operasi matematika
function calculateExpression(expression) {
    // Replace the text with numbers
    const numberExpression = expression.replace(/[^\d+\-*/]/g, match => {
        return charToNum[match] || 0;
    });
    try {
        // Evaluate the mathematical expression
        return eval(numberExpression);
    } catch {
        return 'Error';
    }
}

// Fungsi untuk mengkonversi angka ke huruf
function convertNumberToText(number) {
    const numToChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    number = Math.abs(number);
    let result = '';
    while (number > 0) {
        let digit = number % 10;
        result = numToChar[digit] + result;
        number = Math.floor(number / 10);
    }
    return result || 'A'; // Return 'A' if the result is zero
}

// Fungsi utama untuk memproses input
function processInput() {
    const textInput = document.getElementById('inputText').value;
    const numbersInput = document.getElementById('inputNumbers').value;

    const convertedText = convertTextToNumbers(textInput);
    const result = calculateExpression(numbersInput);
    const convertedResult = convertNumberToText(result);

    document.getElementById('result').innerHTML = `
        <strong>Kalimat dalam Angka:</strong> ${convertedText} <br>
        <strong>Hasil Operasi:</strong> ${result} <br>
        <strong>Hasil Konversi ke Huruf:</strong> ${convertedResult}
    `;
}
