CREATE SCHEMA `ItalyBank` ;

CREATE TABLE `italybank`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `conta` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(128) NOT NULL,
  `cpf` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  `saldo` DECIMAL(12,2) NOT NULL,
  `limite_credito` DECIMAL(12,2) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `italybank`.`contatos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cliente` int(11) NOT NULL,
  `amigo` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `italybank`.`historico` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_contato` INT NOT NULL,
  `valor` DECIMAL(12,2) NOT NULL,
  `data` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`));

CREATE TABLE `italybank`.`cartao_credito` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cliente_cc` INT NOT NULL,
  `limite` DECIMAL(12,2) NOT NULL,
  `fatura` DECIMAL(12,2) NOT NULL,
  `bandeira` VARCHAR(25) NOT NULL,
  `vencimento` VARCHAR(5) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));


ALTER TABLE `italybank`.`contatos` 
ADD INDEX `cliente_idx` (`cliente` ASC) VISIBLE,
ADD INDEX `amigo_idx` (`amigo` ASC) VISIBLE;
;
ALTER TABLE `italybank`.`contatos` 
ADD CONSTRAINT `cliente`
  FOREIGN KEY (`cliente`)
  REFERENCES `italybank`.`clientes` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `amigo`
  FOREIGN KEY (`amigo`)
  REFERENCES `italybank`.`clientes` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `italybank`.`historico` 
ADD INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
ADD INDEX `id_contato_idx` (`id_contato` ASC) VISIBLE;
;
ALTER TABLE `italybank`.`historico` 
ADD CONSTRAINT `id_cliente`
  FOREIGN KEY (`id_cliente`)
  REFERENCES `italybank`.`clientes` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `id_contato`
  FOREIGN KEY (`id_contato`)
  REFERENCES `italybank`.`clientes` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `italybank`.`cartao_credito` 
ADD CONSTRAINT `id_cliente_cc`
  FOREIGN KEY (`id_cliente_cc`)
  REFERENCES `italybank`.`clientes` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
