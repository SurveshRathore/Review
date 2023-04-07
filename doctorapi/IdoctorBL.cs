using CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessLayer.Interface
{
    public interface IdoctorBL
    {
        public doctorTable addNewDoctor(doctorTable doctorTable);
        public List<doctorTable> getAllDoctor();
    }
}
