USE management;

CREATE TABLE CUSTOMER (

	id INT PRIMARY KEY AUTO_INCREMENT,

	image VARCHAR(1024),
	name VARCHAR(64),
	birthday VARCHAR(64),
	gender VARCHAR(64),
	job VARCHAR(64),
	createdDate DATETIME,
	isDeleted INT

) DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

INSERT INTO CUSTOMER VALUES (1, 'https://placeimg.com/64/64/1', '홍길동', '960508', '남자', '대학생');
INSERT INTO CUSTOMER VALUES (2, 'https://placeimg.com/64/64/2', '나동빈', '961222', '남자', '프로그래머');
INSERT INTO CUSTOMER VALUES (3, 'https://placeimg.com/64/64/3', '이순신', '961127', '남자', '디자이너');
UPDATE CUSTOMER SET createdDate = now();
UPDATE CUSTOMER SET isDeleted = 0;
