using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Messages.Any()) return;
            
            var messages = new List<Message>
            {
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                    
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),
                },
                new Message
                {
                    Content = "Past Message 1",
                    DateSent = DateTime.Now.AddMonths(-2),                
                }
                
            };

            await context.Messages.AddRangeAsync(messages);
            await context.SaveChangesAsync();
        }
    }
}