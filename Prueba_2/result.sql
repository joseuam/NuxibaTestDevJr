
-- -----------------------------------------------------
-- Schema NuxibaDBTest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS NuxibaDBTest DEFAULT CHARACTER SET utf8mb4;
USE NuxibaDBTest ;

CREATE TABLE logDial (
  idLlamada VARCHAR(10) NOT NULL,
  fechaDeLlamada DATETIME NULL,
  tiempoDialogo SMALLINT(1) NULL,
  telefono VARCHAR(10) NULL,
  tipoDeLlamada VARCHAR(15) NULL,
  PRIMARY KEY (idLlamada));


CREATE TABLE costos (
  tipoDeLlamada VARCHAR(15) NULL,
  costo DECIMAL(10,4) NULL);




SELECT *  FROM logDial WHERE tipoDeLlamada="Cel LD" AND MONTH(fechaDeLlamada)=2;

SELECT AVG(tiempoDialogo) FROM logDial WHERE tipoDeLlamada="Cel LD" AND MONTH(fechaDeLlamada)=2;


SELECT l.tiempoDialogo/60 as "MinutosDeDialogo(m)",  (l.tiempoDialogo/60)*c.costo as "Costo"
FROM logDial l
INNER JOIN costos c ON l.tipoDeLlamada=c.tipoDeLlamada
WHERE MONTH(l.fechaDeLlamada)=1;