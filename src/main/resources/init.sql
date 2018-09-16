use database test;
CREATE TABLE employees
(
    id int(11) NOT NULL AUTO_INCREMENT,
    phone float(10) DEFAULT NULL,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    PRIMARY KEY (id)
);