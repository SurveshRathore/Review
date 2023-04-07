create procedure spAddDoctor
(
	@doctorName varchar(255),
	@doctorProfession varchar(255),
	@serviceCharge varchar(255),
	@doctorTime varchar(255)
)
As
Begin
	insert into doctor (doctorName ,doctorProfession, serviceCharge, doctorTime) values (@doctorName ,@doctorProfession, @serviceCharge, @doctorTime)
End

drop procedure spAddDoctor


create procedure spGetDoctor
As
Begin
	select * from doctor
	
End
