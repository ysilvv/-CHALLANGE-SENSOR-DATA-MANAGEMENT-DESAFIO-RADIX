var express = require("express");
var router = express.Router();

var equipamentoController = require("../controllers/equipamentoController");


router.post("/adicionarEquipamento", function (req, res) {
    equipamentoController.adicionarNovoEquipamento(req, res);
});

router.get('/listarEquipamentos', equipamentoController.listaEquipamento);



module.exports = router;