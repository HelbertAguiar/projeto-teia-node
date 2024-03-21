
export const countLetters = (texto) => {
    
    const ocorrencias = {};
  
    // Iterar sobre cada letra na string e contar suas ocorrências
    for (let letra of texto) {
        if (ocorrencias[letra]) {
            ocorrencias[letra]++;
        } else {
            ocorrencias[letra] = 1;
        }
    }
  
    return ocorrencias;

}