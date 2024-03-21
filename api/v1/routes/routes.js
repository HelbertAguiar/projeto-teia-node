import express from 'express';
import HandleController from "../controllers/HandleController.js";

const router = express.Router();
router.get('/api/manipulacao-string', HandleController.index);
// router.post('/api/manipulacao-string', HandleController.index);

router.get('/', function (req, res) {
    res.send('Pequeno MVP do projeto TEIA: "https://projeto-teia-node.azurewebsites.net/api/manipulacao-string?texto=arara"');
});

export default router;