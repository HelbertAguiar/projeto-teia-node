/* importa as configurações do servidor */
import app from './config/server.js';

/* parametriza a porta de escuta */
app.listen(8080, () => {
	console.log('API online');
});