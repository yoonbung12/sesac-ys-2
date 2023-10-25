show databases;


-- 데이터 베이스 생성하는 명령어
create database sesac_test default character set utf8mb4 default collate utf8mb4_unicode_ci;

-- 데이터 베이스 선택하는 명령어
use sesac_test;

create table user(
	id varchar(10) primary key not null,
    password varchar(20) not null,
	age int unsigned
);
select * from user;
-- 데이터베이스안에 테이블들 보려고 할때..
show tables;
-- show tables; 데이터 베이스 안에 들어 있는 테이블이 무엇인지 알기위해서..
-- 컬럼을 추가하는 명령어.
alter table user add gender enum('남자', '여자') not null;
-- 컬럼을 삭제하는 명령어
alter table user drop column age;
-- 컬럼을 수정하는 명령어
alter table user modify gender varchar(3) not null;

-- 테이블 부셔버리기(delete랑 다르다.)
drop table user;
-- test
desc member;
create table member(
	id varchar(20) primary key  not null,
    name varchar(5)  not null,
    age int   ,
    gender varchar(20)  not null ,
    email varchar(50)  ,
    promotion varchar(2) default 'x'
);
alter table member drop column age;
alter table member add interest varchar(100);
drop table member;