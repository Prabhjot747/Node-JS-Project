CREATE DATABASE royalenfieldeichermotordivison;
USE royalenfieldeichermotordivison;

-- Motorcycle Table
CREATE TABLE motorcycle(
id INT  PRIMARY KEY,
motorcycleName VARCHAR(20) NOT NULL UNIQUE,
createdAt DATETIME  NOT NULL COMMENT "created time",
updatedAt DATETIME  NOT NULL COMMENT "updated time"
)

-- Spare part
CREATE TABLE engines(
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20) NOT NULL UNIQUE,
dimensionLength NUMERIC ,
dimensionWidth NUMERIC ,
dimensionHeight NUMERIC ,
strokeWidth NUMERIC ,
boreWidth NUMERIC ,
maximumPowerBHP NUMERIC ,
maximumPowerHP NUMERIC ,
ignitionSystem VARCHAR(50) NOT NULL,
gearBox VARCHAR(20) NOT NULL,
engineOil VARCHAR(20) NOT NULL,
engineStart VARCHAR(10) NOT NULL,
engineDisplacement NUMERIC ,
maximumTorqueNM NUMERIC ,
maximumTorqueRPM  NUMERIC ,
clutch VARCHAR(10) NOT NULL,
lubrication VARCHAR(20) NOT NULL,
airCleaner VARCHAR(50) NOT NULL,
createdAt DATETIME  NOT NULL COMMENT "created time",
updatedAt DATETIME  NOT NULL COMMENT "updated time",
motorcycleId INT, FOREIGN KEY (motorcycleId) REFERENCES motorcycle(id)
);
