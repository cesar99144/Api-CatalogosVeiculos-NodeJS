const connection = require('../database/connection')
const express = require('express')
const router = express.Router()
const AnunciosController = require('../controllers/AnunciosController')

router.get('/carros', AnunciosController.listarCarros)
router.get('/motos', AnunciosController.listarMotos)
router.get('/destaques', AnunciosController.listarDestaques)
router.get('/veiculo/:idVeiculo', AnunciosController.vizualizarVeiculo);
router.get('/pesquisa/:tipoveiculo/:ano/:marca', AnunciosController.filtroPesquisa);
router.get('/marcas', AnunciosController.marcasdisponiveis);
router.get('/busca/:nome', AnunciosController.pesquisapornome);

module.exports = router