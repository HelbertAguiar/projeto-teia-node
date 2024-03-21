import { checkIsPalindrome } from '../utils/checkIsPalindrome.js';
import { countLetters } from '../utils/countLetters.js';

class HandleController {

  index(req, res, next) {
    
      const texto = req.query.texto;
      // let texto = 'banana' || 'arara' || 'ovo';

      const palindromo = checkIsPalindrome(texto);
      const ocorrencias_caracteres = countLetters(texto);
      const respostaJson = { palindromo, ocorrencias_caracteres}
        
      next();

      return res.send(respostaJson);

  }

}

export default new HandleController();

