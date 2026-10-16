CREATE DATABASE IF NOT EXISTS oficina_db;
USE oficina_db;

CREATE TABLE clientes (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco TEXT
);

CREATE TABLE marcas (
    id_marca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    ano INT,
    distribuidora VARCHAR(100),
    fornecedor VARCHAR(100),
    modelo VARCHAR(50)
);

CREATE TABLE modelos (
    id_modelo INT AUTO_INCREMENT PRIMARY KEY,
    carro VARCHAR(50),
    moto VARCHAR(50),
    modelo_veiculo VARCHAR(50)
);

CREATE TABLE veiculos (
    placa VARCHAR(10) PRIMARY KEY,
    id_clientes VARCHAR(14),
    marca VARCHAR(50),
    ano INT,
    valor DECIMAL(10,2),
    cor VARCHAR(30),
    FOREIGN KEY (id_clientes) REFERENCES clientes(cpf)
);

CREATE TABLE pecas (
    id_peca INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    valor DECIMAL(10,2)
);

CREATE TABLE funcionarios (
    cpf VARCHAR(14) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50),
    turno VARCHAR(20),
    telefone VARCHAR(20)
);

CREATE TABLE servicos (
    id_servico INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT,
    ordem_servico VARCHAR(50),
    id_funcionarios VARCHAR(14),
    valor DECIMAL(10,2),
    pecas VARCHAR(100),
    FOREIGN KEY (id_funcionarios) REFERENCES funcionarios(cpf)
);

CREATE TABLE ordem_servico (
    id_os INT AUTO_INCREMENT PRIMARY KEY,
    atributo_1 VARCHAR(100),
    atributo_2 VARCHAR(100),
    atributo_3 VARCHAR(100),
    atributo_4 VARCHAR(100),
    atributo_5 VARCHAR(100)
);

CREATE TABLE pagamento (
    id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
    mao_de_obra DECIMAL(10,2),
    valor_peca DECIMAL(10,2),
    pix DECIMAL(10,2),
    cartao_debito DECIMAL(10,2),
    cartao_credito DECIMAL(10,2)
);

CREATE TABLE fornecedores (
    id_fornecedor INT AUTO_INCREMENT PRIMARY KEY,
    atributo_6 VARCHAR(100),
    atributo_8 VARCHAR(100),
    atributo_9 VARCHAR(100),
    atributo_10 VARCHAR(100)
);
