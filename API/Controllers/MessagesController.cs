using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class MessagesController : BaseApiController
    {
        private readonly DataContext _context;

        public MessagesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Message>>> GetMessages() =>
             await _context.Messages.ToListAsync();
        

        [HttpGet("{id}")] 
        public async Task<ActionResult<Message>> GetMessage(Guid id) =>
            await _context.Messages.FindAsync(id);
            
        
    }
}