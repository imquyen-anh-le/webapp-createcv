create database NguoiDung
use NguoiDung 

select * from Users
create table Users(
	userid int primary key identity(1,1),
	[name] nvarchar(100) not null,
	email nvarchar(100) not null,
	[password] nvarchar(100) not null,
	[role] nvarchar(100) default 'User'
)
-- BẢNG DỮ LIỆU NGƯỜI DÙNG HIỆN TẠI -- 


Insert into Users([name], email, [password], [role]) 
values('Admin2', 'admin2@check.hotmail', '191919', 'Admin'); 
Select cast(Scope_identity() as int)

drop table CV
create table CV(
	idcv int primary key identity(1,1),
	UserId int not null,
	modelCV nvarchar(100) not null,
	color nvarchar(100) not null,
	font nvarchar(100) not null,
	fontSize nvarchar(100) not null, 
	foreign key (UserId) references Users(UserId)
)
alter table CV 
add color nvarchar(100)
delete from CV where idcv = 7 
select * from CV 
insert into CV
values(
	5,'paper_mau5'
)
select * from Information
select * from CV
drop table UserProfile 
create table UserProfile(
	profileid int primary key identity(1,1),
	idcv int not null,
	fullname nvarchar(100),
	position nvarchar(100),
	foreign key (idcv) references CV(idcv)
)
ALTER TABLE UserProfile
ADD container nvarchar(100)


select in4id from CV as cv join Information as i on cv.idcv = i .idcv where cv.idcv = 80


create table Information(
	in4id int primary key identity(1,1),
	idcv int not null,
	phone nvarchar(100),
	[address] nvarchar(100),
	github nvarchar(100),
	email nvarchar(100),
	birth nvarchar(100),
	imgSize nvarchar(100) not null,
	container  nvarchar(100),
	foreign key (idcv) references CV(idcv)
)
select * from Projects
create table Uploadimg(
	idimg int primary key identity(1,1),
	in4id int not null,
	img nvarchar(MAX),
	foreign key (in4id) references Information(in4id)
)
SELECT name, delete_referential_action_desc, update_referential_action_desc
FROM sys.foreign_keys
WHERE parent_object_id = OBJECT_ID('Uploadimg');
select * from Information,Uploadimg where Information.in4id = Uploadimg.in4id 
select * from Uploadimg where in4id = 1
insert into Uploadimg
values (
	'r','http://127.0.0.1:5500/023eea84-73b0-42be-814b-95d2dffe11fd'
)
select * from Uploadimg
ALTER TABLE Information
DROP COLUMN img 
select * from Information 
insert into UserProfile
values(
	2,'Dinh Nghe','BA','138137913','Xuân Thọ','dnghe@git.com','12/12/2022','7d580cf284dbd895ae2db4b598ec8bb2.jpg'
)

EXEC sp_help UserProfile

ALTER TABLE UserProfile
ALTER COLUMN phone nvarchar(4000)
select * from UserProfile
insert into UserProfile 
values (
	6,'Quyền Anh Lê Học Ngoo','FS',13413434,N'Thanh Hóa','admin0@hh.kk','quyenanhle0@gmail.com','13/09/2004',N'Hình Ảnh 1'
)
drop table AnotherPart
-- Overview
create table overView(
	overview_id int primary key identity(1,1),
	idcv int not null,
	contentOverView text,
	container  nvarchar(100),
	foreign key (idcv) references CV(idcv)
)
ALTER TABLE overView
ALTER COLUMN contentOverView nvarchar(MAX)


insert into overView values (
	5,'SELECT * FROM UserProfile WHERE idcv'
),
(
	6,'SELECT * FROM overView WHERE idcv'
)
select * from CV join information 
on cv.userid = cv.userid  
-- Kinh Nghiệm Làm Việc
CREATE TABLE WorkExperience (
    experience_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    company_name nvarchar(200) NOT NULL,
    position nvarchar(100),
	[time] nvarchar(100),
	content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
select * from WorkExperience
select * from CV as c join information as i4 on i4.idcv = c.idcv join UserProfile as u on c.idcv  = u.idcv 
where c.userId = 5
drop table overView
insert into WorkExperience 
values (
	5,'Công Ty Chú Thành','Intern','11/2024-01/2025','ABCDXYZ'
),(
	6,'Công Ty Ngoài','Fesher','1/2025-04/2025','ABCDXYZ'
)
-- Giáo Dục 
CREATE TABLE Education (
    education_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    school_name nvarchar(200) NOT NULL,
	[time] nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)

ALTER TABLE Education
ALTER COLUMN school_name nvarchar(100)
insert into Education values (
	5,'FBU','2022-2026','Học Tập Tại Trường F'
),
(
	6,'FPT','2022-2026','Học Tập Tại Trường F'
)
drop table Education

-- Kỹ Năng 
CREATE TABLE Skill(
    skill_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    skill_name  VARCHAR(200) NOT NULL,
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
select * from 

ALTER TABLE Skill
ALTER COLUMN skill_name nvarchar(100)
insert into Skill values (
	33,'FE','Nắm Chắc Cơ Bản'
),
 (
	6,'BE','Nắm Chắc Cơ Bản'
)
drop table skill

-- DỰ Án Đã Làm
CREATE TABLE Projects (
    project_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    project_name VARCHAR(200) NOT NULL,
    [time] nvarchar(100),
    client VARCHAR(200),
    descriptions TEXT,
    number_of_members INT,
    position VARCHAR(200),
    responsibilities TEXT,
    technology_in_use TEXT,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)

select * from Projects
ALTER TABLE Projects
ALTER COLUMN technology_in_use nvarchar(max)
select * from Projects
drop table projects

insert into Projects values(
	5,'App WEB viết CV','2024-2025','NCKH','Dự Án Đầu Tay',1,'FS','Làm Hết','CSS JS HTML C# SQLserver'
),
(
	6,'Web Bán Hàng','1/2025','BTL','Dự Án Thứ 2',4,'FS','Làm Hết','CSS JS HTML C# SQLserver'
)
-- Giải Thưởng 
CREATE TABLE Awards (
    award_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    award_name VARCHAR(200) NOT NULL,
	[time] nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)

Alter table [Language]
add name_title nvarchar(100)

ALTER TABLE AnotherPart
ALTER COLUMN content nvarchar(MAX)
ALTER TABLE Awards
ALTER COLUMN award_name nvarchar(100)
drop table Awards
insert into Awards values 
(
	5,'Giải KK','01/2025','ABCDXYZ'
),
(
	6,'Giải Nhì','11/2025','ABCDXYZ'
)
-- Mục Tiêu Công Việc 
CREATE TABLE Goals(
    goal_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    term nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
drop table Goals
insert into Goals values (
	5,'Ngắn Hạn','....'
),
(
	6,'Dài Hạn','....'
)
-- Chứng Chỉ 
CREATE TABLE [Certificate](
    cer_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    [time] nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
drop table [Certificate]
insert into [Certificate] values (
	5,'01/2025',N'Giải Thưởng 1'
),
(
	6,'01/2025',N'Giải Thưởng 2'
)
-- Ngôn Ngữ 
CREATE TABLE [Language] (
    lang_id INT PRIMARY KEY identity(1,1),
    idcv INT not null,
    language_name VARCHAR(200) NOT NULL,
	[level] nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
ALTER TABLE [Language]
ALTER COLUMN language_name nvarchar(100)
drop table [Language]
insert into [Language] values (
	5,N'Tiếng Anh','TOEIC 730','.....'
),
(
	6,N'Tiếng Anh','IELTS 7.0','.....'
)
drop table [Language]

-- Phần Khác 
CREATE TABLE AnotherPart (
    anotherpart_id INT PRIMARY KEY identity(1,1),
    idcv  INT not null,
    name_part VARCHAR(200) NOT NULL,
	title nvarchar(100),
    content text,
	container  nvarchar(100),
    foreign key (idcv) references CV(idcv)
)
ALTER TABLE AnotherPart
ALTER COLUMN name_part nvarchar(100)
drop table AnotherPart
select * from AnotherPart
insert into AnotherPart values (
	5,'Khác 1','Haiz','Nah I"d Win',N'half-left'
),
(
	5,'Khác 2','Haizzzz','Nah I"d Won',N'half-left'
)

select * from Overview
select * from UserProfile
select * from CV as c 
join UserProfile as up 
on up.idcv = c.idcv
where c.UserId = 1

create table OverviewTMP(
	overview_id int primary key,
	idcv int not null,
	contentOverView text,
	container nvarchar(100)
)
ALTER TABLE LanguageTMP
ADD name_title nvarchar(100)

select * from OverviewTMP
insert into OverviewTMP
values (9,6,'check','test')
select * from OverviewTMP
drop table OverviewTMP
create table WorkExperienceTMP(
	experience_id INT PRIMARY KEY,
    idcv INT not null,
    company_name nvarchar(200) NOT NULL,
    position nvarchar(100),
	[time] nvarchar(100),
	content text,
	container  nvarchar(100)
)
drop table WorkExperienceTMP
create table EducationTMP(
	education_id INT PRIMARY KEY,
    idcv INT not null,
    school_name nvarchar(200) NOT NULL,
	[time] nvarchar(100),
    content text,
	container  nvarchar(100),
)
drop table EducationTMP
create table SkillTMP(
	skill_id INT PRIMARY KEY,
    idcv INT not null,
    skill_name  nvarchar(200) NOT NULL,
    content text,
	container  nvarchar(100),
)
drop table SkillTMP
create table ProjectsTMP(
	project_id INT PRIMARY KEY,
    idcv INT not null,
    project_name nvarchar(200) NOT NULL,
    [time] nvarchar(100),
    client nvarchar(200),
    descriptions TEXT,
    number_of_members INT,
    position nvarchar(200),
    responsibilities TEXT,
    technology_in_use TEXT,
	container  nvarchar(100),
)
drop table ProjectsTMP
create table AwardsTMP(
	award_id INT PRIMARY KEY,
    idcv INT not null,
    award_name nvarchar(200) NOT NULL,
	[time] nvarchar(100),
    content text,
	container  nvarchar(100),
)
drop table AwardsTMP
create table GoalsTMP(
	goal_id INT PRIMARY KEY,
    idcv INT not null,
    term nvarchar(100),
    content text,
	container  nvarchar(100),
)

drop table GoalsTMP
create table CertificateTMP(
	cer_id INT PRIMARY KEY,
    idcv INT not null,
    [time] nvarchar(100),
    content text,
	container  nvarchar(100),
)
drop table CertificateTMP
create table LanguageTMP(
	lang_id INT PRIMARY KEY,
    idcv INT not null,
    language_name nvarchar(200) NOT NULL,
	[level] nvarchar(100),
    content text,
	container  nvarchar(100),
)
drop table LanguageTMP
create table AnotherPartTMP(
	anotherpart_id INT PRIMARY Key,
    idcv  INT not null,
    name_part nvarchar(200) NOT NULL,
	title nvarchar(100),
    content text,
	container  nvarchar(100),
)

create table Mailletter(
	mail_id int Primary key identity(1,1),
	userid int,
	head nvarchar(Max),
	content nvarchar(Max),
	signatureLetter nvarchar(Max)
	foreign key (userid) references Users(userid) 
)

alter table Mailletter
add font_family varchar(150)
insert into Mailletter values(3,N'Phần Heading',N'Phần Content',N'Phần Chữ Ký')
select * from Mailletter

select u.userid,m.* from Users as u join Mailletter as m on u.userid = m.userid where u.userid = 3
drop table AnotherPartTMP
-- lưu id của phần update vào bảng tmp tương ưngs của nó tiếp đến và đến đoạn when not watched để insert thì k truyền id 
-- của bảng tmp cho bảng hiện tại
-- môix khi merge xong thì xóa dữ liệu ở bảng tmp đi 
-- nếu là update thì thêm id còn nếu là insert thì k cần và cho identity 
insert into AnotherPartTMP 
values 
(91,5,N'2912',N'học ngu vcd',N'Nah I"d Win',N'haft-right'),
(92,5,N'2011',N'thất bại',N'Nah I"d Won',N'haft-right')

merge AnotherPart as t
using AnotherPartTMP as s
on t.anotherpart_id = s.anotherpart_id
when matched then 
update set t.idcv = s.idcv , t.name_part = s.name_part , t.title = s.title , t.content = s.content , t.container = s.container
when not matched by target and idcv = 5 then 
insert (idcv,name_part,title,content,container) values (s.idcv,s.name_part,s.title,s.content,s.container)
when not matched  by source and idcv = 5 then 
delete;
DELETE FROM AnotherPartTMP;

-----------------------------	
select * from AnotherPartTMP
select * from AnotherPart as t join AnotherPartTMP as s 
on t.anotherpart_id = s.anotherpart_id and t.idcv = s.idcv and t.idcv = 5

