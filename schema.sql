CREATE DATABASE royalenfieldeichermotordivison;
USE royalenfieldeichermotordivison;

CREATE TABLE motorcycle(
id INT  PRIMARY KEY,
motorcycleName VARCHAR(20) NOT NULL UNIQUE,
createdAt DATETIME  NOT NULL COMMENT "created time",
updatedAt DATETIME  NOT NULL COMMENT "updated time"
)