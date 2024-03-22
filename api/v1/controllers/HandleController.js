import { checkIsPalindrome } from '../utils/checkIsPalindrome.js';
import { countLetters } from '../utils/countLetters.js';

class HandleController {

  index(req, res) {

    try {

      let texto;
      if (req.method === 'POST')  { texto  = req.body.texto; } 
      if (req.method === 'GET' )  { texto  = req.query.texto; } 
      
      // Verifica se o parametro de entrada está vazio ou não foi fornecido, 
      // caso positivo interrompe execução
      if (!texto || texto.trim() === '') {
          return res
            .status(400)
            .json({ error: 'O parametro de entrada no formato JSON não foi identificado ou está vazio.' });
      }
  
      const palindromo              = checkIsPalindrome(texto);
      const ocorrencias_caracteres  = countLetters(texto);
      const respostaJson            = { palindromo, ocorrencias_caracteres}
        
      // Se houver sucesso no processamento
      return res.status(200).send(respostaJson);
      
    } catch (error) { 
      // Se houver falha interna na aplicação
      return res.status(500).json({ error: 'Falha na aplicação, tente novamente' }); 
    }
    
  }

}

export default new HandleController();

