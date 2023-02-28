const router = require('express').Router();
const ninjaController = require('../controllers/ninjaController');
const userController = require('../controllers/userController');

router.post('/cadastro', ninjaController.cadastro);

router.get('/listagem', ninjaController.buscarNinjas);

router.get('/listagem/:id', ninjaController.buscarPorId);

router.delete('/deletar/:id', ninjaController.deletarNinja);

router.put('/editar/:id', ninjaController.editarNinja);

router.post('/cadastroUsuario', userController.criarUsuario); 

router.post('/login', userController.autenticacaoUsuario); 

module.exports = router;