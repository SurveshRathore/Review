using System;
using System.Collections.Generic;
using System.Text;

namespace CommonLayer.Model
{
    public class doctorTable
    {
        public int DoctorId {get; set;}
        public string DoctorName { get; set; }
        public string doctorProfession { get; set; }
        public string serviceCharge { get; set; }
        public string doctorTime { get; set; }
    }
}
