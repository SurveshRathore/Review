
create table doctor
(
	doctorId int primary key identity(1,1),
	doctorName varchar(255),
	doctorProfession varchar(255),
	serviceCharge varchar(255),
	doctorTime varchar(255)
)

drop table doctor
