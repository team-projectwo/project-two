DROP DATABASE IF EXISTS project2;
CREATE DATABASE project2;

USE project2;

CREATE table userTable
(
    id INT(100) NOT NULL
    AUTO_INCREMENT,
    firstName VARCHAR
    (500) NOT NULL,
    lastName VARCHAR
    (500) NOT NULL,
    email VARCHAR
    (500) NOT NULL,
    profileImage VARCHAR
    (500) NOT NULL,
    points INT
    (255) NOT NULL,
    PRIMARY KEY
    (id)

);


    USE project2;

    ALTER TABLE userTable
ADD signInId VARCHAR(30) NOT NULL;



