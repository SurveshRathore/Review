using CommonLayer.Model;
using Microsoft.Extensions.Configuration;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Repository.Service
{
    public class doctorRL: IdoctorRL
    {
        string connectionString;
        public doctorRL(IConfiguration configuration)
        {
            this.connectionString = configuration.GetConnectionString("BookStoreDb");
        }
        public doctorTable addNewDoctor(doctorTable doctorTable)
        {
            try
            {
                SqlConnection sqlConnection = new SqlConnection(connectionString);

                using (sqlConnection)
                {
                    SqlCommand sqlCommand = new SqlCommand("spAddDoctor",sqlConnection);
                    sqlCommand.CommandType = CommandType.StoredProcedure;
                    
                    sqlCommand.Parameters.AddWithValue("@doctorName",doctorTable.DoctorName);
                    sqlCommand.Parameters.AddWithValue("@doctorProfession", doctorTable.doctorProfession);
                    sqlCommand.Parameters.AddWithValue("@serviceCharge", doctorTable.serviceCharge);
                    sqlCommand.Parameters.AddWithValue("@doctorTime", doctorTable.doctorTime);


                    sqlConnection.Open();
                    int result = sqlCommand.ExecuteNonQuery();

                    if(result >= 1)
                    {
                        return doctorTable;
                    }
                    else
                    {
                        return null;
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public List<doctorTable> getAllDoctor()
        {
            try
            {
                SqlConnection sqlConnection = new SqlConnection(connectionString);

                using (sqlConnection)
                {
                    List<doctorTable> listofDoctor = new List<doctorTable>();
                    SqlCommand sqlCommand = new SqlCommand("spGetDoctor", sqlConnection);
                    sqlCommand.CommandType = CommandType.StoredProcedure;

                    sqlConnection.Open();
                    SqlDataReader reader = sqlCommand.ExecuteReader();

                    if(reader.HasRows)
                    {
                        while(reader.Read())
                        {
                            doctorTable doctorTable = new doctorTable()
                            {
                                DoctorId = reader.IsDBNull("DoctorId") ? 0 : reader.GetInt32("DoctorId"),
                                DoctorName = reader.IsDBNull("DoctorName") ? String.Empty : reader.GetString("DoctorName"),
                                doctorProfession = reader.IsDBNull("doctorProfession") ? String.Empty : reader.GetString("doctorProfession"),
                                serviceCharge = reader.IsDBNull("serviceCharge") ? String.Empty : reader.GetString("serviceCharge"),
                                doctorTime = reader.IsDBNull("doctorTime") ? String.Empty : reader.GetString("doctorTime"),
                            };
                            listofDoctor.Add(doctorTable);
                        }
                        return listofDoctor;

                    }
                        return null;
                    
                }
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
