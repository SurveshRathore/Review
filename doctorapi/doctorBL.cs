using BusinessLayer.Interface;
using CommonLayer.Model;
using Repository.Interface;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Service
{
    public class doctorBL:IdoctorBL
    {
        private IdoctorRL doctorRL;

        public doctorBL(IdoctorRL doctorRL)
        {
            this.doctorRL = doctorRL;
        }

        public doctorTable addNewDoctor(doctorTable doctorTable)
        {
            try
            {
                return this.doctorRL.addNewDoctor(doctorTable);
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
                return this.doctorRL.getAllDoctor();
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
