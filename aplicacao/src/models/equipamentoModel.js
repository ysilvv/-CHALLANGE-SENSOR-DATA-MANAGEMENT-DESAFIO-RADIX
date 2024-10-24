var database = require("../database/config");

function adicionarNovoEquipamento(tipoEquipamento) {
    console.log("ACESSEI O equipamento MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tipoEquipamento);
    const instrucaoSql = `
        insert into equipamento (tipoEquipamento) values ('${tipoEquipamento}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listaEquipamento() {
    const instrucaoSql = `
        select equipmentId, tipoEquipamento
        from equipamento;
        `;
    return database.executar(instrucaoSql)
        .then(resultado => {
            return resultado; 
        });
}

module.exports = {
    adicionarNovoEquipamento,
    listaEquipamento
};