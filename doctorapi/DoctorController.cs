using BusinessLayer.Interface;
using CommonLayer.Model;
using Experimental.System.Messaging;
using Microsoft.AspNetCore.Mvc;

namespace BookStore.Controllers
{
    [ApiController]
    [Route("doctor")]
    public class DoctorController:ControllerBase
    {
        private IdoctorBL idoctorBL;

        public DoctorController (IdoctorBL idoctorBL)
        {
            this.idoctorBL = idoctorBL;
        }

        [HttpPost]
        [Route("addDoctor")]
        public IActionResult addDoctor(doctorTable doctorTable)
        {
            try
            {
                var result = this.idoctorBL.addNewDoctor(doctorTable);

                if(result != null)
                {
                    return this.Ok(new { success = true, Message = "Doctor is added", Response = result });
                }
                else
                {
                    return this.BadRequest(new { success = false, Message = "unable to add Doctor " });
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }

        [HttpGet]
        [Route("getDoctor")]
        public IActionResult getDoctor()
        {
            try
            {
                var result = this.idoctorBL.getAllDoctor();

                if (result != null)
                {
                    return this.Ok(new { success = true, Message = "successfully fetch the Doctor", Response = result });
                }
                else
                {
                    return this.BadRequest(new { success = false, Message = "unable to fetch Doctor " });
                }
            }
            catch (System.Exception)
            {

                throw;
            }
        }
    }
}
