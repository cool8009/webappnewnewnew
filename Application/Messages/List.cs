using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Messages
{
    public class List
    {
        public class Query : IRequest<List<Message>> {}

        public class Handler : IRequestHandler<Query, List<Message>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<List<Message>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Messages.ToListAsync();
            }
        }

    }
}