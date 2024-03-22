
export const checkIsPalindrome = (texto) => {

    // Remover espaços em branco e torna minúsculas
    const regex = /\s+/g;
    const textoSanitizado = texto.toLowerCase().replace(regex, '');
    
    // Compara a string original com sua reversão
    return textoSanitizado === texto.split('').reverse().join('');

}
