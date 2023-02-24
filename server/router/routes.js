const router = require('express').Router();
const ninjaController = require('../controllers/ninjaController')

router.post('/cadastro', ninjaController.cadastro);

router.get('/listagem', ninjaController.buscarNinjas);

router.get('/listagem/:id', ninjaController.buscarPorId);

router.delete('/deletar/:id', ninjaController.deletarNinja);

router.put('/editar/:id', ninjaController.editarNinja);

module.exports = router;