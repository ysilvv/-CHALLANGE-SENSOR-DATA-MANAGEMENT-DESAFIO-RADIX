var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get('/leituraAcimaDe50Graus', medidaController.qtdEquipamentosAcimaDe50Graus);

router.get('/leituraAbaixoDe20Graus', medidaController.qtdEquipamentosAbaixoDe20Graus);

router.get('/equipamentoMaiorTemperatura', medidaController.equipamentoComMaiorTemperatura);

router.get('/equipamentoMenorTemperatura', medidaController.equipamentoComMenorTemperatura);

router.get('/ultimasLeituras/:equipmentId', medidaController.ultimasLeiturasEquipamento);

router.get('/equipamentosAcima50', medidaController.buscarEquipamentosAcimaDe50Graus);

router.get('/equipamentosAbaixo20', medidaController.buscarEquipamentosAbaixoDe20Graus);



module.exports = router;