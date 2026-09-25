CREATE DATABASE royalenfieldeichermotordivison;
USE royalenfieldeichermotordivison;

-- Motorcycle Table
CREATE TABLE motorcycles(
id INT AUTO_INCREMENT PRIMARY KEY,
motorcycleName VARCHAR(20) NOT NULL UNIQUE,
createdAt DATETIME  NOT NULL COMMENT "created time",
updatedAt DATETIME  NOT NULL COMMENT "updated time",
engineId INT,
FOREIGN KEY (engineId) REFERENCES engines(id),
categoryId INT,
FOREIGN KEY (categoryId) REFERENCES motorcyclesCategories(id)
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
-- motorcycleId INT, FOREIGN KEY (motorcycleId) REFERENCES motorcycle(id)
);

-- Motorcycle Category
CREATE TABLE motorcyclesCategories(
    id INT AUTO_INCREMENT PRIMARY KEY,

categoryName CHAR(20) NOT NULL UNIQUE,
createdAt DATETIME  NOT NULL COMMENT "created time",
updatedAt DATETIME  NOT NULL COMMENT "updated time"
)

-- Spare part manufactrer

