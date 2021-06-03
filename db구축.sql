USE management;

CREATE TABLE PRODUCT (

	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	P_number VARCHAR(10),
	P_name VARCHAR(8),
	
	createdDate DATETIME,
	isDeleted INT

) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO PRODUCT VALUES (1, 'https://placeimg.com/64/64/1', 'P000000', 'KF84',NOW(), 0);
INSERT INTO PRODUCT VALUES (2, 'https://placeimg.com/64/64/2', 'P000001', '비말',NOW(), 0);

###########################

USE management;

CREATE TABLE MANUFACTURING (

	id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	P_name VARCHAR(8),
	
	createdDate DATETIME,
	isDeleted INT

) 
DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
