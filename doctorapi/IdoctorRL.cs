using CommonLayer.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Repository.Interface
{
    public interface IdoctorRL
    {
        public doctorTable addNewDoctor (doctorTable doctorTable);
        public List<doctorTable> getAllDoctor();
    }
}
