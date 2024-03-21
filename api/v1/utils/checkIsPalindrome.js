
export const checkIsPalindrome = (texto) => {
    
    // Comparar a string original com sua reversão
    return texto === texto.split('').reverse().join('');

}
