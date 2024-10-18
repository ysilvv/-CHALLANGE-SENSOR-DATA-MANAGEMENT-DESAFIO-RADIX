create database challenge;
use challenge;

create table if not exists usuario (
	id int primary key auto_increment,
	nome varchar(50),
	email varchar(100),
	senha varchar(50)
);

create table equipamento (
	equipmentId int primary key auto_increment,
    tipoEquipamento varchar(50)
);
	
create table leitura (
	idLeitura int primary key auto_increment,
	dataHora timestamp,
    valor decimal (10,2),
    fkEquipamento int,
    foreign key (fkEquipamento) references equipamento(equipmentId)
);

insert into equipamento (tipoEquipamento) values
('Tanque de armazenamento'),
('Gerador');

select * from equipamento;

insert into leitura (dataHora, valor, fkequipamento) values
('2023-11-22 10:30:00', 35.5, 1),  
('2023-11-22 11:00:00', 70.2, 2), 
('2023-11-22 12:00:00', 36.1, 1);
