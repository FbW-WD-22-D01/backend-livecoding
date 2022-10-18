# Docker mysql/ setup

## Docker installation
[Docker Desktop Linux Installation]("https://docs.docker.com/desktop/install/linux-install/")

[Docker Compose Linux Installation]("https://docs.docker.com/compose/install/linux/")

### ATTENTION!!!
Dont forget to add your user to the docker group, so you dont have to run docker as a root!

## Mysql installation
Der Client ist nur zum Verbinden und hiosted keine mysql instanz. Die mysql Instanz wird im Docker container gehosted

`sudo apt install mysql-client
`
## Mysql credentials
host=localhost
port=33006
MYSQL_USER=root
pass=root

## Create Database and tables in mariadb
```
CREATE DATABASE meineapp

CREATE TABLE USERS ( 
    ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    USERNAME varchar(32),
    EMAIL varchar(64),
    ROLE varchar(16),
    PASS varchar(64)
);

INSERT INTO USERS
(USERNAME,EMAIL,ROLE,PASS)
VALUES(‘Jan’,’jan@dci.org’,’USER’,’passwd’);
INSERT INTO USERS
(USERNAME,EMAIL,ROLE,PASS)
VALUES(‘Christoph’,’christoph@dci.org’,’ADMIN’,’passwd’);
```

# Ressourcen
[Was ist Docker?]("https://www.opc-router.de/was-ist-docker/")
