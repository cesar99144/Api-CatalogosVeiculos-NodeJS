const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const AnunciosController = require('../controllers/AnunciosController')

router.get('/carros', AnunciosController.listarCarros)
router.get('/motos', AnunciosController.listarMotos)
router.get('/destaques', AnunciosController.listarDestaques)
router.get('/veiculo/:idVeiculo', AnunciosController.vizualizarVeiculo);

module.exports = router