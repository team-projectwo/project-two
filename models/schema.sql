DROP DATABASE IF EXISTS project2;
CREATE DATABASE project2;

USE project2;

CREATE table userTable
(
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
    signInId VARCHAR(30) NOT NULL
);


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> e07ef4921d1a73c9720a4f0428d715d261d43428
USE project2;

ALTER TABLE userTable
ADD signInId VARCHAR(30) NOT NULL;

USE project2;

ALTER TABLE userTable DROP COLUMN id;

ALTER TABLE userTable
  ADD PRIMARY KEY (signInId); 


<<<<<<< HEAD
>>>>>>> aab4276f1a19d3f57e20b8aeb2a30b56b41a444d
=======

>>>>>>> e07ef4921d1a73c9720a4f0428d715d261d43428

