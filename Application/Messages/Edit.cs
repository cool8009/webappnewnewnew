using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Message Message { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var message = await _context.Messages.FindAsync(request.Message.MessageId);
                _mapper.Map(request.Message, message); //automapper for mapping the message from the request to the message object

                await _context.SaveChangesAsync();

                return Unit.Value;

            }
        }
    }
}