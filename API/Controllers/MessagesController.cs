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
            await Mediator.Send(new Details.Query{Id = id});
            
        [HttpPost]
        public async Task<IActionResult> CreateMessage(Message message) 
        {
            return Ok(await Mediator.Send(new Create.Command{Message = message}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditMessage(Guid id, Message message)
        {
            message.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Message = message}));
        }
        
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}