const equipamentoModel = require('../models/equipamentoModel');


function adicionarNovoEquipamento(req, res) {
    var tipoEquipamento = req.body.equipamentoServer;

    if (tipoEquipamento == undefined) {
        res.status(400).send("Seu equipamento está undefined!");
    } else {
        equipamentoModel.adicionarNovoEquipamento(tipoEquipamento)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao adicionar novo equipamento! Erro: ", erro.sqlMessage || erro);
                res.status(500).json(erro.sqlMessage || erro);
            });
    }
}

function listaEquipamento(req, res) {
    console.log("Chamando listaEquipamento");
    equipamentoModel.listaEquipamento()
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ message: 'Nenhum equipamento encontrado.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter as informações de equipamentos:', error);
            res.status(500).json({ message: "Erro ao obter a lista de informações." });
        });
}





module.exports = {
    adicionarNovoEquipamento,
    listaEquipamento
};
