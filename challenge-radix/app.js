// var ambiente_processo = 'producao';
var ambiente_processo = 'desenvolvimento';

var caminho_env = ambiente_processo === 'producao' ? '.env' : '.env.dev';

require("dotenv").config({ path: caminho_env });

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA_APP = process.env.APP_PORT;
var HOST_APP = process.env.APP_HOST;

var app = express();

var usuarioRouter = require("./src/routes/usuarios");
var medidaRouter = require("./src/routes/medida");
var equipamentoRouter = require('./src/routes/equipamento');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/usuarios", usuarioRouter);
app.use("/medida", medidaRouter);
app.use('/equipamento', equipamentoRouter);



app.listen(PORTA_APP, function () {
    console.log(`
    ██╗   ██╗ █████╗ ███████╗███╗   ███╗██╗███╗   ███╗
    ╚██╗ ██╔╝██╔══██╗██╔════╝████╗ ████║██║████╗ ████║
     ╚████╔╝ ███████║███████╗██╔████╔██║██║██╔████╔██║
      ╚██╔╝  ██╔══██║╚════██║██║╚██╔╝██║██║██║╚██╔╝██║
       ██║   ██║  ██║███████║██║ ╚═╝ ██║██║██║ ╚═╝ ██║
       ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚═╝╚═╝     ╚═╝
                
    \n\n\n                                                                                                 
    Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar .: http://${HOST_APP}:${PORTA_APP}/cadastro.html :. \n\n`);
});
