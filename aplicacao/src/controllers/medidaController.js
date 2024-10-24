const medidaModel = require('../models/medidaModel');

function qtdEquipamentosAcimaDe50Graus(req, res) {
    medidaModel.qtdEquipamentosAcimaDe50Graus()
        .then(resultado => {
            console.log('Resultado da consulta:', resultado); 
            if (resultado && resultado.length > 0) {
                const total = resultado[0].total_acima_de_20;
                res.json({ total });
            } else {
                console.error('Nenhum resultado encontrado na consulta.');
                res.status(404).json({ message: 'Nenhum dado encontrado' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter dados:', error);
            res.status(500).json({ message: "Erro ao obter dados." });
        });
}



function qtdEquipamentosAbaixoDe20Graus(req, res) {
    medidaModel.qtdEquipamentosAbaixoDe20Graus()
    .then(resultado => {
        console.log('Resultado da consulta:', resultado); 
        if (resultado && resultado.length > 0) {
            const total = resultado[0].total_abaixo_de_20;
            res.json({ total });
        } else {
            console.error('Nenhum resultado encontrado na consulta.');
            res.status(404).json({ message: 'Nenhum dado encontrado' });
        }
    })
    .catch(error => {
        console.error('Erro ao obter dados:', error);
        res.status(500).json({ message: "Erro ao obter dados." });
    });
}

function equipamentoComMaiorTemperatura(req, res) {
    medidaModel.equipamentoComMaiorTemperatura()
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                const { nome_equipamento, maior_temperatura } = resultado[0];
                res.json({ nome_equipamento, maior_temperatura });
            } else {
                console.error('Nenhum equipamento encontrado.');
                res.status(404).json({ message: 'Nenhum equipamento encontrado.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter o equipamento com maior temperatura:', error);
            res.status(500).json({ message: "Erro ao obter o equipamento com maior temperatura." });
        });
}

function equipamentoComMenorTemperatura(req, res) {
    medidaModel.equipamentoComMenorTemperatura()
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                const { nome_equipamento, menor_temperatura } = resultado[0];
                res.json({ nome_equipamento, menor_temperatura });
            } else {
                console.error('Nenhum equipamento encontrado.');
                res.status(404).json({ message: 'Nenhum equipamento encontrado.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter o equipamento com menor temperatura:', error);
            res.status(500).json({ message: "Erro ao obter o equipamento com menor temperatura." });
        });
}


function ultimasLeiturasEquipamento(req, res) {
    const equipmentId = req.params.equipmentId;

    medidaModel.ultimasLeiturasEquipamento(equipmentId)
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ message: 'Nenhuma leitura encontrada para este equipamento.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter as últimas leituras:', error);
            res.status(500).json({ message: "Erro ao obter as últimas leituras." });
        });
}



function buscarEquipamentosAcimaDe50Graus(req, res) {
    medidaModel.buscarEquipamentosAcimaDe50Graus()
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ message: 'Nenhuma leitura encontrada para este equipamento.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter as últimas leituras:', error);
            res.status(500).json({ message: "Erro ao obter as últimas leituras." });
        });
}


function buscarEquipamentosAbaixoDe20Graus(req, res) {
    medidaModel.buscarEquipamentosAbaixoDe20Graus()
        .then(resultado => {
            if (resultado && resultado.length > 0) {
                res.json(resultado);
            } else {
                res.status(404).json({ message: 'Nenhuma leitura encontrada para este equipamento.' });
            }
        })
        .catch(error => {
            console.error('Erro ao obter as últimas leituras:', error);
            res.status(500).json({ message: "Erro ao obter as últimas leituras." });
        });
}


module.exports = {
    qtdEquipamentosAcimaDe50Graus,
    qtdEquipamentosAbaixoDe20Graus,
    equipamentoComMaiorTemperatura,
    equipamentoComMenorTemperatura,
    ultimasLeiturasEquipamento,
    buscarEquipamentosAcimaDe50Graus,
    buscarEquipamentosAbaixoDe20Graus
};
