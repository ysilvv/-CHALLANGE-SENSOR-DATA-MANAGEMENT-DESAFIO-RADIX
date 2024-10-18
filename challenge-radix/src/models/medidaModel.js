var database = require("../database/config");

function qtdEquipamentosAcimaDe50Graus() {
    const instrucaoSql = `
        select count(distinct e.tipoEquipamento) as total_acima_de_20
        from leitura l
        join equipamento e on l.fkEquipamento = e.equipmentId
        where l.valor > 50;
    `;
    return database.executar(instrucaoSql)
        .then(resultado => {
            return resultado; 
        });
}

function qtdEquipamentosAbaixoDe20Graus() {
    const instrucaoSql = `
        select count(distinct e.tipoequipamento) as total_abaixo_de_20
        from leitura l
        join equipamento e on l.fkequipamento = e.equipmentid
        where l.valor < 20;
    `;
    return database.executar(instrucaoSql)
        .then(resultado => {
            return resultado; 
        });
}

function equipamentoComMaiorTemperatura() {
    const instrucaoSql = `
        select e.tipoequipamento as nome_equipamento, max(l.valor) as maior_temperatura
        from leitura l
        join equipamento e on l.fkequipamento = e.equipmentid
        group by e.tipoequipamento
        order by maior_temperatura desc
        limit 1;
    `;
    return database.executar(instrucaoSql);
}


function equipamentoComMenorTemperatura() {
    const instrucaoSql = `
        select e.tipoequipamento as nome_equipamento, min(l.valor) as menor_temperatura
        from leitura l
        join equipamento e on l.fkequipamento = e.equipmentid
        group by e.tipoequipamento
        order by menor_temperatura asc
        limit 1;
    `;
    return database.executar(instrucaoSql);
}


function ultimasLeiturasEquipamento(equipmentId) {
    const instrucaoSql = `
        select datahora, valor
        from leitura
        where fkequipamento = ${equipmentId}
        order by datahora desc
        limit 10;
    `;
    return database.executar(instrucaoSql);
}


function buscarEquipamentosAcimaDe50Graus() {
    const instrucaoSql = `
        select e.tipoEquipamento, l.valor, 
            concat(
                right(year(l.datahora), 2), '-', 
                lpad(month(l.datahora), 2, '0'), '-', 
                lpad(day(l.datahora), 2, '0'), ' ', 
                lpad(hour(l.datahora), 2, '0'), ':', 
                lpad(minute(l.datahora), 2, '0')
            ) as datahora
        from leitura l
        join equipamento e on l.fkequipamento = e.equipmentid
        where l.valor > 50
        order by l.datahora desc;
        `;
    return database.executar(instrucaoSql)
        .then(resultado => {
            return resultado; 
        });
}


function buscarEquipamentosAbaixoDe20Graus() {
    const instrucaoSql = `
      select e.tipoEquipamento, l.valor, 
            concat(
                right(year(l.datahora), 2), '-', 
                lpad(month(l.datahora), 2, '0'), '-', 
                lpad(day(l.datahora), 2, '0'), ' ', 
                lpad(hour(l.datahora), 2, '0'), ':', 
                lpad(minute(l.datahora), 2, '0')
            ) as datahora
        from leitura l
        join equipamento e on l.fkequipamento = e.equipmentid
        where l.valor < 20
        order by l.datahora desc;
        `;
    return database.executar(instrucaoSql)
        .then(resultado => {
            return resultado; 
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