using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Messages;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class MessagesController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Message>>> GetMessages() =>
             await Mediator.Send(new List.Query());
        

        [HttpGet("{id}")] 
        public async Task<ActionResult<Message>> GetMessage(Guid id) =>
            Ok();
            
        
    }
}