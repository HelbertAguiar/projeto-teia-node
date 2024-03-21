/* importa o framework express */
import express from 'express';
/* importa o modulo Helmet para aumentar segurança da aplicação, por exemplo, inibindo a disponibilização ao client de qual framework está sendo usado através do header "X-Powered-By" */
import helmet from "helmet";
/* comprimi a resposta json ao final da requisição */
import compression from 'compression';
/* importa o arquivo de rotas de emprestimos */
import router from '../api/v1/routes/routes.js';

/* inicia o objeto do express */
const app = express();

app.use(express.json());
app.use(helmet());
app.use(compression())

/* efetua o load das rotas */
app.use('/', router);

/* exporta o objeto app */
export default app;